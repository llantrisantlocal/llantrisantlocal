// Force Node.js runtime (nodemailer doesn't work on the Edge runtime)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // Gmail SMTP – works reliably on Vercel
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // 465 = SSL
      auth: {
        user: process.env.EMAIL_USER, // e.g. llantrisantlocal@gmail.com
        pass: process.env.EMAIL_PASS, // your 16-char Google App Password
      },
    });

    await transporter.sendMail({
      from: `"Llantrisant Local" <${process.env.EMAIL_USER}>`, // must be the authenticated sender
      to: process.env.EMAIL_USER,                             // send to yourself
      replyTo: `"${name}" <${email}>`,                        // so you can reply to the user
      subject: "New Contact Form Message",
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error("Mail error:", err?.message || err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

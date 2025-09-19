// Force Node runtime for nodemailer
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, company, ts } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // Honeypot: if "company" filled, likely a bot
    if (company && String(company).trim().length > 0) {
      return NextResponse.json({ success: true }); // act like success but ignore
    }

    // Simple time-to-complete check (>= 4s)
    const started = Number(ts || 0);
    const now = Date.now();
    if (!started || now - started < 4000) {
      return NextResponse.json({ success: false, error: "Please take a moment and resubmit." }, { status: 429 });
    }

    // Transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // e.g. llantrisantlocal@gmail.com
        pass: process.env.EMAIL_PASS, // app password if Gmail 2FA
      },
    });

    // Compose
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New enquiry from ${name}`,
      text: body,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}

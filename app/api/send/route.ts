// Force Node.js runtime (needed for nodemailer)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, _hp } = await req.json();

    // Honeypot: if bots fill this hidden field, accept silently
    if (_hp) return NextResponse.json({ success: true });

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}

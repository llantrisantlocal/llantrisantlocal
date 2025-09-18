// Force Node.js runtime (needed for nodemailer)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, _hp } = await req.json();

    // Honeypot field: if present, treat as spam
    if (_hp) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // Simple cookie-based throttle: 1 message / 60s
    const cookieStore = cookies(); // <-- note the ()
    const lastSent = cookieStore.get("lastSent")?.value;
    const now = Date.now();
    if (lastSent && now - Number(lastSent) < 60_000) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a moment." },
        { status: 429 }
      );
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
      text: `From: ${name} <${email}>\n\n${message}`,
      replyTo: email,
    });

    const res = NextResponse.json({ success: true });
    // Set/update the throttle cookie
    res.cookies.set("lastSent", String(now), { maxAge: 60, path: "/" });
    return res;
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}

// Force Node.js runtime (needed for nodemailer)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Tiny rate limit: 1 request / 60s per browser
    const cookieStore = cookies();
    const lastSent = cookieStore.get("lastSent")?.value;
    const now = Date.now();
    if (lastSent && now - Number(lastSent) < 60_000) {
      return NextResponse.json(
        { success: false, error: "Please wait a minute before sending again." },
        { status: 429 }
      );
    }

    // Email transport (Gmail SMTP)
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

    // Success response + set rate-limit cookie
    const res = NextResponse.json({ success: true });
    res.cookies.set("lastSent", String(now), {
      maxAge: 60, // seconds
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });
    return res;
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

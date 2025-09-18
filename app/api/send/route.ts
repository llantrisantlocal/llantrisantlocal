// Force Node.js runtime (needed for nodemailer)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { name = "", email = "", message = "" } = await req.json();

    // Basic validation
    const n = String(name).trim();
    const e = String(email).trim().toLowerCase();
    const m = String(message).trim();

    if (!n || !e || !m) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(e)) {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
    }
    if (n.length > 100 || e.length > 254 || m.length > 2000) {
      return NextResponse.json({ success: false, error: "Input too long" }, { status: 400 });
    }

    // Tiny rate limit: 1 request per 15s per browser (cookie-based)
    const cookieStore = cookies();
    const lastSent = cookieStore.get("contact_last")?.value;
    const now = Date.now();
    if (lastSent && now - Number(lastSent) < 15_000) {
      return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 });
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

    // Safer subject (no newlines, limited length)
    const safeSubjectName = n.replace(/[\r\n]/g, " ").slice(0, 60);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,          // or set EMAIL_FROM to a domain address you own
      to: process.env.EMAIL_USER,
      subject: `New message from ${safeSubjectName}`,
      text: m,
      replyTo: e,                            // replies go to the sender
    });

    const res = NextResponse.json({ success: true });
    res.cookies.set("contact_last", String(now), {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      maxAge: 60, // keep for a minute; we only check the last 15s
      path: "/",
    });
    return res;
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}

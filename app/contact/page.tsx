"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "", ts: "" });
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // timestamp when form loads (for simple “time to complete” anti-bot check)
    setForm((f) => ({ ...f, ts: String(Date.now()) }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json?.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", company: "", ts: String(Date.now()) });
      } else {
        setStatus("error");
        setErrorMsg(json?.error ?? "Something went wrong.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <main style={{ padding: 16 }}>
      <h1 style={{ marginBottom: 8 }}>Contact</h1>
      <p style={{ marginBottom: 16, color: "#94a3b8" }}>
        Tell us what you need — we’ll get back quickly.
      </p>

      <form onSubmit={submit} style={{ display: "grid", gap: 10, maxWidth: 520 }}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          style={input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          style={input}
        />
        <textarea
          name="message"
          placeholder="Your message (what do you need?)"
          value={form.message}
          onChange={handleChange}
          rows={6}
          required
          style={{ ...input, resize: "vertical" }}
        />

        {/* Honeypot field (bots fill this, humans won't see it) */}
        <div style={{ position: "absolute", left: -9999, top: -9999 }}>
          <input
            tabIndex={-1}
            autoComplete="off"
            name="company"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            background: "white",
            color: "#111",
            borderRadius: 10,
            padding: "10px 14px",
            fontWeight: 800,
            cursor: "pointer",
            opacity: status === "sending" ? 0.6 : 1,
          }}
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "success" && (
          <div style={{ color: "#22c55e", fontWeight: 700 }}>✅ Message sent! We’ll reply soon.</div>
        )}
        {status === "error" && (
          <div style={{ color: "#ef4444", fontWeight: 700 }}>❌ {errorMsg}</div>
        )}
      </form>
    </main>
  );
}

const input: React.CSSProperties = {
  background: "#111",
  color: "white",
  border: "1px solid rgba(255,255,255,.15)",
  borderRadius: 10,
  padding: "10px 12px",
  outline: "none",
};

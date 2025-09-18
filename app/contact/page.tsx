"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _hp: "", // honeypot
  });
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._hp) return; // bots
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (res.ok) {
        setStatus({ ok: true, msg: "Message sent! We’ll reply soon." });
        setFormData({ name: "", email: "", message: "", _hp: "" });
      } else {
        setStatus({ ok: false, msg: "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-dvh bg-slate-50">
      <section className="bg-gradient-to-br from-teal-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact us</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Have a question or want to list your business? Send us a message and we’ll get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 -mt-8 pb-16">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200"
        >
          {/* Name */}
          <label className="block text-sm font-medium text-slate-700">
            Your name
            <input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 ring-1 ring-slate-200 focus:outline-none focus:ring-teal-500"
              placeholder="Jane Doe"
            />
          </label>

          {/* Email */}
          <label className="mt-4 block text-sm font-medium text-slate-700">
            Your email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 ring-1 ring-slate-200 focus:outline-none focus:ring-teal-500"
              placeholder="you@example.com"
            />
          </label>

          {/* Message */}
          <label className="mt-4 block text-sm font-medium text-slate-700">
            Your message
            <textarea
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 ring-1 ring-slate-200 focus:outline-none focus:ring-teal-500"
              placeholder="How can we help?"
            />
          </label>

          {/* Honeypot (hidden) */}
          <input
            name="_hp"
            value={formData._hp}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send message"}
            </button>

            {status && (
              <span
                className={
                  "text-sm " + (status.ok ? "text-emerald-700" : "text-rose-700")
                }
              >
                {status.msg}
              </span>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

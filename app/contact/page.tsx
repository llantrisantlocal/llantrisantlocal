"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _hp: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent! We'll reply soon.");
      setFormData({ name: "", email: "", message: "", _hp: "" });
    } else {
      setStatus("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Contact Us</h1>
      <p>Fill in the form below to send us a message:</p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} required />

        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="_hp"
          value={formData._hp}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <button type="submit">Send Message</button>
      </form>

      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </section>
  );
}

export default function Contact() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>Contact Us</h1>
      <p>Got a question or want to get listed? Send us a message below.</p>

      <form style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{ padding: "0.5rem" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{ padding: "0.5rem" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          style={{ padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{
            background: "#0ea5e9",
            color: "white",
            padding: "0.75rem",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}

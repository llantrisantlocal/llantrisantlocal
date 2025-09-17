export default function Home() {
  return (
    <section style={{ display: "grid", gap: "1rem", padding: "2rem" }}>
      <div style={{ background: "#0e7490", color: "white", padding: "2rem", borderRadius: "12px" }}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>Welcome to Llantrisant Local</h1>
        <p style={{ marginTop: 8, fontSize: "1.2rem" }}>
          Cleaning, gardening, tradespeople, and more — all in your local area.
        </p>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        <a href="/directory" style={{ padding: "1rem", background: "#f1f5f9", borderRadius: "8px" }}>Directory</a>
        <a href="/services" style={{ padding: "1rem", background: "#f1f5f9", borderRadius: "8px" }}>Services</a>
        <a href="/deals" style={{ padding: "1rem", background: "#f1f5f9", borderRadius: "8px" }}>Deals</a>
        <a href="/contact" style={{ padding: "1rem", background: "#f1f5f9", borderRadius: "8px" }}>Contact</a>
      </div>
    </section>
  );
}

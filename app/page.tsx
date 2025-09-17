export default function Home() {
  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div style={{ background: "#0ea5e9", color: "white", padding: "28px", borderRadius: 12 }}>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800 }}>Find trusted local services in and around Llantrisant</h1>
        <p style={{ marginTop: 8, opacity: 0.95 }}>
          Cleaning, gardening, trades, mobile services, and the best local deals — all in one place.
        </p>
      </div>

      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        <a href="/directory" style={card}>Browse Local Directory →</a>
        <a href="/services" style={card}>Book a Service →</a>
        <a href="/deals" style={card}>Today’s Local Deals →</a>
        <a href="/contact" style={card}>List Your Business →</a>
      </div>

      <div style={{ marginTop: 12 }}>
        <h2 style={{ marginBottom: 8 }}>Popular this week</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Carpet & upholstery cleaning</li>
          <li>Pressure washing & patios</li>
          <li>End-of-tenancy cleans</li>
          <li>Handyman & small repairs</li>
        </ul>
      </div>
    </section>
  );
}

const card: React.CSSProperties = {
  display: "block",
  padding: 20,
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  textDecoration: "none",
  color: "#0f172a",
  fontWeight: 600,
  background: "white",
};

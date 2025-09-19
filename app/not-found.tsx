import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Page not found</h1>
      <p style={{ color: "#64748b", marginBottom: 16 }}>
        That page doesn’t exist (yet). Try one of the sections below.
      </p>
      <div style={{ display: "inline-grid", gridTemplateColumns: "repeat(2, minmax(120px, 1fr))", gap: 10 }}>
        <Link href="/" style={btn}>Home</Link>
        <Link href="/directory" style={btn}>Directory</Link>
        <Link href="/services" style={btn}>Services</Link>
        <Link href="/deals" style={btn}>Deals</Link>
        <Link href="/contact" style={btn}>Contact</Link>
      </div>
    </main>
  );
}

const btn: React.CSSProperties = {
  background: "#111",
  color: "white",
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 700,
  textAlign: "center",
};

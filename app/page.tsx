import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: 220,
          display: "flex",
          alignItems: "flex-end",
          borderRadius: 16,
          overflow: "hidden",
          margin: "16px",
          background: "#000",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Image
            src="/tiles/aircon.jpeg"
            alt="Automotive air conditioning"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.45 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)",
            }}
          />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: 20, color: "white" }}>
          <h1 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>LLANTRISANT LOCAL</h1>
          <p style={{ margin: "8px 0 12px", opacity: 0.9 }}>
            A town that’s built on a hill cannot be hidden.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "white",
              color: "#111",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* TEMP TILES - text only, no missing images */}
      <section
        style={{
          padding: "0 16px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        <Link href="/directory" style={tileStyle}>Directory</Link>
        <Link href="/services" style={tileStyle}>Services</Link>
        <Link href="/deals" style={tileStyle}>Deals</Link>
        <Link href="/contact" style={tileStyle}>Contact</Link>
        <Link href="/ipw-climatech" style={tileStyle}>IPW Climatech</Link>
      </section>
    </main>
  );
}

const tileStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#1a1a1a",
  color: "white",
  borderRadius: 12,
  padding: "20px",
  fontWeight: "bold",
  textDecoration: "none",
};

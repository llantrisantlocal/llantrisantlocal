import Link from "next/link";
import Tile from "../components/Tile";

export default function ServicesPage() {
  return (
    <main style={{ padding: 16 }}>
      {/* HERO BANNER */}
      <section
        style={{
          position: "relative",
          height: 180,
          borderRadius: 16,
          overflow: "hidden",
          background: "#000",
          marginBottom: 16,
        }}
        aria-label="Services hero"
      >
        <picture>
          <source srcSet="/tiles/services.jpeg" />
          <img
            src="/tiles/services.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.45,
              display: "block",
            }}
          />
        </picture>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.6) 100%)",
          }}
        />
        <h1
          style={{
            position: "absolute",
            left: 16,
            bottom: 14,
            margin: 0,
            color: "white",
            fontSize: 26,
            lineHeight: 1.2,
            textShadow: "0 1px 3px rgba(0,0,0,.5)",
          }}
        >
          Services
        </h1>
      </section>

      {/* Intro + Back link */}
      <p style={{ marginBottom: 10 }}>
        Book trusted local services across Llantrisant and nearby areas.
      </p>
      <Link
        href="/"
        style={{ display: "inline-block", marginBottom: 16, color: "#4f46e5", fontWeight: 600 }}
      >
        ← Back to Home
      </Link>

      {/* FEATURED: Your business */}
      <section style={{ marginBottom: 18 }}>
        <Tile
          href="/ipw-climatech"
          title="IPW Climatech — Automotive A/C"
          src="/tiles/aircon"
          fallback="#14b8a6"  // teal
          subtitle="Book a service →"
        />
        <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 8 }}>
          Mobile re-gas, leak testing, odour treatment & diagnostics. Domestic split-systems coming late November.
        </div>
      </section>

      {/* GRID: popular service categories */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: 16,
        }}
        aria-label="Service categories"
      >
        <Tile
          href="/directory/cleaning"
          title="House Cleaning"
          src="/tiles/services"
          fallback="#22c55e" // green
          subtitle="Explore →"
        />
        <Tile
          href="/directory/gardening"
          title="Gardening"
          src="/tiles/services"
          fallback="#16a34a" // green-700
          subtitle="Explore →"
        />
        <Tile
          href="/directory/trades"
          title="Trades (Plumbing, Electric...)"
          src="/tiles/services"
          fallback="#f59e0b" // amber
          subtitle="Explore →"
        />
        <Tile
          href="/directory/professional"
          title="Professional Services"
          src="/tiles/services"
          fallback="#6366f1" // indigo
          subtitle="Explore →"
        />
        <Tile
          href="/contact"
          title="Request a Quote"
          fallback="#0ea5e9" // sky
          subtitle="Tell us what you need →"
        />
      </section>
    </main>
  );
}

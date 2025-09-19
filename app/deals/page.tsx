import Link from "next/link";
import Tile from "../components/Tile";

export default function DealsPage() {
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
        aria-label="Deals hero"
      >
        <picture>
          <source srcSet="/tiles/deals.jpeg" />
          <img
            src="/tiles/deals.jpg"
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
          Deals
        </h1>
      </section>

      {/* Intro + Back link */}
      <p style={{ marginBottom: 10 }}>
        Local offers and discounts around Llantrisant.
      </p>
      <Link
        href="/"
        style={{ display: "inline-block", marginBottom: 16, color: "#4f46e5", fontWeight: 600 }}
      >
        ← Back to Home
      </Link>

      {/* GRID OF OFFERS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: 16,
        }}
        aria-label="Current offers"
      >
        <Tile
          href="/ipw-climatech"
          title="£10 off vehicle A/C re-gas"
          src="/tiles/aircon"
          fallback="#ef4444"
          subtitle="Book now →"
        />
        <Tile
          href="/directory/cleaning"
          title="Intro clean: 20% off"
          src="/tiles/services"
          fallback="#22c55e"
          subtitle="Claim offer →"
        />
        <Tile
          href="/directory/gardening"
          title="Spring tidy deal"
          src="/tiles/services"
          fallback="#16a34a"
          subtitle="See details →"
        />
        <Tile
          href="/directory/trades"
          title="Boiler check special"
          src="/tiles/services"
          fallback="#f59e0b"
          subtitle="Enquire →"
        />
      </section>

      {/* CTA */}
      <div style={{ marginTop: 20, fontSize: 14, color: "#64748b" }}>
        Are you a local business with a special offer?{" "}
        <Link href="/contact" style={{ color: "#4f46e5", fontWeight: 600 }}>
          Get listed
        </Link>
        .
      </div>
    </main>
  );
}

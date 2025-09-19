import Link from "next/link";
import Tile from "./components/Tile";

export default function Home() {
  // TODO: replace with your real number (no spaces) for tel / WhatsApp:
  const phoneE164 = "+44XXXXXXXXXX"; // e.g. +447911123456

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: 240,
          display: "flex",
          alignItems: "flex-end",
          borderRadius: 16,
          overflow: "hidden",
          margin: 16,
          background: "#000",
        }}
        aria-label="Llantrisant Local hero"
      >
        {/* Background image with webp → jpeg → jpg fallback */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <picture>
            <source type="image/webp" srcSet="/tiles/aircon.webp" />
            <source srcSet="/tiles/aircon.jpeg" />
            <img
              src="/tiles/aircon.jpg"
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
                "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.65) 100%)",
            }}
          />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: 20, color: "white" }}>
          <h1 style={{ margin: 0, fontSize: 30, lineHeight: 1.2 }}>LLANTRISANT LOCAL</h1>
          <p style={{ margin: "8px 0 14px", opacity: 0.9 }}>
            A town that’s built on a hill cannot be hidden.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "white",
                color: "#111",
                padding: "10px 14px",
                borderRadius: 999,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>

            {/* Phone + WhatsApp CTAs */}
            <a
              href={`tel:${phoneE164}`}
              style={ghostBtn}
              aria-label="Call now"
            >
              Call now
            </a>
            <a
              href={`https://wa.me/${phoneE164.replace("+", "")}`}
              style={ghostBtn}
              aria-label="WhatsApp us"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* COLOURFUL GRID */}
      <section
        style={{
          padding: "0 16px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: 16,
        }}
        aria-label="Primary sections"
      >
        <Tile href="/directory"     title="Directory"     src="/tiles/directory"     fallback="#0ea5e9" subtitle="Explore →" />
        <Tile href="/services"      title="Services"      src="/tiles/services"      fallback="#22c55e" subtitle="Explore →" />
        <Tile href="/deals"         title="Deals"         src="/tiles/deals"         fallback="#ef4444" subtitle="Save now →" />
        <Tile href="/contact"       title="Contact"       src="/tiles/contact"       fallback="#a78bfa" subtitle="Get in touch →" />
        <Tile href="/ipw-climatech" title="IPW Climatech" src="/tiles/aircon"        fallback="#14b8a6" subtitle="Book a service →" />
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "0 16px 24px" }} aria-label="What locals say">
        <h2 style={{ fontSize: 18, marginBottom: 8 }}>What locals say</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {[
            { q: "Found a great cleaner in 10 minutes!", a: "— Sarah, Llantrisant" },
            { q: "Booked car A/C regas, super quick.", a: "— Mike, Pontyclun" },
            { q: "Handy to compare local trades.", a: "— Beth, Brynna" },
          ].map((t, i) => (
            <div key={i} style={{ background: "#121212", borderRadius: 12, padding: 14, opacity: 0.95 }}>
              <p style={{ margin: 0 }}>{t.q}</p>
              <p style={{ margin: "6px 0 0", opacity: 0.8 }}>{t.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section style={{ padding: "0 16px 32px", fontSize: 14, color: "#cbd5e1" }}>
        Serving Llantrisant, Pontyclun, Brynna, Llanharry, Llanharan, Talbot Green, Beddau & nearby.
      </section>

      {/* LOCALBUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Llantrisant Local",
            url: "https://llantrisantlocal.co.uk",
            areaServed: [
              "Llantrisant",
              "Pontyclun",
              "Brynna",
              "Llanharry",
              "Llanharan",
              "Talbot Green",
              "Beddau",
            ],
            image: "https://llantrisantlocal.co.uk/og.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Llantrisant",
              addressRegion: "Rhondda Cynon Taf",
              addressCountry: "GB",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: phoneE164,
            },
          }),
        }}
      />
    </main>
  );
}

const ghostBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,.35)",
  color: "white",
  textDecoration: "none",
  fontWeight: 700,
};

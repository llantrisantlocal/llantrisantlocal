import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO with JPEG/JPG fallback */}
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
        {/* Raw <picture> so we can provide two sources and avoid Next/Image issues */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <picture>
            {/* Try .jpeg first */}
            <source srcSet="/tiles/aircon.jpeg" />
            {/* Fallback to .jpg if .jpeg isn’t there */}
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

          {/* Dark gradient overlay */}
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

      {/* SIMPLE TILES (no images; won’t break build) */}
      <section
        style={{
          padding: "0 16px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        {[
          { href: "/directory", title: "Directory" },
          { href: "/services", title: "Services" },
          { href: "/deals", title: "Deals" },
          { href: "/contact", title: "Contact" },
          { href: "/ipw-climatech", title: "IPW Climatech" },
        ].map((t) => (
          <Link
            key={t.href}
            href={t.href}
            style={{
              display: "block",
              background: "#111",
              color: "white",
              textDecoration: "none",
              borderRadius: 16,
              padding: 16,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{t.title}</div>
            <div style={{ opacity: 0.8, fontSize: 13 }}>Explore →</div>
          </Link>
        ))}
      </section>
    </main>
  );
}

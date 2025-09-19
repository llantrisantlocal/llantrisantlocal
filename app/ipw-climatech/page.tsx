export default function IPWClimatechPage() {
  return (
    <main style={{ padding: 16 }}>
      {/* HERO */}
      <div
        style={{
          position: "relative",
          height: 200,
          borderRadius: 16,
          overflow: "hidden",
          background: "#000",
          marginBottom: 16,
        }}
      >
        <picture>
          <source type="image/webp" srcSet="/tiles/aircon.webp" />
          <source srcSet="/tiles/aircon.jpeg" />
          <img
            src="/tiles/aircon.jpg"
            alt="Automotive A/C control"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.55,
              display: "block",
            }}
          />
        </picture>

        <h1
          style={{
            position: "absolute",
            left: 16,
            bottom: 12,
            margin: 0,
            color: "white",
            fontSize: 28,
            textShadow: "0 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          IPW Climatech
        </h1>
      </div>

      <p style={{ fontSize: 16, lineHeight: 1.6 }}>
        Mobile automotive air-conditioning service covering Llantrisant &amp; nearby:
        re-gas, leak testing, odour treatment and diagnostics.
      </p>

      <p style={{ fontSize: 16, lineHeight: 1.6 }}>
        <strong>Coming late November:</strong> domestic split-system installs and maintenance
        (following qualification).
      </p>

      <a
        href="/contact"
        style={{
          display: "inline-block",
          background: "#16a34a",
          color: "white",
          padding: "12px 18px",
          borderRadius: 10,
          textDecoration: "none",
          fontWeight: 700,
          marginTop: 12,
        }}
      >
        Book a service
      </a>

      {/* SCHEMA: AutoRepair / Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "IPW Climatech",
            url: "https://llantrisantlocal.co.uk/ipw-climatech",
            areaServed: ["Llantrisant", "Pontyclun", "Surrounding"],
            serviceType: "Automotive air conditioning",
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
            },
            provider: { "@type": "Organization", name: "IPW Climatech" },
          }),
        }}
      />
    </main>
  );
}

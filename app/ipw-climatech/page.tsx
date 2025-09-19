export default function IPWClimatechPage() {
  return (
    <main style={{ padding: 16 }}>
      {/* HERO */}
      <div
        style={{
          position: "relative",
          height: 220,
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

        {/* TITLE with gradient text */}
        <h1
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            margin: 0,
            fontSize: 32,
            fontWeight: "bold",
            background: "linear-gradient(90deg, #2563eb, #ef4444)", // blue → red
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 6px rgba(0,0,0,0.6)",
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
        <strong>Coming late November:</strong> domestic split-system installs and
        maintenance (following qualification).
      </p>

      {/* CONTACT BOX */}
      <div
        style={{
          marginTop: 20,
          padding: 16,
          borderRadius: 12,
          background: "rgba(37,99,235,0.1)", // light blue backdrop
          border: "1px solid #2563eb",
        }}
      >
        <p style={{ margin: "0 0 8px", fontWeight: "bold" }}>
          Contact IPW Climatech
        </p>
        <p style={{ margin: "4px 0" }}>
          📧{" "}
          <a href="mailto:ipwclimatech@outlook.com">ipwclimatech@outlook.com</a>
        </p>
        <p style={{ margin: "4px 0" }}>
          💬{" "}
          <a
            href="https://wa.me/442922360467"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#16a34a",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.textShadow = "0 0 10px #22c55e";
              e.currentTarget.style.color = "#22c55e";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.textShadow = "none";
              e.currentTarget.style.color = "#16a34a";
            }}
          >
            Message us on WhatsApp
          </a>
        </p>
      </div>

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
            telephone: "+442922360467",
            email: "ipwclimatech@outlook.com",
            sameAs: ["https://wa.me/442922360467"],
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

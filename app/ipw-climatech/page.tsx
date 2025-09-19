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

      {/* CONTACT BOX */}
      <div
        style={{
          marginTop: 20,
          padding: "20px",
          borderRadius: 12,
          background: "linear-gradient(135deg, #1e3a8a, #dc2626)", // blue → red
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: 12 }}>Book Now</h2>
        <p style={{ marginBottom: 16 }}>
          WhatsApp or email us today to book your air-con service.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/442922360467"
          target="_blank"
          style={{
            display: "inline-block",
            backgroundColor: "#25D366", // WhatsApp green
            color: "white",
            padding: "14px 22px",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
            marginBottom: 12,
          }}
        >
          💬 Message us on WhatsApp
        </a>

        {/* Email Link */}
        <p style={{ margin: "10px 0 0" }}>
          📧{" "}
          <a
            href="mailto:ipwclimatech@outlook.com"
            style={{ color: "white", fontWeight: 700, textDecoration: "underline" }}
          >
            ipwclimatech@outlook.com
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
            sameAs: [
              "https://wa.me/442922360467",
              "mailto:ipwclimatech@outlook.com",
            ],
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

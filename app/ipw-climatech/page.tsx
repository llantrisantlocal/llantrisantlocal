import Image from "next/image";
import Link from "next/link";

export default function IPWClimatech() {
  return (
    <section style={{ padding: 16 }}>
      <div
        style={{
          position: "relative",
          height: 180,
          borderRadius: 16,
          overflow: "hidden",
          marginBottom: 16,
          background: "#000",
        }}
      >
        <Image
          src="/tiles/aircon.jpg"
          alt="Automotive A/C controls"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.55 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.7) 100%)",
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
          }}
        >
          IPW Climatech
        </h1>
      </div>

      <p>
        Mobile automotive air-conditioning service covering Llantrisant & nearby:
        re-gas, leak testing, odour treatment and diagnostics.
      </p>
      <p style={{ marginTop: 8 }}>
        <strong>Coming late November:</strong> domestic split-system installs and maintenance
        (following qualification).
      </p>

      <Link
        href="/contact"
        style={{
          display: "inline-block",
          marginTop: 12,
          background: "#16a34a",
          color: "white",
          padding: "10px 14px",
          borderRadius: 10,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Book a service
      </Link>
    </section>
  );
}

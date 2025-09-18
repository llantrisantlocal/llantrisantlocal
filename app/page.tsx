import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ color: "#0a0a0a" }}>
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
          background: "#111", // fallback if no image
        }}
      >
        {/* Background image (won’t capture clicks) */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Image
            src="/tiles/aircon.jpg" // ok if missing; the fallback shows
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.45 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>

        {/* Foreground content */}
        <div style={{ position: "relative", zIndex: 1, padding: 20, color: "white" }}>
          <h1 style={{ margin: 0, fontSize: "28px", lineHeight: 1.2 }}>
            LLANTRISANT LOCAL
          </h1>
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

      {/* QUICK LINKS */}
      <section
        style={{
          padding: "0 16px 24px",
          display: "grid",
          gap: 12,
        }}
      >
        <NavLink href="/directory" label="Directory" />
        <NavLink href="/services" label="Services" />
        <NavLink href="/deals" label="Deals" />
        <NavLink href="/contact" label="Contact" />
      </section>
    </main>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "20px",
        color: "#4c1d95", // purple
      }}
    >
      <span>{label}</span>
      <span aria-hidden>→</span>
    </Link>
  );
}

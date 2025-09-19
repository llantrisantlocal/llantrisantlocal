export const metadata = {
  title: "Llantrisant Local",
  description: "Local directory, services, and deals for Llantrisant & nearby.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Helvetica,Arial,sans-serif",
          background: "#0b0b0b",
          color: "white",
        }}
      >
        {/* TOP NAV */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backdropFilter: "saturate(180%) blur(8px)",
            background: "rgba(10,10,10,.75)",
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 16px",
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            <a
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              Llantrisant Local
            </a>
            <div style={{ display: "flex", gap: 14, fontWeight: 600 }}>
              <a href="/directory" style={linkStyle}>Directory</a>
              <a href="/services"  style={linkStyle}>Services</a>
              <a href="/deals"     style={linkStyle}>Deals</a>
              <a href="/contact"   style={linkStyle}>Contact</a>
            </div>
          </nav>
        </header>

        {/* MAIN CONTAINER */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
          {children}
        </div>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 28,
            padding: "18px 16px 28px",
            borderTop: "1px solid rgba(255,255,255,.08)",
            opacity: 0.8,
            fontSize: 13,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Llantrisant Local • Built locally
        </footer>
      </body>
    </html>
  );
}

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  opacity: 0.9,
};

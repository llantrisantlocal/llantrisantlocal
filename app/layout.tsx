export const metadata = {
  title: "Llantrisant Local",
  description: "Local services, deals & recommendations around Llantrisant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif", color: "#0f172a" }}>
        <header style={{ padding: "16px 20px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="/" style={{ fontWeight: 800, fontSize: 20, textDecoration: "none", color: "#0f172a" }}>Llantrisant Local</a>
            <nav style={{ display: "flex", gap: 16 }}>
              <a href="/directory">Directory</a>
              <a href="/services">Services</a>
              <a href="/deals">Deals</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 20px" }}>{children}</main>
        <footer style={{ borderTop: "1px solid #e2e8f0", padding: "24px 20px", marginTop: 40 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: 14, color: "#475569" }}>
            © {new Date().getFullYear()} Llantrisant Local. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

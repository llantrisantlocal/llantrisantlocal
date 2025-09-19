"use client";

import { usePathname } from "next/navigation";

export const metadata = {
  title: "Llantrisant Local",
  description: "Local directory, services, and deals for Llantrisant & nearby.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
              {navLink("/directory", "Directory", pathname)}
              {navLink("/services", "Services", pathname)}
              {navLink("/deals", "Deals", pathname)}
              {navLink("/contact", "Contact", pathname)}
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

function navLink(href: string, label: string, pathname: string) {
  const active = pathname === href;
  return (
    <a
      key={href}
      href={href}
      style={{
        color: "white",
        textDecoration: active ? "underline" : "none",
        fontWeight: active ? 700 : 500,
        opacity: active ? 1 : 0.9,
      }}
    >
      {label}
    </a>
  );
}

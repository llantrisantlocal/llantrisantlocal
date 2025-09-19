"use client";

import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      <a
        href="/"
        style={{
          color: "white",
          textDecoration: pathname === "/" ? "underline" : "none",
          fontWeight: pathname === "/" ? 800 : 700,
          fontSize: 18,
        }}
      >
        Llantrisant Local
      </a>

      <div style={{ display: "flex", gap: 14, fontWeight: 600 }}>
        {link("/directory", "Directory", pathname)}
        {link("/services", "Services", pathname)}
        {link("/deals", "Deals", pathname)}
        {link("/contact", "Contact", pathname)}
      </div>
    </>
  );
}

function link(href: string, label: string, pathname: string) {
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

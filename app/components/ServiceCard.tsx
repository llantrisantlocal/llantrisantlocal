import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  image: string; // e.g. "/tiles/aircon.jpg"
  href: string;  // e.g. "/contact"
};

export default function ServiceCard({ title, desc, image, href }: Props) {
  return (
    <Link
      href={href}
      style={{
        position: "relative",
        display: "block",
        height: 180,
        borderRadius: 16,
        overflow: "hidden",
        textDecoration: "none",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover" }}
        priority={false}
      />

      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 100%)",
          transition: "background 200ms ease",
        }}
      />

      {/* text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 16,
          color: "white",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700 }}>
          {title}
        </h3>
        <p style={{ margin: "6px 0 0", opacity: 0.9, fontSize: 14 }}>{desc}</p>
      </div>
    </Link>
  );
}

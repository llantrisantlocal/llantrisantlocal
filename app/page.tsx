import Link from "next/link";
import Image from "next/image";

type Tile = {
  href: string;
  title: string;
  img: string;   // path in /public
  tint?: "green" | "teal" | "red" | "amber";
};

const tiles: Tile[] = [
  { href: "/directory", title: "Directory", img: "/tiles/directory.jpg", tint: "green" },
  { href: "/services",  title: "Services",  img: "/tiles/services.jpg",  tint: "teal"  },
  { href: "/deals",     title: "Deals",     img: "/tiles/deals.jpg",     tint: "red"   },
  { href: "/contact",   title: "Contact",   img: "/tiles/contact.jpg",   tint: "green" },
];

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-16">
      {/* Logo / strapline (optional) */}
      <section className="text-center pt-10 pb-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          LLANTRISANT LOCAL
        </h1>
        <p className="mt-3 text-zinc-300">
          A town that’s built on a hill cannot be hidden.
        </p>
      </section>

      {/* Card grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {tiles.map(({ href, title, img, tint = "green" }) => (
          <Link
            key={href}
            href={href}
            className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7))] hover:scale-[1.01] transition"
          >
            {/* Background image */}
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover object-center opacity-70 group-hover:opacity-80 transition"
              priority
            />

            {/* Color tint */}
            <div
              className={[
                "absolute inset-0 mix-blend-multiply",
                tint === "green" && "bg-emerald-600/60",
                tint === "teal" && "bg-teal-600/60",
                tint === "red" && "bg-rose-600/60",
                tint === "amber" && "bg-amber-600/60",
              ]
                .filter(Boolean)
                .join(" ")}
            />

            {/* Edge vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/50" />

            {/* Title */}
            <div className="absolute inset-0 grid place-items-center text-center">
              <h2 className="px-4 text-2xl sm:text-3xl font-extrabold tracking-wide">
                {title}
              </h2>
            </div>

            {/* Subtle arrow on hover */}
            <span className="absolute bottom-4 right-4 text-white/80 opacity-0 group-hover:opacity-100 transition">
              →
            </span>
          </Link>
        ))}
      </section>

      {/* Big CTA */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}

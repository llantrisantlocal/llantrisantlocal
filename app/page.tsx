export default function Home() {
  return (
    <main className="min-h-dvh bg-slate-50">
      <header className="bg-gradient-to-br from-teal-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Your local hub for services, traders & great deals
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl mx-auto">
            Cleaning, gardening, tradespeople and more — all in your area. Find what you need in minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/directory"
              className="rounded-lg bg-white px-5 py-2 font-medium text-teal-700 shadow-sm hover:bg-slate-100"
            >
              Browse directory
            </a>
            <a
              href="/contact"
              className="rounded-lg bg-yellow-400 px-5 py-2 font-medium text-slate-900 shadow-sm hover:bg-yellow-300"
            >
              List your business
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-12 grid gap-8 sm:grid-cols-2">
        <Card
          title="Directory"
          desc="All local businesses at a glance. Explore by category or search directly."
          href="/directory"
          cta="Explore"
        />
        <Card
          title="Services"
          desc="Find cleaners, gardeners, electricians, plumbers & more — trusted locally."
          href="/services"
          cta="Browse services"
        />
        <Card
          title="Deals"
          desc="Save money with exclusive offers from local businesses near you."
          href="/deals"
          cta="See deals"
        />
      </section>
    </main>
  );
}

function Card({ title, desc, href, cta }: { title: string; desc: string; href: string; cta: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:ring-teal-200 transition">
      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      <p className="mt-2 text-slate-600 text-sm">{desc}</p>
      <a href={href} className="mt-4 inline-block text-teal-700 font-medium hover:underline">
        {cta} →
      </a>
    </div>
  );
}

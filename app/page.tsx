export default function Home() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            {/* tiny logo */}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-semibold">
              LL
            </span>
            <span className="font-semibold tracking-tight">Llantrisant Local</span>
          </a>

          <nav className="hidden sm:flex gap-6 text-sm">
            <a className="hover:text-teal-700" href="/directory">Directory</a>
            <a className="hover:text-teal-700" href="/services">Services</a>
            <a className="hover:text-teal-700" href="/deals">Deals</a>
            <a className="hover:text-teal-700" href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Your local hub for services, traders & great deals
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Cleaning, gardening, tradespeople and more — all in your local area.
            Find what you need in minutes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/directory"
              className="inline-flex items-center rounded-lg bg-white text-teal-700 px-4 py-2 font-medium hover:bg-white/90"
            >
              Browse Directory
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg ring-1 ring-white/70 px-4 py-2 font-medium hover:bg-white/10"
            >
              List your business
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-6xl px-4 -mt-10 pb-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card href="/directory" title="Directory" desc="All local businesses at a glance." />
          <Card href="/services" title="Services" desc="Find cleaners, gardeners & more." />
          <Card href="/deals" title="Deals" desc="Local discounts & seasonal offers." />
          <Card href="/contact" title="Contact" desc="Questions or want to get listed?" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Llantrisant Local. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/directory" className="hover:text-teal-700">Directory</a>
            <a href="/services" className="hover:text-teal-700">Services</a>
            <a href="/deals" className="hover:text-teal-700">Deals</a>
            <a href="/contact" className="hover:text-teal-700">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:ring-teal-200 transition"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100">
          →
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <span className="mt-4 inline-block text-sm font-medium text-teal-700 group-hover:underline">
        Explore
      </span>
    </a>
  );
}

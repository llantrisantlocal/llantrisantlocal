import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* HERO */}
      <section className="mt-10 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 sm:p-12 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          Welcome to Llantrisant Local
        </h1>
        <p className="mt-4 text-lg sm:text-xl/8 text-emerald-50">
          Your hub for local services, trusted traders, and great community deals.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/directory"
            className="inline-flex items-center gap-2 rounded-full bg-white/95 text-emerald-800 px-5 py-2.5 font-semibold shadow hover:shadow-md hover:bg-white transition"
          >
            Browse directory
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-900/20 text-white px-5 py-2.5 font-semibold ring-1 ring-white/30 hover:bg-emerald-900/30 transition"
          >
            List your business
          </Link>
        </div>
      </section>

      {/* FEATURED CARDS */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Link
          href="/directory"
          className="group rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
            {/* Book/Directory Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5.25A2.25 2.25 0 0 1 5.25 3h11.5A2.25 2.25 0 0 1 19 5.25v13.5A2.25 2.25 0 0 1 16.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M7.5 7.5h6M7.5 10.5h6M7.5 13.5h4.5" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold">Directory</h3>
          <p className="mt-1 text-sm text-zinc-600">
            All local businesses at a glance.
          </p>
          <div className="mt-4 text-emerald-700 font-semibold">
            Explore <span aria-hidden className="inline-block transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>

        <Link
          href="/services"
          className="group rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="h-12 w-12 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
            {/* Wrench/Tools Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 19.07 13.93 11A6 6 0 1 0 11 13.93L19.07 22 22 19.07ZM7 11a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"/>
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold">Services</h3>
          <p className="mt-1 text-sm text-zinc-600">
            Find cleaners, gardeners & more.
          </p>
          <div className="mt-4 text-sky-700 font-semibold">
            Browse <span aria-hidden className="inline-block transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>

        <Link
          href="/deals"
          className="group rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="h-12 w-12 rounded-xl bg-amber-100 text-amber-700 grid place-items-center">
            {/* Tag/Deal Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 11.5 12.5 3a2 2 0 0 0-1.41-.59H5a2 2 0 0 0-2 2v6.09A2 2 0 0 0 3.59 12L12 20.41a2 2 0 0 0 2.83 0L21 14.24a2 2 0 0 0 0-2.74ZM7.5 8A1.5 1.5 0 1 1 9 6.5 1.5 1.5 0 0 1 7.5 8Z"/>
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold">Deals</h3>
          <p className="mt-1 text-sm text-zinc-600">
            Local offers and savings from traders.
          </p>
          <div className="mt-4 text-amber-700 font-semibold">
            See offers <span aria-hidden className="inline-block transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>

        <Link
          href="/contact"
          className="group rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div className="h-12 w-12 rounded-xl bg-rose-100 text-rose-700 grid place-items-center">
            {/* Mail Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 16.5v-9A2.25 2.25 0 0 1 4.5 5.25h15a2.25 2.25 0 0 1 2.25 2.25Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 7.5l9 6 9-6" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold">Contact</h3>
          <p className="mt-1 text-sm text-zinc-600">
            List your business or ask a question.
          </p>
          <div className="mt-4 text-rose-700 font-semibold">
            Get in touch <span aria-hidden className="inline-block transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>
      </section>
    </main>
  );
}

export default function IPWClimatechPage() {
  return (
    <main className="min-h-dvh bg-black text-white">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">IPW Climatech</h1>
        <p className="mt-2 text-zinc-300">
          Professional <strong>automotive air conditioning</strong> services in Llantrisant, Pontyclun, Brynna, Llanharan & nearby.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-zinc-900/60 p-5 ring-1 ring-white/10">
            <h2 className="text-xl font-semibold">Vehicle A/C Services</h2>
            <ul className="mt-2 list-disc pl-5 text-zinc-300">
              <li>Re-gas & performance check</li>
              <li>Leak test & UV dye</li>
              <li>Cabin odour/sanitise treatment</li>
              <li>Compressor & component diagnostics</li>
            </ul>
            <p className="mt-3 text-zinc-400 text-sm">
              Mobile service available—home or workplace (driveway/parking required).
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900/60 p-5 ring-1 ring-white/10">
            <h2 className="text-xl font-semibold">Coming soon (from December)</h2>
            <p className="mt-2 text-zinc-300">
              <strong>Home air conditioning</strong> installation & servicing
              (after course completion in late November).
            </p>
            <ul className="mt-2 list-disc pl-5 text-zinc-300">
              <li>Wall-mounted split systems</li>
              <li>Energy-efficient cooling & heating</li>
              <li>Annual maintenance & filters</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Info title="Areas covered" text="Llantrisant, Pontyclun, Brynna, Llanharan, Talbot Green & surrounding." />
          <Info title="Hours" text="Mon–Fri 8:00–18:30, Sat 9:00–16:00" />
          <Info title="Enquiries" text="Use the contact form — fast response same/next day." />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-semibold hover:bg-emerald-500">
            Book vehicle A/C service
          </a>
          <a href="/deals" className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/30 px-5 py-2.5 font-semibold hover:bg-white/10">
            See launch offer
          </a>
        </div>

        <hr className="my-10 border-zinc-800" />

        <h2 className="text-2xl font-bold">FAQs</h2>
        <div className="mt-4 space-y-4">
          <Faq q="How long does a re-gas take?" a="Usually 45–60 minutes including checks and leak test." />
          <Faq q="Do you come to me?" a="Yes—mobile service within the local area (driveway/parking required)." />
          <Faq q="Which gas do you use?" a="R134a/R1234yf depending on vehicle spec. Priced accordingly." />
        </div>
      </section>
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-zinc-900/60 p-5 ring-1 ring-white/10">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-zinc-300">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl bg-zinc-900/40 p-4 ring-1 ring-white/10">
      <p className="font-medium">{q}</p>
      <p className="mt-1 text-zinc-300">{a}</p>
    </div>
  );
}

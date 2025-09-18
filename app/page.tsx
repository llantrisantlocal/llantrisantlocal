export default function Home() {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white font-semibold">
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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-

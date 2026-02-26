
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-brand-500/30 group-hover:scale-110 transition">
              U
            </div>
            <span className="font-extrabold text-lg tracking-tight">
              Udhayam <span className="text-brand-400">2026</span>
            </span>
          </Link>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
          Udhayam <span className="text-brand-400">2026</span>
        </h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto mb-2">
          Smart Campus Navigator
        </p>
        <p className="text-sm text-white/40 max-w-xl mx-auto">
          Scan QR codes placed across campus to get step-by-step directions to
          any event venue. Click on any area below to start navigating.
        </p>
      </section>



      {/* Campus Info Cards */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Campus Structure</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Main Building */}
          <div className="glass rounded-2xl p-5">
            <div className="text-3xl mb-2">🏢</div>
            <h3 className="font-bold text-lg mb-1">Main Building</h3>
            <p className="text-sm text-white/50 mb-3">
              Three connected blocks with 5 floors each
            </p>
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500 inline-block"></span>
                <span className="text-white/70">West Block (W)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block"></span>
                <span className="text-white/70">Center Block (C)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
                <span className="text-white/70">East Block (E)</span>
              </div>
            </div>
          </div>

          {/* Floors */}
          <div className="glass rounded-2xl p-5">
            <div className="text-3xl mb-2">🏗️</div>
            <h3 className="font-bold text-lg mb-1">Floor Layout</h3>
            <p className="text-sm text-white/50 mb-3">
              Each block has 5 floors (Ground to 4th)
            </p>
            <div className="space-y-1.5 text-sm text-white/70">
              <p>0 → Ground Floor</p>
              <p>1 → 1st Floor</p>
              <p>2 → 2nd Floor</p>
              <p>3 → 3rd Floor</p>
              <p>4 → 4th Floor</p>
            </div>
          </div>

          {/* Room Code */}
          <div className="glass rounded-2xl p-5">
            <div className="text-3xl mb-2">🔢</div>
            <h3 className="font-bold text-lg mb-1">Room Code Format</h3>
            <p className="text-sm text-white/50 mb-3">
              Block Letter + Floor Number + Room Number
            </p>
            <div className="space-y-1.5 text-sm text-white/70">
              <p>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-brand-300">C405</span>{" "}
                → Center Block, 4th Floor
              </p>
              <p>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-brand-300">W101</span>{" "}
                → West Block, 1st Floor
              </p>
              <p>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-brand-300">E217</span>{" "}
                → East Block, 2nd Floor
              </p>
            </div>
          </div>

          {/* Outdoor Areas */}
          <div className="glass rounded-2xl p-5">
            <div className="text-3xl mb-2">🏟️</div>
            <h3 className="font-bold text-lg mb-1">Outdoor Areas</h3>
            <p className="text-sm text-white/50 mb-3">
              Located outside the main building
            </p>
            <div className="space-y-1.5 text-sm text-white/70">
              <p>🎭 Auditorium (Cultural Events)</p>
              <p>🏛️ Conference Hall</p>
              <p>🍽️ Canteen</p>
              <p>⚽ Sports Ground</p>
              <p>🎖️ NCC Area (East Block Front)</p>
            </div>
          </div>

          {/* QR System */}
          <div className="glass rounded-2xl p-5">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-bold text-lg mb-1">QR Navigation</h3>
            <p className="text-sm text-white/50 mb-3">
              QR codes placed at strategic locations
            </p>
            <div className="space-y-1.5 text-sm text-white/70">
              <p>📍 Main Gate entrance</p>
              <p>📍 Every floor of each block</p>
              <p>📍 All outdoor areas</p>
              <p className="text-white/40 text-xs mt-2">
                Scan → Search event → Get directions!
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="glass rounded-2xl p-5">
            <div className="text-3xl mb-2">🧭</div>
            <h3 className="font-bold text-lg mb-1">How It Works</h3>
            <p className="text-sm text-white/50 mb-3">
              Three simple steps
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <span className="text-white/70">Scan QR code at your location</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span className="text-white/70">Search for the event name</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span className="text-white/70">Follow step-by-step directions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Locations Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Quick Navigation Links</h2>
        <div className="glass rounded-2xl p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <Link href="/navigate?from=gate" className="rounded-xl bg-white/5 hover:bg-white/10 px-3 py-2.5 text-center text-sm font-medium transition">
              🚪 Main Gate
            </Link>
            {["W", "C", "E"].map((block) =>
              [0, 1, 2, 3, 4].map((floor) => (
                <Link
                  key={`${block}${floor}`}
                  href={`/navigate?from=${block.toLowerCase()}${floor}`}
                  className="rounded-xl bg-white/5 hover:bg-white/10 px-3 py-2.5 text-center text-sm font-medium transition"
                >
                  🏢 {block === "W" ? "West" : block === "C" ? "Center" : "East"} F{floor}
                </Link>
              ))
            )}
            <Link href="/navigate?from=auditorium" className="rounded-xl bg-white/5 hover:bg-white/10 px-3 py-2.5 text-center text-sm font-medium transition">
              🎭 Auditorium
            </Link>
            <Link href="/navigate?from=canteen" className="rounded-xl bg-white/5 hover:bg-white/10 px-3 py-2.5 text-center text-sm font-medium transition">
              🍽️ Canteen
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white/30 text-xs py-8 mt-8">
        © 2026 Udhayam — Smart Campus Navigator
      </footer>
    </main>
  );
}

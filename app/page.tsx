
import Link from "next/link";
import {
  BuildingIcon,
  LayersIcon,
  HashIcon,
  StadiumIcon,
  QrCodeIcon,
  CompassIcon,
  DoorIcon,
  TheaterIcon,
  UtensilsIcon,
  MapPinIcon,
  LandmarkIcon,
  ShieldIcon,
} from "./components/Icons";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* ─── Quick Navigation ─── */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 pt-6 sm:pt-8 pb-5 sm:pb-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold section-title">
            Quick Navigation
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* West Block */}
          <div className="glass rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-accent-gold inline-block shadow-sm shadow-accent-gold/50"></span>
              <h3 className="font-bold text-base sm:text-lg">West Block</h3>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {[0, 1, 2, 3, 4].map((floor) => (
                <Link
                  key={`W${floor}`}
                  href={`/navigate?from=w${floor}`}
                  className="rounded-xl bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 hover:shadow-sm hover:shadow-purple-500/10"
                >
                  {floor === 0 ? "Ground" : `Floor ${floor}`}
                </Link>
              ))}
            </div>
          </div>

          {/* Center Block */}
          <div className="glass rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-accent-gold inline-block shadow-sm shadow-accent-gold/50"></span>
              <h3 className="font-bold text-base sm:text-lg">Center Block</h3>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {[0, 1, 2, 3, 4].map((floor) => (
                <Link
                  key={`C${floor}`}
                  href={`/navigate?from=c${floor}`}
                  className="rounded-xl bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 hover:shadow-sm hover:shadow-indigo-500/10"
                >
                  {floor === 0 ? "Ground" : `Floor ${floor}`}
                </Link>
              ))}
            </div>
          </div>

          {/* East Block */}
          <div className="glass rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-accent-gold inline-block shadow-sm shadow-accent-gold/50"></span>
              <h3 className="font-bold text-base sm:text-lg">East Block</h3>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {[0, 1, 2, 3, 4].map((floor) => (
                <Link
                  key={`E${floor}`}
                  href={`/navigate?from=e${floor}`}
                  className="rounded-xl bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 hover:shadow-sm hover:shadow-blue-500/10"
                >
                  {floor === 0 ? "Ground" : `Floor ${floor}`}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Outside Areas — full width */}
        <div className="glass rounded-2xl p-4 sm:p-5 mt-3 sm:mt-4">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-3 h-3 rounded-full bg-accent-gold inline-block shadow-sm shadow-accent-gold/50"></span>
            <h3 className="font-bold text-base sm:text-lg">Outside</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
            <Link
              href="/navigate?from=gate"
              className="rounded-xl bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-2.5 text-center text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5"
            >
              <DoorIcon className="w-4 h-4 text-accent-gold" />
              Main Gate
            </Link>
            <Link
              href="/navigate?from=auditorium"
              className="rounded-xl bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-2.5 text-center text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5"
            >
              <TheaterIcon className="w-4 h-4 text-accent-gold" />
              Auditorium
            </Link>
            <Link
              href="/navigate?from=canteen"
              className="rounded-xl bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-2.5 text-center text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5"
            >
              <UtensilsIcon className="w-4 h-4 text-accent-gold" />
              Canteen
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Campus Structure ─── */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold section-title">
            Campus Structure
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Main Building */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="icon-box">
                <BuildingIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-0.5">Main Building</h3>
                <p className="text-sm text-white/50">
                  Three connected blocks with 5 floors each
                </p>
              </div>
            </div>
            <div className="space-y-1.5 text-sm ml-[56px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-gold inline-block shadow-sm shadow-accent-gold/50"></span>
                <span className="text-white/70">West Block (W)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-gold inline-block shadow-sm shadow-accent-gold/50"></span>
                <span className="text-white/70">Center Block (C)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-gold inline-block shadow-sm shadow-accent-gold/50"></span>
                <span className="text-white/70">East Block (E)</span>
              </div>
            </div>
          </div>

          {/* Floors */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="icon-box">
                <LayersIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-0.5">Floor Layout</h3>
                <p className="text-sm text-white/50">
                  Each block has 5 floors (Ground to 4th)
                </p>
              </div>
            </div>
            <div className="space-y-1.5 text-sm text-white/70 ml-[56px]">
              <p>0 → Ground Floor</p>
              <p>1 → 1st Floor</p>
              <p>2 → 2nd Floor</p>
              <p>3 → 3rd Floor</p>
              <p>4 → 4th Floor</p>
            </div>
          </div>

          {/* Room Code */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="icon-box">
                <HashIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-0.5">Room Code Format</h3>
                <p className="text-sm text-white/50">
                  Block Letter + Floor Number + Room Number
                </p>
              </div>
            </div>
            <div className="space-y-1.5 text-sm text-white/70 ml-[56px]">
              <p>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-accent-purple">
                  C405
                </span>{" "}
                → Center Block, 4th Floor
              </p>
              <p>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-accent-purple">
                  W101
                </span>{" "}
                → West Block, 1st Floor
              </p>
              <p>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-accent-purple">
                  E217
                </span>{" "}
                → East Block, 2nd Floor
              </p>
            </div>
          </div>

          {/* Outdoor Areas */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="icon-box">
                <StadiumIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-0.5">Outdoor Areas</h3>
                <p className="text-sm text-white/50">
                  Located outside the main building
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/70 ml-[56px]">
              <p className="flex items-center gap-2">
                <TheaterIcon className="w-4 h-4 text-accent-gold/70" />
                Auditorium (Cultural Events)
              </p>
              <p className="flex items-center gap-2">
                <LandmarkIcon className="w-4 h-4 text-accent-gold/70" />
                Conference Hall
              </p>
              <p className="flex items-center gap-2">
                <UtensilsIcon className="w-4 h-4 text-accent-gold/70" />
                Canteen
              </p>
              <p className="flex items-center gap-2">
                <ShieldIcon className="w-4 h-4 text-accent-gold/70" />
                NCC Area (East Block Front)
              </p>
            </div>
          </div>

          {/* QR System */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="icon-box">
                <QrCodeIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-0.5">QR Navigation</h3>
                <p className="text-sm text-white/50">
                  QR codes placed at strategic locations
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/70 ml-[56px]">
              <p className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-accent-gold/70" />
                Main Gate entrance
              </p>
              <p className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-accent-gold/70" />
                Every floor of each block
              </p>
              <p className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-accent-gold/70" />
                All outdoor areas
              </p>
              <p className="text-white/40 text-xs mt-2">
                Scan → Search event → Get directions!
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="icon-box">
                <CompassIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-0.5">How It Works</h3>
                <p className="text-sm text-white/50">Three simple steps</p>
              </div>
            </div>
            <div className="space-y-2.5 text-sm ml-[56px]">
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold-light flex items-center justify-center text-xs font-bold shrink-0 shadow-sm shadow-accent-gold/30 text-black">
                  1
                </span>
                <span className="text-white/70">
                  Scan QR code at your location
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold-light flex items-center justify-center text-xs font-bold shrink-0 shadow-sm shadow-accent-gold/30 text-black">
                  2
                </span>
                <span className="text-white/70">
                  Search for the event name
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold-light flex items-center justify-center text-xs font-bold shrink-0 shadow-sm shadow-accent-gold/30 text-black">
                  3
                </span>
                <span className="text-white/70">
                  Follow step-by-step directions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

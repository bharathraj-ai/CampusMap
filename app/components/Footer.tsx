import Link from "next/link";
import Image from "next/image";
import { CompassIcon } from "./Icons";

export default function Footer() {
    return (
        <footer className="footer-bg mt-8 sm:mt-12 pt-12 sm:pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pb-8 sm:pb-12">
                    {/* Left — Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <Image
                                src="/logo.png"
                                alt="Udhayam 2026"
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-lg"
                            />
                            <span
                                className="font-bold text-base tracking-tight text-white/90 font-[family-name:var(--font-cinzel)]"
                                style={{ textShadow: "0 0 8px rgba(201,168,76,0.4)" }}
                            >
                                Udhayam <span className="text-accent-gold">2026</span>
                            </span>
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed">
                            Campus Navigator — Scan QR codes, search events, and get
                            step-by-step walking directions to any venue on campus.
                        </p>
                    </div>

                    {/* Center — Quick Links */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-white/60 mb-4">
                            Quick Links
                        </h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <Link href="/navigate?from=w0" className="footer-link">
                                West Block
                            </Link>
                            <Link href="/navigate?from=c0" className="footer-link">
                                Center Block
                            </Link>
                            <Link href="/navigate?from=e0" className="footer-link">
                                East Block
                            </Link>
                            <Link href="/navigate?from=gate" className="footer-link">
                                Main Gate
                            </Link>
                            <Link href="/navigate?from=auditorium" className="footer-link">
                                Auditorium
                            </Link>
                            <Link href="/navigate?from=canteen" className="footer-link">
                                Canteen
                            </Link>
                        </div>
                    </div>

                    {/* Right — Info */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-white/60 mb-4">
                            About
                        </h4>
                        <p className="text-sm text-white/40 leading-relaxed mb-3">
                            Built for Udhayam 2026 — the annual inter-college symposium.
                            Navigate the campus with ease using our QR-based wayfinding
                            system.
                        </p>
                        <div className="flex items-center gap-2 text-white/30">
                            <CompassIcon className="w-4 h-4" />
                            <span className="text-xs">Platform By Novon Tech</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-center text-white/40 text-xs">
                        © 2026 Udhayam — Campus Navigator
                    </p>
                </div>
            </div>
        </footer>
    );
}

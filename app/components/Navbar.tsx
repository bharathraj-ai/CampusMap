"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <nav className="sticky top-0 z-50 nav-glass px-3 sm:px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <Image
                        src="/logo.png"
                        alt="Udhayam 2026"
                        width={36}
                        height={36}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <span
                        className="font-bold text-base sm:text-lg tracking-tight text-white/90 group-hover:text-white transition-colors duration-300 font-[family-name:var(--font-cinzel)]"
                        style={{ textShadow: "0 0 10px rgba(201,168,76,0.6)" }}
                    >
                        Udhayam{" "}
                        <span className="text-accent-gold">2026</span>
                    </span>
                </Link>
                {!isHome && (
                    <Link
                        href="/"
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs sm:text-sm font-medium transition active:scale-95"
                    >
                        ← Back
                    </Link>
                )}
            </div>
        </nav>
    );
}

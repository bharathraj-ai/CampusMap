"use client";

import Link from "next/link";

interface Marker {
    id: string;
    label: string;
    emoji: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    qrFrom?: string;
}

const markers: Marker[] = [
    // Main Building Blocks
    { id: "west", label: "West Block", emoji: "🏗️", x: 60, y: 140, width: 180, height: 200, color: "#8b5cf6", qrFrom: "w0" },
    { id: "center", label: "Center Block", emoji: "🏢", x: 270, y: 140, width: 180, height: 200, color: "#6366f1", qrFrom: "c0" },
    { id: "east", label: "East Block", emoji: "🏬", x: 480, y: 140, width: 180, height: 200, color: "#3b82f6", qrFrom: "e0" },
    // Outdoor Areas
    { id: "auditorium", label: "Auditorium", emoji: "🎭", x: 700, y: 60, width: 150, height: 90, color: "#f59e0b", qrFrom: "auditorium" },
    { id: "conference", label: "Conference Hall", emoji: "🏛️", x: 700, y: 170, width: 150, height: 90, color: "#14b8a6", qrFrom: "conference" },
    { id: "canteen", label: "Canteen", emoji: "🍽️", x: 700, y: 280, width: 150, height: 90, color: "#ef4444", qrFrom: "canteen" },
    { id: "sports", label: "Sports Ground", emoji: "⚽", x: 60, y: 380, width: 220, height: 80, color: "#22c55e", qrFrom: "sports" },
    { id: "ncc", label: "NCC Area", emoji: "🎖️", x: 480, y: 380, width: 180, height: 80, color: "#f97316", qrFrom: "ncc" },
];

export default function MapView() {
    return (
        <div className="w-full overflow-x-auto">
            <svg
                viewBox="0 0 920 500"
                className="w-full max-w-4xl mx-auto"
                style={{ minWidth: "320px" }}
            >
                {/* Background */}
                <rect x="0" y="0" width="920" height="500" rx="24" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

                {/* Main Building Outline */}
                <rect x="40" y="120" width="640" height="240" rx="16" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="8 4" />
                <text x="360" y="108" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="13" fontWeight="600">
                    MAIN BUILDING
                </text>

                {/* Connection corridors between blocks */}
                <rect x="240" y="220" width="30" height="40" rx="4" fill="rgba(255,255,255,0.08)" />
                <rect x="450" y="220" width="30" height="40" rx="4" fill="rgba(255,255,255,0.08)" />

                {/* Gate */}
                <Link href="/navigate?from=gate">
                    <rect x="310" y="460" width="100" height="35" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" className="cursor-pointer transition-all duration-200 hover:brightness-150" />
                    <text x="360" y="483" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="600" style={{ pointerEvents: "none" }}>
                        🚪 Main Gate
                    </text>
                </Link>
                {/* Road from gate to building */}
                <line x1="360" y1="460" x2="360" y2="360" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 3" />

                {/* Markers */}
                {markers.map((m) => (
                    <g key={m.id}>
                        <Link href={`/navigate?from=${m.qrFrom}`}>
                            <rect
                                x={m.x}
                                y={m.y}
                                width={m.width}
                                height={m.height}
                                rx="14"
                                fill={`${m.color}22`}
                                stroke={m.color}
                                strokeWidth="2"
                                className="cursor-pointer transition-all duration-200 hover:brightness-150"
                            />
                            <text
                                x={m.x + m.width / 2}
                                y={m.y + m.height / 2 - 10}
                                textAnchor="middle"
                                fontSize="24"
                                style={{ pointerEvents: "none" }}
                            >
                                {m.emoji}
                            </text>
                            <text
                                x={m.x + m.width / 2}
                                y={m.y + m.height / 2 + 16}
                                textAnchor="middle"
                                fill="white"
                                fontSize="13"
                                fontWeight="700"
                                style={{ pointerEvents: "none" }}
                            >
                                {m.label}
                            </text>
                        </Link>
                    </g>
                ))}
            </svg>
        </div>
    );
}

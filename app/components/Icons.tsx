// Minimal line-style SVG icons — consistent stroke width, white/accent color
// Style: Feather / Heroicons inspired

const iconStyle = "w-5 h-5";
const defaultStroke = "currentColor";

export function BuildingIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M9 22V18h6v4" />
            <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M12 6h.01M12 10h.01M12 14h.01" />
        </svg>
    );
}

export function LayersIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    );
}

export function HashIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="4" y1="15" x2="20" y2="15" />
            <line x1="10" y1="3" x2="8" y2="21" />
            <line x1="16" y1="3" x2="14" y2="21" />
        </svg>
    );
}

export function StadiumIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="8" rx="10" ry="4" />
            <path d="M2 8v4c0 2.21 4.48 4 10 4s10-1.79 10-4V8" />
            <path d="M2 12v4c0 2.21 4.48 4 10 4s10-1.79 10-4v-4" />
        </svg>
    );
}

export function QrCodeIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="3" height="3" />
            <path d="M21 14h-3v3" />
            <path d="M18 21h3v-3" />
        </svg>
    );
}

export function CompassIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
    );
}

export function DoorIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
            <path d="M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>
    );
}

export function TheaterIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 10s3-3 10-3 10 3 10 3" />
            <path d="M2 10v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7" />
            <path d="M9 15a3 3 0 1 0 6 0" />
            <line x1="12" y1="3" x2="12" y2="7" />
        </svg>
    );
}

export function UtensilsIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
    );
}

export function CircleDotIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="1" fill={defaultStroke} />
        </svg>
    );
}

export function MapPinIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

export function LandmarkIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="22" x2="21" y2="22" />
            <line x1="6" y1="18" x2="6" y2="11" />
            <line x1="10" y1="18" x2="10" y2="11" />
            <line x1="14" y1="18" x2="14" y2="11" />
            <line x1="18" y1="18" x2="18" y2="11" />
            <polygon points="12 2 20 7 4 7" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

export function ShieldIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        </svg>
    );
}

export function ActivityIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24" />
            <path d="m14.83 9.17 4.24-4.24" />
            <path d="m14.83 14.83 4.24 4.24" />
            <path d="m9.17 14.83-4.24 4.24" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    );
}

export function NavigationIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
    );
}

export function MenuIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    );
}

export function XIcon({ className = iconStyle }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={defaultStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

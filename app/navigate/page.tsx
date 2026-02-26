"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
    MapPinIcon,
    CompassIcon,
} from "../components/Icons";
import { searchEvents, events as allEvents, Event } from "../data/events";
import {
    parseLocation,
    parseVenueCode,
    getNavigationSteps,
} from "../utils/navigation";

function NavigateContent() {
    const searchParams = useSearchParams();
    const from = searchParams.get("from") || "gate";

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [navSteps, setNavSteps] = useState<string[]>([]);

    const location = parseLocation(from);

    // Compute events on the user's current floor (only for indoor locations)
    const floorEvents = useMemo(() => {
        if (location.type !== "indoor" || location.block === undefined || location.floor === undefined) return [];
        return allEvents.filter((e) => {
            const v = parseVenueCode(e.venue);
            return v.type === "indoor" && v.block === location.block && v.floor === location.floor;
        });
    }, [location.type, location.block, location.floor]);

    useEffect(() => {
        if (query.trim().length >= 2) {
            setResults(searchEvents(query));
        } else {
            setResults([]);
        }
        setSelectedEvent(null);
        setNavSteps([]);
    }, [query]);

    function handleSelectEvent(event: Event) {
        setSelectedEvent(event);
        const steps = getNavigationSteps(from, event.venue);
        setNavSteps(steps);
    }

    const destParsed = selectedEvent ? parseVenueCode(selectedEvent.venue) : null;

    return (
        <main className="min-h-screen w-full overflow-x-hidden">

            <div className="max-w-2xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
                {/* Current Location Card */}
                <div className="glass rounded-2xl p-5 mb-6">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                            <MapPinIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                                Your Current Location
                            </p>
                            <p className="text-lg font-bold text-green-400">
                                {location.label}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search Input — appears FIRST */}
                <div className="glass rounded-2xl p-5 mb-6">
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/50">
                        Search Event
                    </label>
                    <input
                        type="text"
                        placeholder="Type event name or department..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full px-3 sm:px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 outline-none text-sm transition placeholder:text-white/30"
                        autoFocus
                    />
                    {query.trim().length >= 2 && (
                        <p className="text-xs text-white/40 mt-2">
                            Found {results.length} event{results.length !== 1 ? "s" : ""}
                        </p>
                    )}
                </div>

                {/* Search Results */}
                {results.length > 0 && !selectedEvent && (
                    <div className="glass rounded-2xl p-4 mb-6">
                        <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-white/50">
                            Select an Event
                        </p>
                        <div className="space-y-2 max-h-[400px] overflow-y-auto">
                            {results.map((event, i) => {
                                const venue = parseVenueCode(event.venue);
                                return (
                                    <button
                                        key={`${event.venue}-${event.name}-${i}`}
                                        onClick={() => handleSelectEvent(event)}
                                        className="w-full text-left glass rounded-xl p-4 hover:bg-white/10 transition"
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-sm">{event.name}</span>
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-full font-medium ${event.type === "Technical"
                                                    ? "bg-brand-500/20 text-brand-300"
                                                    : "bg-amber-500/20 text-amber-300"
                                                    }`}
                                            >
                                                {event.type}
                                            </span>
                                        </div>
                                        <div className="text-xs text-white/50 space-y-0.5">
                                            <p>
                                                <span className="text-white/70">Dept:</span> {event.dept}
                                            </p>
                                            <p>
                                                <span className="text-white/70">Venue:</span>{" "}
                                                <span className="font-mono text-brand-300 font-semibold">
                                                    {event.venue}
                                                </span>
                                                {venue.type === "indoor" && venue.blockName && (
                                                    <span className="text-white/40">
                                                        {" "}
                                                        ({venue.blockName}, {venue.floorLabel})
                                                    </span>
                                                )}
                                            </p>
                                            <p>
                                                <span className="text-white/70">Time:</span> {event.time}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Events on Your Floor — appears AFTER search */}
                {floorEvents.length > 0 && !selectedEvent && (
                    <div className="glass rounded-2xl p-4 mb-6">
                        <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-white/50">
                            Events on Your Floor
                        </p>
                        <div className="space-y-2 max-h-[350px] overflow-y-auto">
                            {floorEvents.map((event, i) => (
                                <button
                                    key={`floor-${event.venue}-${event.name}-${i}`}
                                    onClick={() => handleSelectEvent(event)}
                                    className="w-full text-left glass rounded-xl p-3 hover:bg-white/10 transition"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-bold text-sm">{event.name}</span>
                                            <p className="text-xs text-white/50">
                                                {event.dept} · <span className="font-mono text-brand-300">{event.venue}</span> · {event.time}
                                            </p>
                                        </div>
                                        <span
                                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${event.type === "Technical"
                                                ? "bg-brand-500/20 text-brand-300"
                                                : "bg-amber-500/20 text-amber-300"
                                                }`}
                                        >
                                            {event.type}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Selected Event + Navigation */}
                {selectedEvent && (
                    <>
                        {/* Event Details Card */}
                        <div className="glass rounded-2xl p-5 mb-4">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-bold">{selectedEvent.name}</h3>
                                <button
                                    onClick={() => {
                                        setSelectedEvent(null);
                                        setNavSteps([]);
                                    }}
                                    className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 transition"
                                >
                                    Change
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-white/40 text-xs">Department</p>
                                    <p className="font-medium">{selectedEvent.dept}</p>
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Type</p>
                                    <p>
                                        <span
                                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${selectedEvent.type === "Technical"
                                                ? "bg-brand-500/20 text-brand-300"
                                                : "bg-amber-500/20 text-amber-300"
                                                }`}
                                        >
                                            {selectedEvent.type}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Venue</p>
                                    <p className="font-mono font-bold text-brand-300">
                                        {selectedEvent.venue}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Time</p>
                                    <p className="font-semibold">{selectedEvent.time}</p>
                                </div>
                                {destParsed && destParsed.type === "indoor" && (
                                    <>
                                        <div>
                                            <p className="text-white/40 text-xs">Block</p>
                                            <p>{destParsed.blockName}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-xs">Floor</p>
                                            <p>{destParsed.floorLabel}</p>
                                        </div>
                                    </>
                                )}
                                <div>
                                    <p className="text-white/40 text-xs">Coordinator</p>
                                    <p className="font-medium">{selectedEvent.coordinator}</p>
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Phone</p>
                                    <a
                                        href={`tel:${selectedEvent.phone}`}
                                        className="text-brand-300 font-medium"
                                    >
                                        {selectedEvent.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Steps */}
                        <div className="glass rounded-2xl p-5">
                            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                                    <CompassIcon className="w-5 h-5" />
                                </span>
                                Step-by-Step Directions
                            </h3>
                            <div className="space-y-3">
                                {navSteps.map((step, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold-light flex items-center justify-center text-xs font-bold text-black shrink-0 mt-0.5">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm text-white/80 pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="mt-5 pt-4 border-t border-white/10">
                                <div className="flex items-center justify-between text-sm">
                                    <div>
                                        <p className="text-white/40 text-xs">From</p>
                                        <p className="font-medium text-green-400">{location.label}</p>
                                    </div>
                                    <div className="text-2xl text-white/20">→</div>
                                    <div className="text-right">
                                        <p className="text-white/40 text-xs">To</p>
                                        <p className="font-medium text-brand-300">
                                            {selectedEvent.venue}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Empty state */}
                {query.trim().length >= 2 && results.length === 0 && (
                    <div className="glass rounded-2xl p-8 text-center">
                        <div className="text-4xl mb-3 text-white/30">?</div>
                        <p className="text-white/50 text-sm">
                            No events found for &quot;{query}&quot;
                        </p>
                        <p className="text-white/30 text-xs mt-1">
                            Try searching by event name, department, or room code
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function NavigatePage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-white/50">Loading navigation...</div>
                </div>
            }
        >
            <NavigateContent />
        </Suspense>
    );
}

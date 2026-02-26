/**
 * Navigation logic for Campus Navigator
 * Handles parsing QR locations, venue codes, and generating step-by-step directions.
 */

export interface ParsedLocation {
    type: "gate" | "indoor" | "outdoor";
    block?: string; // W, C, E
    blockName?: string;
    floor?: number;
    label: string;
}

export interface ParsedVenue {
    type: "indoor" | "outdoor";
    block?: string;
    blockName?: string;
    floor?: number;
    floorLabel?: string;
    room?: string;
    label: string;
}

const BLOCK_NAMES: Record<string, string> = {
    W: "West Block",
    C: "Center Block",
    E: "East Block",
};

const OUTDOOR_LOCATIONS: Record<string, string> = {
    auditorium: "Auditorium",
    conference: "Conference Hall",
    canteen: "Canteen",
    sports: "Sports Ground",
    ncc: "NCC Area",
};

function getFloorLabel(floor: number): string {
    if (floor === 0) return "Ground Floor";
    const suffixes = ["th", "st", "nd", "rd"];
    const suffix = suffixes[floor] || "th";
    return `${floor}${suffix} Floor`;
}

/**
 * Parse the "from" query parameter from the QR code URL.
 * Examples: "gate", "w0", "c4", "e2", "auditorium", "canteen"
 */
export function parseLocation(from: string): ParsedLocation {
    const f = from.toLowerCase().trim();

    // Gate
    if (f === "gate") {
        return { type: "gate", label: "Main Gate" };
    }

    // Indoor block+floor: w0, c1, e4, etc.
    const indoorMatch = f.match(/^([wce])(\d)$/);
    if (indoorMatch) {
        const block = indoorMatch[1].toUpperCase();
        const floor = parseInt(indoorMatch[2]);
        return {
            type: "indoor",
            block,
            blockName: BLOCK_NAMES[block],
            floor,
            label: `${BLOCK_NAMES[block]}, ${getFloorLabel(floor)}`,
        };
    }

    // Outdoor areas
    if (OUTDOOR_LOCATIONS[f]) {
        return {
            type: "outdoor",
            label: OUTDOOR_LOCATIONS[f],
        };
    }

    return { type: "gate", label: "Unknown Location" };
}

/**
 * Parse a venue string into a structured venue object.
 * Handles room codes like C405, W201, E003, EG08
 * and outdoor venues like "Auditorium", "Conference Hall", etc.
 */
export function parseVenueCode(venue: string): ParsedVenue {
    // Standard room code: C405, W201, E003
    const roomMatch = venue.match(/^([CEW])(\d)(\d{2})$/i);
    if (roomMatch) {
        const block = roomMatch[1].toUpperCase();
        const floor = parseInt(roomMatch[2]);
        return {
            type: "indoor",
            block,
            blockName: BLOCK_NAMES[block],
            floor,
            floorLabel: getFloorLabel(floor),
            room: roomMatch[3],
            label: `Room ${venue} (${BLOCK_NAMES[block]}, ${getFloorLabel(floor)})`,
        };
    }

    // Ground floor code: EG08, CG01
    const gfMatch = venue.match(/^([CEW])G(\d{2})$/i);
    if (gfMatch) {
        const block = gfMatch[1].toUpperCase();
        return {
            type: "indoor",
            block,
            blockName: BLOCK_NAMES[block],
            floor: 0,
            floorLabel: "Ground Floor",
            room: gfMatch[2],
            label: `Room ${venue} (${BLOCK_NAMES[block]}, Ground Floor)`,
        };
    }

    // Check for known outdoor venue keywords
    const v = venue.toLowerCase();
    if (v.includes("auditorium")) return { type: "outdoor", label: "Auditorium" };
    if (v.includes("conference")) return { type: "outdoor", label: "Conference Hall" };
    if (v.includes("canteen")) return { type: "outdoor", label: "Canteen" };
    if (v.includes("sports") || v.includes("ground") || v.includes("court") || v.includes("cricket") || v.includes("football") || v.includes("badminton") || v.includes("volley") || v.includes("kabaddi") || v.includes("kho") || v.includes("throw") || v.includes("basket") || v.includes("hand ball"))
        return { type: "outdoor", label: venue };
    if (v.includes("ncc") || v.includes("east block front"))
        return { type: "outdoor", label: "NCC Area (East Block Front)" };

    // Generic outdoor / lab
    return { type: "outdoor", label: venue };
}

/**
 * Generate step-by-step text navigation from a QR-scanned location to a destination venue.
 */
export function getNavigationSteps(
    from: string,
    destinationVenue: string
): string[] {
    const source = parseLocation(from);
    const dest = parseVenueCode(destinationVenue);
    const steps: string[] = [];

    // ── ALREADY AT DESTINATION CHECK ──
    // Outdoor → same outdoor venue (e.g. Auditorium QR → Auditorium event)
    if (
        source.type === "outdoor" &&
        dest.type === "outdoor" &&
        source.label.toLowerCase() === dest.label.toLowerCase()
    ) {
        steps.push(`You're already at the ${dest.label}! The event is right here.`);
        steps.push(`Look around — you've reached your destination.`);
        return steps;
    }

    // Indoor → same indoor block + floor
    if (
        source.type === "indoor" &&
        dest.type === "indoor" &&
        source.block === dest.block &&
        source.floor === dest.floor
    ) {
        steps.push(`You are already on the correct floor in ${source.blockName}.`);
        steps.push(`Walk along the corridor to Room ${destinationVenue}.`);
        return steps;
    }

    // Check if destination is the Auditorium or Canteen (route via West Block)
    const isAuditorium = dest.label.toLowerCase().includes("auditorium");
    const isCanteen = dest.label.toLowerCase().includes("canteen");

    // ── SPECIAL: Auditorium via West Block ──
    if (isAuditorium) {
        if (source.type === "gate") {
            steps.push("Enter the main building from the Main Gate.");
            steps.push("Head to the West Block.");
            steps.push("Go to the Ground Floor of West Block.");
            steps.push("Exit through the West Block rear/side exit.");
            steps.push("Walk towards the Auditorium from West Block.");
            steps.push("You have reached the Auditorium.");
        } else if (source.type === "indoor") {
            if (source.block === "W") {
                if (source.floor !== undefined && source.floor > 0) {
                    steps.push("Go down to the Ground Floor using stairs or lift.");
                }
                steps.push("Exit through the West Block rear/side exit.");
            } else {
                // In Center or East Block → move to West Block first
                if (source.floor !== undefined && source.floor > 0) {
                    steps.push("Go down to the Ground Floor using stairs or lift.");
                }
                steps.push(`Move through the corridor from ${source.blockName} to West Block.`);
                steps.push("Exit through the West Block rear/side exit.");
            }
            steps.push("Walk towards the Auditorium from West Block.");
            steps.push("You have reached the Auditorium.");
        } else {
            // Outdoor source
            steps.push("Walk towards the West Block.");
            steps.push("Walk towards the Auditorium from West Block.");
            steps.push("You have reached the Auditorium.");
        }
        return steps;
    }

    // ── SPECIAL: Canteen via West Block ──
    if (isCanteen) {
        if (source.type === "gate") {
            steps.push("Enter the main building from the Main Gate.");
            steps.push("Head to the West Block.");
            steps.push("Go to the Ground Floor of West Block.");
            steps.push("Exit through the West Block rear/side exit.");
            steps.push("Walk towards the Canteen from West Block.");
            steps.push("You have reached the Canteen.");
        } else if (source.type === "indoor") {
            if (source.block === "W") {
                if (source.floor !== undefined && source.floor > 0) {
                    steps.push("Go down to the Ground Floor using stairs or lift.");
                }
                steps.push("Exit through the West Block rear/side exit.");
            } else {
                // In Center or East Block → move to West Block first
                if (source.floor !== undefined && source.floor > 0) {
                    steps.push("Go down to the Ground Floor using stairs or lift.");
                }
                steps.push(`Move through the corridor from ${source.blockName} to West Block.`);
                steps.push("Exit through the West Block rear/side exit.");
            }
            steps.push("Walk towards the Canteen from West Block.");
            steps.push("You have reached the Canteen.");
        } else {
            // Outdoor source
            steps.push("Walk towards the West Block.");
            steps.push("Walk towards the Canteen from West Block.");
            steps.push("You have reached the Canteen.");
        }
        return steps;
    }

    // ── CASE 1: Gate to Indoor ──
    if (source.type === "gate" && dest.type === "indoor") {
        steps.push("Enter the main building from the Main Gate.");
        steps.push(`Walk to the ${dest.blockName}.`);
        if (dest.floor !== undefined && dest.floor > 0) {
            steps.push(`Take the stairs or lift to the ${dest.floorLabel}.`);
        } else {
            steps.push("Stay on the Ground Floor.");
        }
        steps.push(`Walk along the corridor to find Room ${destinationVenue}.`);
        steps.push(`You have reached Room ${destinationVenue} (${dest.blockName}, ${dest.floorLabel}).`);
        return steps;
    }

    // ── CASE 2: Gate to Outdoor ──
    if (source.type === "gate" && dest.type === "outdoor") {
        steps.push(`From the Main Gate, walk towards the ${dest.label}.`);
        steps.push(`You will reach ${dest.label}.`);
        return steps;
    }

    // ── CASE 3: Indoor to Indoor ──
    if (source.type === "indoor" && dest.type === "indoor") {
        const sameBlock = source.block === dest.block;
        const sameFloor = source.floor === dest.floor;

        if (sameBlock && sameFloor) {
            steps.push(`You are already on the correct floor in ${source.blockName}.`);
            steps.push(`Walk along the corridor to Room ${destinationVenue}.`);
        } else if (sameBlock && !sameFloor) {
            if (dest.floor !== undefined && dest.floor > (source.floor || 0)) {
                steps.push(`Take the stairs or lift up to the ${dest.floorLabel}.`);
            } else {
                steps.push(`Take the stairs or lift down to the ${dest.floorLabel}.`);
            }
            steps.push(`Walk along the corridor to Room ${destinationVenue}.`);
            steps.push(`You have reached Room ${destinationVenue} (${dest.blockName}, ${dest.floorLabel}).`);
        } else {
            if (source.floor !== undefined && source.floor > 0) {
                steps.push("Go down to the Ground Floor using stairs or lift.");
            }
            steps.push(`Walk through the corridor from ${source.blockName} to ${dest.blockName}.`);
            if (dest.floor !== undefined && dest.floor > 0) {
                steps.push(`Take the stairs or lift to the ${dest.floorLabel}.`);
            }
            steps.push(`Walk along the corridor to Room ${destinationVenue}.`);
            steps.push(`You have reached Room ${destinationVenue} (${dest.blockName}, ${dest.floorLabel}).`);
        }
        return steps;
    }

    // ── CASE 4: Indoor to Outdoor ──
    if (source.type === "indoor" && dest.type === "outdoor") {
        if (source.floor !== undefined && source.floor > 0) {
            steps.push("Go down to the Ground Floor using stairs or lift.");
        }
        steps.push("Exit the main building.");
        steps.push(`Walk towards ${dest.label}.`);
        steps.push(`You have reached ${dest.label}.`);
        return steps;
    }

    // ── CASE 5: Outdoor to Indoor ──
    if (source.type === "outdoor" && dest.type === "indoor") {
        steps.push("Walk through the West Block entrance.");
        if (dest.block !== "W") {
            steps.push(`Walk through the corridor from West Block to ${dest.blockName}.`);
        }
        if (dest.floor !== undefined && dest.floor > 0) {
            steps.push(`Take the stairs or lift to the ${dest.floorLabel}.`);
        }
        steps.push(`Walk along the corridor to Room ${destinationVenue}.`);
        steps.push(`You have reached Room ${destinationVenue} (${dest.blockName}, ${dest.floorLabel}).`);
        return steps;
    }

    // ── CASE 6: Outdoor to Outdoor ──
    if (source.type === "outdoor" && dest.type === "outdoor") {
        steps.push(`From ${source.label}, walk towards ${dest.label}.`);
        steps.push(`You will reach ${dest.label}.`);
        return steps;
    }

    steps.push(`Head to ${dest.label}.`);
    return steps;
}
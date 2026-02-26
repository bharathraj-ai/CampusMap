export interface Event {
    dept: string;
    name: string;
    type: "Technical" | "Non-Technical";
    time: string;
    venue: string;
    coordinator: string;
    phone: string;
    faculty: string;
}

export const events: Event[] = [
    // ── AERO ──
    { dept: "AERO", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "E105", coordinator: "Thapasya Muthanna K", phone: "7795689554", faculty: "Mr.S.L.Pradeep Kumar" },
    { dept: "AERO", name: "Technical Quiz", type: "Technical", time: "09:30 AM", venue: "E101", coordinator: "Adwaith Biju", phone: "8590352741", faculty: "Mr.S.L.Pradeep Kumar" },
    { dept: "AERO", name: "Water Rocketry", type: "Technical", time: "09:30 AM", venue: "Near Hand Ball Ground", coordinator: "Loga Prathap", phone: "6382065674", faculty: "Mr.S.L.Pradeep Kumar" },
    { dept: "AERO", name: "Brain OH Bunch", type: "Non-Technical", time: "09:30 AM", venue: "E102", coordinator: "Abisri R", phone: "8610717501", faculty: "Mr.S.L.Pradeep Kumar" },
    { dept: "AERO", name: "E-Arena", type: "Non-Technical", time: "09:30 AM", venue: "E103", coordinator: "Kumaran U", phone: "9345342934", faculty: "Mr.S.L.Pradeep Kumar" },

    // ── AGRI ──
    { dept: "AGRI", name: "Project Expo", type: "Technical", time: "09:30 AM", venue: "C204", coordinator: "Tamizharasu A", phone: "7810068278", faculty: "Ms.R.Vennila" },
    { dept: "AGRI", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "C206", coordinator: "Karthik T", phone: "6385534759", faculty: "Ms.R.Vennila" },
    { dept: "AGRI", name: "Minute To Win It", type: "Technical", time: "09:30 AM", venue: "C205", coordinator: "Allwin Winny JP", phone: "9384405848", faculty: "Ms.R.Vennila" },
    { dept: "AGRI", name: "Fireless Cooking", type: "Non-Technical", time: "09:30 AM", venue: "Agri Lab", coordinator: "Gopinath A", phone: "7010264359", faculty: "Ms.R.Vennila" },
    { dept: "AGRI", name: "Reels Making", type: "Non-Technical", time: "09:30 AM", venue: "Agri Lab", coordinator: "P.Darvin", phone: "9360370893", faculty: "Ms.R.Vennila" },

    // ── AI&DS ──
    { dept: "AI&DS", name: "Technical Quiz", type: "Technical", time: "09:30 AM", venue: "C405", coordinator: "K.V.Keerthika", phone: "7550048676", faculty: "Ms.K.Aarthi" },
    { dept: "AI&DS", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "C405", coordinator: "S.Sanjaikumar", phone: "9500488817", faculty: "Ms.K.Aarthi" },
    { dept: "AI&DS", name: "Logical Rivera", type: "Non-Technical", time: "09:30 AM", venue: "C405", coordinator: "S.Bhavadharani", phone: "9042204369", faculty: "Ms.K.Aarthi" },
    { dept: "AI&DS", name: "E-Gaming", type: "Non-Technical", time: "09:30 AM", venue: "C405", coordinator: "R.Shivaram", phone: "6382097510", faculty: "Ms.K.Aarthi" },

    // ── BME ──
    { dept: "BME", name: "Project Expo", type: "Technical", time: "09:30 AM", venue: "E408", coordinator: "Nancy Amalarani", phone: "9345317703", faculty: "Mrs.Tryphena" },
    { dept: "BME", name: "Idea Sprint", type: "Technical", time: "09:30 AM", venue: "C405", coordinator: "Manish Dharshini", phone: "8610220425", faculty: "Mrs.Tryphena" },
    { dept: "BME", name: "Technical Quiz", type: "Technical", time: "09:30 AM", venue: "C401", coordinator: "Veerabharathi", phone: "8148398535", faculty: "Mrs.Tryphena" },
    { dept: "BME", name: "Rebus", type: "Non-Technical", time: "09:30 AM", venue: "C405", coordinator: "Monika S", phone: "6383115753", faculty: "Mrs.Tryphena" },
    { dept: "BME", name: "Bizarre (Free Fire)", type: "Non-Technical", time: "09:30 AM", venue: "C401", coordinator: "Suriya", phone: "7603829719", faculty: "Mrs.Tryphena" },

    // ── BIOTECH ──
    { dept: "BIOTECH", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "C202", coordinator: "Manoj K", phone: "8148006876", faculty: "Ms.Kamali M L" },
    { dept: "BIOTECH", name: "Project Expo", type: "Technical", time: "09:30 AM", venue: "Biotech Lab", coordinator: "Boopathi P", phone: "9597151241", faculty: "Ms.Kamali M L" },
    { dept: "BIOTECH", name: "BioPuzzle", type: "Technical", time: "09:30 AM", venue: "C201", coordinator: "Allwin Felix S", phone: "6379838732", faculty: "Ms.Kamali M L" },
    { dept: "BIOTECH", name: "Connections", type: "Non-Technical", time: "09:30 AM", venue: "C202", coordinator: "Pooja G", phone: "8248236650", faculty: "Ms.Kamali M L" },
    { dept: "BIOTECH", name: "Fun Finity", type: "Non-Technical", time: "09:30 AM", venue: "C201", coordinator: "Vishal N", phone: "9514200592", faculty: "Ms.Kamali M L" },

    // ── CSE & Cyber ──
    { dept: "CSE & Cyber", name: "Technical Quiz", type: "Technical", time: "09:30 AM", venue: "E308", coordinator: "Chidabaram", phone: "9345339537", faculty: "Mr.Vijayarajasekaran" },
    { dept: "CSE & Cyber", name: "Project Expo", type: "Technical", time: "09:30 AM", venue: "E305", coordinator: "Raja Ganapathy", phone: "7010492023", faculty: "Mr.Vijayarajasekaran" },
    { dept: "CSE & Cyber", name: "Spot the Bot", type: "Technical", time: "09:30 AM", venue: "E310", coordinator: "Harrison", phone: "9025270755", faculty: "Mr.Vijayarajasekaran" },
    { dept: "CSE & Cyber", name: "Theme Photography", type: "Non-Technical", time: "10:30 AM", venue: "C312", coordinator: "Bhuvaneshwaran", phone: "9488529623", faculty: "Mr.Vijayarajasekaran" },
    { dept: "CSE & Cyber", name: "Free Fire", type: "Non-Technical", time: "09:30 AM", venue: "E301", coordinator: "Kanaga Surya Kumaran", phone: "9597984399", faculty: "Mr.Vijayarajasekaran" },

    // ── CSBS ──
    { dept: "CSBS", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "C301", coordinator: "Devanya S", phone: "9042741849", faculty: "Mr.V.Surya" },
    { dept: "CSBS", name: "Project Expo", type: "Technical", time: "09:30 AM", venue: "C304", coordinator: "Syfudeen", phone: "9042649307", faculty: "Mr.V.Surya" },
    { dept: "CSBS", name: "Code Craft", type: "Technical", time: "09:30 AM", venue: "W309", coordinator: "Ragavi A", phone: "7092030036", faculty: "Mr.V.Surya" },
    { dept: "CSBS", name: "Come Play Confuse", type: "Non-Technical", time: "09:30 AM", venue: "C305", coordinator: "Harthi S", phone: "9092308408", faculty: "Mr.V.Surya" },
    { dept: "CSBS", name: "BizNxt", type: "Non-Technical", time: "09:30 AM", venue: "C302", coordinator: "Rudresh M", phone: "8825850175", faculty: "Mr.V.Surya" },

    // ── ECE ──
    { dept: "ECE", name: "Project Expo", type: "Technical", time: "09:30 AM", venue: "W316", coordinator: "Mohammed Athipkhan", phone: "9994273129", faculty: "Mr.P.Balasubramani" },
    { dept: "ECE", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "W401", coordinator: "Karthik Sanjay", phone: "9600587330", faculty: "Mr.P.Balasubramani" },
    { dept: "ECE", name: "Circuit Debugging", type: "Technical", time: "09:30 AM", venue: "W409", coordinator: "Karthikeyan", phone: "9677874557", faculty: "Mr.P.Balasubramani" },
    { dept: "ECE", name: "IPL Auction", type: "Non-Technical", time: "09:30 AM", venue: "W409", coordinator: "Aswath", phone: "6381520046", faculty: "Mr.P.Balasubramani" },
    { dept: "ECE", name: "E-Football", type: "Non-Technical", time: "09:30 AM", venue: "W404", coordinator: "Jude", phone: "9150221017", faculty: "Mr.P.Balasubramani" },

    // ── EEE ──
    { dept: "EEE", name: "Project Expo", type: "Technical", time: "09:30 AM", venue: "E202", coordinator: "Harshan S P", phone: "6379011674", faculty: "Mr.K.Pradheep" },
    { dept: "EEE", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "E201", coordinator: "Pradeepa S", phone: "8675062658", faculty: "Mr.K.Pradheep" },
    { dept: "EEE", name: "Quiz Sprint", type: "Technical", time: "09:30 AM", venue: "E217", coordinator: "Banupriya V", phone: "9345887036", faculty: "Mr.K.Pradheep" },
    { dept: "EEE", name: "Free Fire", type: "Non-Technical", time: "10:30 AM", venue: "E217", coordinator: "Aswin S", phone: "6385366682", faculty: "Mr.K.Pradheep" },
    { dept: "EEE", name: "Doodle Detective", type: "Non-Technical", time: "10:30 AM", venue: "E204", coordinator: "Karthieswaran M", phone: "8807838745", faculty: "Mr.K.Pradheep" },

    // ── MECH ──
    { dept: "MECH", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "W301", coordinator: "Joyal Christ A", phone: "9489312877", faculty: "Mr.C.Ramkumar" },
    { dept: "MECH", name: "Project Expo", type: "Technical", time: "09:30 AM", venue: "FM Lab", coordinator: "S.Mohan Kumar", phone: "9952699874", faculty: "Mr.C.Ramkumar" },
    { dept: "MECH", name: "CAD Modelling", type: "Technical", time: "09:30 AM", venue: "EG08", coordinator: "Sathya Prakash B", phone: "9345555069", faculty: "Mr.C.Ramkumar" },
    { dept: "MECH", name: "Garena", type: "Non-Technical", time: "10:30 AM", venue: "W304", coordinator: "Gokul Kannan S", phone: "9361297190", faculty: "Mr.C.Ramkumar" },
    { dept: "MECH", name: "Art of Aperture", type: "Non-Technical", time: "10:30 AM", venue: "W302", coordinator: "Ashik Reejan A", phone: "6381787453", faculty: "Mr.C.Ramkumar" },

    // ── CSE (AI&ML) ──
    { dept: "CSE (AI&ML)", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "C310", coordinator: "Sukant", phone: "9894600278", faculty: "Mr.S.Deepan" },
    { dept: "CSE (AI&ML)", name: "Tech Fusion Quest", type: "Technical", time: "09:30 AM", venue: "C309", coordinator: "Ajitha", phone: "6369098982", faculty: "Mr.S.Deepan" },
    { dept: "CSE (AI&ML)", name: "Mind Snap", type: "Non-Technical", time: "09:30 AM", venue: "C309", coordinator: "Mageshwari", phone: "6379793292", faculty: "Mr.S.Deepan" },
    { dept: "CSE (AI&ML)", name: "Freefire Battle", type: "Non-Technical", time: "09:00 AM", venue: "C310", coordinator: "Ethukrishna", phone: "7598514923", faculty: "Mr.S.Deepan" },
    { dept: "CSE (AI&ML)", name: "Lens & Motion", type: "Non-Technical", time: "09:00 AM", venue: "C312", coordinator: "Deepak", phone: "9952637954", faculty: "Mr.S.Deepan" },

    // ── MBA ──
    { dept: "MBA", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "W102", coordinator: "Mithra T N", phone: "7708003990", faculty: "Dr.K.Vimala" },
    { dept: "MBA", name: "AD Zap", type: "Technical", time: "09:30 AM", venue: "E108", coordinator: "Naresh R", phone: "8508330274", faculty: "Dr.K.Vimala" },
    { dept: "MBA", name: "Best Manager", type: "Technical", time: "09:30 AM", venue: "W103", coordinator: "Sherly S", phone: "9952391407", faculty: "Dr.K.Vimala" },
    { dept: "MBA", name: "Business Plan Dev", type: "Technical", time: "09:30 AM", venue: "E102", coordinator: "Adhithyan Sunil", phone: "7904409396", faculty: "Dr.K.Vimala" },
    { dept: "MBA", name: "Brand in a Brush", type: "Technical", time: "09:30 AM", venue: "E103", coordinator: "Kaviyarasu B", phone: "9345589261", faculty: "Dr.K.Vimala" },

    // ── MCA ──
    { dept: "MCA", name: "Paper Presentation", type: "Technical", time: "09:30 AM", venue: "W104", coordinator: "Kamalesh M", phone: "8838979535", faculty: "Ms.M.Umamaheswari" },
    { dept: "MCA", name: "Technical Quiz", type: "Technical", time: "09:30 AM", venue: "W107", coordinator: "Akash R", phone: "8508428537", faculty: "Ms.M.Umamaheswari" },
    { dept: "MCA", name: "Debugging", type: "Technical", time: "09:30 AM", venue: "E110", coordinator: "Siva P", phone: "9629282712", faculty: "Ms.M.Umamaheswari" },
    { dept: "MCA", name: "Connections", type: "Non-Technical", time: "09:30 AM", venue: "W104", coordinator: "Dhanvanthri S", phone: "9791548001", faculty: "Ms.M.Umamaheswari" },

    // ── NCC ──
    { dept: "NCC", name: "Drill", type: "Non-Technical", time: "10:00 AM", venue: "East Block Front Side", coordinator: "S Dinesh", phone: "8778831518", faculty: "Lt.M.Dinesh" },
    { dept: "NCC", name: "Flag Area", type: "Non-Technical", time: "10:00 AM", venue: "East Block Front Road", coordinator: "Sowmiya", phone: "9952101580", faculty: "Lt.M.Dinesh" },
    { dept: "NCC", name: "Tent Pitching", type: "Non-Technical", time: "10:00 AM", venue: "East Block Front Sand Area", coordinator: "S Sivasian", phone: "9787005738", faculty: "Lt.M.Dinesh" },

    // ── Culturals ──
    { dept: "Culturals", name: "Dance", type: "Non-Technical", time: "10:00 AM", venue: "Auditorium", coordinator: "Yuvan Shankar S R", phone: "9094853407", faculty: "Dr.Kalpana / Dr.Nithya / Dr.Geetha" },
    { dept: "Culturals", name: "Music", type: "Non-Technical", time: "10:30 AM", venue: "Auditorium", coordinator: "Martin Babu", phone: "7695873020", faculty: "Dr.Kalpana / Dr.Nithya / Dr.Geetha" },
    { dept: "Culturals", name: "Mime", type: "Non-Technical", time: "10:30 AM", venue: "Auditorium", coordinator: "Akshaya", phone: "8148736767", faculty: "Dr.Kalpana / Dr.Nithya / Dr.Geetha" },
    { dept: "Culturals", name: "Adapt Tune", type: "Non-Technical", time: "10:30 AM", venue: "Auditorium", coordinator: "Nandhini", phone: "8270994185", faculty: "Dr.Kalpana / Dr.Nithya / Dr.Geetha" },
    { dept: "Culturals", name: "Reels Making", type: "Non-Technical", time: "10:30 AM", venue: "Conference Hall", coordinator: "Rithish", phone: "8300288522", faculty: "Dr.Kalpana / Dr.Nithya / Dr.Geetha" },

    // ── Sports ──
    { dept: "Sports", name: "Ball Badminton (Men)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Ball Badminton Court", coordinator: "Krithik", phone: "8122858679", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Ball Badminton (Women)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Ball Badminton Court", coordinator: "Nikritha", phone: "7418970774", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Basket Ball (Men)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Basket Ball Court", coordinator: "Bastin Jose", phone: "9344809589", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Basket Ball (Women)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Basket Ball Court", coordinator: "Subashini", phone: "8940719405", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Cricket (Men)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Cricket Ground", coordinator: "Karthick", phone: "7904132319", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Foot Ball (Men)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Foot Ball Ground", coordinator: "Vignesh Kumar N", phone: "7708225919", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Hand Ball (Men)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Hand Ball Court", coordinator: "Vijayaragavan", phone: "7548872607", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Kabaddi (Men)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Kabaddi Court", coordinator: "Gavrav", phone: "8489549405", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Kho-Kho (Men)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Kho-Kho Court", coordinator: "Vignesh", phone: "9489251910", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Table Tennis (Men)", type: "Non-Technical", time: "08:30 AM", venue: "West Block", coordinator: "Godson Joel", phone: "7639472242", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Table Tennis (Women)", type: "Non-Technical", time: "08:30 AM", venue: "West Block", coordinator: "Tanushree", phone: "9489189586", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Throw Ball (Women)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Throw Ball Court", coordinator: "Manjula", phone: "9790671983", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Volley Ball (Men)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Volley Ball Court", coordinator: "Akshai Kannaa", phone: "8807674022", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
    { dept: "Sports", name: "Volley Ball (Women)", type: "Non-Technical", time: "08:30 AM", venue: "KIT Volley Ball Court", coordinator: "Hepsiba Rosiline", phone: "9361541168", faculty: "Mr.A.Jayaprakash / Mr.K.Jeganathan" },
];

/**
 * Search events by name (case-insensitive fuzzy match)
 */
export function searchEvents(query: string): Event[] {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return events.filter(
        (e) =>
            e.name.toLowerCase().includes(q) ||
            e.dept.toLowerCase().includes(q) ||
            e.venue.toLowerCase().includes(q)
    );
}

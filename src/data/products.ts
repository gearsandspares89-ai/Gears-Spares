import { Product } from '../types';

export const BRAND_LOGO = "/assets/logo.svg";

export const MAP_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAFfMSCTOJBK4b2fxHcfZyDdyL8O319PvuYySZzp2BPh7CbAJ9VevHK8obEsuB-mEBWdiccnU4ocsxy0PVyWM5ub1Pl07VJabApcQPKvihA-F49HyxvuQru6YUYwdQn56VlazgQxNc9VyNNuqDTYO8U1iuzr0UF2GNob1vqYQMOWVQ1fqAhWShKTQ70wPQpa1Nonsw3hBtn4bjynV7Dc-xvRR-1q5n6eUcYpfv8Y-Xn1Xp4t-kucjC7fA";

export const WHATSAPP_NUMBER = "9108981112228";
export const DISPLAY_PHONE = "+91 08981112228";

export const STORE_NAME = "Gears and Spares";
export const STORE_EMAIL = "gearsandspares89@gmail.com";
export const STORE_CITY = "Kolkata";
export const STORE_ADDRESS = "Gears and Spares, 740A, Thakurpukur Rd, New Park, Thakurpukur, Kolkata, West Bengal 700063";
export const STORE_LANDMARK = "New Park, Bacharpara";
export const STORE_PIN = "700063";
export const STORE_LAT = 22.46241046929573;
export const STORE_LNG = 88.3041387227426;
export const STORE_COORDINATES = "22.46241046929573, 88.3041387227426";
export const STORE_COORDINATES_DISPLAY = "22.462410° N, 88.304139° E";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Gears+and+Spares+Thakurpukur+Kolkata";
export const GOOGLE_MAPS_EMBED_URL = "https://maps.google.com/maps?q=Gears+and+Spares,+Thakurpukur,+Kolkata&t=&z=17&ie=UTF8&iwloc=&output=embed";
export const STORE_OPERATING_HOURS = "Monday – Sunday: 09:30 AM – 10:00 PM IST";
export const STORE_HOURS_DISPLAY = "09:30 AM – 10:00 PM IST (No Weekly Off)";

export const PRODUCTS: Product[] = [
  {
    id: "studds-professional-d2-decor",
    name: "Studds Professional D2 Decor",
    category: "studds",
    secondaryCategories: ["all", "studds", "helmets", "steelbird-full"],
    brand: "Studds",
    type: "Full Face",
    badge: "Best Seller",
    badgeType: "best-seller",
    certBadge: "ISI: 4151 + DOT",
    inStock: true,
    stockCount: 8,
    description: "High impact outer shell, UV resistant paint finish, regulated density EPS, hypoallergenic inner liner.",
    features: [
      "Aerodynamic composite shell with regulated EPS foam",
      "Dynamic ventilation system with chin and top extractors",
      "Hypoallergenic, easily removable and washable inner padding",
      "Scratch resistant polycarbonate optical visor with quick release"
    ],
    price: 1690,
    originalPrice: 1999,
    savingsBadge: "SAVE ₹309",
    tags: ["570mm", "580mm", "600mm"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDGt8DA5rEs1780Df7EgKc74DC0lial44a0eYZcrP05pH-raLB9vKI7TQQ7oka7Tjp8lPCNGcd4wgHj0dJb2vL3sE1RFTPXWnVqa4UBA5liiPhUSWmITBDCnF5S4x2I5lYMiWk9wl9ozm3uqo1mywvHsc6-BnMODTC-RKeq4_DCrhpvNlcah3bxAWYcvxsh5AVca11nDvsIPMDZBQavBphHxU2UGoCK4mHayf69VC8bgOdMaxysg60Xg",
    imageAlt: "Studds Professional D2 Decor aerodynamic full face motorcycle helmet in blue and black",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Glossy Blue & Black", hex: "#1e3a8a" },
      { name: "Matt Black & Red", hex: "#991b1b" },
      { name: "Anthracite Grey", hex: "#4b5563" }
    ],
    specifications: {
      "Weight": "1350 ± 50g",
      "Certification": "ISI 4151 & DOT Approved",
      "Shell Material": "High Impact Engineering Thermoplastic",
      "Buckle": "Micrometric Quick Release"
    }
  },
  {
    id: "steelbird-sb45-flip-up-glossy",
    name: "Steelbird SB-45 Flip-Up Glossy",
    category: "steelbird-flip",
    secondaryCategories: ["all", "steelbird-flip", "helmets", "steelbird-full"],
    brand: "Steelbird",
    type: "Flip Up",
    badge: "Hot Pick",
    badgeType: "hot-pick",
    certBadge: "ISI Certified",
    inStock: true,
    stockCount: 14,
    description: "Single-button flip operation, polycarbonate anti-scratch visor, air dynamic chin vents, quick release buckle.",
    features: [
      "Smooth single-button metal ratchet flip mechanism",
      "Italian design styling with high impact ABS shell",
      "Odorless antibacterial liner with sweat wicking fabric",
      "UV coated high-clarity optical grade shield"
    ],
    price: 1549,
    originalPrice: 1799,
    savingsBadge: "MRP OFFER",
    tags: ["Glossy Red", "Desert Storm", "Battle Green"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8GCiS9XcGHlyIBvGzw_Uj3wnJ8JE2EgUghFJ4pidqlpy5Krl4c9J7hp_PHst-VUV-OKNw6XVCj4dYcNyxV-Hs6A7mbICSGh9KBGL1n0vN1abkoJjNnvbHpxJUqDOiZ2xNHJDFtiKRCuZ-Il7wuyb-iLaVOAtn6O6FbURypLHj9tEGdMYJ_-4jzUkj2D_qOS4LbnSAXCf8S2R0f0mt0BxtRLPrNhrdVxegQM42rvzdGsA5sXnVgJl1OQ",
    imageAlt: "Steelbird SB-45 Flip Up Glossy motorcycle helmet in deep racing red finish",
    sizes: ["580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Glossy Racing Red", hex: "#dc2626" },
      { name: "Desert Storm Tan", hex: "#ca8a04" },
      { name: "Battle Green Army", hex: "#3f6212" }
    ],
    specifications: {
      "Weight": "1450 ± 50g",
      "Mechanism": "Single Button Modular Flip-Up",
      "Visor": "Polycarbonate Anti-Scratch",
      "Safety Cert": "ISI:4151 Certified"
    }
  },
  {
    id: "ignyte-ign58-solid-deep-green",
    name: "Ignyte IGN-58 Solid Deep Green",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "DOT + ISI",
    badgeType: "dot",
    certBadge: "EPP Liner",
    inStock: true,
    stockCount: 8,
    description: "Deep Green edition with shock-buffering EPP energy absorber liner, hand-stitched leather cushions, and dual DOT FMVSS No. 218 & ISI safety standards.",
    features: [
      "Expanded Polypropylene (EPP) multi-impact shock buffer",
      "Hand-stitched genuine leather trim and neck-roll",
      "Dual homologated DOT FMVSS No. 218 and ISI:4151 certified",
      "Ultra-wide peripheral vision port with goggle strap holder"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Deep Green", "Matt & Glossy", "DOT Certified"],
    image: "/assets/images/ignyte_green_helmet_1789712482292.jpg",
    imageAlt: "Ignyte IGN-58 solid deep green open face helmet with leather lining",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Deep Green Matt", hex: "#1e3a29" },
      { name: "Deep Green Glossy", hex: "#14452f" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Shell Material": "High Impact Engineering Thermoplastic",
      "Liner": "Energy Absorber EPP & Leather Cushion",
      "Weight": "1150 ± 50g",
      "Buckle": "Rapid Micrometric Quick Release",
      "Ideal For": "Cruiser, Cafe Racer, Royal Enfield Classic & Hunter"
    }
  },
  {
    id: "ignyte-ign58-solid-armada-blue",
    name: "Ignyte IGN-58 Solid Armada Blue",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Oceanic Navy",
    badgeType: "popular",
    certBadge: "EPP Liner",
    inStock: true,
    stockCount: 7,
    description: "Armada Blue edition featuring deep naval hue, handcrafted vintage leather cushions, high-impact composite shell, and DOT FMVSS certification.",
    features: [
      "Expanded Polypropylene (EPP) high-density impact liner",
      "Armada Blue UV-resistant coated finish (Matt & Glossy)",
      "Contoured cheek pads with sweat-wicking leatherette",
      "DOT FMVSS No. 218 & ISI certified road legal safety"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Armada Blue", "Leather Trim", "DOT Spec"],
    image: "/assets/images/armada_blue_helmet_1789712503151.jpg",
    imageAlt: "Ignyte IGN-58 solid armada blue open face helmet with vintage leather trim",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Armada Blue Matt", hex: "#1e2d42" },
      { name: "Armada Blue Glossy", hex: "#1a365d" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Shell Material": "High Impact Engineering Thermoplastic",
      "Liner": "EPP Energy Absorber Foam",
      "Weight": "1150 ± 50g",
      "Buckle": "Micrometric One-Touch Buckle",
      "Fit": "Ergonomic Cafe Racer & Cruiser Fit"
    }
  },
  {
    id: "ignyte-ign58-solid-chestnut-red",
    name: "Ignyte IGN-58 Solid Dull Chestnut Red",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Vintage Wine",
    badgeType: "vintage",
    certBadge: "DOT Spec",
    inStock: true,
    stockCount: 5,
    description: "Rich dull chestnut red tone paired with vintage tan leather cushions and EPP multi-impact shock absorbing liner for retro cruisers.",
    features: [
      "Dull Chestnut Red vintage pigment with satin topcoat",
      "Energy Absorber EPP high-rebound liner core",
      "Rear goggle retention strap with metal snap button",
      "DOT FMVSS No. 218 dual-certified ISI:4151 safety"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Chestnut Red", "Hand-Stitched", "Cafe Racer"],
    image: "/assets/images/chestnut_red_helmet_1789712517522.jpg",
    imageAlt: "Ignyte IGN-58 solid dull chestnut red open face helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Chestnut Red Matt", hex: "#6b2121" },
      { name: "Chestnut Red Glossy", hex: "#7f1d1d" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Interior": "Genuine leather trim and neck-roll cushion",
      "Liner": "Expanded Polypropylene (EPP) Core",
      "Weight": "1150 ± 50g",
      "Locking": "Precision Micrometric Ratchet"
    }
  },
  {
    id: "ignyte-ign58-solid-dull-slate",
    name: "Ignyte IGN-58 Solid Dull Slate",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Tactical Slate",
    badgeType: "hot-pick",
    certBadge: "EPP Shell",
    inStock: true,
    stockCount: 9,
    description: "Industrial minimalist dull slate grey finish with handcrafted leather padding, EPP multi-impact buffer, and DOT safety certification.",
    features: [
      "Tactical dull slate cement tone in Matt and Glossy coats",
      "Multi-density EPP energy absorbing inner core",
      "Anti-allergic treated fabric lining with leather accents",
      "High velocity impact-tested shell structure"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Dull Slate", "Urban Cruiser", "EPP Foam"],
    image: "/assets/images/dull_slate_helmet_1789712590056.jpg",
    imageAlt: "Ignyte IGN-58 solid dull slate open face helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Dull Slate Matt", hex: "#475569" },
      { name: "Dull Slate Glossy", hex: "#334155" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Shell": "Engineered ABS Composite",
      "Liner": "EPP Energy Buffer",
      "Weight": "1150 ± 50g",
      "Compatibility": "Universal Cruiser, Street & Cafe Racer"
    }
  },
  {
    id: "ignyte-ign58-solid-redditch-blue",
    name: "Ignyte IGN-58 Solid Redditch Blue",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Heritage Blue",
    badgeType: "popular",
    certBadge: "DOT Spec",
    inStock: true,
    stockCount: 8,
    description: "Heritage Redditch Blue edition inspired by classic Royal Enfield colorways. Premium leatherette cushions and DOT certified EPP core.",
    features: [
      "Iconic Redditch Blue heritage finish (Glossy & Matt)",
      "Engineered EPP liner for repeated shock attenuation",
      "Reinforced chin strap with metal quick-release clasp",
      "ISI:4151 and DOT FMVSS No. 218 dual road safety certification"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Redditch Blue", "RE Edition", "DOT FMVSS"],
    image: "/assets/images/redditch_blue_helmet_1789712608882.jpg",
    imageAlt: "Ignyte IGN-58 solid redditch blue open face helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Redditch Blue Glossy", hex: "#1d4ed8" },
      { name: "Redditch Blue Matt", hex: "#2563eb" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Finish Type": "Glossy Polyurethane & Matt",
      "Liner": "EPP Shock Absorber with Leatherette",
      "Weight": "1150 ± 50g",
      "Retention": "Quick-Release Micro Ratchet"
    }
  },
  {
    id: "ignyte-ign58-solid-white-glossy",
    name: "Ignyte IGN-58 Solid White Glossy",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Pearl Gloss",
    badgeType: "popular",
    certBadge: "UV Polyurethane",
    inStock: true,
    stockCount: 10,
    description: "Pure alpine glossy white shell with tan leather interior trim, high gloss UV protective topcoat, and DOT certified EPP liner.",
    features: [
      "Triple-layer glossy white polyurethane UV-resistant finish",
      "High-contrast tan genuine leather trim and neck pad",
      "Wide field-of-view design compatible with riding shades and goggles",
      "DOT FMVSS No. 218 and ISI:4151 certified"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Glossy White", "Tan Interior", "ISI Certified"],
    image: "/assets/images/white_glossy_helmet_1789712623407.jpg",
    imageAlt: "Ignyte IGN-58 solid white glossy open face helmet with tan leather trim",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Glossy Alpine White", hex: "#f8fafc" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Topcoat": "Non-yellowing UV Polyurethane Gloss",
      "Liner": "EPP Energy Absorber Foam",
      "Weight": "1150 ± 50g",
      "Fitment": "Standard Oval Headform"
    }
  },
  {
    id: "ignyte-ign58-solid-black",
    name: "Ignyte IGN-58 Solid Black",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "DOT Spec",
    badgeType: "dot",
    certBadge: "EPP Liner",
    inStock: true,
    stockCount: 12,
    description: "Equipped with advanced Energy Absorber EPP liner, handcrafted vintage leather cushions, and dual DOT FMVSS No. 218 and ISI certification.",
    features: [
      "Expanded Polypropylene (EPP) multi-impact shock buffer",
      "Hand-stitched genuine leather trim interior",
      "Dual homologated DOT FMVSS No. 218 and ISI safety",
      "Ultra-wide peripheral vision port"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Matt Raven", "Piano Glossy", "DOT Valid"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVNz3atn1lOMlvrTUrx7fQB5_cU6l3hy8Z9fAO86z3oOQmErsSVRE_n3YAbUrrmrYa0P-4XR2ZJk8doYqibJAgPB-hw6iS6rUMjuV9salYX0CKfmxrNffifEfciBhSQQcGRoOXGedN_Q2TgUtYkQg6abU5Q7mKK8456iBNR1uLynD9l2ZsTL19sUlKZYyuFPzA9c4xJCJ9zJ5xf9536ZyXMs7EYw9TybYw83Wzr40fUpRm3iFw5fUaJw",
    imageAlt: "Ignyte IGN-58 solid black open face helmet with leather lining",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Matt Black Leather", hex: "#171717" },
      { name: "Glossy Piano Black", hex: "#000000" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI",
      "Liner": "Energy Absorber EPP & Leather",
      "Weight": "1150g lightweight",
      "Fit": "Ergonomic Cafe Racer / Cruiser"
    }
  },
  {
    id: "ignyte-ign58-solid-battle-green",
    name: "Ignyte IGN-58 Solid Battle Green",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Military Matte",
    badgeType: "vintage",
    certBadge: "Classic Spec",
    inStock: true,
    stockCount: 11,
    description: "Authentic military matte olive green inspired by Royal Enfield Classic 350 Army Edition. Handcrafted leather trim and DOT certified EPP liner.",
    features: [
      "Matte Battle Green military grade non-reflective finish",
      "EPP energy absorber shock core for maximum road safety",
      "Vintage brown hand-stitched leatherette interior trim",
      "DOT FMVSS No. 218 & ISI:4151 certified safety standard"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Battle Green", "Military Spec", "RE Classic"],
    image: "/assets/images/battle_green_helmet_1789712532976.jpg",
    imageAlt: "Ignyte IGN-58 solid battle green open face helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Battle Green Matt", hex: "#3f4b3b" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Theme": "Military Olive Cruiser Heritage",
      "Liner": "Energy Absorber EPP Foam",
      "Weight": "1150 ± 50g",
      "Fit": "Royal Enfield Classic, Bullet & Meteor"
    }
  },
  {
    id: "ignyte-ign58-solid-desert-storm",
    name: "Ignyte IGN-58 Solid Desert Storm",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Desert Tan",
    badgeType: "vintage",
    certBadge: "DOT Spec",
    inStock: true,
    stockCount: 7,
    description: "Matte Desert Storm sand tan shade designed to complement Royal Enfield Desert Storm and modern safari cruisers. Hand-stitched leather cushions.",
    features: [
      "Matte Desert Sand texture with anti-glare finish",
      "Expanded Polypropylene (EPP) multi-impact shock buffer",
      "Hand-stitched vintage leather trim and breathable cheek pads",
      "DOT FMVSS No. 218 and ISI:4151 certified"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Desert Storm", "Sand Matte", "Leather Trim"],
    image: "/assets/images/desert_storm_helmet_1789712550021.jpg",
    imageAlt: "Ignyte IGN-58 solid desert storm open face helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Desert Storm Matt", hex: "#a88455" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Tone": "Safari Sand Matte",
      "Liner": "Multi-density EPP with Leather accents",
      "Weight": "1150 ± 50g",
      "Locking": "Quick Release Micrometric Clasp"
    }
  },
  {
    id: "ignyte-ign58-solid-squadron-blue",
    name: "Ignyte IGN-58 Solid Squadron Blue",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Air Force Blue",
    badgeType: "dot",
    certBadge: "EPP Liner",
    inStock: true,
    stockCount: 6,
    description: "Air Force Squadron Blue matte edition featuring heritage aviator styling, genuine leather interior trim, and DOT FMVSS certified EPP liner.",
    features: [
      "Matte Squadron Blue military aviation colorway",
      "Expanded Polypropylene (EPP) energy absorption core",
      "Rear leather goggle strap loop with metal snap",
      "DOT FMVSS No. 218 & ISI dual homologated safety"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Squadron Blue", "Air Force Spec", "Cruiser Fit"],
    image: "/assets/images/squadron_blue_helmet_1789712562280.jpg",
    imageAlt: "Ignyte IGN-58 solid squadron blue open face helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Squadron Blue Matt", hex: "#4a6274" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Colorway": "Matte Air Force Heritage",
      "Liner": "EPP Energy Absorber Foam",
      "Weight": "1150 ± 50g",
      "Buckle": "Micro-metric Quick Lock"
    }
  },
  {
    id: "ignyte-ign58-solid-athena-grey",
    name: "Ignyte IGN-58 Solid Athena Grey",
    category: "ignyte",
    secondaryCategories: ["all", "ignyte", "helmets", "steelbird-open"],
    brand: "Ignyte",
    type: "IGN-58 Solid Open Face",
    badge: "Urban Chic",
    badgeType: "popular",
    certBadge: "DOT FMVSS",
    inStock: true,
    stockCount: 8,
    description: "Urban Athena Grey edition in Matt and Glossy options. Cafe racer styling with handcrafted leather cushions and DOT certified EPP core.",
    features: [
      "Athena Grey battleship tone in Matt and Glossy finishes",
      "EPP energy absorber shock core engineered for multi-impact safety",
      "Hand-stitched leatherette interior with neck bolster",
      "DOT FMVSS No. 218 and ISI:4151 certified"
    ],
    price: 1899,
    originalPrice: 2299,
    savingsBadge: "SAVE ₹400",
    tags: ["Athena Grey", "Matt & Glossy", "DOT Certified"],
    image: "/assets/images/athena_grey_helmet_1789712576476.jpg",
    imageAlt: "Ignyte IGN-58 solid athena grey open face helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Athena Grey Matt", hex: "#64748b" },
      { name: "Athena Grey Glossy", hex: "#475569" }
    ],
    specifications: {
      "Certification": "DOT FMVSS No. 218 & ISI:4151",
      "Shade": "Battleship Athena Grey (Matt / Gloss)",
      "Liner": "Energy Absorber EPP Cushion",
      "Weight": "1150 ± 50g",
      "Usage": "Urban Commuting, Weekend Touring & Cruising"
    }
  },
  {
    id: "vega-voyager-dx-painted",
    name: "Vega Voyager DX (Painted)",
    category: "vega",
    secondaryCategories: ["all", "vega", "helmets", "steelbird-full"],
    brand: "Vega",
    type: "Full Face DX",
    badge: "Popular",
    badgeType: "popular",
    certBadge: "ABS Hard Shell",
    inStock: true,
    stockCount: 11,
    description: "Easy open visor mechanism, scratch resistant optical coating, multi-purpose visor system, washable hygiene interior.",
    features: [
      "Silent chin-curtain wind blocker",
      "Multi-point intake and rear aerodynamic exhaust port",
      "Quick release chin strap mechanism",
      "Tested for penetration and shock absorption at 25km/h"
    ],
    price: 1097,
    originalPrice: 1250,
    savingsBadge: "DIRECT DEAL",
    tags: ["Blue Glossy", "Anthracite", "Dull Green"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-lXa7iDklosSwSpMsMk1DsLoiDSgToJgFPozG-a4R1TBT97YQoeWzNkVYCK-bAdLa0sKFpF1dXWUGw4nuEZLY3wpCcgJGwKu3eJGr-1fUlY43fJIFvsEhkeu_hCkZkZ7j2ThLyDBHZCi0SIMa3-Vr3xCDpCw6vkenJjEvlZ3df2IqDb6hPd7-7RcCsWzcY1CfPYu2TjRsqiFOzwTuyswgvd7dKWwwOcM7zPC4Zr81JdNrjimjjTbdNg",
    imageAlt: "Vega Voyager DX painted motorcycle helmet in glossy blue",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Blue Glossy", hex: "#2563eb" },
      { name: "Anthracite", hex: "#374151" },
      { name: "Dull Green", hex: "#4d7c0f" }
    ],
    specifications: {
      "Shell": "Engineered Thermoplastic ABS",
      "Weight": "1280 ± 50g",
      "Visor": "Scratch Resistant Clear Shield",
      "Standards": "ISI:4151 Certified"
    }
  },
  {
    id: "steelbird-sbh66-vintage-peak",
    name: "Steelbird SBH-66 P Vintage with Peak",
    category: "steelbird-vintage",
    secondaryCategories: ["all", "steelbird-vintage", "steelbird-open", "helmets"],
    brand: "Steelbird",
    type: "Vintage Series",
    badge: "Vintage Spec",
    badgeType: "vintage",
    certBadge: "ISI:4151",
    inStock: true,
    stockCount: 9,
    description: "Retro sun peak visor shield, ultra-soft cushioned neck-roll, high-impact composite shell in classic Mist Green.",
    features: [
      "Detachable retro sun visor peak for glare protection",
      "Vintage round silhouette with chrome rim piping",
      "Padded cushioned neck-roll for relaxed touring comfort",
      "High impact ABS shell engineered to resist puncture"
    ],
    price: 1349,
    originalPrice: 1599,
    savingsBadge: "SAVE ₹250",
    tags: ["Mist Green", "Peak Visor", "Medium / Large"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzyS4RYXi9PRQEocG6En8kMWovrVg2fXg5yEt0qQKgOpqu9nqqwYgzulcd2mPlpObArdfCxJT-lqpaUFUGCGkDQZi1RqSTd1e4fW5Y7mSsL59_3twBsAcYONH1tsqw3j2p-toOb5M_UTfxFP_C9EC-TJiEktScK3KzJhdY-CyaMhWhterW5bbyfTsIK39U_f74LPFKtwsouGLt18h1kH4j9FO5V8UXorkJDm3IOG--pD5f_hkRDPsHLdoHcsM0Vj2AyT0",
    imageAlt: "Steelbird SBH-66 P Vintage Helmet with Peak in Mist Green Glossy",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Mist Green", hex: "#065f46" },
      { name: "Off White Pearl", hex: "#f3f4f6" },
      { name: "Cafe Tan", hex: "#78350f" }
    ],
    specifications: {
      "Design": "Classic Retro / Royal Enfield Cruiser",
      "Peak": "3-Snap Detachable Sun Peak",
      "Visor Compatibility": "Bubble Visor & Goggle Strap Ready",
      "Standard": "ISI:4151 Certified"
    }
  },
  {
    id: "steelbird-sbh73-drx-rf-dv",
    name: "Steelbird SBH-73 DRX RF D.V",
    category: "steelbird-drx",
    secondaryCategories: ["all", "steelbird-drx", "steelbird-full", "helmets"],
    brand: "Steelbird",
    type: "DRX Series",
    badge: "Dual Visor",
    badgeType: "dual-visor",
    certBadge: "Aerodynamic Spoiler",
    inStock: true,
    stockCount: 15,
    description: "Dual visor mechanism (clear + tinted drop-down inner sun visor), rear aerodynamic spoiler, rapid micrometric buckle.",
    features: [
      "Twin visor design: external clear shield + retractable tinted sun visor",
      "Integrated racing spoiler for stability above 100 km/h",
      "Laser cut padding with reflective safety elements",
      "Dynamic multi-channel ram air ventilation"
    ],
    price: 1499,
    originalPrice: 1799,
    savingsBadge: "HOT DEAL",
    tags: ["Dashing Pink", "Dual Visor", "Aero Wing"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnJdbR8ctK2pYFY3BYzELWu_Ssk8fPERuVVNLFSMPQRDFYnM6iqB2DwXhzeH8jlPFU090XVuVeHlRFrJ_hJ3H3TzuAkqUrXFfde9y73tSpQak7sJA6gKdVRKzIuMYVCTOE5BE4BZPBswAWxw6c7Cbam3AM5DR9tQNSyQvtFd5HQkjz8IiKMy_Pw9THilZFdFekfI09vZcAZxwdva_2ZTC_8J6ItMzPqtbjB0psyxujA8udTHXDE4ik0QpMsA4sGiigXW8",
    imageAlt: "Steelbird SBH-73 DRX RF D.V sports helmet in Dashing Pink",
    sizes: ["580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Dashing Pink Sport", hex: "#ec4899" },
      { name: "Neon Lime & Carbon", hex: "#84cc16" },
      { name: "Stealth Black", hex: "#18181b" }
    ],
    specifications: {
      "Spoiler": "Rear Aerodynamic Diffuser",
      "Visor System": "Dual Sun-Shield Retractable",
      "Buckle": "Metallic Micro-metric Ratchet",
      "Certification": "ISI:4151 Track Tested"
    }
  },
  {
    id: "steelbird-sb41-oscar-glossy",
    name: "Steelbird SB-41 Oscar Glossy Flip-Up",
    category: "steelbird-flip",
    secondaryCategories: ["all", "steelbird-flip", "steelbird-full", "helmets"],
    brand: "Steelbird",
    type: "Oscar Edition",
    badge: "Flip System",
    badgeType: "hot-pick",
    certBadge: "Ratchet Lock",
    inStock: true,
    stockCount: 7,
    description: "Sturdy ratchet locking flip mechanism, high-flow air channels, odourless hygienic mouth guard and cheek pads.",
    features: [
      "Rigid ratchet lock jaw that stays secure in open & closed positions",
      "Air-cushioned chin pads to prevent turbulence buffeting",
      "Anti-fog treated outer polycarbonate shield",
      "High grade gloss polyurethane clear topcoat"
    ],
    price: 1449,
    originalPrice: 1699,
    savingsBadge: "SAVE ₹250",
    tags: ["Cherry Red", "Gloss Finish", "Quick Release"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClt9UsmDCVv33KJkHulQRhBn7X0hme3froroB5uhs8Sqqi3U9sYtHbbUj6gdNdfiqw2vcSa_dKDdZ_n2WnQa49fkuIcshEJZpETxbpeDMxYZZfAetZd6QG8UBYcFMOMKr9wtJ4W7Bh4zddX2i6zsE4VBZ0WbHm3LK-uAZpsnNbK54El24VhOrTZrrXD75HC4SkuepeKQuVuDOy7KBNMWPhpd5muflfHsdZpaccUpYJ9HLOHjh5NAodwqfMGhYfsdf_rSk",
    imageAlt: "Steelbird SB-41 Oscar Flip Up Series Helmet in Cherry Red",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Cherry Red Glossy", hex: "#b91c1c" },
      { name: "Titanium Silver", hex: "#9ca3af" },
      { name: "Matte Raven", hex: "#262626" }
    ],
    specifications: {
      "Type": "Modular Flip Up Full Face",
      "Weight": "1420g",
      "Lock": "Steel Pivot Ratchet Mechanism",
      "Safety": "ISI:4151 Certified"
    }
  },
  {
    id: "steelbird-sba1-hf-handsfree",
    name: "Steelbird SBA-1 HF Hands-Free Modular Flip-Up",
    category: "steelbird-flip",
    secondaryCategories: ["all", "steelbird-flip", "steelbird-full", "helmets"],
    brand: "Steelbird",
    type: "Modular Hands-Free",
    badge: "Hands-Free Mic",
    badgeType: "hot-pick",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 11,
    description: "Built-in hands-free microphone and audio speaker unit with 3.5mm jack for clear phone calls and GPS navigation while riding. Single-touch flip-up chin bar.",
    features: [
      "Integrated noise-cancelling directional microphone & high-output stereo ear speakers",
      "Single-button metal pivot chin guard release mechanism",
      "Dynamic airflow intake vents with rear heat extractors",
      "Scratch-resistant polycarbonate visor with UV400 shield"
    ],
    price: 2589,
    originalPrice: 2999,
    savingsBadge: "SAVE ₹410",
    tags: ["Hands-Free", "Mic & Speakers", "Modular", "Calling & GPS", "ISI:4151"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8GCiS9XcGHlyIBvGzw_Uj3wnJ8JE2EgUghFJ4pidqlpy5Krl4c9J7hp_PHst-VUV-OKNw6XVCj4dYcNyxV-Hs6A7mbICSGh9KBGL1n0vN1abkoJjNnvbHpxJUqDOiZ2xNHJDFtiKRCuZ-Il7wuyb-iLaVOAtn6O6FbURypLHj9tEGdMYJ_-4jzUkj2D_qOS4LbnSAXCf8S2R0f0mt0BxtRLPrNhrdVxegQM42rvzdGsA5sXnVgJl1OQ",
    imageAlt: "Steelbird SBA-1 HF Hands-Free modular flip up helmet with integrated microphone and audio",
    sizes: ["580mm (M)", "600mm (L)"],
    colors: [
      { name: "Matt Raven Black", hex: "#1f2937" },
      { name: "Glossy Piano Black", hex: "#000000" },
      { name: "Battle Green Matt", hex: "#3f6212" }
    ],
    specifications: {
      "Audio System": "Integrated Hands-Free Mic & Speakers (IPX4 Water Resistant)",
      "Connector": "3.5mm Aux Jack compatible with Mobile Phones",
      "Flip Mechanism": "Single-Push Chin Bar Release",
      "Standard": "BIS ISI:4151 Certified",
      "Weight": "1520 ± 50g"
    }
  },
  {
    id: "steelbird-ares-a1-modular-dv",
    name: "Steelbird Ares A1 Dual-Visor Modular Flip-Up",
    category: "steelbird-flip",
    secondaryCategories: ["all", "steelbird-flip", "steelbird-full", "helmets"],
    brand: "Steelbird",
    type: "Ares Modular Series",
    badge: "Dual Visor",
    badgeType: "dual-visor",
    certBadge: "Twin Visor + Spoiler",
    inStock: true,
    stockCount: 9,
    description: "Premium modular touring helmet equipped with quick-flip chin guard, internal side-slide tinted sun visor, and high-velocity aerodynamic rear diffuser.",
    features: [
      "Twin visor configuration: outer crystal clear shield + retractable tinted sun visor",
      "Effortless single-touch central button jaw release",
      "Reinforced steel locking pins for high speed crash security",
      "Removable and washable breathable neck cushion and cheek pads"
    ],
    price: 2449,
    originalPrice: 2899,
    savingsBadge: "SAVE ₹450",
    tags: ["Ares A1", "Dual Visor", "Touring", "Aero Spoiler", "Flip-Up"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnJdbR8ctK2pYFY3BYzELWu_Ssk8fPERuVVNLFSMPQRDFYnM6iqB2DwXhzeH8jlPFU090XVuVeHlRFrJ_hJ3H3TzuAkqUrXFfde9y73tSpQak7sJA6gKdVRKzIuMYVCTOE5BE4BZPBswAWxw6c7Cbam3AM5DR9tQNSyQvtFd5HQkjz8IiKMy_Pw9THilZFdFekfI09vZcAZxwdva_2ZTC_8J6ItMzPqtbjB0psyxujA8udTHXDE4ik0QpMsA4sGiigXW8",
    imageAlt: "Steelbird Ares A1 dual visor modular flip up touring helmet",
    sizes: ["580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Matt Anthracite & Red", hex: "#dc2626" },
      { name: "Titanium Silver", hex: "#9ca3af" },
      { name: "Stealth Matt Black", hex: "#111827" }
    ],
    specifications: {
      "Visor Mechanism": "Dual Visor (Outer Clear + Retractable Sun Shield)",
      "Locking Mechanism": "Metallic Dual Locking Jaw Ratchet",
      "Shell Material": "High Impact Engineering ABS",
      "Safety Cert": "ISI:4151 Certified",
      "Weight": "1550 ± 50g"
    }
  },
  {
    id: "steelbird-sb50-adonis-flip-up",
    name: "Steelbird SB-50 Adonis Modular Flip-Up",
    category: "steelbird-flip",
    secondaryCategories: ["all", "steelbird-flip", "steelbird-full", "helmets"],
    brand: "Steelbird",
    type: "Adonis Edition",
    badge: "Italian Design",
    badgeType: "popular",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 16,
    description: "Italian design aesthetics combined with a rugged single-action flip-up chin bar, air-dynamic top air intakes, and scratch-resistant polycarbonate shield.",
    features: [
      "Sculpted Italian shell profile reducing wind drag and rider fatigue",
      "Smooth single-button modular flip mechanism with auto-lock",
      "Regulated density EPS liner for optimum shock absorption",
      "Rapid micrometric click-lock chinstrap buckle"
    ],
    price: 1799,
    originalPrice: 2149,
    savingsBadge: "SAVE ₹350",
    tags: ["Adonis", "Italian Styling", "Flip Up", "Daily Commute", "ISI:4151"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClt9UsmDCVv33KJkHulQRhBn7X0hme3froroB5uhs8Sqqi3U9sYtHbbUj6gdNdfiqw2vcSa_dKDdZ_n2WnQa49fkuIcshEJZpETxbpeDMxYZZfAetZd6QG8UBYcFMOMKr9wtJ4W7Bh4zddX2i6zsE4VBZ0WbHm3LK-uAZpsnNbK54El24VhOrTZrrXD75HC4SkuepeKQuVuDOy7KBNMWPhpd5muflfHsdZpaccUpYJ9HLOHjh5NAodwqfMGhYfsdf_rSk",
    imageAlt: "Steelbird SB-50 Adonis modular flip up motorcycle helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Desert Storm Tan", hex: "#ca8a04" },
      { name: "Gloss Pearl White", hex: "#f9fafb" },
      { name: "Matt Midnight Black", hex: "#18181b" }
    ],
    specifications: {
      "Type": "Modular Flip-Up Helmet",
      "Shell": "High Impact Engineering Thermoplastic",
      "Ventilation": "Chin Vent + Twin Crown Air Ducts",
      "Standard": "ISI:4151 Approved",
      "Weight": "1420 ± 50g"
    }
  },
  {
    id: "steelbird-sbh17-terminator-flip-up",
    name: "Steelbird SBH-17 Terminator Flip-Up Dual Visor",
    category: "steelbird-flip",
    secondaryCategories: ["all", "steelbird-flip", "steelbird-full", "helmets"],
    brand: "Steelbird",
    type: "Terminator Series",
    badge: "Highway Tourer",
    badgeType: "best-seller",
    certBadge: "Steel Pivot Pins",
    inStock: true,
    stockCount: 13,
    description: "Heavy-duty touring modular helmet with hardened steel jaw pivot pins, integrated secondary sun visor, and laser-contoured interior cushioning for high-mileage comfort.",
    features: [
      "Hardened steel pivot locking mechanism for maximum highway safety",
      "Dual visor system with easy side-lever operation",
      "Anti-buffeting breath deflector and chin curtain included",
      "Quick-release scratch-resistant optical polycarbonate visor"
    ],
    price: 2299,
    originalPrice: 2699,
    savingsBadge: "SAVE ₹400",
    tags: ["Terminator", "Steel Pivot", "Dual Visor", "Highway Spec", "ISI:4151"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8GCiS9XcGHlyIBvGzw_Uj3wnJ8JE2EgUghFJ4pidqlpy5Krl4c9J7hp_PHst-VUV-OKNw6XVCj4dYcNyxV-Hs6A7mbICSGh9KBGL1n0vN1abkoJjNnvbHpxJUqDOiZ2xNHJDFtiKRCuZ-Il7wuyb-iLaVOAtn6O6FbURypLHj9tEGdMYJ_-4jzUkj2D_qOS4LbnSAXCf8S2R0f0mt0BxtRLPrNhrdVxegQM42rvzdGsA5sXnVgJl1OQ",
    imageAlt: "Steelbird SBH-17 Terminator dual visor modular flip up helmet",
    sizes: ["580mm (M)", "600mm (L)"],
    colors: [
      { name: "Terminator Neon Yellow", hex: "#eab308" },
      { name: "Matt Military Army Green", hex: "#365314" },
      { name: "Carbon Texture Matt Black", hex: "#1f2937" }
    ],
    specifications: {
      "Jaw Lock": "Heavy-Duty Hardened Steel Pivot Pins",
      "Shields": "Dual Visor (Main Clear + Retractable Sun Shield)",
      "Inner Liner": "Washable Anti-Allergic Fabric",
      "Standard": "ISI:4151 Certified",
      "Weight": "1490 ± 50g"
    }
  },
  {
    id: "steelbird-gt-modular-graphics",
    name: "Steelbird GT Modular Graphics Flip-Up",
    category: "steelbird-flip",
    secondaryCategories: ["all", "steelbird-flip", "steelbird-full", "helmets"],
    brand: "Steelbird",
    type: "GT Modular Series",
    badge: "Sport Graphics",
    badgeType: "hot-pick",
    certBadge: "UV Clear Coat",
    inStock: true,
    stockCount: 10,
    description: "Sport decal graphic edition with UV-resistant polyurethane clear coat, single-hand push-button jaw release, and aerodynamic channelled airflow.",
    features: [
      "Striking GT racing decal graphics with high-gloss UV protection",
      "One-hand central push button activates modular chin bar",
      "Rear diffuser vents pull hot air and moisture away from rider",
      "Anti-scratch coated high clarity panoramic viewport"
    ],
    price: 1949,
    originalPrice: 2399,
    savingsBadge: "SAVE ₹450",
    tags: ["GT Graphics", "Racing Decals", "Modular", "UV Coat", "ISI:4151"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnJdbR8ctK2pYFY3BYzELWu_Ssk8fPERuVVNLFSMPQRDFYnM6iqB2DwXhzeH8jlPFU090XVuVeHlRFrJ_hJ3H3TzuAkqUrXFfde9y73tSpQak7sJA6gKdVRKzIuMYVCTOE5BE4BZPBswAWxw6c7Cbam3AM5DR9tQNSyQvtFd5HQkjz8IiKMy_Pw9THilZFdFekfI09vZcAZxwdva_2ZTC_8J6ItMzPqtbjB0psyxujA8udTHXDE4ik0QpMsA4sGiigXW8",
    imageAlt: "Steelbird GT modular racing graphic flip up motorcycle helmet",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Cyber Blue Racing Decals", hex: "#0284c7" },
      { name: "Flame Red GT", hex: "#dc2626" },
      { name: "Stealth Matt Grey Graphics", hex: "#4b5563" }
    ],
    specifications: {
      "Graphics": "UV-Resistant Polyurethane High-Gloss Finish",
      "Chin Bar": "Single-Push Button Modular Release",
      "Buckle": "Micrometric Quick-Release Strap",
      "Standard": "ISI:4151 Certified",
      "Weight": "1440 ± 50g"
    }
  },
  {
    id: "steelbird-sb29-modular-classic",
    name: "Steelbird SB-29 Two-Tone Modular Flip-Up",
    category: "steelbird-flip",
    secondaryCategories: ["all", "steelbird-flip", "steelbird-full", "helmets"],
    brand: "Steelbird",
    type: "SB-29 Series",
    badge: "Classic Value",
    badgeType: "budget",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 14,
    description: "Reliable, lightweight two-tone modular flip-up helmet designed for daily commuter convenience, featuring smooth jaw action and wide peripheral vision.",
    features: [
      "Smooth pivot locking modular mechanism with dual-stage closure",
      "Lightweight impact-resistant thermoplastic ABS shell",
      "Wide-angle optical visor offers unobstructed peripheral vision",
      "Micro-metric quick-release chinstrap with padded chin sleeve"
    ],
    price: 1649,
    originalPrice: 1999,
    savingsBadge: "SAVE ₹350",
    tags: ["SB-29", "Two-Tone", "Flip-Up", "Lightweight", "Commuter"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClt9UsmDCVv33KJkHulQRhBn7X0hme3froroB5uhs8Sqqi3U9sYtHbbUj6gdNdfiqw2vcSa_dKDdZ_n2WnQa49fkuIcshEJZpETxbpeDMxYZZfAetZd6QG8UBYcFMOMKr9wtJ4W7Bh4zddX2i6zsE4VBZ0WbHm3LK-uAZpsnNbK54El24VhOrTZrrXD75HC4SkuepeKQuVuDOy7KBNMWPhpd5muflfHsdZpaccUpYJ9HLOHjh5NAodwqfMGhYfsdf_rSk",
    imageAlt: "Steelbird SB-29 two-tone modular flip-up motorcycle helmet",
    sizes: ["570mm (M)", "580mm (L)", "600mm (XL)"],
    colors: [
      { name: "Glossy Jet Black", hex: "#000000" },
      { name: "Crimson Red Dual Tone", hex: "#b91c1c" },
      { name: "Gunmetal Titanium", hex: "#6b7280" }
    ],
    specifications: {
      "Type": "Two-Tone Modular Flip-Up",
      "Shell": "High Impact ABS Thermoplastic",
      "Retention": "Quick-Release Micro Ratchet Lock",
      "Standard": "ISI:4151 Approved",
      "Weight": "1380 ± 50g"
    }
  },
  {
    id: "steelbird-open-face-range",
    name: "Steelbird Open Face Multi-Color Range",
    category: "steelbird-open",
    secondaryCategories: ["all", "steelbird-open", "helmets"],
    brand: "Steelbird",
    type: "Open Face",
    badge: "Multi-Color",
    badgeType: "popular",
    certBadge: "City Commute",
    inStock: true,
    stockCount: 22,
    description: "Air-cooling ventilation channels, lightweight compact shell, clear UV-coated visor for daily urban cruising.",
    features: [
      "Ultra-compact footprint fits easily into scooter under-seat storage",
      "Available in vivid city colors including High-Vis yellow and army hues",
      "Breathable honeycomb liner for tropical weather comfort",
      "Quick release visor buckle system"
    ],
    price: 1199,
    originalPrice: 1399,
    savingsBadge: "VALUE PICK",
    tags: ["Battle Green", "Desert Storm", "High-Vis Yellow"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD03OBNwLnqNHdazKtv9QfGoOS0PxRVFIKJ5YlzhimYDYnbKfHWClxNZj6H9_Yd6klimeHFre6VAZ9CcEzMZGmzSqEFeazuiBMQH0jz4oqRubZQero6eueAd9jBuPRnVDbBqv_eZaWaX6baZCDSbqWsDiO7Rr7IaXQez1JE3gLEXLT28HhEFdlh24AkbWLoUnqjq1PXGONewJQwXAOA7jZKei5UTE4wf4nHWJ51G5E1LL5lDbL_UX2N8AiVlWDEO-YMTZQ",
    imageAlt: "Steelbird Open Face Helmet Range featuring Battle Green, Desert Storm, and High-Vis Yellow",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Battle Green", hex: "#365314" },
      { name: "Desert Storm", hex: "#b45309" },
      { name: "High-Vis Yellow", hex: "#eab308" },
      { name: "Glossy White", hex: "#ffffff" }
    ],
    specifications: {
      "Weight": "980g featherweight",
      "Fitment": "Activa / Jupiter / Hunter / Classic 350",
      "Liner": "Antimicrobial treated mesh",
      "Standard": "ISI:4151 Certified"
    }
  },
  {
    id: "aerostar-forza",
    name: "Aerostar Forza Sport & Commuter Helmet",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open", "steelbird-full"],
    brand: "Aerostar",
    type: "Full & Open",
    badge: "Budget King",
    badgeType: "budget",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 24,
    description: "High-impact ABS shell engineered for city commuters. Available in single and dual visor configurations with quick-release chinstrap.",
    features: [
      "Non Painted SV: ₹899 / DV: ₹980",
      "Painted SV: ₹1,099 / DV: ₹1,180",
      "Sport Decals (D1/D2/D3) SV: ₹1,255 / DV: ₹1,335",
      "Scratch-resistant polycarbonate optical visor with anti-glare tint",
      "One-touch quick release micro-metric ratchet chinstrap"
    ],
    price: 899,
    originalPrice: 1099,
    priceDisplay: "₹899 - ₹1,335",
    savingsBadge: "STARTS @ ₹899",
    tags: ["Forza", "Single Visor", "Dual Visor", "Commuter King", "ISI:4151"],
    image: "/assets/images/aerostar_forza_helmet_1789713119584.jpg",
    imageAlt: "Aerostar Forza motorcycle helmet in matte black with red sport accents",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Matt Black Forza", hex: "#1f2937" },
      { name: "Gloss White", hex: "#f3f4f6" },
      { name: "Flame Red", hex: "#dc2626" },
      { name: "Sport Cyber Blue", hex: "#0284c7" }
    ],
    specifications: {
      "Configurations": "Single Visor (SV) & Dual Visor (DV)",
      "Price Range": "₹899 to ₹1,335",
      "Certification": "ISI:4151 Certified",
      "Shell Material": "High-Impact Engineered ABS",
      "Locking": "Quick-release micro-ratchet click buckle"
    }
  },
  {
    id: "aerostar-beat",
    name: "Aerostar Beat Urban Open Face Helmet",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open"],
    brand: "Aerostar",
    type: "Open Face",
    badge: "17 Colors",
    badgeType: "popular",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 30,
    description: "Ultra-compact open face helmet designed for effortless city navigation and daily scooter riding. Offered in 17 high-gloss and matte finishes.",
    features: [
      "MRP ₹970 across 17 vibrant color choices",
      "Streamlined aerodynamic shell prevents neck strain during stop-and-go city traffic",
      "High-clarity optical curved visor protects against wind, dust, and rain",
      "Hypoallergenic breathable comfort lining with side ventilation"
    ],
    price: 970,
    originalPrice: 1199,
    priceDisplay: "₹970",
    savingsBadge: "SAVE ₹229",
    tags: ["Beat", "Open Face", "17 Solid Colors", "City Commute", "Scooter"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHbVvz2ez0ObnHGm4YjA8kWQ-5IO-RFpmTBTj5_fysWNsoMduf6MDe6Suvfit_yT2NesBmLrW09SRyiR8NnGT11-GwjbXuZ9kICtJObUIAEXDLLdA8oen-ZdqpqYreUcikuCOJBw4dYBo3tR7wYGf4Mg-TxThDEfZopVjrUjg4iOPTIf4nQjsFYkfSyiwFYB3PIU4g6RggtvbXQsad0iOSWVnzyu4Vz-9-xEQex2E4NFjkvWmI_Da_KAFFQQsIuD1yxOM",
    imageAlt: "Aerostar Beat open face motorcycle helmet",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Matt Black", hex: "#111827" },
      { name: "Neon Red", hex: "#ef4444" },
      { name: "Pearl White", hex: "#ffffff" },
      { name: "Battle Grey", hex: "#6b7280" },
      { name: "Canary Yellow", hex: "#eab308" }
    ],
    specifications: {
      "Model": "Aerostar Beat Open Face",
      "Pricing": "MRP ₹970",
      "Color Range": "17 Distinct Palette Options",
      "Visor": "Scratch-Resistant Polycarbonate Shield",
      "Weight": "Approx 850g"
    }
  },
  {
    id: "aerostar-zway",
    name: "Aerostar Z-Way Military Star Open Face",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open"],
    brand: "Aerostar",
    type: "Open Face",
    badge: "Military Edition",
    badgeType: "hot-pick",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 16,
    description: "Tactical open-face styling with D1 Military Star graphics and integrated aerodynamic sun peak. Built tough for rugged daily use.",
    features: [
      "Painted Base: ₹925 | D1 Military Star Graphics: ₹975",
      "Removable sun visor peak deflects overhead glare and debris",
      "Comfort-fit inner EPS liner engineered for Indian riding conditions",
      "Quick detach buckle with reinforced nylon strap"
    ],
    price: 925,
    originalPrice: 1150,
    priceDisplay: "₹925 - ₹975",
    savingsBadge: "SAVE ₹225",
    tags: ["Z-Way", "Military Star", "Sun Peak", "Open Face", "ISI:4151"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDGt8DA5rEs1780Df7EgKc74DC0lial44a0eYZcrP05pH-raLB9vKI7TQQ7oka7Tjp8lPCNGcd4wgHj0dJb2vL3sE1RFTPXWnVqa4UBA5liiPhUSWmITBDCnF5S4x2I5lYMiWk9wl9ozm3uqo1mywvHsc6-BnMODTC-RKeq4_DCrhpvNlcah3bxAWYcvxsh5AVca11nDvsIPMDZBQavBphHxU2UGoCK4mHayf69VC8bgOdMaxysg60Xg",
    imageAlt: "Aerostar Z-Way open face helmet with military star emblem",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Military Olive Green", hex: "#4d5b44" },
      { name: "Matt Black Star", hex: "#1f2937" },
      { name: "Desert Tan", hex: "#c2b280" }
    ],
    specifications: {
      "Model": "Aerostar Z-Way Series",
      "Graphics": "D1 Military Star Decal",
      "Pricing": "₹925 to ₹975",
      "Peak": "Impact-resistant front sunpeak",
      "Certification": "ISI:4151 Safety Approved"
    }
  },
  {
    id: "aerostar-essex-hit",
    name: "Aerostar Essex Hit Daily Commuter Helmet",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open"],
    brand: "Aerostar",
    type: "Open Face",
    badge: "Under ₹900",
    badgeType: "budget",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 22,
    description: "The classic no-nonsense city commuter helmet. Dependable ABS construction, scratch-resistant flip visor, and budget-friendly pricing.",
    features: [
      "Non Painted Base: ₹849 | High Gloss Painted: ₹990",
      "Wide peripheral visibility angle for crowded intersections",
      "High density bead EPS absorbing direct impact energy",
      "Sweat-absorbing hypoallergenic interior lining"
    ],
    price: 849,
    originalPrice: 1050,
    priceDisplay: "₹849 - ₹990",
    savingsBadge: "STARTS @ ₹849",
    tags: ["Essex Hit", "Daily Commute", "Budget Choice", "Open Face"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8GCiS9XcGHlyIBvGzw_Uj3wnJ8JE2EgUghFJ4pidqlpy5Krl4c9J7hp_PHst-VUV-OKNw6XVCj4dYcNyxV-Hs6A7mbICSGh9KBGL1n0vN1abkoJjNnvbHpxJUqDOiZ2xNHJDFtiKRCuZ-Il7wuyb-iLaVOAtn6O6FbURypLHj9tEGdMYJ_-4jzUkj2D_qOS4LbnSAXCf8S2R0f0mt0BxtRLPrNhrdVxegQM42rvzdGsA5sXnVgJl1OQ",
    imageAlt: "Aerostar Essex Hit daily commuter open face helmet",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Matt Black", hex: "#1f2937" },
      { name: "Gloss Black", hex: "#000000" },
      { name: "Silver Grey", hex: "#9ca3af" }
    ],
    specifications: {
      "Model": "Aerostar Essex Hit",
      "Pricing": "₹849 (Non Painted) / ₹990 (Painted)",
      "Target Use": "Office & Daily City Commute",
      "Standard": "ISI:4151 Certified"
    }
  },
  {
    id: "aerostar-thunder",
    name: "Aerostar Thunder Long-Shield Sport Helmet",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open"],
    brand: "Aerostar",
    type: "Open Face Sport",
    badge: "Chin-Coverage Shield",
    badgeType: "popular",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 14,
    description: "Extended aerodynamic face shield extends below the chin line, providing the breezy freedom of an open face with the debris protection of a full face.",
    features: [
      "Painted Base: ₹1,510 | D1 Thunder Graphics: ₹1,599",
      "Extra-long optical shield blocks highway crosswinds and road grit",
      "Dual forehead air intake ducts with rear hot air exhausts",
      "Precision ratcheting visor mechanism with firm detents"
    ],
    price: 1510,
    originalPrice: 1850,
    priceDisplay: "₹1,510 - ₹1,599",
    savingsBadge: "SAVE ₹340",
    tags: ["Thunder", "Long Shield", "Sport Open", "Extended Visor"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-lXa7iDklosSwSpMsMk1DsLoiDSgToJgFPozG-a4R1TBT97YQoeWzNkVYCK-bAdLa0sKFpF1dXWUGw4nuEZLY3wpCcgJGwKu3eJGr-1fUlY43fJIFvsEhkeu_hCkZkZ7j2ThLyDBHZCi0SIMa3-Vr3xCDpCw6vkenJjEvlZ3df2IqDb6hPd7-7RcCsWzcY1CfPYu2TjRsqiFOzwTuyswgvd7dKWwwOcM7zPC4Zr81JdNrjimjjTbdNg",
    imageAlt: "Aerostar Thunder sport open face helmet with extended chin coverage visor",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Thunder Matt Black", hex: "#1f2937" },
      { name: "Thunder Neon Yellow", hex: "#eab308" },
      { name: "Thunder Race Blue", hex: "#1d4ed8" }
    ],
    specifications: {
      "Model": "Aerostar Thunder Sport",
      "Shield Type": "Extended optical polycarbonate",
      "Pricing": "₹1,510 to ₹1,599",
      "Ventilation": "Dual crown ram-air vents"
    }
  },
  {
    id: "aerostar-xton",
    name: "Aerostar X-Ton Multi-Decal Racing Open Face",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open"],
    brand: "Aerostar",
    type: "Open Face Sport",
    badge: "5 Graphic Liveries",
    badgeType: "hot-pick",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 18,
    description: "Dynamic youth-oriented open face helmet featuring 5 bold multi-color racing liveries (D1 to D5) with advanced ventilation channels.",
    features: [
      "Painted Solid: ₹1,250 | D1 to D5 Multi-Color Graphics: ₹1,395",
      "Dynamic shell ridges channel airflow smoothly over the helmet",
      "High density EPS core with sculpted ear cavities for intercom speakers",
      "UV coated finish protects vibrant graphic decals against sun fade"
    ],
    price: 1250,
    originalPrice: 1550,
    priceDisplay: "₹1,250 - ₹1,395",
    savingsBadge: "SAVE ₹300",
    tags: ["X-Ton", "Racing Decals", "D1-D5 Liveries", "Open Face"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzyS4RYXi9PRQEocG6En8kMWovrVg2fXg5yEt0qQKgOpqu9nqqwYgzulcd2mPlpObArdfCxJT-lqpaUFUGCGkDQZi1RqSTd1e4fW5Y7mSsL59_3twBsAcYONH1tsqw3j2p-toOb5M_UTfxFP_C9EC-TJiEktScK3KzJhdY-CyaMhWhterW5bbyfTsIK39U_f74LPFKtwsouGLt18h1kH4j9FO5V8UXorkJDm3IOG--pD5f_hkRDPsHLdoHcsM0Vj2AyT0",
    imageAlt: "Aerostar X-Ton open face helmet with racing graphics",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "X-Ton D1 Cyber Red", hex: "#dc2626" },
      { name: "X-Ton D2 Hyper Green", hex: "#16a34a" },
      { name: "X-Ton D3 Electric Blue", hex: "#2563eb" },
      { name: "X-Ton D4 Matte Gold", hex: "#ca8a04" }
    ],
    specifications: {
      "Model": "Aerostar X-Ton Series",
      "Decal Options": "D1, D2, D3, D4, D5",
      "Pricing": "₹1,250 to ₹1,395",
      "Weight": "Approx 920g"
    }
  },
  {
    id: "aerostar-jet-leather",
    name: "Aerostar Jet Leather Vintage Cruiser Helmet",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-vintage", "steelbird-open"],
    brand: "Aerostar",
    type: "Vintage Open Face",
    badge: "Handcrafted Leather",
    badgeType: "vintage",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 12,
    description: "Premium handcrafted synthetic leather outer wrap with precision contrast stitching, antiqued brass snaps, and plush quilted comfort interior.",
    features: [
      "MRP ₹1,555 Handcrafted Leather Exterior",
      "Heavy gauge contrast thread stitching around contour edges",
      "3-snap brass rivet visor interface compatible with bubble shields & retro goggles",
      "Plush padded leatherette ear muffs and hypoallergenic neck roll"
    ],
    price: 1555,
    originalPrice: 1999,
    priceDisplay: "₹1,555",
    savingsBadge: "SAVE ₹444",
    tags: ["Jet Leather", "Vintage Cruiser", "Cafe Racer", "Stitched Trim", "ISI:4151"],
    image: "/assets/images/aerostar_jet_leather_1789713164148.jpg",
    imageAlt: "Aerostar Jet vintage open face helmet wrapped in handcrafted brown leather with contrast stitching",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Bourbon Brown Leather", hex: "#78350f" },
      { name: "Stealth Black Leather", hex: "#1c1917" },
      { name: "Cognac Tan Leather", hex: "#b45309" }
    ],
    specifications: {
      "Finish": "Handcrafted Stitched Synthetic Leather Wrap",
      "Pricing": "MRP ₹1,555",
      "Style": "Classic Cafe Racer & Retro Cruiser",
      "Attachment": "Triple brass snap visor interface",
      "Standard": "ISI:4151 Certified"
    }
  },
  {
    id: "aerostar-jet-sunpeak",
    name: "Aerostar Jet with Sunpeak & Amaze Series",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open"],
    brand: "Aerostar",
    type: "Open Face with Peak",
    badge: "Sunpeak Shade",
    badgeType: "hot-pick",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 17,
    description: "Aerostar Jet with sunpeak shade and Amaze series featuring aerodynamic top contouring, Black Aces graphics, and washable cheek pads.",
    features: [
      "Jet Sunpeak Base: ₹1,040 | D1/D2 Black Aces: ₹1,140",
      "Amaze Painted: ₹1,285 | Amaze Decor Graphic: ₹1,385",
      "Protective sunpeak deflects overhead mid-day sunshine and rain spatter",
      "Quick release chin strap with durable micro-tooth ratchet buckle"
    ],
    price: 1040,
    originalPrice: 1350,
    priceDisplay: "₹1,040 - ₹1,385",
    savingsBadge: "SAVE ₹310",
    tags: ["Jet Sunpeak", "Amaze", "Black Aces", "Anti-Glare Peak"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnJdbR8ctK2pYFY3BYzELWu_Ssk8fPERuVVNLFSMPQRDFYnM6iqB2DwXhzeH8jlPFU090XVuVeHlRFrJ_hJ3H3TzuAkqUrXFfde9y73tSpQak7sJA6gKdVRKzIuMYVCTOE5BE4BZPBswAWxw6c7Cbam3AM5DR9tQNSyQvtFd5HQkjz8IiKMy_Pw9THilZFdFekfI09vZcAZxwdva_2ZTC_8J6ItMzPqtbjB0psyxujA8udTHXDE4ik0QpMsA4sGiigXW8",
    imageAlt: "Aerostar Jet helmet with integrated sunpeak visor shade",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Black Aces Graphic", hex: "#1f2937" },
      { name: "Matt Red Jet", hex: "#b91c1c" },
      { name: "Amaze Pearl White", hex: "#f9fafb" }
    ],
    specifications: {
      "Model": "Aerostar Jet Sunpeak & Amaze",
      "Pricing": "₹1,040 to ₹1,385",
      "Visor Peak": "Integrated aerodynamic sunshade",
      "Lining": "Removable washable cheek pads"
    }
  },
  {
    id: "aerostar-flo-mini",
    name: "Aerostar Flo & Mini Featherweight Series",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open"],
    brand: "Aerostar",
    type: "Open Face",
    badge: "Ultra-Light 750g",
    badgeType: "budget",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 26,
    description: "Weighing only ~750 grams, the Flo and Mini series are tailored for junior riders, ladies, and daily errands where maximum lightness is paramount.",
    features: [
      "Flo Non-Painted: ₹795 | Flo Plus Painted: ₹1,090",
      "Mini Painted: ₹885 across 17 vibrant pastel and sport shades",
      "Featherweight construction prevents any neck fatigue",
      "Clear optical visor with smooth glide hinge mechanism"
    ],
    price: 795,
    originalPrice: 999,
    priceDisplay: "₹795 - ₹1,090",
    savingsBadge: "STARTS @ ₹795",
    tags: ["Flo Plus", "Mini", "Featherweight 750g", "Lady & Junior", "Best Value"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClt9UsmDCVv33KJkHulQRhBn7X0hme3froroB5uhs8Sqqi3U9sYtHbbUj6gdNdfiqw2vcSa_dKDdZ_n2WnQa49fkuIcshEJZpETxbpeDMxYZZfAetZd6QG8UBYcFMOMKr9wtJ4W7Bh4zddX2i6zsE4VBZ0WbHm3LK-uAZpsnNbK54El24VhOrTZrrXD75HC4SkuepeKQuVuDOy7KBNMWPhpd5muflfHsdZpaccUpYJ9HLOHjh5NAodwqfMGhYfsdf_rSk",
    imageAlt: "Aerostar Flo Plus lightweight open face motorcycle helmet",
    sizes: ["540mm (S)", "570mm (M)"],
    colors: [
      { name: "Pastel Mint", hex: "#6ee7b7" },
      { name: "Cherry Pink", hex: "#f43f5e" },
      { name: "Gloss White", hex: "#ffffff" },
      { name: "Matt Black", hex: "#1f2937" }
    ],
    specifications: {
      "Model": "Aerostar Flo & Mini Series",
      "Weight": "Approx 750g (Featherweight)",
      "Pricing": "₹795 to ₹1,090",
      "Target Riders": "Ladies, Juniors & Short Distance Commuters"
    }
  },
  {
    id: "aerostar-zeal",
    name: "Aerostar Zeal DOT & BIS Certified Full Face",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-full"],
    brand: "Aerostar",
    type: "Full Face",
    badge: "DOT + ISI Certified",
    badgeType: "dot",
    certBadge: "DOT FMVSS 218 & BIS",
    inStock: true,
    stockCount: 20,
    description: "International safety at an unbeatable price point. Features dual DOT FMVSS 218 and BIS ISI:4151 certification with full chin bar collision protection.",
    features: [
      "Non Painted Base: ₹895 | Painted Solid: ₹1,095",
      "D1, D2, D3 Racing Decor: ₹1,310",
      "Full chin bar structure with front adjustable defog air vent",
      "Dual international DOT FMVSS 218 & Indian BIS ISI certified"
    ],
    price: 895,
    originalPrice: 1310,
    priceDisplay: "₹895 - ₹1,310",
    savingsBadge: "DOT CERTIFIED @ ₹895",
    tags: ["Zeal", "DOT FMVSS 218", "BIS Certified", "Full Face", "Chin Air Vent"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD03OBNwLnqNHdazKtv9QfGoOS0PxRVFIKJ5YlzhimYDYnbKfHWClxNZj6H9_Yd6klimeHFre6VAZ9CcEzMZGmzSqEFeazuiBMQH0jz4oqRubZQero6eueAd9jBuPRnVDbBqv_eZaWaX6baZCDSbqWsDiO7Rr7IaXQez1JE3gLEXLT28HhEFdlh24AkbWLoUnqjq1PXGONewJQwXAOA7jZKei5UTE4wf4nHWJ51G5E1LL5lDbL_UX2N8AiVlWDEO-YMTZQ",
    imageAlt: "Aerostar Zeal full face motorcycle helmet with DOT certification",
    sizes: ["570mm (M)", "580mm (L)"],
    colors: [
      { name: "Matt Stealth Black", hex: "#111827" },
      { name: "Gloss Red Decor", hex: "#dc2626" },
      { name: "Cyber Blue Racing", hex: "#2563eb" }
    ],
    specifications: {
      "Model": "Aerostar Zeal Full Face",
      "Certifications": "Dual DOT FMVSS 218 & BIS ISI:4151",
      "Pricing": "₹895 to ₹1,310",
      "Ventilation": "Chin defogger + crown intake exhaust"
    }
  },
  {
    id: "aerostar-blaze-unix",
    name: "Aerostar Blaze & Unix Aero-Spoiler Full Face",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-full"],
    brand: "Aerostar",
    type: "Full Face Racing",
    badge: "Rear Aero Spoiler",
    badgeType: "best-seller",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 15,
    description: "Race-track inspired aerodynamics with integrated rear downforce spoiler wing. Blaze Joker (D1 to D5) and Unix racing editions reduce high-speed drag.",
    features: [
      "Blaze Painted: ₹1,499 | Blaze Joker D1 to D5: ₹1,699",
      "Unix Painted: ₹1,770 | Unix D1 to D4 Sport: ₹1,980",
      "Extended aero spoiler wing eliminates helmet buffeting at 80+ km/h",
      "Wide-aperture optical visor with quick release detent base plates"
    ],
    price: 1499,
    originalPrice: 1980,
    priceDisplay: "₹1,499 - ₹1,980",
    savingsBadge: "TOP RACING PICK",
    tags: ["Blaze", "Unix", "Rear Spoiler", "Joker Decal", "High Speed Stable"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXgYeZX_Cz_2IxjU2KJwhOJQdssAJAHqw19Zvg5yeeP-6CLzYIri9cqMN7MTCnXNItyXdR2bG0ad0TrJDSHp5jqtkiN_oz5Ex0xqnEFnHEM-tPaJuPLaBgqeg7KTqv9AkBFhqsshYbHYaSKiwe9aSmlQgBIcj_WAQI33XuzVKYNw2C0gci3qrHNX8NPTNBjPGL9ecaTH7J1mGfW7xl3GKaj8U89CLRAYydSRC86zFyDqnO8Gi6HWV3uw",
    imageAlt: "Aerostar Blaze aerodynamic full face helmet with rear spoiler wing",
    sizes: ["580mm (M)", "600mm (L)"],
    colors: [
      { name: "Blaze Joker Cyber", hex: "#7c3aed" },
      { name: "Unix Matt Anthracite", hex: "#374151" },
      { name: "Speed Neon Green", hex: "#22c55e" },
      { name: "Apex Racing Red", hex: "#ef4444" }
    ],
    specifications: {
      "Model": "Aerostar Blaze & Unix Series",
      "Aero Feature": "Integrated Rear Downforce Spoiler",
      "Pricing": "₹1,499 to ₹1,980",
      "Graphics": "Joker D1-D5 & Unix D1-D4 Sport Decals"
    }
  },
  {
    id: "aerostar-axter",
    name: "Aerostar Axter Full Face (Free Tinted Visor Included)",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-full"],
    brand: "Aerostar",
    type: "Full Face Dual Visor",
    badge: "Free Tinted Visor",
    badgeType: "hot-pick",
    certBadge: "DOT FMVSS 218 & BIS",
    inStock: true,
    stockCount: 16,
    description: "Flagship sport full-face helmet with dual DOT & BIS safety certification. Includes a FREE interchangeable tinted visor in the box, available in Single & Dual Visor setups.",
    features: [
      "FREE additional tinted smoke visor included in every box",
      "Painted SV: ₹1,750 | Painted DV (Inner Sunshield): ₹2,199",
      "D1 to D8 Monster / Venom / Skull Graphic Liveries: SV ₹1,980 | DV ₹2,399",
      "Dual DOT FMVSS 218 and BIS ISI:4151 international safety rating",
      "Comfort-fit laser cut memory foam liner with speaker recesses"
    ],
    price: 1750,
    originalPrice: 2399,
    priceDisplay: "₹1,750 - ₹2,399",
    savingsBadge: "FREE TINTED VISOR",
    tags: ["Axter", "Free Tinted Visor", "Dual Visor", "DOT Certified", "Monster Venom D8"],
    image: "/assets/images/aerostar_axter_helmet_1789713130883.jpg",
    imageAlt: "Aerostar Axter full face aggressive motorcycle helmet with racing decals and tinted visor",
    sizes: ["580mm (M)", "600mm (L)"],
    colors: [
      { name: "Monster Venom Matte Black", hex: "#111827" },
      { name: "Skull Cyber Neon", hex: "#10b981" },
      { name: "Apex Red Graphics", hex: "#dc2626" },
      { name: "Titanium Grey SV", hex: "#4b5563" }
    ],
    specifications: {
      "Included Bonus": "FREE Interchangeable Tinted Smoke Visor",
      "Configurations": "Single Visor (SV) & Dual Drop-Down Visor (DV)",
      "Safety Rating": "DOT FMVSS 218 & BIS ISI:4151 Dual Certified",
      "Pricing": "₹1,750 to ₹2,399",
      "Graphic Editions": "D1 to D8 Monster, Skull, and Venom Decals"
    }
  },
  {
    id: "aerostar-dream-modular",
    name: "Aerostar Dream Modular Flip-Up Helmet",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-flip"],
    brand: "Aerostar",
    type: "Modular Flip-Up",
    badge: "Push-Button Modular",
    badgeType: "dual-visor",
    certBadge: "ISI:4151 Certified",
    inStock: true,
    stockCount: 12,
    description: "Versatile modular flip-up helmet with smooth single-hand chin bar release button. Equipped with internal drop-down sun visor for cross-country highway touring.",
    features: [
      "Painted SV: ₹2,075 | Painted DV: ₹2,175",
      "Touring Decals (D1 / D3) SV: ₹2,275 | DV: ₹2,375",
      "Single-touch center push button activates effortless chin-bar flip mechanism",
      "Integrated side-slider drop-down UV400 inner sun shield",
      "Reinforced metal-on-metal chin bar locking pins for highway crash integrity"
    ],
    price: 2075,
    originalPrice: 2499,
    priceDisplay: "₹2,075 - ₹2,375",
    savingsBadge: "SAVE ₹424",
    tags: ["Dream Modular", "Flip-Up", "Dual Visor", "Touring", "Push Button"],
    image: "/assets/images/aerostar_dream_modular_1789713142380.jpg",
    imageAlt: "Aerostar Dream modular flip up motorcycle helmet in metallic titanium grey",
    sizes: ["580mm (M)", "600mm (L)"],
    colors: [
      { name: "Titanium Grey Metallic", hex: "#4b5563" },
      { name: "Gloss Obsidian Black", hex: "#000000" },
      { name: "Touring White D1", hex: "#f9fafb" },
      { name: "Carbon Texture Matt", hex: "#1f2937" }
    ],
    specifications: {
      "Type": "Modular Flip-Up with Dual Visor (DV)",
      "Mechanism": "Single-handed central chin-bar release",
      "Inner Shield": "Side-slide drop-down sun visor",
      "Pricing": "₹2,075 to ₹2,375",
      "Standard": "ISI:4151 Certified"
    }
  },
  {
    id: "aerostar-dazzle-motocross",
    name: "Aerostar Dazzle Off-Road Moto Cross Helmet",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-full"],
    brand: "Aerostar",
    type: "Moto Cross Off-Road",
    badge: "DOT MX Series",
    badgeType: "dot",
    certBadge: "DOT FMVSS 218 & BIS",
    inStock: true,
    stockCount: 10,
    description: "Rugged off-road dirt bike and trail helmet engineered with high-clearance roost peak, dual DOT/BIS homologation, and oversized eyeport for riding goggles.",
    features: [
      "Painted Without Visor: ₹1,995 | With Optical Visor: ₹2,095",
      "D1 to D4 Off-Road Graphics: Without Visor ₹2,195 | With Visor ₹2,295",
      "High-clearance aerodynamic roost peak sheds mud and deflects trail branches",
      "Dual DOT FMVSS 218 and Indian BIS ISI:4151 safety certification",
      "Contoured side channels hold dirt bike riding goggle straps securely"
    ],
    price: 1995,
    originalPrice: 2450,
    priceDisplay: "₹1,995 - ₹2,295",
    savingsBadge: "OFF-ROAD TOUGH",
    tags: ["Dazzle", "Moto Cross", "Dirt Bike", "DOT Certified", "Sun Peak", "Off-Road"],
    image: "/assets/images/aerostar_dazzle_motocross_1789713153100.jpg",
    imageAlt: "Aerostar Dazzle off-road motocross dirt bike helmet with sun peak and neon graphics",
    sizes: ["580mm (M)", "600mm (L)"],
    colors: [
      { name: "Neon Yellow Off-Road", hex: "#eab308" },
      { name: "Blaze Orange Dirt", hex: "#f97316" },
      { name: "Stealth Matt Black", hex: "#1f2937" },
      { name: "Cyan Racing D2", hex: "#06b6d4" }
    ],
    specifications: {
      "Discipline": "Off-Road, Motocross, Trail & Enduro",
      "Safety Cert": "DOT FMVSS 218 & BIS ISI:4151",
      "Pricing": "₹1,995 to ₹2,295",
      "Eyeport": "Wide-view compatible with MX goggles & face shield"
    }
  },
  {
    id: "aerostar-junior-kids",
    name: "Aerostar Bliss & Diva Kids Collection",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "helmets", "steelbird-open", "steelbird-full"],
    brand: "Aerostar",
    type: "Junior Helmet",
    badge: "Kids Protection",
    badgeType: "genuine",
    certBadge: "ISI Certified Safety",
    inStock: true,
    stockCount: 15,
    description: "Certified protection scaled specifically for children and young pillion riders. Lightweight shell prevents neck muscle fatigue, with fun cartoon decals.",
    features: [
      "Diva Open Face: Painted ₹998 | Minnie / Safari Decals ₹1,140",
      "Bliss Full Face: Painted ₹999 | Kitty / Spidey Decals ₹1,125",
      "Featherlight impact absorbing EPS tailored to children's head anatomy",
      "Soft hypoallergenic inner lining that is gentle on delicate skin"
    ],
    price: 998,
    originalPrice: 1250,
    priceDisplay: "₹998 - ₹1,140",
    savingsBadge: "SAVE ₹252",
    tags: ["Junior", "Kids Helmet", "Diva Open", "Bliss Full Face", "Cartoon Decals"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVNz3atn1lOMlvrTUrx7fQB5_cU6l3hy8Z9fAO86z3oOQmErsSVRE_n3YAbUrrmrYa0P-4XR2ZJk8doYqibJAgPB-hw6iS6rUMjuV9salYX0CKfmxrNffifEfciBhSQQcGRoOXGedN_Q2TgUtYkQg6abU5Q7mKK8456iBNR1uLynD9l2ZsTL19sUlKZYyuFPzA9c4xJCJ9zJ5xf9536ZyXMs7EYw9TybYw83Wzr40fUpRm3iFw5fUaJw",
    imageAlt: "Aerostar Bliss and Diva junior kids motorcycle helmet with fun decals",
    sizes: ["500mm (XS - Kids)", "520mm (S - Junior)"],
    colors: [
      { name: "Minnie Pink", hex: "#f472b6" },
      { name: "Spidey Red Blue", hex: "#ef4444" },
      { name: "Safari Yellow", hex: "#facc15" }
    ],
    specifications: {
      "Target Riders": "Kids & Pillion Young Riders",
      "Models": "Diva (Open Face) & Bliss (Full Face)",
      "Pricing": "₹998 to ₹1,140",
      "Standard": "ISI Certified Safety"
    }
  },
  {
    id: "aerostar-pannier-boxes",
    name: "Aerostar Heavy-Duty Side Pannier Luggage Box",
    category: "aerostar",
    secondaryCategories: ["all", "aerostar", "spares"],
    brand: "Aerostar",
    type: "Side Luggage Box",
    badge: "Hard Luggage",
    badgeType: "genuine",
    certBadge: "Heavy-Duty ABS",
    inStock: true,
    stockCount: 18,
    description: "Weather-sealed hard luggage side boxes engineered for daily commuters and touring motorcycles. Includes dual keys and universal heavy-duty mounting bracket.",
    features: [
      "Dash: ₹833 | Metro Full Non-Painted: ₹845",
      "Tasha: ₹865 | Nikki Plus / Metro Dual Tone: ₹948",
      "Yoko & Fit For Senior: ₹995",
      "All-weather rubber bead seal keeps tools, documents, and rainwear dry",
      "Universal steel mounting clamps fit Splendor, Pulsar, Shine, Classic 350"
    ],
    price: 833,
    originalPrice: 1199,
    priceDisplay: "₹833 - ₹995",
    savingsBadge: "STARTS @ ₹833",
    tags: ["Pannier Box", "Side Box", "Luggage", "Lock & Key", "Universal Fit"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkGMgm8lJI4lrxUBbLIa6i3GjjtSF42EwS2A9lBxsF699rQ8sO9KtjOSmLSVU7H9gO3e2Bap78KNWN01R1fI3He2e3ZFnZaqr51z3aJniwI5EtwC1DNbKFCtnFF7sPfl3crkMDmWuHvIEgExe6iKKaYXbMNq1abdeBMq6ngS2NP16wPOhmP0wPyxPqINGl_ihaVePDuvhxkzBJEhkOSXpS5VEeN2wc1i52-Gsj7HStaX4FgpBgtl06Qw",
    imageAlt: "Aerostar heavy duty motorcycle side pannier utility luggage box with lock and key",
    sizes: ["Universal Fit Bracket Included"],
    colors: [
      { name: "Textured Matt Black", hex: "#1f2937" },
      { name: "Gloss Black Dual Tone", hex: "#111827" },
      { name: "Metallic Top Red", hex: "#dc2626" }
    ],
    bikeCompatibility: [
      "Hero Splendor / HF Deluxe",
      "Honda Shine / SP125",
      "Bajaj Pulsar 125 / 150 / NS",
      "Royal Enfield Classic 350 / Bullet",
      "TVS Raider / Apache RTR"
    ],
    specifications: {
      "Models": "Dash (₹833), Metro (₹845-₹948), Tasha (₹865), Yoko (₹995)",
      "Locking": "Dual chrome security keys",
      "Weatherproofing": "Full perimeter rubber gasket seal",
      "Mounting": "Universal clamp kit included"
    }
  },
  {
    id: "motul-7100-4t-10w50",
    name: "Motul 7100 4T 10W-50 (1L)",
    category: "lubricants",
    secondaryCategories: ["all", "lubricants", "engine-oils"],
    brand: "Motul",
    type: "100% Synthetic",
    badge: "100% Genuine",
    badgeType: "genuine",
    certBadge: "Track-Grade",
    inStock: true,
    stockCount: 25,
    description: "Ester technology fully synthetic lubricant. Exceptional shear resistance, optimum wet-clutch performance for supersports & tourers.",
    features: [
      "100% Synthetic Ester core technology for extreme thermal stability",
      "JASO MA2 compliant ensuring smooth clutch engagement with zero slippage",
      "Low traction coefficient ester reduces internal friction and heat",
      "Tamper-proof cap with laser QR code verifiable via Motul app"
    ],
    price: 875,
    originalPrice: 1025,
    savingsBadge: "ORIGINAL OEM",
    tags: ["API SN", "JASO MA2", "QR Scannable"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXgYeZX_Cz_2IxjU2KJwhOJQdssAJAHqw19Zvg5yeeP-6CLzYIri9cqMN7MTCnXNItyXdR2bG0ad0TrJDSHp5jqtkiN_oz5Ex0xqnEFnHEM-tPaJuPLaBgqeg7KTqv9AkBFhqsshYbHYaSKiwe9aSmlQgBIcj_WAQI33XuzVKYNw2C0gci3qrHNX8NPTNBjPGL9ecaTH7J1mGfW7xl3GKaj8U89CLRAYydSRC86zFyDqnO8Gi6HWV3uw",
    imageAlt: "Motul 7100 4T 10W-50 100% Synthetic 1 Liter motorcycle engine oil bottle",
    sizes: ["1 Litre Can", "2.5 Litre Can"],
    bikeCompatibility: [
      "KTM Duke 200/250/390",
      "KTM RC 200/390",
      "Bajaj Dominar 400",
      "Royal Enfield Himalayan 450",
      "Yamaha R15 V3/V4",
      "BMW G310R / GS"
    ],
    specifications: {
      "Viscosity": "10W-50",
      "Grade": "100% Synthetic with Ester",
      "API Standard": "API SN / SM / SL",
      "JASO Standard": "JASO MA2 M033MOT163"
    }
  },
  {
    id: "rolon-brass-chain-sprocket-kit",
    name: "Rolon Brass Chain & Sprocket Kit",
    category: "spares",
    secondaryCategories: ["all", "spares", "bike-spares"],
    brand: "Rolon",
    type: "Drive Train",
    badge: "Endurance Kit",
    badgeType: "endurance",
    certBadge: "Rolon OEM",
    inStock: true,
    stockCount: 12,
    description: "High-tensile heavy duty sealed brass X-Ring chain set for Yamaha R15, MT-15, KTM Duke 200/250/390, Dominar & RE Hunter.",
    features: [
      "Corrosion-proof gold brass plated links that resist rust in rain",
      "Hardened induction-heat-treated carbon steel drive sprockets",
      "Pre-lubricated high-density grease formulation for minimum friction",
      "Up to 30,000 km lifespan under rigorous highway riding conditions"
    ],
    price: 1450,
    originalPrice: 1750,
    savingsBadge: "SAVE ₹300",
    tags: ["Brass Gold", "Zero Stretch", "Model Specific"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTvnh1plmARspBO23h0vfdZl4pQAWyAlVqCG-n5UwCGRzu91FKYDZeWXeAthofOG9YBufaS8NJuu_lnYurKDoltT89guAXL0xFlf8cTwFFAIrBwOGIFij5i347sJO2ltu69ixzlGTlMPuAcN14_uTqOThh717TO1G41yP62YdH3dJxpqMHj-GkGqKCIpYAJQ78rkZH9OnFyC7D9VmHEHhUOvVkyL77k6EBdEgikfuzkRpTRDFEFrJdlA",
    imageAlt: "Rolon gold-plated brass chain and sprocket drive kit",
    sizes: ["Yamaha R15/MT-15", "KTM Duke 200/250/390", "RE Hunter/Meteor 350", "Bajaj Pulsar NS200"],
    bikeCompatibility: [
      "Yamaha R15 V3/V4",
      "Yamaha MT-15",
      "KTM Duke 200 / 250 / 390",
      "KTM RC 200 / 390",
      "Bajaj Dominar 400",
      "Royal Enfield Hunter 350"
    ],
    specifications: {
      "Chain Type": "Brass Gold O-Ring / X-Ring",
      "Pitch": "428 / 520 Pitch (Bike specific)",
      "Tensile Strength": "32 kN heavy duty",
      "Warranty": "Direct Rolon India Manufacturing Warranty"
    }
  },
  {
    id: "ngk-iridium-spark-plug-brakes",
    name: "NGK Iridium Spark Plug & Brake Pads",
    category: "spares",
    secondaryCategories: ["all", "spares", "bike-spares"],
    brand: "NGK & Brembo/Bybre",
    type: "Ignition & Stop",
    badge: "Ignition & Stop",
    badgeType: "ignition",
    certBadge: "Laser Iridium",
    inStock: true,
    stockCount: 30,
    description: "Laser welded ultra-fine iridium center electrode for instant ignition and rapid throttle response with heat-stable sintered braking.",
    features: [
      "0.6mm laser-welded fine iridium center wire maximizes ignitability",
      "Eliminates cold-start misfires and boosts engine throttle crispness",
      "Paired with high-friction copper sintered brake friction pads",
      "Long service life: tested up to 40,000 km without electrode erosion"
    ],
    price: 650,
    originalPrice: 799,
    savingsBadge: "INSTANT FIT",
    tags: ["Faster Starts", "High Heat Res", "Multi-Fit"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkGMgm8lJI4lrxUBbLIa6i3GjjtSF42EwS2A9lBxsF699rQ8sO9KtjOSmLSVU7H9gO3e2Bap78KNWN01R1fI3He2e3ZFnZaqr51z3aJniwI5EtwC1DNbKFCtnFF7sPfl3crkMDmWuHvIEgExe6iKKaYXbMNq1abdeBMq6ngS2NP16wPOhmP0wPyxPqINGl_ihaVePDuvhxkzBJEhkOSXpS5VEeN2wc1i52-Gsj7HStaX4FgpBgtl06Qw",
    imageAlt: "NGK Laser Iridium Spark Plug and sintered disc brake pads",
    sizes: ["CR9EIX (KTM/Yamaha)", "CPR8EAIX-9 (Honda/Hero)", "BR8EIX (2-Stroke/Classic)"],
    bikeCompatibility: [
      "Yamaha R15 / MT-15 / FZ",
      "KTM Duke 200 / 250 / 390",
      "Royal Enfield Classic 350 / Meteor",
      "Suzuki Gixxer 150 / 250",
      "Honda Hornet 2.0 / CB350"
    ],
    specifications: {
      "Electrode": "0.6mm Laser Iridium Tip",
      "Hex Size": "16mm / 14mm thread",
      "Brake Compound": "Semi-Metallic Sintered Friction Formula",
      "Authenticity": "100% Genuine NGK Spark Plug Co. Japan"
    }
  }
];

export const MOTORCYCLE_DATABASE = [
  { make: "Yamaha", model: "R15 V3 / V4", oil: "10W-40 / 10W-50 (1.0L)", chain: "Rolon Brass 428-128L", plug: "NGK CR9EIX" },
  { make: "Yamaha", model: "MT-15 V1 / V2", oil: "10W-40 / 10W-50 (1.0L)", chain: "Rolon Brass 428-126L", plug: "NGK CR9EIX" },
  { make: "KTM", model: "Duke 200 / 250", oil: "Motul 7100 10W-50 (1.5L)", chain: "Rolon Gold 520-112L", plug: "NGK LKAR8A-9" },
  { make: "KTM", model: "Duke 390 / RC 390", oil: "Motul 7100 10W-50 (1.7L)", chain: "Rolon Sealed 520-114L", plug: "NGK LKAR8A-9" },
  { make: "Royal Enfield", model: "Hunter 350 / Classic Reborn", oil: "15W-50 Semi-Synthetic (2.0L)", chain: "Rolon 520 Heavy Duty", plug: "Bosch / NGK Twin" },
  { make: "Royal Enfield", model: "Himalayan 450", oil: "10W-40 Full Synthetic (2.1L)", chain: "Rolon Heavy X-Ring 520", plug: "NGK Laser Iridium" },
  { make: "Bajaj", model: "Dominar 400", oil: "Motul 7100 10W-50 (1.7L)", chain: "Rolon 520 X-Ring 120L", plug: "NGK Laser Triple Spark" },
  { make: "TVS", model: "Apache RR310 / RTR 200", oil: "10W-50 Synthetic (1.7L)", chain: "Rolon O-Ring Drive Kit", plug: "NGK Laser Iridium" }
];

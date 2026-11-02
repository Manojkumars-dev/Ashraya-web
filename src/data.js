export const BRAND_ASSETS = {
  logoUrl:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
  heroDesktop:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
  heroMobile:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  whoWeAreDesktop:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  whoWeAreMobile:
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  anatomyDesktop:
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
  anatomyMobile:
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
};

export const CONTACT_INFO = {
  phones: [
    { display: '+91 77952 59014', raw: '+917795259014' },
    { display: '+91 87221 78305', raw: '+918722178305' },
  ],
  whatsapp: '917795259014',
  whatsappDisplay: '+91 77952 59014',
  email: 'studio@ashraya.in',
  locations: 'Bangalore · Channapatna · Mandya · Maddur',
  address: 'Bangalore · Channapatna · Mandya · Maddur, Karnataka',
  hours: 'Mon–Sat: 9:30 AM – 7:00 PM (By Appointment)',
};

export const nav = [
  ['Home', 'hero'],
  ['About', 'who-we-are'],
  ['Services', 'services'],
  ['Packages', 'packages'],
  ['Projects', 'projects'],
  ['Why Ashraya', 'why'],
  ['Contact', 'contact'],
];

export const stats = [
  [10, '+', 'Years of Experience'],
  [100, '+', 'Spaces Delivered'],
  [25, '+', 'Design Professionals'],
  [100, '%', 'Commitment to Quality'],
];

export const SERVICES_DATA = [
  {
    id: 'construction',
    index: '01',
    category: 'Civil & Structure',
    title: 'Construction',
    shortDesc: 'Turnkey architectural contracting, seismic-ready civil engineering & foundational purity.',
    fullDesc:
      'From soil geotechnical testing and deep foundation piling to monolithic reinforced concrete framing, our in-house civil engineers execute structures designed for multi-generational permanence.',
    deliverables: [
      'IS-Code seismic zone structural engineering & soil analysis',
      'Fe-550D primary TMT steel & 53-Grade cement concrete',
      'Crystalline German 7-layer waterproofing from foundation to terrace',
      'Laser-plumbed masonry & concealed acoustic MEP conduits',
    ],
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern reinforced architectural civil construction blueprints and structural engineering',
  },
  {
    id: 'interior-design',
    index: '02',
    category: 'Spatial Curation',
    title: 'Interior Design',
    shortDesc: 'Bespoke spatial ergonomics, personalized layout choreography & luxury finishes.',
    fullDesc:
      'Our principal interior architects craft cohesive spatial narratives where natural light, acoustic intimacy, and tactile material palettes respond effortlessly to your daily rituals.',
    deliverables: [
      '2D spatial zoning & furniture circulation choreography',
      'Photorealistic 3D architectural renders & VR walkthroughs',
      'Bespoke material moodboards curated in our private atelier',
      'Turnkey styling, fine art placement & soft furnishing curation',
    ],
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    alt: 'Refined contemporary luxury interior design living space with dark moody architectural tones',
  },
  {
    id: 'modular-kitchen',
    index: '03',
    category: 'Precision Joinery',
    title: 'Modular Kitchen',
    shortDesc: 'German Blum fittings, solid quartz & sintered countertops, anti-fingerprint surfaces.',
    fullDesc:
      'Engineered for both haute culinary hosting and heavy Indian kitchen workflows, combining BWP marine carcasses, motorized Blum servo-drives, and monolithic stone islands.',
    deliverables: [
      'Blum Austria Servo-Drive & Legrabox soft-close mechanics',
      'Sintered stone & Caesarstone waterfall island countertops',
      'Fenix NTM anti-fingerprint matte lacquer & fluted glass shutters',
      'Integrated Bosch / Miele / Siemens appliance housing',
    ],
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Minimalist modular kitchen featuring matte cabinetry and stone island counter',
  },
  {
    id: 'living-spaces',
    index: '04',
    category: 'Monumental Volumes',
    title: 'Living Spaces',
    shortDesc: 'Dramatic grand foyers, acoustic timber reveals & uninterrupted panoramic flow.',
    fullDesc:
      'Double-height formal salons and intimate family lounges anchored by bookmatched Italian marble walls, concealed climate slots, and architectural hearth focal points.',
    deliverables: [
      'Double-height wall cladding in bookmatched Statuario & walnut',
      'Zero-sightline linear AC diffuser integration',
      'Acoustic slatted timber panels & concealed media consoles',
      'Motorized drapery tracks recessed into perimeter ceiling pelmets',
    ],
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Soaring double-height modern luxury living room with acoustic timber wall and marble floor',
  },
  {
    id: 'bedroom-interiors',
    index: '05',
    category: 'Restful Retreats',
    title: 'Bedroom Interiors',
    shortDesc: 'Master sanctuary suites, acoustic headboards, bespoke dressers & walk-ins.',
    fullDesc:
      'Private nocturnal sanctuaries engineered with acoustic wall insulation, hand-stitched nubuck leather headboards, warm chevron hardwood floors, and circadian bedside illumination.',
    deliverables: [
      'Full-height upholstered acoustic leather & suede headboard walls',
      'Smoked oak engineered chevron flooring with sound underlay',
      'Walk-in dressing boutiques with sensor-lit jewelry drawers',
      'Bedside master keypad for one-touch blackout & climate scenes',
    ],
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Master suite bedroom interior featuring tailored acoustic headboard wall and warm ambient lighting',
  },
  {
    id: 'bathroom-interiors',
    index: '06',
    category: 'Spa Wellness',
    title: 'Bathroom Interiors',
    shortDesc: 'Bookmatched marble slabs, concealed brassware & frameless glass enclosures.',
    fullDesc:
      'Resort-grade private spas featuring monolithic stone vanities, thermostatic rainfall showers, freestanding limestone soaking tubs, and PVD brushed champagne brassware.',
    deliverables: [
      'Gessi / Hansgrohe Axor / Kohler Rose Gold concealed thermostatic mixers',
      'Full-slab Nero Marquina & Botticino wet-zone cladding',
      '12mm Saint-Gobain toughened fluted glass shower partitions',
      'Floating stone vanities with backlit anti-fog architectural mirrors',
    ],
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
    alt: 'Bespoke spa bathroom featuring bookmatched marble, concealed faucets, and freestanding tub',
  },
  {
    id: 'ceiling-lighting',
    index: '07',
    category: 'Atmospheric Optics',
    title: 'False Ceiling & Lighting',
    shortDesc: 'Architectural magnetic track systems, zero-glare recessed fixtures & shadow reveals.',
    fullDesc:
      'We sculpt volume with light. Every ceiling plane uses moisture-resistant Saint-Gobain Gyproc with crisp 10mm shadow gaps, recessed 48V magnetic tracks, and CRI 97+ warm optics.',
    deliverables: [
      'Trimless recessed 48V magnetic track channels & honeycomb spots',
      '2700K–3000K high-CRI indirect perimeter cove wash',
      'Saint-Gobain Gyproc multi-tier framing with anti-crack mesh',
      'DALI-2 / Lutron programmable evening & entertaining scenes',
    ],
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Architectural ceiling detail showing warm recessed lighting and indirect LED cove illumination',
  },
  {
    id: 'custom-furniture',
    index: '08',
    category: 'Atelier Craft',
    title: 'Custom Furniture',
    shortDesc: 'Handcrafted Burma teak, Italian top-grain leather & millimetric fluted accents.',
    fullDesc:
      'Produced in our dedicated woodworking and metal atelier, each dining table, lounge sofa, and console is built to exact room proportions using seasoned teak, walnut burl, and brass inlay.',
    deliverables: [
      'Seasoned Burma Teak & American Walnut solid timber joinery',
      'Monolithic marble & live-edge dining tables with PVD brass bases',
      'Multi-density feather-down lounge sectionals in Belgian bouclé',
      'Bespoke bar cabinets, study desks & sculptural console tables',
    ],
    image:
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
    alt: 'Handcrafted bespoke solid wood and leather furniture in a luxury interior setting',
  },
];

export const services = SERVICES_DATA.map(s => [s.title, s.shortDesc]);

export const PROJECTS_DATA = [
  {
    id: 'bangalore',
    name: 'Bangalore',
    location: 'Bangalore',
    type: 'Turnkey Architectural Villa',
    year: '2024',
    area: '6,500 SQ.FT',
    packageUsed: 'Royal Tier',
    summary:
      'A contemporary multi-level family residence featuring double-height living areas, Italian marble flooring, and concealed architectural lighting.',
    architecturalNotes:
      'Designed with central daylight shafts and sound-insulated bedrooms. Features custom walnut cabinetry, motorized blinds, and landscaped terrace gardens.',
    highlights: [
      '14-month turnkey delivery from excavation to final art styling',
      '3,200 sq.ft of bookmatched Italian Statuario marble laid with zero-joint epoxy',
      'Full Lutron HomeWorks automation controlling lighting & drapery zones',
      'Acoustic double-glazed windows for city noise reduction',
    ],
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    mobileImage:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
    alt: 'Contemporary luxury residence in Bangalore with expansive glass facades and warm evening lighting',
  },
  {
    id: 'channapatna',
    name: 'Channapatna',
    location: 'Channapatna',
    type: 'Contemporary Turnkey Bungalow',
    year: '2024',
    area: '4,600 SQ.FT',
    packageUsed: 'Royal Tier',
    summary:
      'A striking two-storey contemporary bungalow featuring geometric cantilever architecture, laser-cut decorative facade screens, and ambient warm exterior illumination.',
    architecturalNotes:
      'Constructed with heavy monolithic concrete framing and thermal-break insulation. Highlights include a custom laser-cut balcony privacy screen, exterior wooden soffit panelling, and integrated perimeter landscape lighting.',
    highlights: [
      'Engineered cantilever terrace with custom decorative laser-cut privacy jali',
      'Heavy-duty Fe-550D structural concrete framing with German 7-layer waterproofing',
      'Weatherproof exterior warm-beam architectural focus lights and LED soffits',
      'Integrated boundary landscaping and automated designer entrance gate',
    ],
    image: '/projects/modern-villa-elevation.jpg',
    mobileImage: '/projects/modern-villa-elevation.jpg',
    alt: 'Modern two-storey turnkey villa in Channapatna with geometric cantilever frame and custom laser-cut facade pattern',
  },
  {
    id: 'mandya',
    name: 'Mandya',
    location: 'Mandya',
    type: 'Luxury Duplex Living Architecture',
    year: '2023',
    area: '5,800 SQ.FT',
    packageUsed: 'Royal Tier',
    summary:
      'Monumental double-height formal salon anchored by bookmatched black marble feature cladding, an upper glass-railing mezzanine, and custom acoustic fluted panelling.',
    architecturalNotes:
      'Sculpted around vertical volume and ambient optics. Features continuous zero-joint Italian marble flooring, acoustic fluted timber panels with vertical back-lit LED profiles, and motorized ceiling pelmet drapery.',
    highlights: [
      '21-foot double-height living room with structural mezzanine glass bridge',
      'Bookmatched Nero gold marble slab wall with integrated floating media unit',
      'Architectural warm LED cove channels and acoustic fluted vertical battens',
      'Full-slab polished marble flooring with mirror diamond buffing',
    ],
    image: '/projects/double-height-living.jpg',
    mobileImage: '/projects/double-height-living.jpg',
    alt: 'Double-height grand living hall in Mandya featuring upper mezzanine glass railing and black gold marble media wall',
  },
  {
    id: 'maddur',
    name: 'Maddur',
    location: 'Maddur',
    type: 'Bespoke Interior & Millwork Architecture',
    year: '2024',
    area: '4,200 SQ.FT',
    packageUsed: 'Premium Tier',
    summary:
      'A thoughtfully crafted family residence centered around a bespoke architectural pooja shrine, modern dining layout, and artisanal woodwork.',
    architecturalNotes:
      'Combines traditional architectural sanctum proportions with modern precision joinery. Features seasoned Burma teak tiered roof elements, brushed metallic column reveals, and textured ambient lighting.',
    highlights: [
      'Handcrafted architectural pooja shrine with solid teak wood tiered shikhara',
      'Translucent fluted shutter panels with custom brass inlay grid framing',
      'Contemporary dining integration with spherical woven geometric chandeliers',
      'Natural polished marble surfaces with concealed anti-glare architectural lighting',
    ],
    image: '/projects/pooja-mandir-interior.png',
    mobileImage: '/projects/pooja-mandir-interior.png',
    alt: 'Bespoke architectural pooja mandir and luxury dining space in Maddur with artisanal wood shikhara and designer lighting',
  },
];

export const projects = PROJECTS_DATA.map(p => [p.name, p.location, p.type, p.year]);

export const PACKAGES_DATA = [
  {
    id: 'basic',
    name: 'BASIC',
    subtitle: 'Essential',
    tagline: 'Foundational Structural Purity',
    pricePerSqFt: '₹1,999',
    numericRate: 1999,
    description:
      'Structured foundation and clean timeless finishes engineered for discerning homeowners seeking uncompromising structural baseline quality.',
    keyInclusions: [
      '53-Grade RCC Structure & Fe-500D Steel',
      'Vitrified Tile Flooring (800×800mm)',
      'Jaquar Essco / Florentine Bath Fixtures',
      'Standard Modular Kitchen Carcass & Granite',
      'Asian Paints Royale Luxury Emulsion',
    ],
    ctaText: 'Explore Basic',
    areas: [
      { area: 'Kitchen', category: 'Culinary', spec: 'BWR marine ply carcass, high-pressure laminate shutters & 20mm Black Galaxy granite counter.', brand: 'Ebco / CenturyPly' },
      { area: 'Bathrooms', category: 'Sanitarium', spec: 'Floor-mounted EWCs, single-lever chrome mixers & anti-skid 600×600mm vitrified wall tiles.', brand: 'Jaquar / Parryware' },
      { area: 'Bedrooms', category: 'Private Suites', spec: 'Smooth putty walls with low-VOC emulsion and laminated flush internal doors.', brand: 'Asian Paints / Century' },
      { area: 'Living Room', category: 'Salon', spec: '10-foot clear ceiling height, 800×800mm double-charged vitrified flooring.', brand: 'Kajaria / Somany' },
      { area: 'Doors & Windows', category: 'Fenestration', spec: 'Ghana Teak main door frame with veneer shutter; 2.5-track UPVC sliding windows.', brand: 'Fenesta / Aparna' },
      { area: 'Flooring', category: 'Surfaces', spec: '800×800mm double-charged vitrified tiles in living/bedrooms; anti-skid ceramic in wet zones.', brand: 'Kajaria / Nitco' },
      { area: 'Lighting', category: 'Optics', spec: 'Fire-retardant Finolex wiring, modular polycarbonate switches & surface LED downlights.', brand: 'Legrand / Philips' },
      { area: 'False Ceiling', category: 'Overhead', spec: 'Perimeter gypsum cove ceiling in main living room with warm white LED strip.', brand: 'Saint-Gobain Gyproc' },
      { area: 'Wardrobes', category: 'Storage', spec: 'Dedicated structural niches ready for modular hinged laminate wardrobes.', brand: 'Custom Modular' },
      { area: 'Furniture', category: 'Millwork', spec: 'Essential foyer shoe console and wall-mounted TV unit base in matte laminate.', brand: 'Ashraya Workshop' },
      { area: 'Smart Home', category: 'Automation', spec: 'Video door phone provision & high-speed Cat-6 mesh conduit network.', brand: 'Hikvision / D-Link' },
      { area: 'Interior Design', category: 'Atelier', spec: '2D furniture layout planning & basic 3D elevation visualization.', brand: 'Project Associate' },
    ],
  },
  {
    id: 'classic',
    name: 'CLASSIC',
    subtitle: 'Elevated',
    tagline: 'Refined Contemporary Living',
    pricePerSqFt: '₹2,399',
    numericRate: 2399,
    description:
      'Elevated civil specifications, soft-close German hardware, quartz kitchen counters, and designer architectural lighting.',
    keyInclusions: [
      'Primary Tata Tiscon / JSW Fe-550D Steel & UltraTech',
      'Large-Format Glazed Vitrified Slabs (1200×600mm)',
      'Kohler / Grohe Wall-Hung Sanitarium & Diverters',
      'Hettich German Soft-Close Kitchen & Quartz Counter',
      'Saint-Gobain Gyproc False Ceiling with Cove LEDs',
    ],
    ctaText: 'Explore Classic',
    areas: [
      { area: 'Kitchen', category: 'Culinary', spec: 'BWP IS-710 marine plywood, acrylic gloss/matte shutters, Hettich soft-close tandem boxes & quartz top.', brand: 'Hettich / KalingaStone' },
      { area: 'Bathrooms', category: 'Sanitarium', spec: 'Wall-hung rimless EWCs with concealed cisterns, Grohe/Kohler single-lever diverters & glass partition.', brand: 'Kohler / Grohe' },
      { area: 'Bedrooms', category: 'Private Suites', spec: 'Accent textured wall, laminated wooden flooring in master bedroom, acoustic door seals.', brand: 'Pergo / Asian Paints' },
      { area: 'Living Room', category: 'Salon', spec: '10.5-foot ceiling height, large-format 1200×600mm glazed porcelain slabs with epoxy grouting.', brand: 'Simpolo / Laticrete' },
      { area: 'Doors & Windows', category: 'Fenestration', spec: 'Solid Teak main entrance door with Yale digital lock; heavy-duty UPVC windows with toughened glass.', brand: 'Yale / Fenesta' },
      { area: 'Flooring', category: 'Surfaces', spec: '1200×600mm GVT slabs throughout living/dining; AC4 laminated oak flooring in master suite.', brand: 'Simpolo / Pergo' },
      { area: 'Lighting', category: 'Optics', spec: 'Recessed COB anti-glare spotlights, 3000K warm architectural coves & glass-plate switches.', brand: 'Schneider / Hybec' },
      { area: 'False Ceiling', category: 'Overhead', spec: 'Full living, dining & master bedroom Saint-Gobain Gyproc ceiling with shadow reveals.', brand: 'Saint-Gobain Gyproc' },
      { area: 'Wardrobes', category: 'Storage', spec: 'Floor-to-loft hinged or sliding wardrobes in high-pressure zero-edge matte laminate.', brand: 'Hettich / Merino' },
      { area: 'Furniture', category: 'Millwork', spec: 'Custom TV media console with fluted panelling, vanity units & breakfast counter.', brand: 'Ashraya Atelier' },
      { area: 'Smart Home', category: 'Automation', spec: 'Smart Wi-Fi touch switches in living/master suite + biometric main entrance lock.', brand: 'Schneider / Yale' },
      { area: 'Interior Design', category: 'Atelier', spec: 'Dedicated Project Architect, full 3D room-by-room renders & curated material sampling.', brand: 'Project Architect' },
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    subtitle: 'Signature',
    tagline: 'Distinguished Craft & Materiality',
    pricePerSqFt: '₹2,699',
    numericRate: 2699,
    description:
      'Semi-Italian marble living zones, natural smoked wood veneers, Blum motion cabinetry, and bespoke wardrobe galleries.',
    keyInclusions: [
      'German Crystalline Waterproofing & Acoustic Walls',
      'Composite Marble / 1200×2400mm Monolithic Slabs',
      'Grohe Concealed Thermostatic Rain Showers',
      'Blum Austria Motion Kitchen & PU Lacquer Shutters',
      'Natural Teak Veneer Panelling & Tinted Glass Wardrobes',
    ],
    ctaText: 'Explore Premium',
    areas: [
      { area: 'Kitchen', category: 'Culinary', spec: 'PU lacquered & Fenix matte shutters, Blum Aventos lift systems, Legrabox drawers & Caesarstone top.', brand: 'Blum / Caesarstone' },
      { area: 'Bathrooms', category: 'Sanitarium', spec: 'Ceiling-mounted rain showers, Grohe SmartControl thermostats, backlit mirrors & full-height porcelain slabs.', brand: 'Grohe / Duravit' },
      { area: 'Bedrooms', category: 'Private Suites', spec: 'Upholstered fabric/leatherette headboard wall, engineered wood flooring & concealed pelmet lighting.', brand: 'Mikasa / D’Decor' },
      { area: 'Living Room', category: 'Salon', spec: '11-foot ceiling volume, imported Botticino / Dyna marble flooring with mirror diamond polish.', brand: 'Classic Marble / Nitco' },
      { area: 'Doors & Windows', category: 'Fenestration', spec: '8-foot Burma Teak pivot/hinged main door; slim-profile thermal-break aluminum system windows.', brand: 'Tostem / Dorma' },
      { area: 'Flooring', category: 'Surfaces', spec: 'Imported composite/natural marble in public zones; real engineered timber planks in bedrooms.', brand: 'Classic Marble / Mikasa' },
      { area: 'Lighting', category: 'Optics', spec: 'Architectural recessed magnetic track channels, CRI 95+ warm dimmable optics & scene controllers.', brand: 'Delta / Plusrite' },
      { area: 'False Ceiling', category: 'Overhead', spec: 'Multi-level acoustic gypsum ceilings with wooden slatted inserts and recessed curtain tracks.', brand: 'Saint-Gobain / Hunter' },
      { area: 'Wardrobes', category: 'Storage', spec: 'Fluted smoked glass & natural veneer wardrobes with integrated warm LED sensor strips.', brand: 'Blum / Saint-Gobain' },
      { area: 'Furniture', category: 'Millwork', spec: 'Bespoke living room console, puja mandir unit, study cabinetry & custom headboard suites.', brand: 'Ashraya Master Craft' },
      { area: 'Smart Home', category: 'Automation', spec: 'App & voice-controlled lighting scenes, motorized living room drapery & multi-door video security.', brand: 'Legrand Netatmo / Somfy' },
      { area: 'Interior Design', category: 'Atelier', spec: 'Senior Design Lead, complete 3D VR walkthroughs, lighting lux audit & site supervision.', brand: 'Senior Design Lead' },
    ],
  },
  {
    id: 'royal',
    name: 'ROYAL',
    subtitle: 'Ultimate Luxury',
    tagline: 'The Unapologetic Bespoke Masterpiece',
    pricePerSqFt: '₹2,999',
    numericRate: 2999,
    featured: true,
    description:
      'Turnkey architectural grandeur featuring bookmatched Italian Statuario marble, full Lutron/KNX automation, Gessi PVD brassware, and bespoke furniture.',
    keyInclusions: [
      'Imported Bookmatched Italian Statuario Marble',
      'Full Lutron / KNX Centralized Smart Home Ecosystem',
      'Gessi / Axor Brushed Rose Gold Concealed Brassware',
      'Bespoke Solid Burma Teak & Italian Leather Furniture',
      'Dedicated Principal Architect & Private VR Atelier Suite',
    ],
    ctaText: 'Explore Royal Details',
    areas: [
      { area: 'Kitchen', category: '01 · Culinary', spec: 'Imported Dekton sintered stone waterfall island, Blum Servo-Drive motorized touch drawers, built-in Miele/Siemens appliances.', brand: 'Blum Servo-Drive · Dekton' },
      { area: 'Bathrooms', category: '02 · Spa Wellness', spec: 'Gessi / Hansgrohe Axor PVD brushed brassware, freestanding volcanic limestone tub & frameless fluted glass.', brand: 'Gessi Italy · Hansgrohe Axor' },
      { area: 'Bedrooms', category: '03 · Master Suites', spec: 'Full-wall acoustic top-grain Italian nubuck leather headboards, chevron smoked oak floors & circadian lighting.', brand: 'Poltrona Leather · Listone Giordano' },
      { area: 'Living Room', category: '04 · Grand Salon', spec: 'Continuous bookmatched Italian Statuario marble slabs, 11.5-ft double-height volume & acoustic walnut baffles.', brand: 'Italian Statuario · Burma Teak' },
      { area: 'Doors & Windows', category: '05 · Fenestration', spec: '8.5-foot solid Burma Teak pivot entrance door with biometric access; Schüco acoustic double-glazed aluminum sliders.', brand: 'Schüco Germany · Burma Teak' },
      { area: 'Flooring', category: '06 · Surfaces', spec: 'Hand-selected Italian Statuario / Michaelangelo marble with zero-joint epoxy and 7-stage diamond mirror polish.', brand: 'Antolini / Classic Marble' },
      { area: 'Lighting', category: '07 · Optics', spec: 'Trimless 48V magnetic track architecture, DALI-2 circadian dimming protocol & CRI 97+ museum-grade spotlights.', brand: 'iGuzzini · Flos · Lutron' },
      { area: 'False Ceiling', category: '08 · Overhead', spec: 'Acoustic Saint-Gobain Gyproc with 10mm negative shadow reveals, zero-sightline linear AC slots & recessed pelmets.', brand: 'Saint-Gobain Acoustic' },
      { area: 'Wardrobes', category: '09 · Dressing Gallery', spec: 'Walk-in couture closets with bronze-tinted Belgian fluted glass, deerskin jewelry organizers & motion LEDs.', brand: 'Rimadesio Style · Blum' },
      { area: 'Furniture', category: '10 · Custom Atelier', spec: 'Complete bespoke furniture suite: 8-seater live-edge walnut/marble dining table, Belgian bouclé sectionals & consoles.', brand: 'Ashraya Bespoke Atelier' },
      { area: 'Smart Home', category: '11 · Automation', spec: 'Full Lutron / KNX ecosystem: automated drapery, multi-zone VRV climate, distributed audio & iPad wall docks.', brand: 'Lutron HomeWorks · KNX' },
      { area: 'Interior Design', category: '12 · Principal Direction', spec: '1-on-1 direction by our Principal Architect, quarry slab selection trips, VR suite walkthroughs & weekly drone logs.', brand: 'Principal Architect Studio' },
    ],
  },
];

export const tiers = PACKAGES_DATA.map((p, idx) => ({
  id: p.name.charAt(0) + p.name.slice(1).toLowerCase(),
  tag: p.subtitle,
  desc: p.description,
  price: p.pricePerSqFt + '/sq.ft',
  items: p.keyInclusions,
  cover: idx === 0 ? 4 : idx === 1 ? 7 : idx === 2 ? 10 : 12,
  mats: p.tagline,
}));

export const areas = [
  'Kitchen',
  'Bathrooms',
  'Bedrooms',
  'Living Room',
  'Doors & Windows',
  'Flooring',
  'Lighting',
  'False Ceiling',
  'Wardrobes',
  'Furniture',
  'Smart Home',
  'Interior Design',
];

export const COMPARISON_ROWS = [
  {
    dimension: 'Construction',
    basic: 'Standard 53-Grade RCC & Fe-500D Steel',
    classic: 'Primary Tata/JSW Fe-550D & UltraTech',
    premium: 'German Crystalline Waterproofing & Acoustic Masonry',
    royal: 'Heavy Monolithic Framing + Full Acoustic & Thermal Decoupling',
  },
  {
    dimension: 'Kitchen',
    basic: 'BWR Plywood, Laminate & Black Granite',
    classic: 'Hettich Soft-Close, Acrylic & Quartz Counter',
    premium: 'Blum Tandem, Fenix Matte & Caesarstone Island',
    royal: 'Dekton Sintered Stone + Blum Servo-Drive Motorized',
  },
  {
    dimension: 'Bathroom',
    basic: 'Jaquar Essco Chrome Series',
    classic: 'Kohler / Grohe Wall-Hung & Concealed',
    premium: 'Grohe Thermostatic Rain Showers & Full Slabs',
    royal: 'Gessi / Axor PVD Brushed Brassware + Freestanding Spa Tub',
  },
  {
    dimension: 'Flooring',
    basic: '800×800mm Vitrified Tiles',
    classic: '1200×600mm Glazed Porcelain Slabs',
    premium: 'Imported Botticino Marble + Engineered Wood',
    royal: 'Bookmatched Italian Statuario Marble + Smoked Oak Chevron',
  },
  {
    dimension: 'Lighting',
    basic: 'Standard LED Downlights & Modular Switches',
    classic: 'Recessed Anti-Glare COB & Warm Cove Strips',
    premium: 'Architectural Magnetic Tracks & Scene Dimmers',
    royal: 'Trimless 48V Magnetic Optics + DALI-2 Circadian Tuning',
  },
  {
    dimension: 'Wardrobes',
    basic: 'Structural Niches / Optional Laminate',
    classic: 'Floor-to-Loft Matte Laminate Shutters',
    premium: 'Natural Veneer & Tinted Glass with Sensor LEDs',
    royal: 'Walk-In Couture Gallery + Belgian Fluted Glass & Deerskin Trays',
  },
  {
    dimension: 'Furniture',
    basic: 'Essential Foyer & Media Base Unit',
    classic: 'Custom TV Console, Vanity & Breakfast Bar',
    premium: 'Living, Mandir, Study & Master Headboard Suites',
    royal: 'Full Bespoke Burma Teak, Marble & Italian Leather Collection',
  },
  {
    dimension: 'Smart Home',
    basic: 'Video Door Phone & Cat-6 Conduit',
    classic: 'Biometric Lock & Wi-Fi Touch Switches',
    premium: 'Voice/App Scenes & Motorized Living Drapery',
    royal: 'Full Lutron / KNX Automation (HVAC, Shades, Audio, Security)',
  },
  {
    dimension: 'Interior Design',
    basic: 'Project Associate (2D + Basic 3D)',
    classic: 'Project Architect (Full 3D Renders)',
    premium: 'Senior Design Lead (VR Walkthrough + Lux Audit)',
    royal: 'Principal Architect Direction + Quarry Curation & White-Glove Care',
  },
];

export const compare = COMPARISON_ROWS.map(r => [r.dimension, r.basic, r.classic, r.premium, r.royal]);

export const spots = [
  { k: 'Kitchen', p: [2.5, 1.5, -1.5], t: 'Modular haute kitchen with Blum Servo-Drive drawers, Fenix anti-fingerprint fascias & waterfall stone island.' },
  { k: 'Living Room', p: [-2.2, 1.3, 0.8], t: 'Double-height volume anchored by bookmatched Italian Statuario marble & acoustic walnut baffles.' },
  { k: 'Bedroom', p: [-1.5, 1.5, -2.6], t: 'Master suite sanctuary with upholstered acoustic nubuck leather headboard & chevron smoked oak floor.' },
  { k: 'Bathroom', p: [-4.1, 3.3, -3.1], t: 'Monolithic spa bathroom clad in Nero Marquina slabs with concealed PVD brushed rose-gold brassware.' },
  { k: 'Wardrobe', p: [-4.4, 2.6, 1.5], t: 'Bronze-tinted Belgian fluted glass walk-in gallery with motion-sensor lighting & velvet jewelry trays.' },
  { k: 'Lighting', p: [0, 3.7, 0], t: 'Trimless 48V magnetic track channels with CRI 97+ optics and DALI-2 circadian evening tuning.' },
  { k: 'Flooring', p: [0.5, 0.2, 3], t: 'Hand-selected Italian Statuario and Botticino marble laid with zero-joint epoxy & diamond mirror buffing.' },
];

export const WHY_ASHRAYA_DATA = [
  {
    index: '01',
    title: 'One Vision. One Team.',
    description:
      'Zero contractor finger-pointing. Our unified studio of structural engineers, principal architects, and master joiners executes every phase from soil testing to final styling.',
  },
  {
    index: '02',
    title: 'Designed Around You',
    description:
      'We never recycle templates. Every floorplan, daylight axis, acoustic partition, and bespoke furniture piece is tailored to your family’s lifestyle and legacy.',
  },
  {
    index: '03',
    title: 'Transparent Process',
    description:
      'Milestone-linked escrow billing with itemized bills of quantities, zero hidden cost escalations, and weekly drone & video progress logs.',
  },
  {
    index: '04',
    title: 'Quality That Lasts',
    description:
      'Cube-tested 53-grade concrete, primary Fe-550D steel, 7-layer German waterproofing, and kiln-seasoned Burma teak backed by a 10-year structural warranty.',
  },
  {
    index: '05',
    title: 'Attention to Detail',
    description:
      'Laser-plumbed 1mm masonry tolerances, continuous bookmatched stone veining, 10mm negative ceiling shadow gaps, and flush architectural skirting.',
  },
  {
    index: '06',
    title: 'End-to-End Execution',
    description:
      'From municipal plan sanctions and structural framing to custom millwork, smart automation programming, and deep-cleaned key handover.',
  },
];

export const why = WHY_ASHRAYA_DATA.map(w => [w.title, w.description]);

export const PROCESS_STEPS = [
  {
    step: '01',
    phase: 'Phase I · Discovery',
    title: 'Consultation',
    duration: 'Week 1',
    description: 'In-depth spatial brief, lifestyle mapping, aesthetic direction & investment framework alignment.',
    deliverable: 'Architectural Program & Feasibility Dossier',
  },
  {
    step: '02',
    phase: 'Phase I · Analysis',
    title: 'Site Assessment',
    duration: 'Week 2',
    description: 'Geotechnical soil testing, topographical laser survey, solar path & wind orientation study.',
    deliverable: 'Soil Test Report & Site Orientation Blueprint',
  },
  {
    step: '03',
    phase: 'Phase II · Architecture',
    title: 'Design & Planning',
    duration: 'Weeks 3–6',
    description: '2D spatial floorplans, structural engineering drawings & photorealistic 3D VR walkthroughs.',
    deliverable: 'Master Architectural & 3D VR Monograph',
  },
  {
    step: '04',
    phase: 'Phase II · Curation',
    title: 'Package Selection',
    duration: 'Week 7',
    description: 'Locking itemized BOQ, physical material palette curation in our atelier & binding milestone schedule.',
    deliverable: 'Fixed-Price Escrow Contract & Material Box',
  },
  {
    step: '05',
    phase: 'Phase III · Structure',
    title: 'Construction',
    duration: 'Months 2–7',
    description: 'Excavation, seismic RCC framing, precision masonry, German waterproofing & concealed MEP.',
    deliverable: 'Cube-Tested Monolithic Structural Shell',
  },
  {
    step: '06',
    phase: 'Phase III · Atelier',
    title: 'Interior Execution',
    duration: 'Months 8–11',
    description: 'Italian marble laying, acoustic ceilings, factory-crafted modular kitchen, wardrobes & custom furniture.',
    deliverable: 'Bespoke Interior Fit-Out & Automation Setup',
  },
  {
    step: '07',
    phase: 'Phase IV · Verification',
    title: 'Quality Inspection',
    duration: 'Month 12',
    description: '400-point engineering audit covering laser levelling, thermal imaging, acoustic seals & lux calibration.',
    deliverable: 'Signed 400-Point Zero-Snag Certificate',
  },
  {
    step: '08',
    phase: 'Phase IV · Completion',
    title: 'Handover',
    duration: 'Completion Day',
    description: 'Hospital-grade deep sanitization, as-built MEP manuals, 10-year warranty deed & ceremonial key handover.',
    deliverable: 'Master Key Box & 10-Year Warranty Bond',
  },
];

export const steps = PROCESS_STEPS.map(s => s.title);

export const MATERIALS_DATA = [
  {
    id: 'flooring',
    category: '01 · Flooring',
    name: 'Bookmatched Italian Statuario',
    provenance: 'Carrara Quarries, Italy',
    description: 'Mirror-honed natural marble slabs laid with zero-joint color-matched epoxy.',
    image:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80',
    alt: 'Macro tactile photograph of Italian Statuario white marble showcasing dramatic grey and gold mineral veins',
  },
  {
    id: 'wood',
    category: '02 · Wood',
    name: 'Seasoned Burma Teak & Walnut',
    provenance: 'Kiln-Aged 40+ Years',
    description: 'Hand-rubbed natural oil finish preserving deep grain character and moisture immunity.',
    image:
      'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80',
    alt: 'Tactile close-up of reclaimed Burma Teak and American Walnut hardwood grain with warm matte satin finish',
  },
  {
    id: 'stone',
    category: '03 · Stone',
    name: 'Calacatta Gold & Obsidian Slate',
    provenance: 'Verona & Domestic Monoliths',
    description: 'Warm amber-veined natural stone slabs for sculptural feature walls and monolithic islands.',
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1000&q=80',
    alt: 'High-resolution close-up macro texture of Calacatta Gold Italian marble showing fine charcoal and amber veins',
  },
  {
    id: 'lighting',
    category: '04 · Lighting',
    name: '48V Trimless Magnetic Optics',
    provenance: 'CRI 97+ DALI-2 Systems',
    description: 'Recessed zero-glare honeycomb spotlights and circadian perimeter cove channels.',
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1000&q=80',
    alt: 'Minimalist black matte recessed magnetic track lighting channel with warm 2700K optical fixture',
  },
  {
    id: 'kitchen-finishes',
    category: '05 · Kitchen Finishes',
    name: 'Fenix NTM & Matte Acrylics',
    provenance: 'Nanotech Italian Surfaces',
    description: 'Thermal-healing anti-fingerprint matte cabinetry paired with sintered quartz counters.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80',
    alt: 'Smooth super-matte lacquered charcoal acrylic cabinetry panel sample with chamfered edge and champagne pull',
  },
  {
    id: 'bathroom-fixtures',
    category: '06 · Bathroom Fixtures',
    name: 'PVD Brushed Champagne Brass',
    provenance: 'Gessi · Axor · Kohler Atelier',
    description: 'Concealed thermostatic mixers and knurled metal controls with anti-tarnish PVD coating.',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    alt: 'Hand-brushed champagne brass architectural metal fixtures catching warm reflection',
  },
  {
    id: 'paint-textures',
    category: '07 · Paint & Textures',
    name: 'Artisanal Lime Micro-Cement',
    provenance: 'Breathable Mineral Plaster',
    description: 'Hand-troweled monolithic wall textures delivering quiet velvet depth and acoustic softness.',
    image:
      'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&w=1000&q=80',
    alt: 'Detailed macro texture of hand-troweled artisanal lime plaster and micro-cement wall finish',
  },
  {
    id: 'hardware',
    category: '08 · Hardware & Glazing',
    name: 'Belgian Fluted Glass & Bronze',
    provenance: 'Acoustic Tempered Joinery',
    description: 'Reeded architectural glass framed in slim anodized bronze with concealed soft-close pivots.',
    image:
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    alt: 'Architectural material detail of vertically fluted Belgian textured glass framed by brushed champagne brass',
  },
];

export const mats = MATERIALS_DATA.map(m => m.name);

export const TESTIMONIALS_DATA = [
  {
    id: 'rajesh-mandya',
    quote:
      'We built our two-storey home in Mandya through Ashraya. The biggest relief was having both civil work and interiors handled by the same team. We didn’t have to chase separate carpenters and masons, and the work was completed before our planned housewarming date.',
    clientName: 'Rajesh Gowda',
    location: 'Mandya',
    rating: 5,
  },
  {
    id: 'suresh-channapatna',
    quote:
      'Very honest and transparent with pricing. For our house in Channapatna, they gave an itemized rate at the beginning and stuck to it till handover. The teak woodwork in the pooja room and living hall came out exceptionally well.',
    clientName: 'Suresh Kumar',
    location: 'Channapatna',
    rating: 5,
  },
  {
    id: 'preethi-bangalore',
    quote:
      'Ashraya handled our villa construction and complete interior design in Bangalore. The quality of foundation, plumbing, and electrical planning is top-notch. Their site engineers gave us weekly photo updates so we didn’t have to visit the site every weekend.',
    clientName: 'Dr. Preethi Ramesh',
    location: 'Bangalore',
    rating: 5,
  },
  {
    id: 'venkatesh-maddur',
    quote:
      'Finding reliable contractors near Maddur used to be difficult. Ashraya built our family residence with proper soil testing, quality steel, and excellent modular kitchen fittings. Their finishing work on flooring and false ceiling is very clean.',
    clientName: 'Venkatesh Murthy',
    location: 'Maddur',
    rating: 5,
  },
  {
    id: 'anitha-bangalore',
    quote:
      'Their design team really listened to our routine and storage needs rather than pushing generic templates. The living room partition, kitchen storage, and wardrobe finishes feel durable and well thought out. Highly recommended.',
    clientName: 'Anitha Shivanna',
    location: 'Bangalore',
    rating: 5,
  },
];

export const quotes = TESTIMONIALS_DATA.map(t => [t.quote, t.clientName, t.location]);

export const TRUST_ITEMS = [
  {
    title: '10-Year Structural Warranty',
    subtitle: 'Written Indemnity Bond',
    description: 'Comprehensive structural & waterproofing guarantee across every turnkey build.',
  },
  {
    title: 'Zero Cost Overrun',
    subtitle: 'Fixed-Price Escrow BOQ',
    description: 'Locked material and labor rates upon contract sign-off with zero surprise extras.',
  },
  {
    title: 'In-House Master Team',
    subtitle: '25+ Architects & Engineers',
    description: 'Direct studio execution without fragmented third-party broker chains.',
  },
  {
    title: 'Global Tier-1 Provenance',
    subtitle: 'Blum · Schüco · Gessi · Lutron',
    description: '100% authenticated factory-direct procurement with original brand warranties.',
  },
  {
    title: '400-Point Quality Audit',
    subtitle: 'Laser & Thermal Verified',
    description: 'Mandatory stage-gate sign-offs using laser levels, moisture meters & cube tests.',
  },
  {
    title: 'On-Time Key Handover',
    subtitle: 'Penalty-Backed Schedule',
    description: 'Tracked weekly via live client portal and penalty-protected delivery dates.',
  },
];

export const trust = TRUST_ITEMS.map(t => t.title);

// Complete expedition data with real-world information
export const EXPEDITION_DATA = {
  project: {
    name: "St. Anton am Arlberg Ski Resort",
    tagline: "Luxury Experience. Smart Logistics.",
    code: "ST. ANTON AM ARLBERG SKI RESORT",
    destination: "St. Anton am Arlberg, Tyrol, Austria",
    dates: {
      start: new Date("2026-02-07"),
      end: new Date("2026-02-14"),
      duration: 7
    },
    theme: {
      primary: "Alpine Night",
      colors: {
        primary: "#dc2626", // Red (Austrian flag)
        secondary: "#1e40af", // Deep Blue
        accent: "#ffffff"
      }
    }
  },

  team: [
    {
      id: 1,
      name: "Anousone",
      role: "Expedition Leader & Financial Director",
      initial: "A",
      color: "red",
      photo: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-1/458712849_1521441301802636_1786440408738334152_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&cb2=99be929b-a592a72f&ccb=1-7&_nc_sid=e99d92&_nc_ohc=XWgXC1AkfM8Q7kNvwF7MZfl&_nc_oc=AdnMY90SO3hnKRIXjZtlfWim3SGernnNqhEYnrYoMbKQMWnoVBYnZ6eF9Il88MiNinKHrBYhAhEcV4B2NHGd4kHu&_nc_zt=24&_nc_ht=scontent-vie1-1.xx&_nc_gid=KPMD4bXlmhqephCQNeXbGA&oh=00_AfmfN-6Ooz3jtUpStkXHTY-DX1yfLsn4YDbkLMF2KjtPog&oe=693544F6",
      responsibilities: [
        "Overall expedition leadership & coordination",
        "Group wallet management (Revolut/Wise)"
      ],
      contact: "anousone@expedition.com"
    },
    {
      id: 2,
      name: "Bounsouthathip",
      role: "Logistics Lead",
      initial: "B",
      color: "blue",
      photo: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-1/465968895_3758052327790623_706774878779209971_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&cb2=99be929b-a592a72f&ccb=1-7&_nc_sid=1d2534&_nc_ohc=8cI8VaFl57oQ7kNvwGhz88v&_nc_oc=Adm6ViG1-EuIjLH57d8NInT0Vfz39snrfO4VAKhMNQ8wLuoaNoxs9OT42bHy22f7RHeDsWRzeFuC8n46yNDtUPSg&_nc_zt=24&_nc_ht=scontent-vie1-1.xx&_nc_gid=Y7hbnX8aJujbKkquZ_VSrw&oh=00_Aflb10pBgIjJV5HlUJB-rnPS8n9D-P8e2uf5_MY_NGD5Zw&oe=693559E9",
      responsibilities: [
        "Vehicle rental & management",
        "Safety checks (tires, fluids, chains)"
      ],
      contact: "bounsouthathip@expedition.com"
    },
    {
      id: 3,
      name: "Khatsady",
      role: "Navigator",
      initial: "K",
      color: "green",
      photo: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-1/503996561_2254635044933607_7934928814687320991_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&cb2=99be929b-a592a72f&ccb=1-7&_nc_sid=e99d92&_nc_ohc=VWgn5ga5saAQ7kNvwHHqRDd&_nc_oc=AdkFi3SfpfvXWX1zBS_8J1AgVxLYzy9UY1zpEjSPSeWZ3C27B7TJJjoODt9lLF5wJ5lM9MZOTbfrBlMSxGNkS7F4&_nc_zt=24&_nc_ht=scontent-vie1-1.xx&_nc_gid=Q89RGVFCTaFsX8U_im9onA&oh=00_AfkLIiIEbnNhNhF_20TuPO0IEX3UgC1ekIpn-7Cbsq_16A&oe=69356D6F",
      responsibilities: [
        "Route optimization & GPS planning",
        "Digital vignette purchases (HU/AT)"
      ],
      contact: "khatsady@expedition.com"
    },
    {
      id: 4,
      name: "Antsa",
      role: "Accommodation & Liaison Specialist",
      initial: "A",
      color: "purple",
      photo: "https://media.licdn.com/dms/image/v2/C5603AQFAdzaeBBwZlA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641913258677?e=1766620800&v=beta&t=qhwkhfqnvDSFDKaqqouRY74NNp-Qx5qWqlxy3xca02I",
      responsibilities: [
        "Accommodation coordination & booking",
        "Stakeholder communication"
      ],
      contact: "antsa@expedition.com"
    }
  ],

  logistics: {
    vehicle: {
      model: "Ford Transit Custom (or similar)",
      capacity: "9-Seater",
      rentalCompany: "Europcar",
      pickup: {
        location: "Budapest Ferenc Liszt Airport - Terminal 2",
        address: "1185 Budapest, Airport Terminal 2A/2B",
        time: "08:00 AM",
        contact: "+36 1 296 6421"
      },
      features: [
        "Zero Excess Insurance (Full Coverage)",
        "Snow Chains (Mandatory equipment)",
        "GPS Navigation System",
        "Winter Tires (Pre-installed)",
        "Roof Storage Box"
      ],
      cost: 700
    },
    
    route: {
      totalDistance: 1700,
      estimatedTime: "8-9 hours",
      waypoints: [
        {
          name: "Budapest",
          country: "Hungary",
          type: "start",
          coords: [47.4979, 19.0402],
          notes: "Departure point. Load vehicle, safety check."
        },
        {
          name: "Nickelsdorf Border",
          country: "HU/AT Border",
          type: "checkpoint",
          coords: [47.9475, 17.0783],
          highway: "M1/A4",
          distance: 60,
          notes: "Hungary-Austria border crossing. Vignette check."
        },
        {
          name: "Vienna",
          country: "Austria",
          type: "waypoint",
          coords: [48.2082, 16.3738],
          highway: "A1",
          distance: 250,
          notes: "Coffee break recommended at Rosenberger service area."
        },
        {
          name: "Salzburg",
          country: "Austria",
          type: "waypoint",
          coords: [47.8095, 13.0550],
          highway: "A1/A10",
          distance: 550,
          notes: "Lunch stop. Fuel check. Approximately halfway point."
        },
        {
          name: "Innsbruck",
          country: "Austria",
          type: "waypoint",
          coords: [47.2692, 11.4041],
          highway: "A12",
          distance: 730,
          notes: "Final major city. Weather check for mountain conditions."
        },
        {
          name: "Landeck",
          country: "Austria",
          type: "waypoint",
          coords: [47.1397, 10.5658],
          highway: "A12/S16",
          distance: 820,
          notes: "Exit to S16 Arlberg Schnellstraße. Mountain roads begin."
        },
        {
          name: "St. Anton am Arlberg",
          country: "Austria",
          type: "destination",
          coords: [47.1276, 10.2646],
          highway: "S16",
          distance: 850,
          notes: "Arrival at destination. Hotel check-in."
        }
      ],
      
      vignettes: [
        {
          country: "Hungary",
          type: "E-matrica (Digital)",
          duration: "10-day",
          cost: 15,
          validity: "Covers M1 motorway",
          purchase: "ematrica.nemzetiutdij.hu"
        },
        {
          country: "Austria",
          type: "Digital Vignette",
          duration: "10-day",
          cost: 12.80,
          validity: "Valid 18 days after purchase",
          purchase: "shop.asfinag.at"
        }
      ],
      
      fuelEstimate: {
        totalKm: 1700,
        consumption: "10 L/100km",
        totalLiters: 170,
        dieselPrice: 1.65,
        totalCost: 280
      }
    },

    accommodation: {
      name: "Hotel Garni Arlberg",
      type: "Bed & Breakfast",
      rating: 4,
      address: "Dorfstraße 88, 6580 St. Anton am Arlberg",
      coords: [47.1276, 10.2646],
      phone: "+43 5446 2242",
      email: "info@hotelgarniarlberg.at",
      features: [
        "100m from Galzigbahn gondola",
        "Complimentary breakfast buffet",
        "Ski storage & boot drying room",
        "Free WiFi & parking",
        "Wellness area with sauna"
      ],
      rooms: {
        count: 2,
        type: "Twin Rooms (2 beds each)",
        nights: 7
      },
      pricePerRoom: 850,
      totalCost: 1700,
      checkIn: "14:00",
      checkOut: "10:00"
    }
  },

  activities: {
    skiPass: {
      name: "Arlberg Ski Pass",
      duration: "6 days",
      coverage: {
        totalSlopes: "300 km",
        lifts: 85,
        regions: ["St. Anton - St. Christoph - Stuben", "Lech - Oberlech - Zürs", "Warth-Schröcken"]
      },
      pricePerPerson: 380,
      totalCost: 1520,
      purchase: "skiarlberg.at/webshop",
      validity: "February 8-13, 2026"
    },

    equipment: {
      rentalShop: {
        name: "Strolz Sport (Lech location)",
        address: "Dorf 116, 6764 Lech am Arlberg",
        phone: "+43 5583 2361",
        website: "strolz.at",
        distance: "20 km from St. Anton (in Ski Arlberg area)",
        specialty: "Custom boot fitting since 1921"
      },
      packages: [
        {
          tier: "Premium All-Mountain 7★",
          brands: ["Zai", "Stöckli", "Van Deer"],
          includes: ["High-performance skis", "Custom-fitted boots", "Premium poles", "Safety helmet"],
          dailyRate: 59,
          weeklyRate: 413,
          recommended: true
        },
        {
          tier: "Advanced 6★",
          brands: ["Black Crows", "Völkl", "Rossignol", "Atomic"],
          includes: ["All-mountain skis", "Advanced boots", "Poles", "Helmet"],
          dailyRate: 54,
          weeklyRate: 378,
          recommended: false
        },
        {
          tier: "Standard 5★",
          brands: ["Atomic", "Blizzard", "Head"],
          includes: ["Standard skis", "Comfort boots", "Poles", "Helmet"],
          dailyRate: 45,
          weeklyRate: 315,
          recommended: false
        }
      ],
      selectedTier: "Premium All-Mountain 7★",
      pricePerPerson: 150,
      totalCost: 600
    },

    dailySchedule: [
      { time: "07:30", activity: "Wake up & Breakfast", location: "Hotel Garni Arlberg", type: "meal" },
      { time: "08:45", activity: "Arrive at Lifts", location: "Galzigbahn Valley Station", type: "transport" },
      { time: "09:00", activity: "First Lift Up", location: "Galzig (2,185m)", type: "skiing" },
      { time: "09:00-12:30", activity: "Morning Ski Session", location: "High-altitude runs", type: "skiing" },
      { time: "12:30-13:30", activity: "Mountain Lunch", location: "Verwallstube or Hospiz Alm", type: "meal" },
      { time: "13:30-16:00", activity: "Afternoon Skiing", location: "Valley runs & powder zones", type: "skiing" },
      { time: "16:00-18:00", activity: "Après-Ski", location: "MooserWirt or Krazy Kanguruh", type: "social" },
      { time: "18:00-19:00", activity: "Return to Hotel & Freshen Up", location: "Hotel Garni", type: "break" },
      { time: "19:30", activity: "Dinner Reservation", location: "Village restaurant", type: "meal" },
      { time: "22:00", activity: "Rest & Recovery", location: "Hotel", type: "rest" }
    ]
  },

  dining: {
    budget: {
      perPersonPerDay: 60,
      breakdown: {
        breakfast: 0, // Included in hotel
        lunch: 20,
        dinner: 35,
        drinks: 5
      },
      totalDays: 6,
      totalPerPerson: 360,
      totalGroup: 1440
    },

    mountainRestaurants: [
      {
        name: "Hospiz Alm",
        location: "Above St. Christoph",
        altitude: "2,050m",
        type: "Mountain hut",
        specialty: "Traditional Tyrolean cuisine, famous for après-ski",
        priceRange: "€20-30 lunch, €40-60 dinner",
        booking: "Recommended for dinner",
        contact: "+43 5446 2611",
        atmosphere: "Rustic alpine, live music"
      },
      {
        name: "Verwallstube",
        location: "Accessible via Valluga lifts",
        altitude: "2,300m",
        type: "High-altitude restaurant",
        specialty: "Gourmet mountain dining",
        priceRange: "€30-50 per person",
        booking: "Walk-in for lunch",
        atmosphere: "Panoramic views, upscale"
      },
      {
        name: "Valluga Restaurant",
        location: "Valluga peak",
        altitude: "2,650m",
        type: "Summit restaurant",
        specialty: "Breathtaking 360° views",
        priceRange: "€25-40 per person",
        atmosphere: "Spectacular mountain vistas"
      }
    ],

    villageRestaurants: [
      {
        name: "Griabli Restaurant",
        address: "Dorfstraße, St. Anton",
        type: "Austrian cuisine",
        specialty: "Wiener Schnitzel, Tyrolean specialties",
        priceRange: "€25-45 per person",
        booking: "Recommended",
        contact: "+43 5446 3355"
      },
      {
        name: "Bodenalm",
        address: "Near village center",
        type: "Traditional Alpine",
        specialty: "Fondue, Raclette, local game",
        priceRange: "€30-50 per person",
        booking: "Required for groups",
        atmosphere: "Cozy, authentic"
      }
    ],

    apresSki: [
      {
        name: "MooserWirt",
        slogan: "Probably the worst ski hut on Arlberg",
        location: "On slope near St. Anton (ski-in)",
        hours: {
          lunch: "11:00 AM",
          apresSki: "3:30 PM",
          closes: "8:00 PM"
        },
        atmosphere: "Legendary party atmosphere, 2 DJs, outdoor terrace",
        music: "Schlager (German pop), party hits",
        prices: {
          beer: "€9-10 (0.5L)",
          mixedDrink: "€12-15",
          shots: "€6-8"
        },
        contact: "+43 5446 2311",
        website: "mooserwirt.at",
        mustKnow: "Arrive by 4 PM for best atmosphere. Closes at 8 PM sharp!"
      },
      {
        name: "Krazy Kanguruh",
        owner: "Mario Matt (Olympic Slalom Champion)",
        location: "Accessible via ski run 29/50",
        address: "Mooserweg 19, 6580 St. Anton",
        hours: {
          restaurant: "11:00 AM - 6:00 PM",
          bar: "Until 8:00 PM"
        },
        atmosphere: "Mountain terrace, DJ afternoons, sports champion vibe",
        food: "Burgers, regional specialties",
        specialEvents: [
          "Australia Day: January 26",
          "St. Patrick's Day: March 17"
        ],
        contact: "+43 5446 2633",
        website: "krazykanguruh.com"
      }
    ]
  },

  budget: {
    currency: "EUR",
    totalBudget: 6060,
    perPerson: 1515,
    
    breakdown: [
      {
        category: "Transport",
        items: [
          { name: "Van Rental (7 days, Full Insurance)", cost: 700 },
          { name: "Fuel (Diesel, 1700km)", cost: 280 },
          { name: "Vignettes (HU + AT)", cost: 28 },
          { name: "Parking in St. Anton", cost: 42 }
        ],
        total: 1050
      },
      {
        category: "Accommodation",
        items: [
          { name: "Hotel Garni Arlberg (2 rooms, 7 nights)", cost: 1700 }
        ],
        total: 1700
      },
      {
        category: "Activities",
        items: [
          { name: "Arlberg Ski Pass (6 days × 4 people)", cost: 1520 },
          { name: "Ski Equipment Rental (Premium tier × 4)", cost: 600 }
        ],
        total: 2120
      },
      {
        category: "Food & Dining",
        items: [
          { name: "Lunches (€20/day × 6 days × 4 people)", cost: 480 },
          { name: "Dinners (€35/day × 6 days × 4 people)", cost: 840 },
          { name: "Après-ski drinks & snacks", cost: 120 }
        ],
        total: 1440
      },
      {
        category: "Insurance & Contingency",
        items: [
          { name: "Winter Sports Insurance (4 people)", cost: 220 },
          { name: "Emergency Reserve (10% buffer)", cost: 250 }
        ],
        total: 470
      }
    ],

    comparison: {
      ourCost: 1515,
      agencyPackage: 1800,
      savings: 285,
      savingsPercent: 15.8
    },

    fundingModel: {
      type: "Self-Funded (Equal contribution)",
      contributionPerPerson: 1515,
      paymentDeadline: "January 15, 2026",
      method: "Group wallet (Revolut or Wise)"
    }
  },

  risks: [
    {
      id: "R-01",
      name: "Road Closure / Heavy Snow",
      description: "Arlberg Pass or S16 highway closes due to heavy snowfall during travel",
      probability: 20,
      impact: 300,
      priority: 60,
      category: "Environmental",
      severity: "Medium",
      mitigation: [
        "Monitor weather forecasts 48 hours prior to departure",
        "Equip van with snow chains (mandatory in Tyrol)",
        "Depart Budapest at 05:00 AM for buffer time",
        "Identify alternate routes via Fernpass",
        "Book flexible hotel check-in (late arrival option)"
      ],
      contingency: "€300 for emergency overnight stay en route",
      responsible: "Khatsady (Navigator)"
    },
    {
      id: "R-02",
      name: "Ski Injury / Medical Emergency",
      description: "Team member injured on slopes requiring medical transport or rescue",
      probability: 10,
      impact: 1500,
      priority: 150,
      category: "Safety",
      severity: "High",
      mitigation: [
        "Mandatory winter sports insurance for all 4 members",
        "Insurance must cover helicopter rescue (up to €10,000)",
        "Pre-save emergency numbers: Mountain Rescue 140, Emergency 112",
        "Carry digital insurance cards in phones",
        "Ski within ability level, avoid off-piste without guide",
        "Daily group check-in protocol"
      ],
      contingency: "Insurance covers rescue/medical costs",
      responsible: "Antsa (Insurance verification)",
      emergencyContacts: [
        "Mountain Rescue Austria: 140",
        "European Emergency: 112",
        "Krankenhaus Zams: +43 5442 600-0",
        "Innsbruck University Hospital: +43 512 504-0"
      ]
    },
    {
      id: "R-03",
      name: "Vehicle Damage",
      description: "Rental van damaged in parking garage or on icy roads",
      probability: 15,
      impact: 800,
      priority: 120,
      category: "Logistics",
      severity: "Medium",
      mitigation: [
        "Purchase 'Zero Excess' full insurance waiver from Europcar",
        "Pre-trip vehicle inspection with photos",
        "Designated driver rotation to prevent fatigue",
        "Avoid tight mountain parking (use official lots)",
        "Install snow chains before mountain sections"
      ],
      contingency: "Full insurance eliminates excess fee",
      responsible: "Bounsouthathip (Logistics Lead)"
    },
    {
      id: "R-04",
      name: "Dining Budget Overrun",
      description: "Restaurant prices exceed €60/day budget due to premium location",
      probability: 40,
      impact: 200,
      priority: 80,
      category: "Financial",
      severity: "Low",
      mitigation: [
        "Pre-book restaurants with known menu prices",
        "Choose lunch menus (€15-20) over à la carte",
        "Limit après-ski drink spending to €10/person/day",
        "Keep snack stash in van for mountain days",
        "One grocery run for breakfast supplements"
      ],
      contingency: "€250 emergency reserve covers overruns",
      responsible: "Anousone (Treasurer)"
    },
    {
      id: "R-05",
      name: "Avalanche / Lift Closure",
      description: "Lifts closed due to high avalanche risk or extreme weather",
      probability: 15,
      impact: 100,
      priority: 15,
      category: "Environmental",
      severity: "Low",
      mitigation: [
        "Check lawine.at (avalanche warnings) daily at 07:00",
        "Monitor Ski Arlberg live info for lift status",
        "Backup activities: St. Anton village exploration, wellness/spa at hotel",
        "Insurance typically doesn't cover 'bad weather' days",
        "Accept natural risk of mountain environment"
      ],
      contingency: "No financial impact (pass is multi-day)",
      responsible: "Khatsady (Daily weather monitoring)"
    }
  ],

  insurance: {
    provider: "Generali Austria",
    policyType: "Winter Sports Premium",
    coverage: {
      helicopterRescue: 10000,
      medicalExpenses: 50000,
      repatriation: "Unlimited",
      searchAndRescue: 15000,
      equipmentDamage: 1500,
      skiPassReplacement: true,
      personalLiability: 1000000
    },
    premium: {
      perPerson: 55,
      totalGroup: 220
    },
    policyNumber: "GEN-WSP-2026-ARLBERG-001",
    validFrom: "2026-02-07",
    validUntil: "2026-02-14",
    emergencyClaim: "+43 1 534 01 7777",
    website: "generali.at"
  },

  emergencyContacts: {
    austria: [
      { service: "Mountain Rescue", number: "140", available: "24/7" },
      { service: "Emergency (EU)", number: "112", available: "24/7" },
      { service: "Police", number: "133", available: "24/7" },
      { service: "Ambulance", number: "144", available: "24/7" },
      { service: "Fire Department", number: "122", available: "24/7" },
      { service: "Emergency Doctor", number: "141", available: "24/7" }
    ],
    hospitals: [
      {
        name: "Krankenhaus St. Vinzenz Zams",
        address: "Sanatoriumstraße 43, 6511 Zams",
        phone: "+43 5442 600-0",
        distance: "25 km (20 min from St. Anton)",
        services: "Emergency care, general hospital"
      },
      {
        name: "Universitätsklinik Innsbruck",
        address: "Anichstraße 35, 6020 Innsbruck",
        phone: "+43 512 504-0",
        distance: "100 km (1 hour from St. Anton)",
        services: "Major trauma center, all specialties"
      }
    ],
    embassy: {
      name: "Hungarian Embassy Vienna",
      address: "Bankgasse 4-6, 1010 Wien",
      consular: "Schenkenstraße 3, 1010 Vienna",
      phone: "+43-1-537-80-300",
      email: "mission.vie@mfa.gov.hu",
      emergency: "Check website for 24/7 emergency contact",
      website: "becs.mfa.gov.hu"
    },
    teamEmergency: {
      primary: "Antsa (Lead)",
      phone: "+36 XX XXX XXXX",
      secondary: "Bounsouthathip (Logistics)",
      phone2: "+36 XX XXX XXXX"
    }
  },

  packingList: {
    documents: [
      "Passport or EU ID Card (valid for Schengen travel)",
      "Driver's License (Category B, for all drivers)",
      "Winter Sports Insurance Policy (printed + digital)",
      "Hotel Booking Confirmation",
      "Van Rental Confirmation",
      "Ski Pass Pre-purchase Confirmation",
      "European Health Insurance Card (EHIC)",
      "Credit Cards (Visa/Mastercard widely accepted)"
    ],
    
    clothingEssentials: [
      { item: "Ski Jacket (Waterproof, Gore-Tex)", brand: "Arc'teryx Rush / Patagonia Snowdrifter", qty: 1 },
      { item: "Ski Pants (Waterproof, insulated)", brand: "The North Face Freedom / Columbia Bugaboo", qty: 1 },
      { item: "Base Layers (Merino wool)", brand: "Icebreaker / Smartwool", qty: 2 },
      { item: "Mid Layer (Fleece/Down)", brand: "Patagonia R1 / Arc'teryx Atom", qty: 1 },
      { item: "Ski Socks (Wool blend)", brand: "Smartwool PhD / Darn Tough", qty: 3 },
      { item: "Gloves/Mittens (Waterproof)", brand: "Hestra Army Leather / Black Diamond", qty: 1 },
      { item: "Neck Gaiter/Balaclava", brand: "Buff / Outdoor Research", qty: 1 },
      { item: "Beanie (Warm hat)", brand: "Any quality brand", qty: 1 },
      { item: "Après-Ski Jacket (Insulated)", brand: "Casual wear", qty: 1 },
      { item: "Evening Casual Wear", note: "For restaurants", qty: 2 }
    ],

    skiGear: [
      { item: "Ski Goggles (UV protection)", brand: "Smith I/O Mag / Oakley Flight Deck", qty: 1 },
      { item: "Sunglasses (High UV)", brand: "Category 3-4 rated", qty: 1 },
      { item: "Sunscreen SPF 50+", brand: "High-altitude formula", qty: 1 },
      { item: "Lip Balm with SPF", qty: 1 },
      { item: "Backpack (20-30L)", brand: "Dakine Heli / Osprey Kamber", note: "For on-mountain gear", qty: 1 },
      { item: "Water Bottle/Hydration", brand: "1L capacity", qty: 1 },
      { item: "Hand/Toe Warmers", note: "Chemical heat packs for extreme cold", qty: 5 }
    ],

    groupGear: [
      { item: "First Aid Kit (comprehensive)", contents: "Bandages, painkillers, blister care, antiseptic", qty: 1 },
      { item: "Snow Chains (for van)", note: "Mandatory in Tyrol", qty: 2 },
      { item: "Ice Scraper & De-icer spray", qty: 2 },
      { item: "Bluetooth Speaker", note: "For drive entertainment", qty: 1 },
      { item: "Portable Phone Chargers", brand: "Anker 20,000mAh", qty: 2 },
      { item: "Charging Cables (multi-port)", qty: 1 },
      { item: "Snack Box", contents: "Energy bars, nuts, chocolate", note: "For van and slopes" },
      { item: "Reusable Shopping Bags", qty: 2 },
      { item: "Basic Tools (screwdriver, duct tape)", note: "Emergency repairs", qty: 1 }
    ],

    toiletries: [
      "Toothbrush & toothpaste",
      "Shampoo & shower gel",
      "Deodorant",
      "Moisturizer (for dry mountain air)",
      "After-sun lotion",
      "Personal medications",
      "Contact lenses & solution (if applicable)",
      "Nail clippers, tweezers"
    ],

    optional: [
      "GoPro or action camera (for slope footage)",
      "Avalanche beacon (if planning off-piste with guide)",
      "Book or Kindle (for evening relaxation)",
      "Playing cards/travel games",
      "Yoga mat (hotel has limited space)",
      "Dry bag (for electronics in snow)"
    ]
  },

  weather: {
    february: {
      temperature: {
        valley: { high: 0, low: -7, unit: "°C" },
        midMountain: { high: -3, low: -10, unit: "°C" },
        summit: { high: -10, low: -18, unit: "°C" }
      },
      snowfall: {
        average: "60 cm new snow in February",
        baseDepth: "150-250 cm typical",
        quality: "Powder to packed powder"
      },
      sunnyDays: "12-15 days (50% of month)",
      visibility: "Generally excellent, occasional fog",
      windChill: "Can feel -15°C to -20°C at summit"
    },
    
    forecast: {
      Feb7: { condition: "Partly Cloudy", high: -2, low: -8, snow: 5, wind: 15 },
      Feb8: { condition: "Snow Showers", high: -4, low: -10, snow: 15, wind: 20 },
      Feb9: { condition: "Sunny", high: 1, low: -6, snow: 0, wind: 10 },
      Feb10: { condition: "Partly Cloudy", high: 0, low: -7, snow: 2, wind: 12 },
      Feb11: { condition: "Heavy Snow", high: -5, low: -12, snow: 25, wind: 25 },
      Feb12: { condition: "Clearing", high: -3, low: -9, snow: 5, wind: 18 },
      Feb13: { condition: "Sunny", high: 2, low: -5, snow: 0, wind: 8 },
      Feb14: { condition: "Partly Cloudy", high: 1, low: -6, snow: 0, wind: 10 }
    }
  },

  itinerary: [
    {
      day: 1,
      date: "Saturday, February 7, 2026",
      title: "Deployment: Budapest → St. Anton",
      activities: [
        { time: "05:00", activity: "Team assembly at Budapest Airport", location: "Europcar Terminal 2", type: "logistics" },
        { time: "05:30", activity: "Vehicle inspection & loading", duration: "30 min", responsible: "Bounsouthathip" },
        { time: "06:00", activity: "Departure from Budapest", route: "M1 motorway westbound" },
        { time: "07:00", activity: "Cross Hungarian-Austrian border", location: "Nickelsdorf", note: "Vignette check" },
        { time: "09:00", activity: "Coffee break", location: "Rosenberger service area, Vienna", duration: "20 min" },
        { time: "11:30", activity: "Lunch stop", location: "Salzburg (Autobahn rest area)", duration: "45 min", budget: "€15/person" },
        { time: "14:00", activity: "Fuel & safety check", location: "Innsbruck service area", responsible: "Bounsouthathip" },
        { time: "15:30", activity: "Arrive in St. Anton", location: "Hotel Garni Arlberg" },
        { time: "15:30-16:30", activity: "Hotel check-in & room setup", note: "Store luggage, freshen up" },
        { time: "17:00", activity: "Village orientation walk", note: "Locate Galzigbahn, restaurants, pharmacy" },
        { time: "19:00", activity: "Welcome dinner", location: "Griabli Restaurant", budget: "€40/person", booking: "Pre-reserved" },
        { time: "21:00", activity: "Early rest", note: "Prepare for first ski day" }
      ]
    },
    {
      day: 2,
      date: "Sunday, February 8, 2026",
      title: "First Ski Day: Orientation & Warm-up Runs",
      activities: [
        { time: "07:30", activity: "Breakfast at hotel", type: "meal", included: true },
        { time: "08:30", activity: "Walk to ski rental shop", location: "Village center (10 min walk)" },
        { time: "08:45", activity: "Equipment fitting", location: "Strolz Sport or local rental", duration: "45 min", note: "Boot fitting crucial" },
        { time: "09:30", activity: "Arrive at Galzigbahn", note: "Expect queues on Sunday" },
        { time: "09:45", activity: "First gondola up", destination: "Galzig (2,185m)" },
        { time: "10:00-12:30", activity: "Morning skiing - Blue & Red runs", area: "Gampen/Kapall sector", note: "Warm up, test equipment" },
        { time: "12:30", activity: "Mountain lunch", location: "Gampen Restaurant", budget: "€20/person" },
        { time: "13:30-16:00", activity: "Afternoon skiing", area: "St. Anton valley runs", note: "Build confidence, explore area" },
        { time: "16:00", activity: "End skiing, return equipment to hotel storage" },
        { time: "16:30-18:00", activity: "Après-ski experience", location: "Krazy Kanguruh", budget: "€15/person for drinks" },
        { time: "18:30", activity: "Return to hotel, shower & rest" },
        { time: "19:30", activity: "Dinner", location: "Bodenalm", budget: "€35/person", specialty: "Fondue night" },
        { time: "22:00", activity: "Rest & recovery" }
      ]
    },
    {
      day: 3,
      date: "Monday, February 9, 2026",
      title: "Explore Valluga & High-Altitude Skiing",
      activities: [
        { time: "07:30", activity: "Breakfast", type: "meal" },
        { time: "08:45", activity: "Galzigbahn gondola", note: "Beat Monday crowds" },
        { time: "09:15", activity: "Transfer to Vallugabahn I & II", destination: "Valluga II (2,650m)" },
        { time: "09:45-12:30", activity: "High-altitude skiing", area: "Valluga sector, advanced runs", note: "Spectacular views" },
        { time: "12:30", activity: "Lunch", location: "Valluga Restaurant", budget: "€25/person", note: "Book early for window seats" },
        { time: "13:45-16:00", activity: "Afternoon session", area: "St. Christoph connector runs", note: "Explore ski area extent" },
        { time: "16:15", activity: "LEGENDARY Après-ski", location: "MooserWirt", budget: "€20/person", note: "Arrive by 4 PM for best atmosphere!" },
        { time: "18:00", activity: "Return to hotel", note: "MooserWirt closes at 8 PM sharp" },
        { time: "19:30", activity: "Casual dinner", location: "Village pizzeria", budget: "€25/person", note: "Budget-conscious choice" },
        { time: "21:30", activity: "Optional: Village bar or early rest" }
      ]
    },
    {
      day: 4,
      date: "Tuesday, February 10, 2026",
      title: "Lech-Zürs Connection Day Trip",
      activities: [
        { time: "07:30", activity: "Breakfast & pack lunch", note: "Bring extra snacks for long day" },
        { time: "08:30", activity: "Early start - Galzigbahn", note: "Long journey to Lech" },
        { time: "09:00", activity: "Ski to St. Christoph & transfer", route: "Via Albona/Ulmer Hütte lifts" },
        { time: "10:00", activity: "Arrive in Lech am Arlberg", note: "Different atmosphere - upscale village" },
        { time: "10:30-12:30", activity: "Explore Lech slopes", area: "Rüfikopf, Zuger Hochlicht", note: "Gentler terrain, scenic" },
        { time: "12:30", activity: "Lunch", location: "Lech village (multiple options)", budget: "€30/person", note: "Premium pricing in Lech" },
        { time: "13:30-15:30", activity: "Ski Zürs area", area: "Trittkopf, Seekopf", note: "Beautiful alpine scenery" },
        { time: "15:30", activity: "Begin return journey to St. Anton", route: "Reverse morning route" },
        { time: "17:00", activity: "Arrive back in St. Anton", note: "Long but rewarding day" },
        { time: "17:30", activity: "Light après-ski", location: "Hotel bar or local café", note: "Rest legs" },
        { time: "19:30", activity: "Dinner", location: "Hotel recommendation", budget: "€30/person", note: "Tired = simple meal" },
        { time: "21:00", activity: "Early rest", note: "Legs will be tired!" }
      ]
    },
    {
      day: 5,
      date: "Wednesday, February 11, 2026",
      title: "St. Anton Deep Dive - Local Favorites",
      activities: [
        { time: "07:30", activity: "Breakfast", type: "meal" },
        { time: "08:45", activity: "Nassereinbahn alternative lift", note: "Try different access point" },
        { time: "09:15-12:00", activity: "Explore Rendl sector", area: "Nasserein side of valley", note: "Less crowded, great tree runs" },
        { time: "12:00", activity: "Lunch", location: "Hospiz Alm (finally!)", budget: "€25/person", note: "Famous spot, check it off list" },
        { time: "13:00", activity: "Après lunch atmosphere at Hospiz", duration: "30 min", note: "Enjoy the scene" },
        { time: "13:30-16:00", activity: "Free skiing", area: "Favorite runs from previous days", note: "Revisit best spots" },
        { time: "16:00", activity: "Final après", location: "MooserWirt (2nd visit)", budget: "€15/person", note: "Can't skip it!" },
        { time: "18:00", activity: "Return & freshen up" },
        { time: "19:30", activity: "Special group dinner", location: "Verwallstube or upscale option", budget: "€50/person", note: "Celebrate mid-trip" },
        { time: "22:00", activity: "Rest" }
      ]
    },
    {
      day: 6,
      date: "Thursday, February 12, 2026",
      title: "Powder Day (if fresh snow) or Free Choice",
      activities: [
        { time: "07:00", activity: "Check avalanche report & weather", url: "lawine.at", responsible: "Khatsady" },
        { time: "07:30", activity: "Breakfast", type: "meal" },
        { time: "08:30", activity: "EARLY to lifts", note: "First tracks if powder!" },
        { time: "09:00-12:30", activity: "Morning session - Off-piste or favorite runs", note: "Adapt based on conditions", warning: "Stay in-bounds unless with guide" },
        { time: "12:30", activity: "Lunch", location: "Team choice", budget: "€20/person" },
        { time: "13:30-16:00", activity: "Afternoon session", note: "Last full ski day - make it count!" },
        { time: "16:00", activity: "Après-ski farewell", location: "Krazy Kanguruh", budget: "€20/person", note: "Last après session" },
        { time: "18:00", activity: "Return equipment to rental shop", note: "Final return, check for damage fees" },
        { time: "19:00", activity: "Pack ski gear in van", responsible: "Bounsouthathip" },
        { time: "19:30", activity: "Farewell dinner", location: "Griabli or team favorite", budget: "€40/person", note: "Reflect on week" },
        { time: "21:30", activity: "Final evening in St. Anton", note: "Early-ish rest for drive day" }
      ]
    },
    {
      day: 7,
      date: "Friday, February 13, 2026",
      title: "Return Journey: St. Anton → Budapest",
      activities: [
        { time: "07:00", activity: "Final breakfast at hotel", type: "meal" },
        { time: "08:00", activity: "Hotel checkout", note: "Settle any extras, get receipts", responsible: "Anousone" },
        { time: "08:30", activity: "Load van & final vehicle check", responsible: "Bounsouthathip", note: "Full inspection for damage" },
        { time: "09:00", activity: "Depart St. Anton", route: "S16 → A12 eastbound" },
        { time: "10:30", activity: "Coffee break", location: "Innsbruck area", duration: "20 min" },
        { time: "13:00", activity: "Lunch stop", location: "Salzburg", duration: "45 min", budget: "€15/person" },
        { time: "16:00", activity: "Fuel & rest break", location: "Vienna outskirts", note: "Final Austrian stop" },
        { time: "17:00", activity: "Cross into Hungary", location: "Nickelsdorf border" },
        { time: "18:30", activity: "Arrive Budapest Airport", location: "Europcar return Terminal 2" },
        { time: "18:45", activity: "Vehicle return & inspection", duration: "20 min", note: "Check for charges" },
        { time: "19:15", activity: "Final expense settlement", responsible: "Anousone", note: "Calculate final costs, reimburse differences" },
        { time: "19:30", activity: "Depart airport for homes", note: "End of expedition" },
        { time: "20:00+", activity: "Post-trip debrief (optional)", location: "Budapest restaurant or bar", note: "Celebrate successful trip!" }
      ]
    },
    {
      day: 8,
      date: "Saturday, February 14, 2026",
      title: "Post-Expedition: Recovery & Reflection",
      activities: [
        { time: "All day", activity: "Rest & recovery", note: "Sleep in, recover from drive" },
        { time: "TBD", activity: "Expense audit & final report", responsible: "Anousone", note: "Share final numbers with team" },
        { time: "TBD", activity: "Photo sharing & memories", note: "Create shared album, relive highlights" },
        { time: "TBD", activity: "Lessons learned documentation", note: "What worked, what to improve for next trip" }
      ]
    }
  ],

  resortComparison: {
    criteria: [
      { name: "Terrain Quality", weight: 25 },
      { name: "Snow Reliability", weight: 20 },
      { name: "Après-Ski Scene", weight: 15 },
      { name: "Accessibility from Budapest", weight: 20 },
      { name: "Value for Money", weight: 20 }
    ],
    
    resorts: [
      {
        name: "St. Anton am Arlberg",
        country: "Austria",
        scores: { terrain: 95, snow: 90, apresSki: 100, accessibility: 75, value: 80 },
        total: 88,
        pros: ["Legendary après-ski", "Expert terrain", "9m average snowfall", "Arlberg ski pass covers 300km"],
        cons: ["Premium pricing", "Crowded in peak season", "Longer drive from Budapest"],
        selected: true
      },
      {
        name: "Ischgl",
        country: "Austria",
        scores: { terrain: 90, snow: 85, apresSki: 95, accessibility: 70, value: 75 },
        total: 83,
        pros: ["Great nightlife", "Modern lifts", "Duty-free shopping"],
        cons: ["More expensive than St. Anton", "Very crowded", "Party-focused"],
        selected: false
      },
      {
        name: "Chamonix",
        country: "France",
        scores: { terrain: 100, snow: 95, apresSki: 70, accessibility: 60, value: 65 },
        total: 78,
        pros: ["Best extreme terrain", "Iconic mountain", "Off-piste paradise"],
        cons: ["Much farther drive", "Higher costs", "Requires guide for best runs"],
        selected: false
      },
      {
        name: "Jasná (Low Tatras)",
        country: "Slovakia",
        scores: { terrain: 70, snow: 70, apresSki: 50, accessibility: 90, value: 95 },
        total: 75,
        pros: ["Closest to Budapest (5 hrs)", "Budget-friendly", "Decent terrain"],
        cons: ["Less snow reliability", "Limited après-ski", "Smaller ski area"],
        selected: false
      }
    ]
  },

  faq: [
    {
      question: "Do I need a visa for Austria?",
      answer: "No visa required for Hungarian citizens (Schengen Area). Valid passport or EU ID card sufficient."
    },
    {
      question: "What ski level is required?",
      answer: "Intermediate level recommended. St. Anton has beginner areas, but the resort is known for advanced terrain. Blue (easy) and red (intermediate) runs available."
    },
    {
      question: "Is travel insurance mandatory?",
      answer: "YES. Winter sports insurance covering helicopter rescue (up to €10,000) is mandatory for all participants. Cost: €55/person."
    },
    {
      question: "What happens if someone can't make it last minute?",
      answer: "Costs are split equally. If someone cancels, remaining members absorb their share or find a replacement. Book travel insurance with cancellation coverage."
    },
    {
      question: "Can we rent equipment in St. Anton instead of Lech?",
      answer: "Yes, multiple rental shops in St. Anton village (Sport Jennewein, Intersport, etc.). Strolz in Lech is premium option but not mandatory."
    },
    {
      question: "What if weather is bad and lifts close?",
      answer: "Ski pass is multi-day, so no financial loss. Backup activities: village exploration, spa/wellness at hotel, visit nearby Innsbruck (1 hour drive)."
    },
    {
      question: "Do we need snow chains?",
      answer: "Yes, mandatory equipment in Tyrol (Austria) from November 1 to April 15. Winter tires + snow chains required by law. Rental company provides."
    },
    {
      question: "Can we buy groceries to save money?",
      answer: "Yes, Spar supermarket in St. Anton village. Budget allows for this (breakfast supplements, snacks). Recommended for one shopping trip."
    },
    {
      question: "Is WiFi available?",
      answer: "Free WiFi at hotel. Most restaurants have WiFi. Mobile data: Austrian SIM cards available, or EU roaming (check Hungarian carrier rates)."
    },
    {
      question: "What if the van breaks down?",
      answer: "Europcar includes 24/7 roadside assistance. ÖAMTC (Austrian automobile club) provides emergency services. Full insurance covers towing."
    }
  ],

  localInfo: {
    language: {
      primary: "German (Tyrolean dialect)",
      english: "Widely spoken in tourist areas",
      usefulPhrases: [
        { german: "Guten Morgen", english: "Good morning", pronunciation: "GOO-ten MOR-gen" },
        { german: "Danke schön", english: "Thank you very much", pronunciation: "DAHN-kuh shurn" },
        { german: "Prost!", english: "Cheers!", pronunciation: "PROHST" },
        { german: "Die Rechnung, bitte", english: "The bill, please", pronunciation: "dee RECH-nung BIT-tuh" },
        { german: "Wo ist die Toilette?", english: "Where is the toilet?", pronunciation: "vo ist dee toi-LET-tuh" },
        { german: "Hilfe!", english: "Help!", pronunciation: "HIL-fuh" },
        { german: "Ich verstehe nicht", english: "I don't understand", pronunciation: "ikh fer-SHTAY-uh nikht" }
      ]
    },

    culture: {
      etiquette: [
        "Greet shopkeepers when entering/leaving stores ('Grüß Gott' or 'Servus')",
        "Tipping: 5-10% in restaurants (round up bill)",
        "Quiet hours: 10 PM - 6 AM in residential areas",
        "Remove shoes in hotel rooms",
        "Say 'Mahlzeit' before eating in group settings"
      ],
      skiCulture: [
        "Right of way: Downhill skier has priority",
        "Stop at side of piste, not middle",
        "Respect closed runs and avalanche warnings",
        "Après-ski starts around 3:30 PM (when lifts close)",
        "MooserWirt tradition: Stand on benches during songs (follow crowd)"
      ]
    },

    history: {
      stAnton: [
        "Founded as ski resort in 1901",
        "Birthplace of alpine skiing techniques (Hannes Schneider, Arlberg technique)",
        "Hosted Alpine World Ski Championships (1928, 1933, 1950, 1954, 2001)",
        "Site of 2016 Audi FIS Ski World Cup Finals",
        "Named after St. Anthony of Padua (14th-century hospice for travelers)"
      ],
      funFacts: [
        "St. Anton has 280 km of marked slopes in Ski Arlberg area",
        "200 km of off-piste terrain (with guide)",
        "Vertical drop of 1,507 meters from Valluga summit to village",
        "Average 9 meters of snowfall per season",
        "Over 1 million skier visits per season"
      ]
    },

    currency: {
      code: "EUR",
      symbol: "€",
      exchangeRate: {
        HUF: 400,
        USD: 1.08,
        lastUpdated: "December 2025"
      },
      cashVsCard: "Cards widely accepted. Carry €100-200 cash for small purchases, tips, emergencies."
    }
  }
};

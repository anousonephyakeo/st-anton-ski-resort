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
        "Group wallet management (Revolut/Wise)",
        "Daily budget tracking & auditing",
        "Strategic decision-making & risk management"
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
        "Safety checks (tires, fluids, chains)",
        "Primary driver (highway sections)",
        "Equipment transport coordination"
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
        "Digital vignette purchases (HU/AT)",
        "Real-time traffic & weather monitoring",
        "Alternative route preparation"
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
        "Stakeholder communication",
        "Insurance policy verification",
        "Hotel check-in/check-out management"
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
    totalBudget: 6780,
    perPerson: 1695,
    
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
      ourCost: 1695,
      agencyPackage: 2014,
      savings: 319,
      savingsPercent: 15.8
    },

    fundingModel: {
      type: "Self-Funded (Equal contribution)",
      contributionPerPerson: 1695,
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
      severity: "High",
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
      severity: "Medium",
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
        total: 87.8,
        pros: ["Legendary après-ski", "Expert terrain", "9m average snowfall", "Arlberg ski pass covers 300km"],
        cons: ["Premium pricing", "Crowded in peak season", "Longer drive from Budapest"],
        selected: true
      },
      {
        name: "Ischgl",
        country: "Austria",
        scores: { terrain: 90, snow: 85, apresSki: 95, accessibility: 70, value: 75 },
        total: 82.8,
        pros: ["Great nightlife", "Modern lifts", "Duty-free shopping"],
        cons: ["More expensive than St. Anton", "Very crowded", "Party-focused"],
        selected: false
      },
      {
        name: "Chamonix",
        country: "France",
        scores: { terrain: 100, snow: 95, apresSki: 70, accessibility: 60, value: 65 },
        total: 79.5,
        pros: ["Best extreme terrain", "Iconic mountain", "Off-piste paradise"],
        cons: ["Much farther drive", "Higher costs", "Requires guide for best runs"],
        selected: false
      },
      {
        name: "Jasná (Low Tatras)",
        country: "Slovakia",
        scores: { terrain: 70, snow: 70, apresSki: 50, accessibility: 90, value: 95 },
        total: 76,
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
  },

  projectManagement: {
    wbs: {
      description: "Work Breakdown Structure - Hierarchical decomposition of expedition tasks",
      levels: [
        {
          level: 1,
          id: "1.0",
          name: "St. Anton Ski Expedition",
          description: "Complete expedition project",
          children: [
            {
              level: 2,
              id: "1.1",
              name: "Planning & Preparation",
              description: "Pre-departure activities",
              children: [
                {
                  level: 3,
                  id: "1.1.1",
                  name: "Team Formation & Roles",
                  tasks: ["Define RACI matrix", "Assign responsibilities", "Set communication protocols"],
                  duration: "1 week",
                  responsible: "Anousone",
                  deliverable: "Team structure document"
                },
                {
                  level: 3,
                  id: "1.1.2",
                  name: "Budget Planning",
                  tasks: ["Research costs", "Create budget breakdown", "Set contingency reserves", "Establish group wallet"],
                  duration: "1 week",
                  responsible: "Anousone",
                  deliverable: "Budget plan (€6,060)"
                },
                {
                  level: 3,
                  id: "1.1.3",
                  name: "Route Planning",
                  tasks: ["Map 1,700km route", "Identify waypoints", "Purchase vignettes", "Plan fuel stops"],
                  duration: "3 days",
                  responsible: "Khatsady",
                  deliverable: "Route map with 7 waypoints"
                },
                {
                  level: 3,
                  id: "1.1.4",
                  name: "Risk Assessment",
                  tasks: ["Identify 5 major risks", "Calculate probability/impact", "Develop mitigation strategies", "Assign risk owners"],
                  duration: "4 days",
                  responsible: "All team",
                  deliverable: "Risk management plan"
                }
              ]
            },
            {
              level: 2,
              id: "1.2",
              name: "Procurement & Booking",
              description: "Vendor selection and reservations",
              children: [
                {
                  level: 3,
                  id: "1.2.1",
                  name: "Vehicle Rental",
                  tasks: ["Compare rental companies", "Book Ford Transit 9-seater", "Add full insurance", "Arrange snow chains"],
                  duration: "2 days",
                  responsible: "Bounsouthathip",
                  deliverable: "Europcar booking confirmation",
                  cost: 700
                },
                {
                  level: 3,
                  id: "1.2.2",
                  name: "Accommodation Booking",
                  tasks: ["Research hotels", "Compare prices", "Book Hotel Garni Arlberg", "Confirm 2 rooms for 7 nights"],
                  duration: "3 days",
                  responsible: "Antsa",
                  deliverable: "Hotel confirmation",
                  cost: 1700
                },
                {
                  level: 3,
                  id: "1.2.3",
                  name: "Ski Pass Purchase",
                  tasks: ["Research Arlberg pass options", "Purchase 4×6-day passes online", "Download digital passes"],
                  duration: "1 day",
                  responsible: "Anousone",
                  deliverable: "Ski pass confirmations",
                  cost: 1520
                },
                {
                  level: 3,
                  id: "1.2.4",
                  name: "Insurance Purchase",
                  tasks: ["Compare winter sports insurance", "Select Generali Austria", "Purchase 4 policies", "Verify helicopter rescue coverage"],
                  duration: "2 days",
                  responsible: "Antsa",
                  deliverable: "Insurance policies (€220 total)",
                  cost: 220
                }
              ]
            },
            {
              level: 2,
              id: "1.3",
              name: "Execution - Travel Phase",
              description: "Day 1: Budapest to St. Anton",
              children: [
                {
                  level: 3,
                  id: "1.3.1",
                  name: "Vehicle Pickup & Departure",
                  tasks: ["05:00 Team assembly", "Vehicle inspection", "Load equipment", "06:00 Depart Budapest"],
                  duration: "1 hour",
                  responsible: "Bounsouthathip",
                  deliverable: "Loaded vehicle ready"
                },
                {
                  level: 3,
                  id: "1.3.2",
                  name: "Drive to Austria",
                  tasks: ["850km highway driving", "Border crossing", "Fuel stops", "Safety breaks every 2 hours"],
                  duration: "8-9 hours",
                  responsible: "Khatsady (navigation), Bounsouthathip (driving)",
                  deliverable: "Safe arrival in St. Anton"
                },
                {
                  level: 3,
                  id: "1.3.3",
                  name: "Check-in & Orientation",
                  tasks: ["Hotel check-in", "Unload luggage", "Village orientation", "Locate lifts/restaurants"],
                  duration: "2 hours",
                  responsible: "Antsa",
                  deliverable: "Settled in accommodation"
                }
              ]
            },
            {
              level: 2,
              id: "1.4",
              name: "Execution - Skiing Phase",
              description: "Days 2-7: Skiing activities",
              children: [
                {
                  level: 3,
                  id: "1.4.1",
                  name: "Equipment Rental",
                  tasks: ["Visit Strolz Sport", "Custom boot fitting", "Rent premium 7★ skis", "Safety helmet fitting"],
                  duration: "45 min",
                  responsible: "All team",
                  deliverable: "Full ski equipment",
                  cost: 600
                },
                {
                  level: 3,
                  id: "1.4.2",
                  name: "Daily Skiing Operations",
                  tasks: ["07:30 Breakfast", "08:45 First lift", "Morning session (3.5 hrs)", "Mountain lunch", "Afternoon session (2.5 hrs)", "Après-ski", "Dinner"],
                  duration: "6 days × 14 hours/day",
                  responsible: "All team",
                  deliverable: "Completed ski days"
                },
                {
                  level: 3,
                  id: "1.4.3",
                  name: "Safety Monitoring",
                  tasks: ["Daily weather checks", "Avalanche report review", "Team check-ins", "Equipment condition monitoring"],
                  duration: "Continuous",
                  responsible: "Khatsady",
                  deliverable: "Zero safety incidents"
                },
                {
                  level: 3,
                  id: "1.4.4",
                  name: "Budget Tracking",
                  tasks: ["Record all expenses", "Daily budget reconciliation", "Receipt collection", "Wallet balance monitoring"],
                  duration: "Continuous",
                  responsible: "Anousone",
                  deliverable: "Daily expense reports"
                }
              ]
            },
            {
              level: 2,
              id: "1.5",
              name: "Execution - Return Phase",
              description: "Day 8: St. Anton to Budapest",
              children: [
                {
                  level: 3,
                  id: "1.5.1",
                  name: "Checkout & Loading",
                  tasks: ["Hotel checkout", "Settle final bills", "Load vehicle", "Equipment return verification"],
                  duration: "1.5 hours",
                  responsible: "Antsa",
                  deliverable: "Clean checkout"
                },
                {
                  level: 3,
                  id: "1.5.2",
                  name: "Return Drive",
                  tasks: ["09:00 Depart St. Anton", "850km return journey", "Fuel/meal stops", "18:30 Arrive Budapest"],
                  duration: "9.5 hours",
                  responsible: "Bounsouthathip/Khatsady",
                  deliverable: "Safe return"
                },
                {
                  level: 3,
                  id: "1.5.3",
                  name: "Vehicle Return",
                  tasks: ["Vehicle inspection", "Fuel refill", "Return to Europcar", "Final damage check"],
                  duration: "30 min",
                  responsible: "Bounsouthathip",
                  deliverable: "Closed rental agreement"
                }
              ]
            },
            {
              level: 2,
              id: "1.6",
              name: "Project Closure",
              description: "Post-expedition activities",
              children: [
                {
                  level: 3,
                  id: "1.6.1",
                  name: "Financial Reconciliation",
                  tasks: ["Final expense audit", "Calculate actual vs budget variance", "Process reimbursements", "Generate financial report"],
                  duration: "2 days",
                  responsible: "Anousone",
                  deliverable: "Final financial report"
                },
                {
                  level: 3,
                  id: "1.6.2",
                  name: "Lessons Learned",
                  tasks: ["Team debrief meeting", "Document successes/failures", "Identify improvement areas", "Archive project documents"],
                  duration: "1 day",
                  responsible: "All team",
                  deliverable: "Lessons learned document"
                },
                {
                  level: 3,
                  id: "1.6.3",
                  name: "Documentation & Sharing",
                  tasks: ["Organize photos/videos", "Create shared album", "Write trip summary", "Thank stakeholders"],
                  duration: "3 days",
                  responsible: "Antsa",
                  deliverable: "Photo album & summary"
                }
              ]
            }
          ]
        }
      ],
      totalTasks: 52,
      totalDuration: "60 days (planning) + 8 days (execution)"
    },

    ganttChart: {
      description: "Project timeline with task dependencies and critical path",
      phases: [
        {
          phase: "Planning & Preparation",
          startDate: "2025-12-07",
          endDate: "2026-01-15",
          duration: 40,
          tasks: [
            { id: "T1", name: "Team Formation & Roles", start: "2025-12-07", end: "2025-12-14", duration: 7, dependencies: [], responsible: "Anousone", progress: 100 },
            { id: "T2", name: "Budget Planning", start: "2025-12-07", end: "2025-12-14", duration: 7, dependencies: [], responsible: "Anousone", progress: 100 },
            { id: "T3", name: "Route Planning", start: "2025-12-15", end: "2025-12-18", duration: 3, dependencies: ["T1"], responsible: "Khatsady", progress: 100 },
            { id: "T4", name: "Risk Assessment", start: "2025-12-15", end: "2025-12-19", duration: 4, dependencies: ["T2"], responsible: "All", progress: 100 },
            { id: "T5", name: "Vehicle Rental Research", start: "2025-12-20", end: "2025-12-22", duration: 2, dependencies: ["T3"], responsible: "Bounsouthathip", progress: 100 },
            { id: "T6", name: "Accommodation Research", start: "2025-12-20", end: "2025-12-23", duration: 3, dependencies: ["T2"], responsible: "Antsa", progress: 100 },
            { id: "T7", name: "Insurance Purchase", start: "2026-01-05", end: "2026-01-07", duration: 2, dependencies: ["T4"], responsible: "Antsa", progress: 0 },
            { id: "T8", name: "Ski Pass Purchase", start: "2026-01-10", end: "2026-01-11", duration: 1, dependencies: ["T2"], responsible: "Anousone", progress: 0 },
            { id: "T9", name: "Final Booking Confirmations", start: "2026-01-12", end: "2026-01-15", duration: 3, dependencies: ["T5", "T6", "T7", "T8"], responsible: "All", progress: 0 }
          ]
        },
        {
          phase: "Procurement Finalization",
          startDate: "2026-01-16",
          endDate: "2026-02-06",
          duration: 21,
          tasks: [
            { id: "T10", name: "Vignette Purchase (HU/AT)", start: "2026-01-20", end: "2026-01-20", duration: 1, dependencies: ["T3"], responsible: "Khatsady", progress: 0 },
            { id: "T11", name: "Packing List Preparation", start: "2026-01-25", end: "2026-01-27", duration: 2, dependencies: ["T9"], responsible: "All", progress: 0 },
            { id: "T12", name: "Weather Monitoring (48hrs prior)", start: "2026-02-05", end: "2026-02-06", duration: 2, dependencies: [], responsible: "Khatsady", progress: 0 },
            { id: "T13", name: "Final Team Meeting", start: "2026-02-06", end: "2026-02-06", duration: 1, dependencies: ["T11", "T12"], responsible: "Anousone", progress: 0 }
          ]
        },
        {
          phase: "Execution - Day 1 (Travel)",
          startDate: "2026-02-07",
          endDate: "2026-02-07",
          duration: 1,
          tasks: [
            { id: "T14", name: "Vehicle Pickup (05:00)", start: "2026-02-07T05:00", end: "2026-02-07T05:30", duration: 0.5, dependencies: ["T13"], responsible: "Bounsouthathip", progress: 0 },
            { id: "T15", name: "Load Equipment", start: "2026-02-07T05:30", end: "2026-02-07T06:00", duration: 0.5, dependencies: ["T14"], responsible: "All", progress: 0 },
            { id: "T16", name: "Drive Budapest→St. Anton", start: "2026-02-07T06:00", end: "2026-02-07T15:30", duration: 9.5, dependencies: ["T15"], responsible: "Bounsouthathip", progress: 0 },
            { id: "T17", name: "Hotel Check-in", start: "2026-02-07T15:30", end: "2026-02-07T16:30", duration: 1, dependencies: ["T16"], responsible: "Antsa", progress: 0 },
            { id: "T18", name: "Village Orientation", start: "2026-02-07T17:00", end: "2026-02-07T18:00", duration: 1, dependencies: ["T17"], responsible: "All", progress: 0 }
          ]
        },
        {
          phase: "Execution - Days 2-7 (Skiing)",
          startDate: "2026-02-08",
          endDate: "2026-02-13",
          duration: 6,
          tasks: [
            { id: "T19", name: "Equipment Rental (Day 2)", start: "2026-02-08T08:30", end: "2026-02-08T09:15", duration: 0.75, dependencies: ["T18"], responsible: "All", progress: 0 },
            { id: "T20", name: "Skiing Day 2 (Orientation)", start: "2026-02-08", end: "2026-02-08", duration: 1, dependencies: ["T19"], responsible: "All", progress: 0 },
            { id: "T21", name: "Skiing Day 3 (Valluga)", start: "2026-02-09", end: "2026-02-09", duration: 1, dependencies: ["T20"], responsible: "All", progress: 0 },
            { id: "T22", name: "Skiing Day 4 (Lech-Zürs)", start: "2026-02-10", end: "2026-02-10", duration: 1, dependencies: ["T21"], responsible: "All", progress: 0 },
            { id: "T23", name: "Skiing Day 5 (Rendl)", start: "2026-02-11", end: "2026-02-11", duration: 1, dependencies: ["T22"], responsible: "All", progress: 0 },
            { id: "T24", name: "Skiing Day 6 (Powder/Free)", start: "2026-02-12", end: "2026-02-12", duration: 1, dependencies: ["T23"], responsible: "All", progress: 0 },
            { id: "T25", name: "Skiing Day 7 (Final)", start: "2026-02-13", end: "2026-02-13", duration: 1, dependencies: ["T24"], responsible: "All", progress: 0 },
            { id: "T26", name: "Equipment Return", start: "2026-02-13T18:00", end: "2026-02-13T19:00", duration: 1, dependencies: ["T25"], responsible: "All", progress: 0 }
          ]
        },
        {
          phase: "Execution - Day 8 (Return)",
          startDate: "2026-02-14",
          endDate: "2026-02-14",
          duration: 1,
          tasks: [
            { id: "T27", name: "Hotel Checkout", start: "2026-02-14T08:00", end: "2026-02-14T08:30", duration: 0.5, dependencies: ["T26"], responsible: "Antsa", progress: 0 },
            { id: "T28", name: "Load Vehicle", start: "2026-02-14T08:30", end: "2026-02-14T09:00", duration: 0.5, dependencies: ["T27"], responsible: "All", progress: 0 },
            { id: "T29", name: "Drive St. Anton→Budapest", start: "2026-02-14T09:00", end: "2026-02-14T18:30", duration: 9.5, dependencies: ["T28"], responsible: "Bounsouthathip", progress: 0 },
            { id: "T30", name: "Vehicle Return", start: "2026-02-14T18:30", end: "2026-02-14T19:00", duration: 0.5, dependencies: ["T29"], responsible: "Bounsouthathip", progress: 0 }
          ]
        },
        {
          phase: "Project Closure",
          startDate: "2026-02-15",
          endDate: "2026-02-20",
          duration: 5,
          tasks: [
            { id: "T31", name: "Financial Reconciliation", start: "2026-02-15", end: "2026-02-17", duration: 2, dependencies: ["T30"], responsible: "Anousone", progress: 0 },
            { id: "T32", name: "Lessons Learned Debrief", start: "2026-02-17", end: "2026-02-18", duration: 1, dependencies: ["T31"], responsible: "All", progress: 0 },
            { id: "T33", name: "Photo/Documentation Sharing", start: "2026-02-17", end: "2026-02-20", duration: 3, dependencies: ["T30"], responsible: "Antsa", progress: 0 }
          ]
        }
      ],
      criticalPath: ["T1", "T2", "T4", "T7", "T9", "T13", "T14", "T15", "T16", "T17", "T18", "T19", "T20", "T21", "T22", "T23", "T24", "T25", "T26", "T27", "T28", "T29", "T30", "T31"],
      totalDuration: 75,
      criticalPathDuration: 75
    },

    pertCpm: {
      description: "PERT/CPM Network Analysis with Critical Path Method",
      activities: [
        { id: "A", name: "Team Formation", duration: 7, optimistic: 5, mostLikely: 7, pessimistic: 10, expectedTime: 7.2, variance: 0.69, predecessors: [], successors: ["C"] },
        { id: "B", name: "Budget Planning", duration: 7, optimistic: 5, mostLikely: 7, pessimistic: 12, expectedTime: 7.5, variance: 1.36, predecessors: [], successors: ["D", "F", "H"] },
        { id: "C", name: "Route Planning", duration: 3, optimistic: 2, mostLikely: 3, pessimistic: 5, expectedTime: 3.2, variance: 0.25, predecessors: ["A"], successors: ["E", "J"] },
        { id: "D", name: "Risk Assessment", duration: 4, optimistic: 3, mostLikely: 4, pessimistic: 6, expectedTime: 4.2, variance: 0.25, predecessors: ["B"], successors: ["G"] },
        { id: "E", name: "Vehicle Rental Booking", duration: 2, optimistic: 1, mostLikely: 2, pessimistic: 4, expectedTime: 2.2, variance: 0.25, predecessors: ["C"], successors: ["I"] },
        { id: "F", name: "Accommodation Booking", duration: 3, optimistic: 2, mostLikely: 3, pessimistic: 5, expectedTime: 3.2, variance: 0.25, predecessors: ["B"], successors: ["I"] },
        { id: "G", name: "Insurance Purchase", duration: 2, optimistic: 1, mostLikely: 2, pessimistic: 3, expectedTime: 2, variance: 0.11, predecessors: ["D"], successors: ["I"] },
        { id: "H", name: "Ski Pass Purchase", duration: 1, optimistic: 1, mostLikely: 1, pessimistic: 2, expectedTime: 1.2, variance: 0.03, predecessors: ["B"], successors: ["I"] },
        { id: "I", name: "Final Confirmations", duration: 3, optimistic: 2, mostLikely: 3, pessimistic: 5, expectedTime: 3.2, variance: 0.25, predecessors: ["E", "F", "G", "H"], successors: ["J", "K"] },
        { id: "J", name: "Vignette Purchase", duration: 1, optimistic: 1, mostLikely: 1, pessimistic: 1, expectedTime: 1, variance: 0, predecessors: ["C", "I"], successors: ["M"] },
        { id: "K", name: "Packing Preparation", duration: 2, optimistic: 1, mostLikely: 2, pessimistic: 4, expectedTime: 2.2, variance: 0.25, predecessors: ["I"], successors: ["M"] },
        { id: "L", name: "Weather Monitoring", duration: 2, optimistic: 2, mostLikely: 2, pessimistic: 2, expectedTime: 2, variance: 0, predecessors: [], successors: ["M"] },
        { id: "M", name: "Final Team Meeting", duration: 1, optimistic: 0.5, mostLikely: 1, pessimistic: 2, expectedTime: 1.1, variance: 0.06, predecessors: ["J", "K", "L"], successors: ["N"] },
        { id: "N", name: "Travel Day (Budapest→St. Anton)", duration: 1, optimistic: 1, mostLikely: 1, pessimistic: 1.5, expectedTime: 1.1, variance: 0.01, predecessors: ["M"], successors: ["O"] },
        { id: "O", name: "Skiing Phase (6 days)", duration: 6, optimistic: 6, mostLikely: 6, pessimistic: 7, expectedTime: 6.2, variance: 0.03, predecessors: ["N"], successors: ["P"] },
        { id: "P", name: "Return Day (St. Anton→Budapest)", duration: 1, optimistic: 1, mostLikely: 1, pessimistic: 1.5, expectedTime: 1.1, variance: 0.01, predecessors: ["O"], successors: ["Q"] },
        { id: "Q", name: "Financial Reconciliation", duration: 2, optimistic: 1, mostLikely: 2, pessimistic: 4, expectedTime: 2.2, variance: 0.25, predecessors: ["P"], successors: ["R"] },
        { id: "R", name: "Lessons Learned & Documentation", duration: 3, optimistic: 2, mostLikely: 3, pessimistic: 5, expectedTime: 3.2, variance: 0.25, predecessors: ["Q"], successors: [] }
      ],
      criticalPath: ["B", "D", "G", "I", "M", "N", "O", "P", "Q", "R"],
      criticalPathLength: 40.9,
      totalProjectDuration: {
        optimistic: 35,
        mostLikely: 41,
        pessimistic: 52,
        expected: 40.9,
        standardDeviation: 2.83
      },
      probabilityAnalysis: {
        completionIn38Days: "24%",
        completionIn41Days: "52%",
        completionIn44Days: "86%",
        completionIn47Days: "98%"
      },
      slackAnalysis: [
        { activity: "A", earlyStart: 0, earlyFinish: 7.2, lateStart: 1.5, lateFinish: 8.7, totalSlack: 1.5, freeSlack: 1.5, critical: false },
        { activity: "B", earlyStart: 0, earlyFinish: 7.5, lateStart: 0, lateFinish: 7.5, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "C", earlyStart: 7.2, earlyFinish: 10.4, lateStart: 8.7, lateFinish: 11.9, totalSlack: 1.5, freeSlack: 0, critical: false },
        { activity: "D", earlyStart: 7.5, earlyFinish: 11.7, lateStart: 7.5, lateFinish: 11.7, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "E", earlyStart: 10.4, earlyFinish: 12.6, lateStart: 11.9, lateFinish: 14.1, totalSlack: 1.5, freeSlack: 1.1, critical: false },
        { activity: "F", earlyStart: 7.5, earlyFinish: 10.7, lateStart: 11.4, lateFinish: 14.6, totalSlack: 3.9, freeSlack: 3.5, critical: false },
        { activity: "G", earlyStart: 11.7, earlyFinish: 13.7, lateStart: 11.7, lateFinish: 13.7, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "H", earlyStart: 7.5, earlyFinish: 8.7, lateStart: 13.6, lateFinish: 14.8, totalSlack: 6.1, freeSlack: 5.5, critical: false },
        { activity: "I", earlyStart: 13.7, earlyFinish: 16.9, lateStart: 13.7, lateFinish: 16.9, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "J", earlyStart: 16.9, earlyFinish: 17.9, lateStart: 21.7, lateFinish: 22.7, totalSlack: 4.8, freeSlack: 4.8, critical: false },
        { activity: "K", earlyStart: 16.9, earlyFinish: 19.1, lateStart: 20.5, lateFinish: 22.7, totalSlack: 3.6, freeSlack: 3.6, critical: false },
        { activity: "L", earlyStart: 0, earlyFinish: 2, lateStart: 20.7, lateFinish: 22.7, totalSlack: 20.7, freeSlack: 20.7, critical: false },
        { activity: "M", earlyStart: 22.7, earlyFinish: 23.8, lateStart: 22.7, lateFinish: 23.8, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "N", earlyStart: 23.8, earlyFinish: 24.9, lateStart: 23.8, lateFinish: 24.9, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "O", earlyStart: 24.9, earlyFinish: 31.1, lateStart: 24.9, lateFinish: 31.1, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "P", earlyStart: 31.1, earlyFinish: 32.2, lateStart: 31.1, lateFinish: 32.2, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "Q", earlyStart: 32.2, earlyFinish: 34.4, lateStart: 32.2, lateFinish: 34.4, totalSlack: 0, freeSlack: 0, critical: true },
        { activity: "R", earlyStart: 34.4, earlyFinish: 37.6, lateStart: 34.4, lateFinish: 37.6, totalSlack: 0, freeSlack: 0, critical: true }
      ]
    },

    kpis: {
      description: "Key Performance Indicators for project success measurement",
      categories: [
        {
          category: "Financial Performance",
          indicators: [
            {
              name: "Budget Variance",
              target: "≤5% over planned budget",
              baseline: "€6,060 planned",
              measurement: "(Actual Cost - Planned Cost) / Planned Cost × 100%",
              frequency: "Daily during execution, final at project close",
              responsible: "Anousone",
              successCriteria: "Variance between -5% and +5%",
              currentStatus: "On track (planning phase)"
            },
            {
              name: "Cost per Person",
              target: "€1,515 ± €75",
              baseline: "€1,515 per person",
              measurement: "Total expedition cost / 4 people",
              frequency: "Weekly during planning, daily during execution",
              responsible: "Anousone",
              successCriteria: "≤€1,590 per person",
              currentStatus: "On track"
            },
            {
              name: "Savings vs Agency Package",
              target: "≥5% savings",
              baseline: "€285 total savings (15.8% vs €1,800 agency rate)",
              measurement: "(Agency Rate - Our Cost) / Agency Rate × 100%",
              frequency: "Final measurement at project close",
              responsible: "Anousone",
              successCriteria: "≥€200 total savings",
              currentStatus: "Projected 15.8% savings"
            }
          ]
        },
        {
          category: "Schedule Performance",
          indicators: [
            {
              name: "Planning Phase Completion",
              target: "100% by January 15, 2026",
              baseline: "40-day planning phase",
              measurement: "Tasks completed / Total planning tasks × 100%",
              frequency: "Weekly",
              responsible: "All team",
              successCriteria: "All bookings confirmed by Jan 15",
              currentStatus: "65% complete (Dec 3, 2025)"
            },
            {
              name: "On-time Arrival",
              target: "Arrive St. Anton by 16:00 on Feb 7",
              baseline: "15:30 planned arrival",
              measurement: "Actual arrival time vs planned",
              frequency: "Single measurement on Feb 7",
              responsible: "Khatsady/Bounsouthathip",
              successCriteria: "Arrive before 17:00",
              currentStatus: "Not yet executed"
            },
            {
              name: "Ski Days Completed",
              target: "6 full ski days (Feb 8-13)",
              baseline: "6 days planned",
              measurement: "Days with ≥5 hours skiing / 6 planned days",
              frequency: "Daily during ski phase",
              responsible: "All team",
              successCriteria: "≥5 days completed",
              currentStatus: "Not yet executed"
            }
          ]
        },
        {
          category: "Safety & Risk Management",
          indicators: [
            {
              name: "Zero Major Incidents",
              target: "0 hospitalizations or rescues",
              baseline: "Zero tolerance for major incidents",
              measurement: "Count of incidents requiring medical intervention",
              frequency: "Daily monitoring",
              responsible: "All team (Khatsady leads monitoring)",
              successCriteria: "0 major incidents, ≤1 minor injury",
              currentStatus: "Not yet executed"
            },
            {
              name: "Insurance Compliance",
              target: "100% team coverage",
              baseline: "4 winter sports insurance policies required",
              measurement: "Insured members / Total members × 100%",
              frequency: "Verified before departure",
              responsible: "Antsa",
              successCriteria: "4/4 policies active",
              currentStatus: "To be completed by Jan 7"
            },
            {
              name: "Risk Mitigation Effectiveness",
              target: "≥80% of identified risks mitigated",
              baseline: "5 major risks identified",
              measurement: "Risks with mitigation actions / Total risks × 100%",
              frequency: "Weekly review",
              responsible: "All team (assigned risk owners)",
              successCriteria: "All 5 risks have active mitigation",
              currentStatus: "100% planned, awaiting execution"
            }
          ]
        },
        {
          category: "Quality & Satisfaction",
          indicators: [
            {
              name: "Team Satisfaction Score",
              target: "≥8/10 average rating",
              baseline: "Post-expedition survey (1-10 scale)",
              measurement: "Average of 4 team member satisfaction ratings",
              frequency: "Single measurement post-expedition",
              responsible: "Antsa",
              successCriteria: "All members rate ≥7/10",
              currentStatus: "Survey to be conducted Feb 15"
            },
            {
              name: "Equipment Quality",
              target: "Premium tier (7★) for all members",
              baseline: "Strolz premium equipment package",
              measurement: "Equipment tier received vs planned",
              frequency: "Verified on Feb 8 (rental day)",
              responsible: "All team",
              successCriteria: "All receive 7★ or equivalent",
              currentStatus: "Booked premium tier"
            },
            {
              name: "Accommodation Quality",
              target: "4-star hotel, 100m from lifts",
              baseline: "Hotel Garni Arlberg (4-star, 100m from Galzigbahn)",
              measurement: "Actual hotel rating and distance",
              frequency: "Verified at check-in",
              responsible: "Antsa",
              successCriteria: "≥4-star, ≤200m from lifts",
              currentStatus: "Hotel confirmed"
            }
          ]
        },
        {
          category: "Operational Efficiency",
          indicators: [
            {
              name: "Vehicle Fuel Efficiency",
              target: "≤10L/100km average consumption",
              baseline: "Planned: 10L/100km, €280 fuel budget",
              measurement: "Total liters / Total km × 100",
              frequency: "Measured at each fuel stop, final on Feb 14",
              responsible: "Bounsouthathip",
              successCriteria: "≤€300 total fuel cost",
              currentStatus: "Not yet executed"
            },
            {
              name: "Daily Budget Adherence",
              target: "≤€60/person/day for meals",
              baseline: "€1,440 total dining budget (6 days × 4 people × €60)",
              measurement: "Daily meal expenses vs budget",
              frequency: "Daily reconciliation",
              responsible: "Anousone",
              successCriteria: "≤€65/person/day average",
              currentStatus: "Not yet executed"
            },
            {
              name: "Booking Conversion Rate",
              target: "100% confirmed bookings",
              baseline: "4 major bookings (vehicle, hotel, passes, insurance)",
              measurement: "Confirmed bookings / Required bookings × 100%",
              frequency: "Weekly during procurement phase",
              responsible: "Assigned owners per booking",
              successCriteria: "4/4 confirmed by Jan 15",
              currentStatus: "4/4 researched, awaiting final confirmations"
            }
          ]
        }
      ],
      dashboard: {
        overallProjectHealth: "Green (On track)",
        completionPercentage: 65,
        budgetStatus: "Within budget (planning phase)",
        scheduleStatus: "On schedule",
        riskStatus: "5 risks identified, all have mitigation plans"
      }
    },

    controlPoints: {
      description: "Project control points and monitoring milestones",
      checkpoints: [
        {
          id: "CP1",
          name: "Planning Phase Completion",
          date: "2026-01-15",
          criteria: [
            "All team roles assigned and documented",
            "Budget approved at €6,060 total",
            "Route planned with 7 waypoints",
            "5 risks identified with mitigation strategies"
          ],
          deliverables: ["Team RACI matrix", "Budget spreadsheet", "Route map", "Risk register"],
          responsible: "Anousone",
          status: "In Progress",
          gateApproval: "Required before procurement"
        },
        {
          id: "CP2",
          name: "Procurement Completion",
          date: "2026-01-15",
          criteria: [
            "Vehicle rental confirmed (Europcar, Ford Transit)",
            "Hotel booking confirmed (Hotel Garni Arlberg, 2 rooms, 7 nights)",
            "Ski passes purchased (4×6-day Arlberg passes)",
            "Insurance policies active (Generali Austria, 4 policies)"
          ],
          deliverables: ["Rental confirmation", "Hotel voucher", "Ski pass vouchers", "Insurance certificates"],
          responsible: "All team (assigned per task)",
          status: "Pending",
          gateApproval: "Required before final preparations"
        },
        {
          id: "CP3",
          name: "Pre-Departure Readiness",
          date: "2026-02-06",
          criteria: [
            "All packing completed per packing list",
            "Vignettes purchased and activated (HU/AT)",
            "Weather forecast reviewed (48-hour)",
            "Final team briefing conducted",
            "Group wallet loaded with €1,500 cash/card"
          ],
          deliverables: ["Packing checklist (signed)", "Digital vignettes", "Weather report", "Briefing notes"],
          responsible: "All team",
          status: "Not Started",
          gateApproval: "Go/No-Go decision for departure"
        },
        {
          id: "CP4",
          name: "Safe Arrival in St. Anton",
          date: "2026-02-07 16:00",
          criteria: [
            "Team arrived safely (no accidents/delays >2hrs)",
            "Vehicle undamaged",
            "Hotel check-in completed",
            "Village orientation completed"
          ],
          deliverables: ["Arrival confirmation", "Vehicle condition report", "Hotel room keys"],
          responsible: "Antsa",
          status: "Not Started",
          gateApproval: "Proceed to skiing phase"
        },
        {
          id: "CP5",
          name: "Mid-Expedition Review",
          date: "2026-02-10 20:00",
          criteria: [
            "3 ski days completed successfully",
            "Budget tracking current (no >10% variance)",
            "Zero major safety incidents",
            "Team morale positive (informal check)"
          ],
          deliverables: ["Expense report (Days 1-3)", "Safety log", "Team feedback"],
          responsible: "Anousone",
          status: "Not Started",
          gateApproval: "Continue or adjust plan"
        },
        {
          id: "CP6",
          name: "Skiing Phase Completion",
          date: "2026-02-13 18:00",
          criteria: [
            "6 ski days completed (or 5 if weather prevented 1 day)",
            "All equipment returned undamaged",
            "No outstanding injuries requiring follow-up",
            "Final night accommodation costs settled"
          ],
          deliverables: ["Equipment return receipt", "Final hotel bill", "Safety incident report"],
          responsible: "All team",
          status: "Not Started",
          gateApproval: "Proceed to return journey"
        },
        {
          id: "CP7",
          name: "Safe Return to Budapest",
          date: "2026-02-14 19:00",
          criteria: [
            "Team returned safely to Budapest",
            "Vehicle returned to Europcar (no damage charges)",
            "All personal belongings accounted for",
            "No outstanding vendor bills"
          ],
          deliverables: ["Vehicle return receipt", "Final fuel receipt", "Team headcount"],
          responsible: "Bounsouthathip",
          status: "Not Started",
          gateApproval: "Proceed to project closure"
        },
        {
          id: "CP8",
          name: "Financial Reconciliation",
          date: "2026-02-17",
          criteria: [
            "All expenses recorded and categorized",
            "Final budget variance calculated",
            "Reimbursements processed (if any)",
            "Financial report approved by all team members"
          ],
          deliverables: ["Final expense report", "Budget variance analysis", "Reimbursement receipts"],
          responsible: "Anousone",
          status: "Not Started",
          gateApproval: "Financial closure approved"
        },
        {
          id: "CP9",
          name: "Project Closure",
          date: "2026-02-20",
          criteria: [
            "Lessons learned document completed",
            "Photo/video archive shared with team",
            "Final project summary written",
            "All stakeholders thanked (vendors, contacts)"
          ],
          deliverables: ["Lessons learned doc", "Photo album link", "Project summary", "Thank-you emails"],
          responsible: "All team (Antsa coordinates)",
          status: "Not Started",
          gateApproval: "Project officially closed"
        }
      ],
      monitoringFrequency: {
        planning: "Weekly team meetings",
        procurement: "Daily status updates via chat",
        execution: "Daily evening debriefs (20:00)",
        closure: "Milestone-based reviews"
      }
    },

    vendorAnalysis: {
      description: "Competitive bidding and vendor selection process",
      categories: [
        {
          category: "Vehicle Rental",
          criteria: [
            { name: "Price (7 days, 9-seater)", weight: 30 },
            { name: "Insurance Coverage", weight: 25 },
            { name: "Snow Equipment Included", weight: 20 },
            { name: "Pickup Location Convenience", weight: 15 },
            { name: "Company Reputation", weight: 10 }
          ],
          vendors: [
            {
              name: "Europcar",
              scores: { price: 85, insurance: 95, snow: 90, location: 100, reputation: 90 },
              total: 90,
              details: {
                price: "€700 (Ford Transit Custom 9-seater)",
                insurance: "Zero Excess available (full coverage)",
                snow: "Snow chains + winter tires included",
                location: "Budapest Airport Terminal 2 (convenient)",
                reputation: "International brand, reliable"
              },
              selected: true,
              reason: "Best overall value, full coverage, airport pickup"
            },
            {
              name: "Sixt",
              scores: { price: 75, insurance: 90, snow: 85, location: 100, reputation: 95 },
              total: 85,
              details: {
                price: "€780 (Mercedes Vito 9-seater)",
                insurance: "Premium protection available",
                snow: "Winter tires included, chains €40 extra",
                location: "Budapest Airport Terminal 2B",
                reputation: "Premium brand, excellent service"
              },
              selected: false,
              reason: "€80 more expensive, snow chains extra cost"
            },
            {
              name: "Budget Rent a Car",
              scores: { price: 95, insurance: 70, snow: 60, location: 90, reputation: 70 },
              total: 77,
              details: {
                price: "€620 (Fiat Ducato 9-seater)",
                insurance: "Basic coverage, high excess (€1,200)",
                snow: "Winter tires only, chains not guaranteed",
                location: "Budapest Airport (off-terminal shuttle)",
                reputation: "Budget brand, mixed reviews"
              },
              selected: false,
              reason: "Lower price but insufficient insurance/snow equipment"
            }
          ],
          decision: "Europcar selected for optimal balance of cost, coverage, and convenience"
        },
        {
          category: "Accommodation",
          criteria: [
            { name: "Price (2 rooms, 7 nights)", weight: 30 },
            { name: "Distance to Lifts", weight: 25 },
            { name: "Breakfast Included", weight: 20 },
            { name: "Amenities (Ski storage, WiFi)", weight: 15 },
            { name: "Guest Reviews", weight: 10 }
          ],
          vendors: [
            {
              name: "Hotel Garni Arlberg",
              scores: { price: 80, distance: 100, breakfast: 100, amenities: 90, reviews: 90 },
              total: 90,
              details: {
                price: "€1,700 (€850/room × 2 rooms, 7 nights)",
                distance: "100m from Galzigbahn gondola (ski-in access)",
                breakfast: "Complimentary buffet breakfast included",
                amenities: "Ski storage, boot dryer, sauna, free WiFi & parking",
                reviews: "4.5/5 on Booking.com (excellent location)"
              },
              selected: true,
              reason: "Best location (100m to lifts), breakfast included, great value"
            },
            {
              name: "Hotel Schwarzer Adler",
              scores: { price: 60, distance: 80, breakfast: 100, amenities: 95, reviews: 95 },
              total: 82,
              details: {
                price: "€2,100 (€1,050/room × 2 rooms, 7 nights)",
                distance: "300m from village center (5-min walk to lifts)",
                breakfast: "Gourmet breakfast buffet included",
                amenities: "Luxury spa, ski storage, Michelin-starred restaurant",
                reviews: "4.8/5 on Booking.com (luxury property)"
              },
              selected: false,
              reason: "€400 over budget, farther from lifts despite luxury amenities"
            },
            {
              name: "Pension St. Anton",
              scores: { price: 95, distance: 70, breakfast: 80, amenities: 60, reviews: 75 },
              total: 78,
              details: {
                price: "€1,400 (€700/room × 2 rooms, 7 nights)",
                distance: "500m from lifts (10-min walk)",
                breakfast: "Simple continental breakfast (€10/person extra)",
                amenities: "Basic ski storage, WiFi, no parking",
                reviews: "4.0/5 on Booking.com (good value, basic)"
              },
              selected: false,
              reason: "Saves €300 but inconvenient distance, breakfast not included"
            }
          ],
          decision: "Hotel Garni Arlberg selected for unbeatable location and included breakfast"
        },
        {
          category: "Ski Equipment Rental",
          criteria: [
            { name: "Price (4 people, 6 days)", weight: 30 },
            { name: "Equipment Quality", weight: 30 },
            { name: "Boot Fitting Service", weight: 20 },
            { name: "Location Convenience", weight: 10 },
            { name: "Brand Selection", weight: 10 }
          ],
          vendors: [
            {
              name: "Strolz Sport (Lech)",
              scores: { price: 70, quality: 100, fitting: 100, location: 70, brands: 95 },
              total: 87,
              details: {
                price: "€600 (€150/person, Premium 7★ tier)",
                quality: "Premium all-mountain skis (Zai, Stöckli, Van Deer)",
                fitting: "Custom boot fitting since 1921 (legendary service)",
                location: "20km from St. Anton in Lech (in Ski Arlberg area)",
                brands: "Top-tier brands, race-level equipment"
              },
              selected: true,
              reason: "World-renowned boot fitting, premium equipment justifies slight premium"
            },
            {
              name: "Sport Jennewein (St. Anton Village)",
              scores: { price: 85, quality: 85, fitting: 80, location: 100, brands: 85 },
              total: 86,
              details: {
                price: "€520 (€130/person, Advanced 6★ tier)",
                quality: "Advanced skis (Atomic, Rossignol, Völkl)",
                fitting: "Professional boot fitting available",
                location: "In St. Anton village (5-min walk from hotel)",
                brands: "Major brands, good selection"
              },
              selected: false,
              reason: "€80 savings not worth compromising on Strolz fitting expertise"
            },
            {
              name: "Intersport Arlberg",
              scores: { price: 90, quality: 75, fitting: 70, location: 95, brands: 80 },
              total: 81,
              details: {
                price: "€480 (€120/person, Standard 5★ tier)",
                quality: "Standard all-mountain skis (Atomic, Head, Blizzard)",
                fitting: "Basic fitting service",
                location: "In St. Anton village center",
                brands: "Standard brands, entry-level to intermediate"
              },
              selected: false,
              reason: "€120 savings but lower equipment quality for advanced terrain"
            }
          ],
          decision: "Strolz Sport selected for legendary boot fitting (critical for comfort) and premium equipment"
        },
        {
          category: "Travel Insurance",
          criteria: [
            { name: "Price (4 people, 8 days)", weight: 25 },
            { name: "Helicopter Rescue Coverage", weight: 30 },
            { name: "Medical Coverage Limit", weight: 25 },
            { name: "Claims Reputation", weight: 15 },
            { name: "Policy Flexibility", weight: 5 }
          ],
          vendors: [
            {
              name: "Generali Austria",
              scores: { price: 80, helicopter: 100, medical: 100, claims: 90, flexibility: 85 },
              total: 92,
              details: {
                price: "€220 (€55/person, 8-day winter sports premium)",
                helicopter: "€10,000 helicopter rescue coverage (Alps standard)",
                medical: "€50,000 medical expenses + unlimited repatriation",
                claims: "Fast claims processing, Austria-based support",
                flexibility: "Covers off-piste with guide, ski pass replacement"
              },
              selected: true,
              reason: "Comprehensive coverage, Austria-based for local support, excellent reputation"
            },
            {
              name: "Allianz Global Assistance",
              scores: { price: 85, helicopter: 95, medical: 95, claims: 95, flexibility: 80 },
              total: 90,
              details: {
                price: "€200 (€50/person, 8-day winter sports)",
                helicopter: "€8,000 helicopter rescue coverage",
                medical: "€40,000 medical expenses + repatriation",
                claims: "International support, 24/7 hotline",
                flexibility: "Off-piste covered with restrictions"
              },
              selected: false,
              reason: "€20 savings but lower helicopter/medical limits (risky in Alps)"
            },
            {
              name: "World Nomads",
              scores: { price: 70, helicopter: 80, medical: 85, claims: 80, flexibility: 90 },
              total: 80,
              details: {
                price: "€280 (€70/person, 8-day adventure sports)",
                helicopter: "€5,000 rescue coverage (insufficient for Alps)",
                medical: "€35,000 medical expenses",
                claims: "Online claims, variable processing times",
                flexibility: "Very flexible, covers most adventure sports"
              },
              selected: false,
              reason: "€60 more expensive, insufficient helicopter coverage for St. Anton terrain"
            }
          ],
          decision: "Generali Austria selected for optimal coverage in Austrian Alps with local support"
        }
      ],
      prequalificationCriteria: {
        vehicleRental: [
          "Must operate at Budapest Airport for convenient pickup",
          "Must offer 9-seater capacity vehicles",
          "Must provide winter equipment (chains, tires)",
          "Must have full insurance (zero excess) option",
          "Minimum 3.5/5 rating on TrustPilot or equivalent"
        ],
        accommodation: [
          "Must be within 500m of ski lifts",
          "Must accommodate 4 people (2 twin rooms minimum)",
          "Must have ski storage and boot drying facilities",
          "Minimum 3.5-star rating",
          "Minimum 4.0/5 guest review score"
        ],
        equipment: [
          "Must offer premium equipment tier (6★ or higher)",
          "Must provide professional boot fitting service",
          "Must carry major ski brands (Atomic, Rossignol, etc.)",
          "Must be within Ski Arlberg area",
          "Minimum 4.0/5 customer reviews"
        ],
        insurance: [
          "Must cover winter sports (skiing/snowboarding)",
          "Minimum €8,000 helicopter rescue coverage",
          "Minimum €40,000 medical expense coverage",
          "Must cover all 4 team members for Feb 7-14, 2026",
          "Must provide 24/7 emergency contact"
        ]
      },
      contractStrategy: {
        approach: "Fixed-price contracts with advance payment for all major bookings",
        paymentTerms: [
          "Vehicle: 100% paid at booking confirmation (refundable until 48hrs before pickup)",
          "Hotel: 50% deposit at booking, 50% at check-in",
          "Ski passes: 100% paid online (non-refundable after purchase)",
          "Insurance: 100% paid upfront (policy active from Feb 7)"
        ],
        riskMitigation: [
          "Book refundable/flexible rates where possible (hotel, vehicle)",
          "Purchase travel insurance to cover cancellation risks",
          "Use credit cards for payment protection",
          "Confirm all bookings 7 days prior to departure"
        ]
      }
    }
  }
};

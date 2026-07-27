const sampleListings = [
  {
    title: "Luxury Beach Villa in Goa",
    description: "Relax in a beautiful beach villa just steps from the Arabian Sea. Enjoy breathtaking sunsets, modern amenities, and a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    price: 4500,
    location: "Goa",
    country: "India",
    category: "Trending",
  },

  {
    title: "Cozy Mountain Cabin",
    description: "A peaceful wooden cabin surrounded by the Himalayan mountains. Perfect for nature lovers and adventure seekers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    },
    price: 3200,
    location: "Manali",
    country: "India",
    category: "Mountain",
  },

  {
    title: "Modern Apartment in Tokyo",
    description: "Stay in the heart of Tokyo with quick access to shopping, restaurants, and famous attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    price: 6200,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
  },

  {
    title: "Royal Castle Stay",
    description: "Experience royal luxury in a restored medieval castle featuring grand halls and beautiful gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    },
    price: 8500,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "Castles",
  },

  {
    title: "Luxury Pool Villa",
    description: "A premium villa with an infinity pool, stylish interiors, and stunning tropical views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing Pools",
  },
  {
    title: "Lakeside Camping Retreat",
    description: "Enjoy peaceful camping beside a crystal-clear lake with campfires, hiking trails, and breathtaking sunrise views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
  },

  {
    title: "Traditional Farm Cottage",
    description: "Escape city life and experience organic farming, fresh air, and homemade meals in a charming countryside cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Punjab",
    country: "India",
    category: "Farms",
  },

  {
    title: "Glass Igloo Under the Northern Lights",
    description: "Sleep beneath the magical Northern Lights in a cozy glass igloo with panoramic Arctic views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
    },
    price: 9200,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctic",
  },

  {
    title: "Modern Studio Room",
    description: "A stylish private room with high-speed Wi-Fi, comfortable bedding, and easy access to the city center.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Mumbai",
    country: "India",
    category: "Room",
  },

  {
    title: "Skyline Penthouse",
    description: "Enjoy panoramic city views from a luxurious penthouse with premium interiors and rooftop access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    },
    price: 7800,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Trending",
  },
  {
    title: "Romantic Apartment in Paris",
    description: "Stay in a charming Parisian apartment just minutes from the Eiffel Tower, with cozy interiors and a beautiful balcony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    },
    price: 6800,
    location: "Paris",
    country: "France",
    category: "Iconic Cities",
  },

  {
    title: "Santorini Cliffside Villa",
    description: "Wake up to stunning views of the Aegean Sea in this luxurious whitewashed villa with a private terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 8900,
    location: "Santorini",
    country: "Greece",
    category: "Amazing Pools",
  },

  {
    title: "Wooden Cabin in Banff",
    description: "A peaceful cabin surrounded by forests and snow-capped mountains, perfect for hiking and wildlife lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
    },
    price: 4700,
    location: "Banff",
    country: "Canada",
    category: "Mountain",
  },

  {
    title: "Traditional Ryokan Stay",
    description: "Experience authentic Japanese hospitality in a peaceful ryokan with tatami rooms and hot spring baths.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 5600,
    location: "Kyoto",
    country: "Japan",
    category: "Room",
  },

  {
    title: "Swiss Alpine Chalet",
    description: "Escape to a luxurious chalet nestled in the Swiss Alps with breathtaking mountain scenery and cozy fireplaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
    },
    price: 7400,
    location: "Interlaken",
    country: "Switzerland",
    category: "Trending",
  },
  {
    title: "Royal Castle Hotel",
    description: "Live like royalty in a magnificent castle featuring luxurious rooms, grand halls, and centuries of fascinating history.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=60",
    },
    price: 8100,
    location: "Prague",
    country: "Czech Republic",
    category: "Castles",
  },

  {
    title: "Maldives Water Villa",
    description: "A stunning overwater villa with direct ocean access, crystal-clear lagoons, and unforgettable sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=60",
    },
    price: 9800,
    location: "Malé",
    country: "Maldives",
    category: "Amazing Pools",
  },

  {
    title: "Forest Camping Adventure",
    description: "Reconnect with nature in a peaceful forest campsite offering hiking trails, campfires, and stargazing nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Yellowstone National Park",
    country: "United States",
    category: "Camping",
  },

  {
    title: "Tuscany Farmhouse Retreat",
    description: "Stay in a charming farmhouse surrounded by vineyards, olive groves, and rolling hills in the heart of Tuscany.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
  },

  {
    title: "Arctic Glass Cabin",
    description: "Watch the Northern Lights from the comfort of a warm glass cabin surrounded by snowy landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=800&q=60",
    },
    price: 9300,
    location: "Reykjavik",
    country: "Iceland",
    category: "Arctic",
  },
  {
    title: "Luxury Penthouse in New York",
    description: "Enjoy breathtaking skyline views from this luxurious penthouse in the heart of Manhattan, featuring modern interiors and premium amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 9500,
    location: "New York",
    country: "United States",
    category: "Iconic Cities",
  },

  {
    title: "Beach Resort in Phuket",
    description: "Relax in a tropical beachfront resort with private balconies, crystal-clear waters, and world-class hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 7200,
    location: "Phuket",
    country: "Thailand",
    category: "Trending",
  },

  {
    title: "Himalayan Mountain Lodge",
    description: "Stay in a cozy mountain lodge surrounded by the majestic Himalayas, offering spectacular sunrise views and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
    },
    price: 4300,
    location: "Leh",
    country: "India",
    category: "Mountain",
  },

  {
    title: "Executive Room in London",
    description: "A stylish private room in Central London with elegant interiors, free Wi-Fi, and excellent transport connections.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 5400,
    location: "London",
    country: "United Kingdom",
    category: "Room",
  },

  {
    title: "Dubai Marina Luxury Apartment",
    description: "Experience modern luxury in a high-rise apartment overlooking Dubai Marina, with access to premium shopping and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    },
    price: 8400,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Amazing Pools",
  },
  {
    title: "Yosemite National Park Campsite",
    description: "Experience unforgettable camping under the stars in Yosemite National Park. Perfect for hiking, rock climbing, and nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Yosemite National Park",
    country: "United States",
    category: "Camping",
  },

  {
    title: "Dutch Countryside Farmhouse",
    description: "Enjoy peaceful countryside living in a traditional Dutch farmhouse surrounded by green fields, windmills, and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Domes",
  },

  {
    title: "Northern Lights Arctic Cabin",
    description: "Stay in a warm wooden cabin surrounded by snow-covered forests and witness the magical Northern Lights from your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=800&q=60",
    },
    price: 9100,
    location: "Tromsø",
    country: "Norway",
    category: "Boat",
  },

  {
    title: "Historic Scottish Castle",
    description: "Spend the night in a magnificent Scottish castle featuring luxurious rooms, beautiful gardens, and centuries of fascinating history.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=60",
    },
    price: 8700,
    location: "Inverness",
    country: "United Kingdom",
    category: "Boat",
  },

  {
    title: "Bora Bora Overwater Villa",
    description: "A dream overwater villa with crystal-clear turquoise lagoons, private deck, direct ocean access, and unforgettable sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "Domes",
  }
];

module.exports = { listings: sampleListings };

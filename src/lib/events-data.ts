import type { EventRecord } from "./types";

export const EVENT_CATEGORIES = [
  "Rooftop",
  "Live Music",
  "Nightlife",
  "Networking",
  "Wellness",
  "Food & Drink",
  "Creative",
  "Culture",
];

// Helper: date N days from "now" as yyyy-mm-dd, so seed events always look upcoming.
function inDays(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

// Curated sample events shown when the store has none yet, so the page is never
// empty. Admins can add real events from the dashboard, which replace these.
export const SAMPLE_EVENTS: EventRecord[] = [
  {
    id: 1,
    createdAt: new Date(0).toISOString(),
    title: "Skyline Sessions — Rooftop Sunset Social",
    description:
      "An open-format rooftop mixer with skyline views, craft cocktails, and a resident DJ. Come for the golden hour, stay for the people.",
    category: "Rooftop",
    city: "Toronto",
    venue: "The Rooftop at King West",
    date: inDays(5),
    time: "6:00 PM",
    priceFrom: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=70",
    ticketUrl: "#",
    organizer: "SoMingle Collective",
    trending: true,
  },
  {
    id: 2,
    createdAt: new Date(0).toISOString(),
    title: "Afrobeats & Amapiano Night",
    description:
      "The hottest Afrobeats and Amapiano party in the city. Live percussion, guest DJs, and a dance floor that doesn't stop.",
    category: "Nightlife",
    city: "Toronto",
    venue: "Cube Nightclub",
    date: inDays(8),
    time: "10:00 PM",
    priceFrom: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?auto=format&fit=crop&w=1200&q=70",
    ticketUrl: "#",
    organizer: "Yo DJ Events",
    trending: true,
  },
  {
    id: 3,
    createdAt: new Date(0).toISOString(),
    title: "Founders & Creators Mixer",
    description:
      "Curated networking for entrepreneurs, creators, and operators. Intentional intros, no awkward small talk.",
    category: "Networking",
    city: "New York",
    venue: "SoHo Loft",
    date: inDays(3),
    time: "7:00 PM",
    priceFrom: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=70",
    ticketUrl: "#",
    organizer: "SoMingle Collective",
    trending: true,
  },
  {
    id: 4,
    createdAt: new Date(0).toISOString(),
    title: "Live Jazz & Natural Wine",
    description:
      "An intimate evening of live jazz paired with a curated natural wine list. Small room, big sound.",
    category: "Live Music",
    city: "New York",
    venue: "The Cellar",
    date: inDays(11),
    time: "8:00 PM",
    priceFrom: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=1200&q=70",
    ticketUrl: "#",
    organizer: "After Hours",
    trending: false,
  },
  {
    id: 5,
    createdAt: new Date(0).toISOString(),
    title: "Sunrise Beach Yoga & Sound Bath",
    description:
      "Start your weekend grounded. Guided flow at sunrise followed by a healing sound bath on the sand.",
    category: "Wellness",
    city: "Miami",
    venue: "South Beach",
    date: inDays(6),
    time: "6:30 AM",
    priceFrom: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=70",
    ticketUrl: "#",
    organizer: "Wellness Collective",
    trending: true,
  },
  {
    id: 6,
    createdAt: new Date(0).toISOString(),
    title: "Pool Party — House & Disco",
    description:
      "Daytime pool party with house and disco all afternoon. Cabanas, frozen cocktails, and good energy.",
    category: "Nightlife",
    city: "Miami",
    venue: "The Standard",
    date: inDays(9),
    time: "2:00 PM",
    priceFrom: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=70",
    ticketUrl: "#",
    organizer: "Daylight",
    trending: false,
  },
  {
    id: 7,
    createdAt: new Date(0).toISOString(),
    title: "Creative Meetup — Photographers & Designers",
    description:
      "A relaxed meetup for visual creatives. Portfolio swaps, collabs, and a guest talk on building a creative brand.",
    category: "Creative",
    city: "Los Angeles",
    venue: "Arts District Studio",
    date: inDays(4),
    time: "5:00 PM",
    priceFrom: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=70",
    ticketUrl: "#",
    organizer: "Creators United",
    trending: true,
  },
  {
    id: 8,
    createdAt: new Date(0).toISOString(),
    title: "Taco & Mezcal Crawl",
    description:
      "A guided food crawl through the best taquerias and mezcal bars in the neighborhood. Eat, sip, meet people.",
    category: "Food & Drink",
    city: "Los Angeles",
    venue: "Downtown LA",
    date: inDays(13),
    time: "6:00 PM",
    priceFrom: 35,
    imageUrl:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=70",
    ticketUrl: "#",
    organizer: "Tasting Notes",
    trending: false,
  },
];

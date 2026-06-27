"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, MapPin, Loader2, CalendarX } from "lucide-react";
import { EventCard } from "./EventCard";
import type { EventRecord } from "@/lib/types";

export function EventsBrowser() {
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("All");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        if (active && data.ok) setEvents(data.events as EventRecord[]);
      } catch {
        /* leave empty */
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const cities = useMemo(
    () => ["All", ...Array.from(new Set(events.map((e) => e.city).filter(Boolean))).sort()],
    [events]
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(events.map((e) => e.category).filter(Boolean))).sort()],
    [events]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events.filter((e) => {
      if (city !== "All" && e.city !== city) return false;
      if (category !== "All" && e.category !== category) return false;
      if (
        q &&
        !`${e.title} ${e.venue} ${e.organizer} ${e.description}`
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });
  }, [events, city, category, query]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, venues, organizers…"
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:border-brand-purple/60 focus:outline-none focus:ring-2 focus:ring-brand-purple/25"
            />
          </div>
          <div className="relative sm:w-56">
            <MapPin
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-9 text-sm text-white focus:border-brand-purple/60 focus:outline-none focus:ring-2 focus:ring-brand-purple/25"
            >
              {cities.map((c) => (
                <option key={c} value={c} className="bg-ink-800">
                  {c === "All" ? "All locations" : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-gradient text-white"
                    : "glass text-white/65 hover:text-white"
                }`}
              >
                {c === "All" ? "All categories" : c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="flex justify-center py-24 text-white/50">
          <Loader2 className="animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-3xl glass py-20 text-center">
          <CalendarX className="text-white/40" size={32} />
          <p className="text-white/60">No events match your filters yet.</p>
          <button
            onClick={() => {
              setCity("All");
              setCategory("All");
              setQuery("");
            }}
            className="text-sm font-semibold text-brand-pink hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <p className="mb-5 text-sm text-white/50">
            {filtered.length} event{filtered.length === 1 ? "" : "s"}
            {city !== "All" ? ` in ${city}` : ""}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";
import { EventCard } from "./events/EventCard";
import type { EventRecord } from "@/lib/types";

export function HomeEvents() {
  const [events, setEvents] = useState<EventRecord[]>([]);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        if (active && data.ok) setEvents((data.events as EventRecord[]).slice(0, 3));
      } catch {
        /* ignore */
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  if (events.length === 0) return null;

  return (
    <section id="events" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-pink">
              Happening Now
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Trending Events{" "}
              <span className="gradient-text">Near You</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/60">
              The hottest parties, rooftop socials, and meetups in your city.
            </p>
          </div>
          <ButtonLink href="/events" variant="secondary" className="shrink-0">
            See all events
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </ButtonLink>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

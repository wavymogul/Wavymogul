import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventsBrowser } from "@/components/events/EventsBrowser";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Trending Events Near You",
  description:
    "Discover trending parties, rooftop socials, live music, and networking experiences happening near you. Curated by SoMingle.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28 pb-20 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-radial blur-2xl" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-pink">
              Happening Now
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Trending Events{" "}
              <span className="gradient-text">Near You</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              The best parties, rooftop socials, live music, and meetups
              happening in your city — curated by SoMingle.
            </p>
          </Reveal>

          <EventsBrowser />
        </div>
      </main>
      <Footer />
    </>
  );
}

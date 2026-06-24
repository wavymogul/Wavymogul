import {
  Sparkles,
  Users,
  Briefcase,
  Wallet,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const features = [
  {
    icon: Sparkles,
    title: "Curated Connections",
    body: "Meet people based on energy, interests, goals, and lifestyle.",
  },
  {
    icon: Users,
    title: "Community Driven",
    body: "Experiences designed around real feedback from real people.",
  },
  {
    icon: Briefcase,
    title: "Professional + Social",
    body: "Build friendships, collaborations, opportunities, and memories.",
  },
  {
    icon: Wallet,
    title: "Affordable Experiences",
    body: "Fun shouldn't require spending hundreds of dollars.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Inclusive",
    body: "Verified profiles, respectful communities, and welcoming environments.",
  },
  {
    icon: Star,
    title: "Experiences That Matter",
    body: "Events designed around what people actually want.",
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-purple">
            The SoMingle Vision
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            What If Socializing Was{" "}
            <span className="gradient-text">Better?</span>
          </h2>
          <p className="mt-4 text-white/60">
            SoMingle is creating a new category of experiences where networking,
            entertainment, friendship, collaboration, and community naturally
            come together.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="gradient-border group h-full rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1.5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient/10 ring-1 ring-white/15">
                    <Icon size={22} className="text-brand-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

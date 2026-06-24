import { DollarSign, UsersRound, Handshake, Frown } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const cards = [
  {
    icon: DollarSign,
    stat: "$$$",
    title: "Events Cost Too Much",
    body: "People spend hundreds of dollars on tickets, transportation, food, drinks, and still leave disappointed.",
    accent: "from-brand-purple/30 to-transparent",
  },
  {
    icon: UsersRound,
    stat: "0",
    title: "No Real Connections",
    body: "Most people attend events but struggle to meet new people in meaningful ways.",
    accent: "from-brand-blue/30 to-transparent",
  },
  {
    icon: Handshake,
    stat: "🤝",
    title: "Networking Feels Forced",
    body: "Traditional networking events often feel transactional instead of authentic.",
    accent: "from-brand-pink/30 to-transparent",
  },
  {
    icon: Frown,
    stat: "😕",
    title: "The Experience Isn't Worth It",
    body: "People want memorable experiences — not just another crowded room.",
    accent: "from-brand-gold/30 to-transparent",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-pink">
            The Problem
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Why Are People Going Out Less?
          </h2>
          <p className="mt-4 text-white/60">
            The cost is up, the payoff is down. Here&apos;s what we keep hearing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]">
                  <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.accent} blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

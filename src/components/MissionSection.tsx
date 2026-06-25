import { Sparkles, Radio, HeartHandshake } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function MissionSection() {
  return (
    <section id="mission" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand-violet/12 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/80">
            <Sparkles size={14} className="text-brand-gold" />
            Welcome
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Welcome to SoMingle&trade;
          </h2>
          <p className="mt-4 font-display text-xl text-white/90 sm:text-2xl">
            Choose your vibe.{" "}
            <span className="gradient-text">Find your tribe.</span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-white/65">
            At SoMingle, we believe the best connections happen when people come
            together with intention.
          </p>
        </Reveal>

        {/* Mission statement — the centerpiece */}
        <Reveal delay={0.1}>
          <div className="gradient-border mt-10 rounded-[2rem] glass-strong p-8 text-center sm:p-10">
            <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient">
              <HeartHandshake size={22} />
            </div>
            <p className="font-display text-lg font-medium leading-relaxed text-white/90 sm:text-2xl">
              Our mission is to create authentic human connections by powering{" "}
              <span className="gradient-text">trusted live intelligence</span>{" "}
              that curates meaningful social experiences.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 space-y-5 text-center text-white/65">
            <p>
              This isn&apos;t just a survey&mdash;it&apos;s how we understand the
              unique vibe of the room. Your anonymous responses help shape the
              music, introductions, networking, activities, and overall flow of
              the experience.
            </p>
            <p>
              We don&apos;t use your answers to judge you&mdash;we use them to
              better understand the room so everyone can have a more meaningful
              experience.
            </p>
          </div>
        </Reveal>

        {/* Trusted Live Intelligence callout */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-start gap-4 rounded-3xl glass p-6 sm:p-7">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Radio size={20} className="text-brand-pink" />
            </div>
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              Every response contributes to our{" "}
              <span className="font-semibold text-white">
                Trusted Live Intelligence System
              </span>
              , transforming ordinary gatherings into criteria-curated
              experiences designed by the people, for the people.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 text-center">
            <p className="font-display text-lg font-semibold sm:text-xl">
              Built with you. Powered by you.{" "}
              <span className="gradient-text">For us, by us.</span>
            </p>
            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Thank you for helping create an experience where everyone belongs.
            </p>
            <p className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Come as you are.{" "}
              <span className="gradient-text animate-shimmer">
                Let&apos;s be real again.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

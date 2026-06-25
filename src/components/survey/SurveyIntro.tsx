import { Sparkles, Radio, Users } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function SurveyIntro() {
  return (
    <div className="mb-12">
      <Reveal className="text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/80">
          <Sparkles size={14} className="text-brand-gold" />
          Choose your vibe. Find your tribe.
        </span>
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Welcome to the{" "}
          <span className="gradient-text">SoMingle Experience</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">
          The world&apos;s first{" "}
          <span className="font-semibold text-white">
            Trusted Live Intelligence System
          </span>{" "}
          that powers criteria-curated social experiences.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="gradient-border mt-9 rounded-[2rem] glass-strong p-7 sm:p-9">
          <p className="text-center text-white/75">
            This isn&apos;t just a survey&mdash;it&apos;s how we understand the
            unique vibe of the room.
          </p>
          <p className="mt-5 text-center text-white/75">
            Your anonymous responses help power our{" "}
            <span className="font-semibold text-white">
              Trusted Live Intelligence System
            </span>
            , allowing us to intelligently curate music, introductions,
            networking opportunities, activities, and the overall flow of the
            event.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3.5">
              <Users size={18} className="shrink-0 text-brand-pink" />
              <span className="text-sm font-medium text-white/85">
                Every attendee helps shape the experience.
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3.5">
              <Radio size={18} className="shrink-0 text-brand-violet" />
              <span className="text-sm font-medium text-white/85">
                Every response strengthens the room.
              </span>
            </div>
          </div>

          <p className="mt-7 text-center text-sm text-white/60">
            We don&apos;t use your answers to judge you&mdash;we use them to
            better understand the collective experience so everyone can have a
            more meaningful time.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-9 text-center">
          <p className="font-display text-base font-semibold sm:text-lg">
            Built with you. Powered by you.{" "}
            <span className="gradient-text">By the people, for the people.</span>
          </p>
          <p className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
            Come as you are.{" "}
            <span className="gradient-text animate-shimmer">
              Let&apos;s be real again.
            </span>
          </p>
        </div>
      </Reveal>
    </div>
  );
}

import { ArrowRight, ClipboardList } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";

const steps = [
  "About You",
  "Real Talk",
  "What You Want",
  "Connection Style",
  "For Creators",
  "The Future",
];

export function SurveyCTA() {
  return (
    <section id="survey-cta" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-[2.5rem] glass-strong p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-purple/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-pink/15 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-white/75">
                  <ClipboardList size={14} className="text-brand-gold" />
                  Research & Discovery
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Help Us Build The Future Of Social Experiences
                </h2>
                <p className="mt-4 text-white/65">
                  We&apos;re not guessing what people want. We&apos;re asking. Take
                  a few minutes to shape the experiences we build first — your
                  answers go straight into the product.
                </p>
                <div className="mt-7">
                  <ButtonLink href="/survey">
                    Take The Survey
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </ButtonLink>
                </div>
              </div>

              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-center gap-4 rounded-2xl glass px-4 py-3.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-gradient font-display text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-white/85">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

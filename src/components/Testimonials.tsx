import { Quote } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const quotes = [
  "Networking shouldn't feel like work.",
  "Meeting people shouldn't be awkward.",
  "Fun shouldn't cost a fortune.",
  "Community should happen naturally.",
  "Experiences should create real connections.",
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            The Future We&apos;re Building
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            A Different Kind of Belonging
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal
              key={q}
              delay={i * 0.07}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <figure className="relative h-full overflow-hidden rounded-3xl glass p-8 transition-all duration-300 hover:bg-white/[0.07]">
                <Quote
                  className="absolute right-5 top-5 text-white/10"
                  size={48}
                />
                <blockquote className="font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
                  &ldquo;{q}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-brand-gradient" />
                  <span className="text-sm text-white/50">
                    What people keep telling us
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

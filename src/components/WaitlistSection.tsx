"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

export function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="waitlist" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-pink/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="gradient-border overflow-hidden rounded-[2rem] glass-strong p-8 text-center sm:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Join The Movement
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Join The SoMingle Movement
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Help us create experiences people actually want to attend.
            </p>

            {status === "done" ? (
              <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 rounded-2xl bg-white/5 p-8">
                <CheckCircle2 className="text-brand-gold" size={40} />
                <p className="font-display text-xl font-semibold">
                  You&apos;re on the list! 🎉
                </p>
                <p className="text-sm text-white/60">
                  We&apos;ll be in touch as SoMingle takes shape. In the
                  meantime, the 2-minute survey shapes what we build first.
                </p>
                <a
                  href="/survey"
                  className="mt-2 text-sm font-semibold text-brand-pink hover:underline"
                >
                  Take the survey →
                </a>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-brand-purple/60 focus:outline-none focus:ring-2 focus:ring-brand-purple/30"
                />
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-brand-purple/60 focus:outline-none focus:ring-2 focus:ring-brand-purple/30"
                />
                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Joining…
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-brand-pink">{error}</p>
                )}
                <p className="text-xs text-white/40">
                  No spam. Just early access and updates that matter.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

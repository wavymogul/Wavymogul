import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MultiStepSurvey } from "@/components/survey/MultiStepSurvey";
import { SurveyIntro } from "@/components/survey/SurveyIntro";

export const metadata: Metadata = {
  title: "Welcome to the SoMingle Experience",
  description:
    "Choose your vibe. Find your tribe. The world's first Trusted Live Intelligence System that powers criteria-curated social experiences. Your anonymous responses help shape the room.",
};

export default function SurveyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-radial blur-2xl" />
      </div>

      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> Back
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <span className="font-display text-base font-bold">
              So<span className="gradient-text">Mingle</span>
            </span>
          </Link>
        </div>

        <SurveyIntro />

        <MultiStepSurvey />
      </div>
    </main>
  );
}

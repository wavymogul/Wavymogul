import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { VisionSection } from "@/components/VisionSection";
import { MissionSection } from "@/components/MissionSection";
import { SurveyCTA } from "@/components/SurveyCTA";
import { Testimonials } from "@/components/Testimonials";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <VisionSection />
        <MissionSection />
        <SurveyCTA />
        <Testimonials />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}

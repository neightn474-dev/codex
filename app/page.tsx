import AnimatedBackground from "@/components/AnimatedBackground";
import FeatureGrid from "@/components/FeatureGrid";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProblemSection from "@/components/ProblemSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export default function Home() {
  return (
    <main className="relative isolate overflow-x-hidden bg-[#060708] text-white">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-10 lg:px-12">
        <HeroSection />
        <ProblemSection />
        <FeatureGrid />
        <ProcessTimeline />
        <CaseStudiesSection />
        <FinalCTA />
      </div>
    </main>
  );
}

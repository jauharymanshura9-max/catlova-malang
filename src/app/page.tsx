import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Results } from "@/components/sections/results";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Grooming & Penitipan Kucing Malang | CatLova",
  description:
    "CatLova Malang — grooming & penitipan kucing telaten, rating 5,0 (211 ulasan), antar-jemput gratis.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Results />
      <ProblemSolution />
      <Features />
      <Process />
      <FaqSection />
      <FinalCta />
    </>
  );
}

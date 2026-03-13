import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductPreview2 from "@/components/sections/ProductPreview2";
import AudienceSplit from "@/components/sections/AudienceSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FounderStory from "@/components/sections/FounderStory";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ProductPreview2 />
        <AudienceSplit />
        <FeatureGrid />
        <FounderStory />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

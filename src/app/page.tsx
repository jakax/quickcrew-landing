import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
//import TrustBar from "@/components/sections/TrustBar";
import HospitalityTrust from "@/components/sections/HospitalityTrust";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductPreview2 from "@/components/sections/ProductPreview2";
import AudienceSplit from "@/components/sections/AudienceSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import FounderStory from "@/components/sections/FounderStory";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import HumanStory from "@/components/sections/HumanStory";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HospitalityTrust />
        {/* <TrustBar /> */}
        <HowItWorks />
        <ProductPreview2 />
        <AudienceSplit />
        <FeatureGrid />
        <FounderStory />
        <Testimonials />
        <FAQ />
        <HumanStory />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

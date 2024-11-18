import Benefits from "@/components/design/Benefits";
import CTA from "@/components/design/CTA";
import Footer from "@/components/design/Footer";
import Hero from "@/components/design/Hero";
import HowItWorks from "@/components/design/HowItWorks";
import Reviews from "@/components/design/Reviews";
import Solution from "@/components/design/Solution";
import Symptoms from "@/components/design/Symptoms";

export default function Home() {
  return (
    <>
      <Hero />
      <Symptoms />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}

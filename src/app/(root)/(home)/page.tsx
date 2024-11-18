import Benefits from "@/components/design/Benefits";
import CTA from "@/components/design/CTA";
import Footer from "@/components/design/Footer";
import Hero from "@/components/design/Hero";
import HowItWorks from "@/components/design/HowItWorks";
import Solution from "@/components/design/Solution";
import Symptoms from "@/components/design/Symptoms";
import Testimonails from "@/components/design/Testimonails";

export default function Home() {
  return (
    <>
      <Hero />
      <Symptoms />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Testimonails />
      <CTA />
      <Footer />
    </>
  );
}

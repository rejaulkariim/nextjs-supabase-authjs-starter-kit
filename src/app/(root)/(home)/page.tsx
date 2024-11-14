import Benefits from "@/components/design/Benefits";
import CTA from "@/components/design/CTA";
import Footer from "@/components/design/Footer";
import Hero from "@/components/design/Hero";
import HowItWorks from "@/components/design/HowItWorks";
import ProblemDetails from "@/components/design/ProblemDetails";
import Reviews from "@/components/design/Reviews";
import Solution from "@/components/design/Solution";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemDetails />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}

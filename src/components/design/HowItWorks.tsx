import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { howItWorks } from "@/constants";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          title="How It Works"
          description="Explain how it works"
        />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mt-10">
          {/* Left Column (Text Content) */}
          <div className="lg:w-1/2 space-y-10">
            {howItWorks.map((step) => (
              <div key={step.step} className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-3xl font-bold text-green-500">
                  {step.step}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Image) */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src={"/assets/images/placeholder.jpg"}
              alt="hero"
              width={1000}
              height={440}
              className="rounded-lg"
              priority
              draggable="false"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItWorks;

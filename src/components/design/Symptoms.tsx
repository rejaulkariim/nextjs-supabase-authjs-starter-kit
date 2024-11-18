import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { symptoms } from "@/constants";
import SectionHeader from "../shared/SectionHeader";
import { Card } from "../ui/card";

const Symptoms = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          title="Point out the problem"
          description="Does this sound familiar?"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {symptoms.map((symptom) => (
            <Card
              key={symptom.title}
              className="p-6 rounded-lg border-border/60"
            >
              <h3 className="text-xl font-semibold mb-4">{symptom.title}</h3>
              <p className="text-muted-foreground">{symptom.description}</p>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Symptoms;

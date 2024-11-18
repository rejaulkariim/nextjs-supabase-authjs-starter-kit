import { benefits } from "@/constants";
import { CheckCircleIcon } from "lucide-react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionHeader from "../shared/SectionHeader";
import { Card } from "../ui/card";

const Benefits = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          title="What benifits user will get"
          description="Explain what the user will get from you."
        />

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="p-6 border-border/60 rounded-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-bold tracking-tight">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Benefits;

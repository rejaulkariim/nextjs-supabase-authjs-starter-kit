import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";
import { buttonVariants } from "../ui/button";

const CTA = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 border border-border/60 py-20 px-8 rounded-2xl bg-card">
          <SectionHeader
            title="Call to action"
            description="Add a call to action details to encourage users to take action."
          />
          <Link
            href="#"
            className={cn(
              buttonVariants({
                size: "lg",
                className: "button",
              })
            )}
          >
            First person action oriented CTA
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;

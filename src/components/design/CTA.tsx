import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const CTA = () => {
  return (
    <section className="py-10 md:py-20">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 border py-20 px-8 rounded-2xl bg-card">
          <h2 className="text-2xl md:text-4xl font-bold">
            Ready to get started?
          </h2>
          <p className="max-w-xl mx-auto text-card-foreground">
            Schadule a free consultation with our team and let&apos;s make
            things happened.
          </p>
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

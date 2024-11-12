import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const CTA = () => {
  return (
    <section className="py-10 md:py-20">
      <MaxWidthWrapper className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 border py-20 px-8 rounded-2xl bg-card">
          <h2 className="tracking-tight text-balance font-extrabold !leading-tight text-card-foreground text-3xl md:text-5xl">
            Call to action
          </h2>
          <p className="max-w-xl mx-auto text-lg text-card-foreground">
            description of what you can do
          </p>
          button
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;

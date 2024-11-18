import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Solution = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-background">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="space-y-4">
              <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-4xl">
                Introduce your business as the solutions.
              </h2>
              <p className="text-muted-foreground">
                Explain how your product or service solves the problem. make it
                simple and clear.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
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

export default Solution;

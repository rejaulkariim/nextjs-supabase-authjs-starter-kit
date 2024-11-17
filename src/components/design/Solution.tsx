import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Solution = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-background">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex flex-col space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold">
                Introduce your business as the solutions.
              </h1>
              <p className="font-normal text-foreground">
                Our product/service is designed to address the challenges
                you&lsquo;re facing by offering a comprehensive and effective
                solution. We take the time to fully understand your needs and
                craft a customized approach that targets the root cause of the
                problem. Through innovative technology, expert support, and a
                user-friendly experience, we ensure that our solution not only
                resolves the issue at hand but also optimizes efficiency,
                reduces costs, and improves long-term results.
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

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <MaxWidthWrapper>
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">How It Works</h2>
        </div>

        {/* How It Works Steps */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Column (Text Content) */}
          <div className="lg:w-1/2 space-y-10">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-3xl font-bold text-green-500">
                01
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Book/Schedule
                </h3>
                <p className="text-gray-600">
                  Quis autem vel eum iure reprehenderit in velit esse nihil
                  molestiae vel illum dolorem fugiat voluptas nulla pariatur.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-3xl font-bold text-green-500">
                02
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  We’ll Get to Work
                </h3>
                <p className="text-gray-600">
                  Quis autem vel eum iure reprehenderit in velit esse nihil
                  molestiae vel illum dolorem fugiat voluptas nulla pariatur.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-3xl font-bold text-green-500">
                03
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Happily Ever After!
                </h3>
                <p className="text-gray-600">
                  Quis autem vel eum iure reprehenderit in velit esse nihil
                  molestiae vel illum dolorem fugiat voluptas nulla pariatur.
                </p>
              </div>
            </div>
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

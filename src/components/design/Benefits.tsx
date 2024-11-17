import { CheckCircleIcon } from "lucide-react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Benefits = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <MaxWidthWrapper>
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">Save time ship 10x fast</h2>
          <p className="">Focus on whats metter building the features.</p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              <h3 className="text-xl font-bold">Benefit 1</h3>
            </div>
            <p className="font-normal">
              A short description of the feature behind benifits
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <CheckCircleIcon className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-bold">Expert Guidance</h3>
            </div>
            <p className="font-normal">
              Our team of experts provides insightful guidance and innovative
              strategies to keep your business ahead of the curve.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <CheckCircleIcon className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-bold">Scalable Growth</h3>
            </div>
            <p className="font-normal">
              With scalable solutions, we ensure that your business continues to
              grow without limitations, no matter how large it gets.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Benefits;

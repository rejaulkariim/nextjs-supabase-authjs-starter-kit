import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const ProblemDetails = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <MaxWidthWrapper>
        {/* Title and Description */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Point Out the Problem
          </h1>
          <p className="text-lg">Does this sound familiar?</p>
        </div>

        {/* Symptoms Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Symptom Cards */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Symptom 1</h3>
            <p className="">
              A brief description of the first symptom goes here. This can help
              the user understand the issue.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Symptom 2</h3>
            <p className="">
              A brief description of the second symptom goes here. This can help
              the user understand the issue.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Symptom 3</h3>
            <p className="">
              A brief description of the third symptom goes here. This can help
              the user understand the issue.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProblemDetails;

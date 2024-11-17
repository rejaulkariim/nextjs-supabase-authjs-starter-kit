import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      review:
        "Amazing service! Highly recommend to everyone. It was a smooth experience, and the results were fantastic.",
      image: "/path/to/image1.jpg", // Replace with actual image path
    },
    {
      name: "Jane Smith",
      rating: 4,
      review:
        "Great service overall. The process was easy, and the team was professional. Would definitely use again.",
      image: "/path/to/image2.jpg", // Replace with actual image path
    },
    {
      name: "Alice Johnson",
      rating: 5,
      review:
        "Exceeded my expectations. The support was outstanding, and everything was delivered on time.",
      image: "/path/to/image3.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <MaxWidthWrapper>
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Read what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15l-3.5 2 1-4.5L3 8.5l4.5-.5L10 3l2.5 4.5L17 8.5l-4.5 3L13.5 17z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Reviews;

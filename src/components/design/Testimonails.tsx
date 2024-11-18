import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { reviews } from "@/constants";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import { Card } from "../ui/card";

const Testimonails = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          title="Testimonails"
          description="A short description explaining the testimonails"
        />

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {reviews.map((review, index) => (
            <Card key={index} className="p-8 rounded-lg border-border/60">
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={review.image}
                  alt={review.name}
                  draggable={false}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex space-x-0.5">
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
              <p className="text-muted-foreground">{review.review}</p>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonails;

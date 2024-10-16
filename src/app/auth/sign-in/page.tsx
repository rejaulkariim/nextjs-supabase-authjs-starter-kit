import BackButton from "@/components/shared/BackButton";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const SignInPage = () => {
  return (
    <section className="w-full">
      <BackButton />
      <MaxWidthWrapper className="max-w-xl mx-auto">
        <div className="flex justify-center border h-44 rounded-2xl">
          <div className="text-center">
            <h1 className="text-xl font-bold tracking-tighter">
              Login to your account
            </h1>
            <p>Please login to your account</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SignInPage;

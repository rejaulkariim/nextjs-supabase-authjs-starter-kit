import GithubLogin from "@/components/shared/GithubLogin";
import GoogleLogin from "@/components/shared/GoogleLogin";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignInPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
          <CardDescription>Choose your preferred login method</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <GithubLogin />
          <GoogleLogin />
        </CardContent>
        {/* <CardFooter className="flex flex-wrap items-center justify-center">
            <div className="text-sm text-muted-foreground">
              <span className="mr-1">Don&apos;t have an account?</span>
              <a href="#" className="font-medium text-primary hover:underline">
                Privacy
              </a>
            </div>
          </CardFooter> */}
      </Card>
    </section>
  );
};

export default SignInPage;

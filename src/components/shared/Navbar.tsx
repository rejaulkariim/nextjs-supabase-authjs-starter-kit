import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  const user = true;
  return (
    <header className="h-16 border-b">
      <MaxWidthWrapper>
        <nav className="h-full flex justify-between items-center">
          <div>
            <Link href="/" className="font-bold">
              Logo
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">Dashboard</Link>

            {user ? (
              <Link href="/auth/sign-in" className={cn(buttonVariants())}>
                Logout
              </Link>
            ) : (
              <Link href="/auth/sign-in" className={cn(buttonVariants())}>
                Login
              </Link>
            )}
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;

import Logo from "@/components/shared/Logo";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import MobileNav from "@/components/shared/MobileNav";
import UserAccountNav from "@/components/shared/UserAccountNav";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavItems from "./Navitems";

const Navbar = async () => {
  // const user = await getUserFromDB();

  const session = await auth();

  const user = session?.user;

  return (
    <header className="h-16 border-b fixed inset-0 inset-x-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <nav className="h-full w-full flex justify-between items-center">
          {/* Logo on the left */}
          <div className="w-44">
            <Logo />
          </div>

          {/* Centered NavItems */}
          <div className="flex justify-center items-center">
            <NavItems />
          </div>

          {/* UserAccountNav or Login on the right */}
          <div className="hidden w-44 md:flex justify-end items-center space-x-4">
            {user ? (
              <UserAccountNav user={user} />
            ) : (
              <Link href="/auth/login" className={cn(buttonVariants())}>
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden w-44 flex justify-end items-center space-x-4">
            {user ? <UserAccountNav user={user} /> : <MobileNav />}
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;

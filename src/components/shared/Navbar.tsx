import Logo from "@/components/shared/Logo";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import MobileNav from "@/components/shared/MobileNav";
import NavItems from "@/components/shared/Navitems";
import UserAccountNav from "@/components/shared/UserAccountNav";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ModeToggle from "../theme/ModeToggle";

const Navbar = async () => {
  // const user = await getUserFromDB();

  const session = await auth();

  const user = session?.user;

  return (
    <header className="h-14 border-b fixed inset-0 inset-x-0 z-50 w-full border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <nav className="h-full flex justify-between items-center">
          {/* Logo on the left */}
          <Logo />

          {/* UserAccountNav or Login on the right */}
          <div className="hidden md:flex justify-end items-center space-x-8">
            <NavItems />
            <ModeToggle />
            {user ? (
              <UserAccountNav user={user} />
            ) : (
              <Link href="/auth/login" className={cn(buttonVariants())}>
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden flex justify-end items-center space-x-4">
            {user ? <UserAccountNav user={user} /> : <MobileNav />}
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;

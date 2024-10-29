import { Separator } from "@/components/ui/separator";

import Logo from "@/components/shared/Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerLinks } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import GoogleLogin from "./GoogleLogin";

const MobileNav = () => {
  return (
    <nav className="flex md:hidden">
      <Sheet>
        <SheetTrigger className="align-baseline">
          <Menu className="size-6" />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-6 bg-background md:hidden"
          side="left"
        >
          <Logo />
          <Separator />

          <div className="flex flex-col items-start gap-5 text-muted-foreground">
            {headerLinks.map((link) => (
              <SheetClose key={link.label} asChild>
                <Link
                  href={link.route}
                  className="flex-center font-normal text-lg whitespace-normal text-foreground "
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}

            <GoogleLogin />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;

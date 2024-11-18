import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const NavItems = () => {
  return (
    <ul className="hidden sm:flex sm:flex-between sm:items-center gap-4">
      {headerLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.route}
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

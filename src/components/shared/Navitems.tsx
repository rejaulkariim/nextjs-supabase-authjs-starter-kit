import { headerLinks } from "@/constants";
import Link from "next/link";

const NavItems = () => {
  return (
    <ul className="hidden sm:flex sm:flex-between sm:items-center w-full gap-5">
      {headerLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.route}
            className="flex-center font-normal text-lg whitespace-normal text-foreground"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

import { siteConfig } from "@/config/site";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="font-bold flex items-center gap-2">
      <BadgeCheck className="text-primary fill-background" />
      <span className="font-bold text-lg tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
};

export default Logo;

import { siteConfig } from "@/config/site";
import { footerLinks } from "@/constants";
import Link from "next/link";
import Logo from "../shared/Logo";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="section-padding border-t border-border/60">
      <MaxWidthWrapper>
        <div className="flex justify-between md:flex-row flex-col-reverse gap-10">
          {/* Logo and Copyright Section */}
          <div className="space-y-4 w-full md:w-1/2">
            <Logo />
            <p className="text-muted-foreground">Your site description</p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 w-full">
            {/* Links Sections */}
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4 flex-grow">
                <h3 className="text-foreground uppercase text-sm font-medium">
                  {section.title}
                </h3>
                <div className="flex flex-col space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

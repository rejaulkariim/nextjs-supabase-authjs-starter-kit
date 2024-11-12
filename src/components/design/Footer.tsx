import Logo from "@/components/shared/Logo";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {
  footerInternalLinks,
  footerLegalLinks,
  footerResourcesLinks,
} from "@/constants";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t bg-accent">
      <MaxWidthWrapper>
        <div className="py-20 lg:py-20 flex flex-wrap gap-8 lg:justify-between lg:gap-0">
          {/* First Section */}
          <div className="w-full lg:w-1/3 space-y-2">
            <Logo />
            <p className="text-sm text-normal">Ship your startup 10x faster</p>
          </div>

          {/* Resources, Company, and Legal Sections */}
          <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between lg:w-2/3 xl:w-7/12">
            {/* Resources */}
            <div>
              <h4 className="mb-4 font-bold uppercase text-foreground">
                Links
              </h4>
              <ul>
                {footerInternalLinks.map((item) => (
                  <li key={item.label} className="mb-3">
                    <Link
                      href={item.route}
                      className="text-sm text-foreground/80 hover:text-foreground transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 className="mb-4 font-bold uppercase text-foreground">
                Legal
              </h4>
              <ul>
                {footerLegalLinks.map((item) => (
                  <li key={item.label} className="mb-3">
                    <Link
                      href={item.route}
                      className="text-sm text-foreground/80 hover:text-foreground transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="mb-4 font-bold uppercase text-foreground">More</h4>
              <ul>
                {footerResourcesLinks.map((item) => (
                  <li key={item.label} className="mb-3">
                    <Link
                      href={item.route}
                      className="text-sm text-foreground/80 hover:text-foreground transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-between items-center my-6">
          <p className="text-sm text-foreground/80">
            &copy; {new Date().getFullYear()} App Brews. All rights reserved
          </p>

          <ul className="flex items-center gap-3">
            <li className="p-2 rounded-full bg-card">
              <Link
                href="https://x.com/appbrews"
                target="_blank"
                aria-label="twitter icon"
              >
                <FaXTwitter className="text-foreground" />
              </Link>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

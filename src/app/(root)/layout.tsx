import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const HomeLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayoutPage;

"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleLogout } from "@/server/actions/auth.action";

const Logout = () => {
  return (
    <button
      onClick={() => handleLogout()}
      className={cn(buttonVariants({ size: "sm", className: "w-full" }))}
    >
      Logout
    </button>
  );
};

export default Logout;

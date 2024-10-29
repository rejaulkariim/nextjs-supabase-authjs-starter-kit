"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleLogin } from "@/server/actions/auth.action";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  return (
    <button
      onClick={() => handleLogin("google")}
      className={cn(buttonVariants({ size: "lg", className: "w-full" }))}
    >
      <FaGoogle className="mr-2 h-4 w-4" />
      Continue with google
    </button>
  );
};

export default GoogleLogin;

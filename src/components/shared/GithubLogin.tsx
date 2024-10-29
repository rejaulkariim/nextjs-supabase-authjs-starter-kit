"use client";

import { cn } from "@/lib/utils";
import { handleLogin } from "@/server/actions/auth.action";
import { FaGithub } from "react-icons/fa";
import { buttonVariants } from "../ui/button";

const GithubLogin = () => {
  return (
    <button
      onClick={() => handleLogin("github")}
      className={cn(
        buttonVariants({ size: "lg", variant: "outline", className: "w-full" })
      )}
    >
      <FaGithub className="mr-2 h-4 w-4" />
      Continue with github
    </button>
  );
};

export default GithubLogin;

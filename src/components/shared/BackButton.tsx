"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="outline">
      Back
    </Button>
  );
};

export default BackButton;

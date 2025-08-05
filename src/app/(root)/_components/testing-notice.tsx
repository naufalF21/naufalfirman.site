"use client";

import { useEffect, useState } from "react";
import { Info, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";

export function TestingNotice() {
  const [showNotice, setShowNotice] = useState(false);

  // useEffect(() => {
  //   const hasVisited = localStorage.getItem("hasVisited");
  //   if (!hasVisited) {
  //     setShowNotice(true);
  //     localStorage.setItem("hasVisited", "true");
  //   }
  // }, []);

  if (!showNotice) return null;

  return (
    <Alert className="fixed right-4 bottom-4 z-50 w-[320px] pr-10 shadow-lg">
      <Info className="h-4 w-4" />
      <AlertTitle>Testing Mode</AlertTitle>
      <AlertDescription>
        This website is currently in testing. Some features may not work as
        expected.
      </AlertDescription>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-6 w-6"
        onClick={() => setShowNotice(false)}
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  );
}

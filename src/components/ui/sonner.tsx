"use client";

import { useTheme } from "next-themes";
import { Toaster as SonnerToaster, toast } from "sonner";

const Toaster = () => {
  const { theme } = useTheme();

  // Cast theme to expected union type with fallback
  const normalizedTheme = 
    theme === "light" || theme === "dark" || theme === "system" 
      ? theme 
      : "system";

  return (
    <SonnerToaster
      theme={normalizedTheme}
      toastOptions={{
        classNames: {
          toast:
            "bg-background text-foreground border border-border shadow-lg",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-muted-foreground",
        },
      }}
      className="toaster group"
    />
  );
};

export { Toaster, toast };

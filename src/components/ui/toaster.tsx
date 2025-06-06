"use client";

import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, actionType, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>

          {/* Example actions based on actionType */}
          {actionType === "undo" && (
            <Button onClick={() => console.log("Undo clicked")}>Undo</Button>
          )}
          {actionType === "retry" && (
            <Button onClick={() => console.log("Retry clicked")}>Retry</Button>
          )}

          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}

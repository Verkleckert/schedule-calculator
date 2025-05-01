"use client";

import { Toaster as SonnerToaster } from "sonner";

export function SonnerProvider() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        className:
          "rounded-md border border-gray-200 bg-white text-gray-900 shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
        duration: 5000,
      }}
    />
  );
}

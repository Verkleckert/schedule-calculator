import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SonnerProvider } from "@/components/sonner-provider";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schedule I Calculator",
  description: "Calculate the optimal mixing sequence to maximize profit",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/assets/logo/favicon-512x512.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <header
              className={`
                bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur
                supports-[backdrop-filter]:bg-background/60
              `}
            >
              <div className="container flex h-14 items-center justify-between">
                <div className="ml-1 flex items-center space-x-2">
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <SonnerProvider />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import Link from "next/link";
import { Heart, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-muted-foreground ml-0 text-center text-sm leading-loose md:text-left lg:ml-8">
            &copy; {currentYear} Verkleckert. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <nav className="flex gap-4 md:gap-6">
            <Link
              href="/terms"
              className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground text-sm font-medium transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/Verkleckert/schedule-calculator"
              className={`
                text-muted-foreground flex items-center gap-1 text-sm font-medium transition-colors
                hover:text-foreground
              `}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span>Report Bugs</span>
            </Link>
          </nav>
          <div className="text-muted-foreground mr-0 flex items-center gap-1 text-sm lg:mr-8">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Verkleckert</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

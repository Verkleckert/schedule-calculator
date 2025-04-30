import Link from "next/link"
import { Heart, Github } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left ml-0 lg:ml-8">
                        &copy; {currentYear} Verkleckert. All rights reserved.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                    <nav className="flex gap-4 md:gap-6">
                        <Link
                            href="/terms"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Contact
                        </Link>
                        <Link
                            href="https://github.com/Verkleckert/schedule-calculator"
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="h-4 w-4" />
                            <span>Report Bugs</span>
                        </Link>
                    </nav>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mr-0 lg:mr-8">
                        <span>Made with</span>
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>by Verkleckert</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

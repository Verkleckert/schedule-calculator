import { Mail, MapPin, Github } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Contact | Verkleckert",
    description: "Contact Verkleckert",
}

export default function ContactPage() {
    return (
        <section className="container mx-auto max-w-3xl py-12 md:py-16 lg:py-20">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h1>
                <p className="text-muted-foreground">
                    Have a question or want to work together? Feel free to reach out to me directly.
                </p>

                <div className="space-y-6 rounded-lg border p-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <span>verkleckert0@gmail.com</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 text-muted-foreground" />
                            <span>
                Verkleckert
                <br />
                Germany
              </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Github className="h-5 w-5 text-muted-foreground" />
                            <Link
                                href="https://github.com/Verkleckert"
                                className="text-muted-foreground hover:text-foreground hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/Verkleckert
                            </Link>
                        </div>
                    </div>
                    <div className="pt-4 border-t">
                        <p className="text-sm text-muted-foreground">
                            Found a bug? Please report it on{" "}
                            <Link
                                href="https://github.com/Verkleckert/schedule-calculator"
                                className="font-medium text-foreground hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

import Link from "next/link"

export const metadata = {
    title: "Terms of Service | Verkleckert",
    description: "Terms of Service for Verkleckert",
}

export default function TermsPage() {
    return (
        <section className="container mx-auto max-w-3xl py-12 md:py-16 lg:py-20">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: 24.4.2025</p>

                <div className="space-y-6 text-muted-foreground">
                    <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
                    <p>
                        Welcome to Schedule Calculator. These Terms of Service govern your use of our website and services operated by Verkleckert.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">2. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of
                        the terms, you may not access the service.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">3. Changes to Terms</h2>
                    <p>
                        I reserve the right to modify or replace these Terms at any time. It is your responsibility to check these
                        Terms periodically for changes.
                    </p>

                    <h2 className="text-xl font-semibold text-foreground">4. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms, please{" "}
                        <Link href="/contact" className="underline">
                            contact me
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    )
}

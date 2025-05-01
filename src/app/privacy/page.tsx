import Link from "next/link";
import { BackButton } from "@/components/back-button";

export const metadata = {
  title: "Privacy Policy | Verkleckert",
  description: "Privacy Policy for Verkleckert",
};

export default function PrivacyPage() {
  return (
    <section className="container mx-auto max-w-3xl py-12 md:py-16 lg:py-20">
      <BackButton />
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">Last updated: 24.4.2025</p>

        <div className="text-muted-foreground space-y-6">
          <h2 className="text-foreground text-xl font-semibold">
            1. Information Collection
          </h2>
          <p>
            I respect your privacy and am committed to protecting it. This
            Privacy Policy explains what information I collect and how I use it.
          </p>

          <h2 className="text-foreground text-xl font-semibold">
            2. Personal Information
          </h2>
          <p>
            When you contact me or use my services, I may collect personal
            information such as your name and email address. I only collect
            information that is necessary to provide you with my services.
          </p>

          <h2 className="text-foreground text-xl font-semibold">
            3. Use of Information
          </h2>
          <p>
            I use the information I collect to provide and improve my services,
            communicate with you, and comply with legal obligations.
          </p>

          <h2 className="text-foreground text-xl font-semibold">
            4. Data Security
          </h2>
          <p>
            I implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2 className="text-foreground text-xl font-semibold">
            5. Contact Information
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please{" "}
            <Link href="/contact" className="underline">
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

// /src/app/privacy/page.tsx

import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-6 text-muted-foreground">
          At InnovateWeb, we respect your privacy. This Privacy Policy explains how
          we collect, use, and protect your personal information.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Information We Collect</h2>
        <p className="mt-2 text-muted-foreground">
          We may collect your name, email address, and payment-related details
          when you purchase our product.
        </p>

        <h2 className="mt-8 text-xl font-semibold">How We Use Your Information</h2>
        <p className="mt-2 text-muted-foreground">
          Your information is used to deliver your purchase, provide support, and
          improve our services.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Data Security</h2>
        <p className="mt-2 text-muted-foreground">
          We take reasonable measures to protect your personal data.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-muted-foreground">
          If you have any questions, contact us at{" "}
          <a href="mailto:admin@codevix.in" className="text-primary">
            admin@codevix.in
          </a>
        </p>

        <Link href="/" className="mt-10 inline-block text-primary">
          ← Back to Home
        </Link>
      </Container>
    </main>
  );
}
// /src/app/contact/page.tsx

import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-3xl font-bold">Contact Us</h1>

        <p className="mt-6 text-muted-foreground">
          Need help? Reach out to us anytime.
        </p>

        <p className="mt-4">
          📧 Email:{" "}
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
// /src/app/terms/page.tsx

import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function TermsPage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>

        <p className="mt-6 text-muted-foreground">
          By accessing and using InnovateWeb, you agree to be bound by these
          terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Digital Product</h2>
        <p className="mt-2 text-muted-foreground">
          This is a digital product. No physical goods will be shipped.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Usage</h2>
        <p className="mt-2 text-muted-foreground">
          You may use the content for personal and educational purposes only.
          Redistribution or resale is not allowed.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Limitation of Liability</h2>
        <p className="mt-2 text-muted-foreground">
          We are not responsible for any direct or indirect damages.
        </p>

        <Link href="/" className="mt-10 inline-block text-primary">
          ← Back to Home
        </Link>
      </Container>
    </main>
  );
}
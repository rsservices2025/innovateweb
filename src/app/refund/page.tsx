// /src/app/refund/page.tsx

import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function RefundPage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-3xl font-bold">Refund Policy</h1>

        <p className="mt-6 text-muted-foreground">
          Due to the digital nature of our products, all sales are final.
        </p>

        <h2 className="mt-8 text-xl font-semibold">No Refunds</h2>
        <p className="mt-2 text-muted-foreground">
          Once the product is delivered, we do not offer refunds, returns, or
          exchanges under any circumstances.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Support</h2>
        <p className="mt-2 text-muted-foreground">
          If you face any issues accessing your purchase, please contact us at{" "}
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
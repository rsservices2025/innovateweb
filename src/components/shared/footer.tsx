// /src/components/shared/footer.tsx

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8 text-center text-sm text-muted-foreground">
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/privacy" className="hover:text-white transition">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-white transition">
          Terms
        </Link>
        <Link href="/refund" className="hover:text-white transition">
          Refund Policy
        </Link>
        <Link href="/contact" className="hover:text-white transition">
          Contact
        </Link>
      </div>

      <p className="mt-4">
        © {new Date().getFullYear()} InnovateWeb. All rights reserved.
      </p>
    </footer>
  );
}
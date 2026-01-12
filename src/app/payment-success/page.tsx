"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const paymentId = params.get("payment_id");

    if (!paymentId) {
      router.push("/");
      return;
    }

    setTimeout(() => {
      router.push("/thank-you");
    }, 1200);
  }, [router, params]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
      Verifying payment...
    </div>
  );
}
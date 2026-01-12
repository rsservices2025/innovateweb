"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paymentId = searchParams.get("payment_id");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/thank-you");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Payment Successful 🎉</h1>
        <p className="text-gray-400 mt-2">Redirecting you...</p>
        {paymentId && (
          <p className="text-xs text-gray-600 mt-2">
            Payment ID: {paymentId}
          </p>
        )}
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
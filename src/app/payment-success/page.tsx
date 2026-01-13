"use client";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-3xl font-bold mb-4">Payment Successful 🎉</h1>

      <a
        href={process.env.NEXT_PUBLIC_DELIVERY_URL}
        className="bg-purple-600 px-6 py-3 rounded-xl mb-4"
      >
        Download Now
      </a>

      <a
        href="/"
        className="border border-white/20 px-6 py-3 rounded-xl"
      >
        Go Home
      </a>
    </div>
  );
}
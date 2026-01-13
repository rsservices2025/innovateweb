"use client";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-white">
          Thank you for your purchase ❤️
        </h1>

        <p className="text-gray-400 mt-2">
          Your access is ready
        </p>

        <div className="mt-6 space-y-3">
          <a
            href={process.env.NEXT_PUBLIC_DELIVERY_URL}
            className="block bg-purple-600 text-white py-3 rounded-xl"
          >
            Download Now
          </a>

          <a
            href="/"
            className="block border border-white/20 text-white py-3 rounded-xl"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}
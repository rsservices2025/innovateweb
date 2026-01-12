"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(target / 60);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CartPage() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = async () => {
    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!data?.payment_url) {
        throw new Error("Payment URL not received");
      }

      window.location.href = data.payment_url;
    } catch (err) {
      alert("Payment initiation failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-md w-full rounded-2xl bg-gradient-to-br from-[#0b0b15] to-[#0f1025] border border-white/10 shadow-[0_0_60px_rgba(120,0,255,0.15)] p-6">

        {/* Book */}
        <div className="flex justify-center mb-6 relative">
          <div className="absolute w-40 h-40 bg-purple-600/20 blur-3xl rounded-full" />
          <Image
            src="/assets/book.png"
            alt="WebDev Pack"
            width={180}
            height={240}
            className="relative z-10 rounded-xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-white text-2xl font-bold text-center">
          InnovateWeb Code Vault
        </h1>
        <p className="text-gray-400 text-center mt-1">
          1500+ Web Projects Bundle
        </p>

        {/* Price */}
        <div className="text-center mt-4">
          <span className="text-gray-500 line-through mr-2">₹1999</span>
          <span className="text-3xl font-bold text-white">₹149</span>
        </div>

        {/* Features */}
        <ul className="mt-4 space-y-2 text-gray-300 text-sm">
          <li>✔ Instant digital access</li>
          <li>✔ Lifetime access</li>
          <li>✔ Beginner to advanced</li>
          <li>✔ All source code included</li>
        </ul>

        {/* Counters */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center shadow-[0_0_25px_rgba(120,0,255,0.15)]">
            <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              <AnimatedCounter target={10000} suffix="+" />
            </p>
            <p className="text-xs text-gray-400">Downloads</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center shadow-[0_0_25px_rgba(120,0,255,0.15)]">
            <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              <AnimatedCounter target={1500} suffix="+" />
            </p>
            <p className="text-xs text-gray-400">Projects</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center shadow-[0_0_25px_rgba(120,0,255,0.15)]">
            <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              <AnimatedCounter target={20} suffix="+" />
            </p>
            <p className="text-xs text-gray-400">Categories</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center shadow-[0_0_25px_rgba(120,0,255,0.15)]">
            <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ∞
            </p>
            <p className="text-xs text-gray-400">Lifetime Access</p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none"
          />
        </div>

        {/* Button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-white font-semibold transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "Pay ₹149 & Get Instant Access"}
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-3">
          By purchasing, you agree to our{" "}
          <span className="underline">Terms</span> &{" "}
          <span className="underline">Refund Policy</span>.
        </p>
      </div>
    </div>
  );
}
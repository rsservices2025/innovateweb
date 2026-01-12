"use client";

import { useEffect, useState } from "react";

type CounterItem = {
  label: string;
  value: number;
  suffix?: string;
};

const counters: CounterItem[] = [
  { label: "Downloads", value: 10000, suffix: "+" },
  { label: "Projects", value: 1500, suffix: "+" },
  { label: "Categories", value: 20, suffix: "+" },
  { label: "Lifetime Access", value: 1, suffix: "∞" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6">
        {counters.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 text-center shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-all"
          >
            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl" />

            <h3 className="text-3xl font-bold tracking-tight">
              <AnimatedNumber value={item.value} suffix={item.suffix} />
            </h3>

            <p className="mt-2 text-sm text-white/60">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
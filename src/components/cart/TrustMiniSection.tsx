export default function TrustMiniSection() {
  return (
    <div className="max-w-md w-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 text-center">
      <h3 className="text-white font-semibold text-lg mb-3">
        How it works
      </h3>

      <div className="space-y-2 text-sm text-gray-300">
        <p>1️⃣ Pay securely</p>
        <p>2️⃣ Get instant access</p>
        <p>3️⃣ Download & start learning</p>
      </div>

      <div className="mt-4 flex justify-center gap-4 text-xs text-gray-400">
        <span>🔒 Secure Payment</span>
        <span>⚡ Instant Delivery</span>
        <span>♾ Lifetime Access</span>
      </div>
    </div>
  );
}
// /src/components/shared/site-logo.tsx

import Image from "next/image";

export function SiteLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo-innovateweb.png"
        alt="InnovateWeb Logo"
        width={48}
        height={48}
        priority
      />
      <span className="text-sm font-semibold tracking-wide">
        InnovateWeb Code Vault
      </span>
    </div>
  );
}
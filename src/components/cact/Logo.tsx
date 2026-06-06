import logoAsset from "@/assets/cact-logo.png.asset.json";
import { useState } from "react";

export function CactLogo({ className = "h-9 w-auto" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      className={`relative inline-flex items-center gap-2 ${className}`}
      aria-label="CACT Health Community"
    >
      <span className="flex aspect-square h-full items-center justify-center bg-primary text-[10px] font-black text-primary-foreground">
        C
      </span>
      <span className="text-display text-lg leading-none text-foreground">CACT</span>
      <img
        src={logoAsset.url}
        alt=""
        className={`absolute inset-0 h-full w-auto transition-opacity ${loaded ? "opacity-100" : "opacity-0"}`}
        width={420}
        height={250}
        onLoad={() => setLoaded(true)}
      />
    </span>
  );
}

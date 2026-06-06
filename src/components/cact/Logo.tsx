import logoAsset from "@/assets/cact-logo.png.asset.json";

export function CactLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="CACT Health Community"
      className={className}
      width={420}
      height={250}
    />
  );
}

import spartan from "@/assets/cact/spartan.png.asset.json";

export function CactLogo({ className = "h-8" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="CrossFit CACT Health Community"
    >
      <img
        src={spartan.url}
        alt=""
        className="h-full w-auto"
        width={120}
        height={160}
      />
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-primary">
          CrossFit
        </span>
        <span className="text-display text-base leading-none text-foreground">
          CACT
        </span>
        <span className="text-[9px] uppercase tracking-[0.18em] text-foreground/65">
          Health Community
        </span>
      </span>
    </span>
  );
}

export function CactWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary sm:text-sm">
        CrossFit
      </span>
      <img
        src={spartan.url}
        alt="CACT Health Community"
        className="my-4 h-32 w-auto drop-shadow-[0_0_30px_rgba(104,196,119,0.35)] sm:h-44"
      />
      <span className="text-display text-[clamp(3.5rem,14vw,8rem)] leading-[0.85] text-foreground">
        CACT
      </span>
      <span className="mt-2 text-sm font-medium uppercase tracking-[0.35em] text-foreground/75 sm:text-base">
        Health Community
      </span>
    </div>
  );
}

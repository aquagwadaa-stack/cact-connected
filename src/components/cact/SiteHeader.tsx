import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Calendar, Menu, X } from "lucide-react";
import { CactLogo } from "./Logo";

const NAV = [
  { label: "Accueil", to: "/" },
  { label: "L'esprit CACT", to: "/esprit-cact" },
  { label: "Séances", to: "/seances" },
  { label: "Formules", to: "/formules" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            to="/"
            aria-label="CACT — Accueil"
            className={`flex items-center transition-all duration-500 ${
              scrolled || open
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <CactLogo className="h-10" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-foreground/75 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/app/planning"
              className="hidden h-10 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:inline-flex"
            >
              <Calendar size={15} /> Réserver
            </Link>
            <button
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-foreground lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative flex h-full flex-col px-6 pb-10 pt-24">
          <nav className="flex flex-col gap-1">
            {NAV.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-border/60 py-5 text-display text-4xl"
                style={{
                  animation: open ? `revealIn .5s ${index * 0.05}s ease both` : undefined,
                }}
              >
                <span>{item.label}</span>
                <span className="font-sans text-base text-primary">0{index + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Link
              to="/app/planning"
              onClick={() => setOpen(false)}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary text-base font-semibold text-primary-foreground"
            >
              <Calendar size={18} /> Réserver une séance
            </Link>
            <Link
              to="/app/connexion"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border text-sm text-foreground/90"
            >
              Espace membre
            </Link>
            <p className="pt-4 text-center text-xs text-muted-foreground">
              Saint-François, Guadeloupe · @cact_health_community
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CactLogo } from "./Logo";

const NAV = [
  { label: "L'esprit CACT", href: "#concept" },
  { label: "Les séances", href: "#hyrox" },
  { label: "Communauté", href: "#communaute" },
  { label: "Sandra & Armel", href: "#coachs" },
  { label: "Formules", href: "#formules" },
  { label: "Planning", href: "#planning" },
];

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
            ? "backdrop-blur-xl bg-background/80 border-b border-border/70"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2" aria-label="CACT — Accueil">
            <CactLogo className="h-8 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm text-foreground/85">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/app/planning"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground btn-press hover:bg-primary/90"
            >
              Voir les séances
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-foreground btn-press"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative flex h-full flex-col px-6 pt-24 pb-10">
          <nav className="flex flex-col gap-1">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-border/60 py-5 text-display text-4xl"
                style={{ animation: open ? `revealIn .5s ${i * 0.05}s ease both` : undefined }}
              >
                <span>{n.label}</span>
                <span className="text-primary text-base font-sans">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Link
              to="/app/planning"
              onClick={() => setOpen(false)}
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground btn-press"
            >
              Voir le planning
            </Link>
            <Link
              to="/app/connexion"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border text-sm text-foreground/90 btn-press"
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

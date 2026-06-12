import { Link } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import { CactLogo } from "./Logo";

const LINKS = [
  { label: "Accueil", to: "/" },
  { label: "L'esprit CACT", to: "/esprit-cact" },
  { label: "Les séances", to: "/seances" },
  { label: "Les formules", to: "/formules" },
] as const;

export function PublicFooter() {
  return (
    <footer className="border-t border-border bg-background px-5 pb-10 pt-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <CactLogo className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Cours collectifs, coaching et préparation HYROX à Saint-François, en Guadeloupe.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Découvrir</div>
          <ul className="mt-4 space-y-2 text-sm">
            {LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" /> Saint-François, Guadeloupe
            </li>
            <li>
              <a
                href="https://www.instagram.com/cact_health_community/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Instagram size={14} className="text-primary" /> @cact_health_community
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} CACT Health Community</span>
        <span>Manganao · Saint-François · Guadeloupe</span>
      </div>
    </footer>
  );
}

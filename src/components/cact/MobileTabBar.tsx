import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Calendar, User, Trophy } from "lucide-react";

const TABS = [
  { to: "/app", label: "Accueil", icon: Home, exact: true },
  { to: "/app/planning", label: "Planning", icon: Calendar },
  { to: "/app/hyrox", label: "HYROX", icon: Trophy },
  { to: "/app/profil", label: "Profil", icon: User },
] as const;

export function MobileTabBar() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border/70 bg-background/85 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {TABS.map(({ to, label, icon: Icon, exact }) => {
          const active = exact ? path === to : path.startsWith(to);
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className={`flex flex-col items-center justify-center gap-1 py-3 text-[11px] transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${active ? "bg-primary/15" : ""}`}>
                  <Icon size={18} />
                </span>
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

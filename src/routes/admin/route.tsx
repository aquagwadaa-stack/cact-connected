import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Users, CalendarDays, FileText, ArrowLeft, Shield } from "lucide-react";
import { CactLogo } from "@/components/cact/Logo";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin · CACT Health Community" }] }),
  component: AdminLayout,
});

type NavItem = { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean };
const NAV: NavItem[] = [
  { to: "/admin", label: "Vue d'ensemble", icon: LayoutDashboard, exact: true },
  { to: "/admin/membres", label: "Membres", icon: Users },
  { to: "/admin/planning", label: "Planning", icon: CalendarDays },
  { to: "/admin/contenu", label: "Contenu", icon: FileText },
];

function AdminLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-[100svh] bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft size={14} /> Site
            </Link>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <Link to="/admin" className="flex items-center gap-3">
              <CactLogo className="h-7 w-auto" />
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                <Shield size={10} /> Admin
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <div className="text-xs font-semibold">Sandra</div>
              <div className="text-[10px] text-muted-foreground">Coach · Admin</div>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-cact-deep text-center text-sm font-bold leading-9 text-primary-foreground">S</div>
          </div>
        </div>

        {/* Mobile tabs */}
        <nav className="mx-auto max-w-7xl overflow-x-auto px-5 lg:hidden">
          <div className="flex gap-1 pb-3">
            {NAV.map(({ to, label, icon: Icon, exact }) => {
              const active = exact ? path === to : path.startsWith(to);
              return (
                <Link key={to} to={to} className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs ${active ? "bg-primary text-primary-foreground" : "border border-border text-foreground/80"}`}>
                  <Icon size={13} /> {label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Desktop sidebar */}
        <aside className="hidden w-60 shrink-0 border-r border-border/60 p-5 lg:block">
          <nav className="space-y-1">
            {NAV.map(({ to, label, icon: Icon, exact }) => {
              const active = exact ? path === to : path.startsWith(to);
              return (
                <Link key={to} to={to} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${active ? "bg-primary/15 text-primary" : "text-foreground/80 hover:bg-card"}`}>
                  <Icon size={16} /> {label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 rounded-2xl border border-border bg-card p-4">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Démonstration</div>
            <p className="mt-1 text-xs text-muted-foreground">Données fictives — aucune action n'affecte la production.</p>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-5 py-8 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

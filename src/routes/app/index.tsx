import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ChevronRight, Flame, Trophy, Zap, Users, ArrowLeft } from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";
import { CactLogo } from "@/components/cact/Logo";

export const Route = createFileRoute("/app/")({
  head: () => ({ meta: [{ title: "Mon espace · CACT Health Community" }] }),
  component: AppHome,
});

const NEXT = [
  { day: "Aujourd'hui", time: "18:30", type: "HYROX Training", coach: "Sandra", hyrox: true, status: "Inscrit" },
  { day: "Jeu.", time: "07:00", type: "Full Body", coach: "Armel", status: "Liste d'attente" },
];

const SUGGEST = [
  { day: "Demain", time: "07:00", type: "WOD Collectif", coach: "Armel", spots: 4 },
  { day: "Demain", time: "19:00", type: "Force & Power", coach: "Sandra", spots: 2 },
  { day: "Mer.", time: "18:30", type: "HYROX Simulation", coach: "Armel", spots: 6, hyrox: true },
];

function AppHome() {
  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/85 px-5 py-4 backdrop-blur-xl">
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowLeft size={14} /> Site
        </Link>
        <CactLogo className="h-7 w-auto" />
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-cact-deep text-center text-sm font-bold leading-9 text-primary-foreground">M</div>
      </header>

      <div className="mx-auto max-w-md px-5 pt-6">
        {/* Greeting */}
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Lundi 9 juin</p>
        <h1 className="mt-1 text-display text-4xl">Salut Marie 👋</h1>
        <p className="mt-1 text-sm text-muted-foreground">Prête à pousser avec la team aujourd'hui ?</p>

        {/* Pass card */}
        <div className="relative mt-6 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-6">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-primary">Abonnement actif</span>
              <Trophy size={16} className="text-primary" />
            </div>
            <div className="mt-3 text-display text-2xl">3 séances / semaine</div>
            <div className="mt-1 text-xs text-muted-foreground">Renouvellement le 1er juillet</div>

            <div className="mt-5 flex items-end justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Crédits restants</div>
                <div className="mt-1 text-display text-5xl text-primary">7</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Cette semaine</div>
                <div className="mt-1 text-display text-2xl">2 / 3</div>
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div className="h-full bg-primary" style={{ width: "66%" }} />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { v: "32", l: "séances", icon: Flame },
            { v: "8", l: "semaines", icon: Zap },
            { v: "5", l: "PR ce mois", icon: Trophy },
          ].map(({ v, l, icon: Icon }) => (
            <div key={l} className="rounded-2xl border border-border bg-card p-3">
              <Icon size={14} className="text-primary" />
              <div className="mt-2 text-display text-2xl">{v}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        {/* Upcoming */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-display text-2xl">Mes prochaines séances</h2>
            <Link to="/app/planning" className="text-xs text-primary">Tout voir</Link>
          </div>
          <ul className="mt-4 space-y-3">
            {NEXT.map((n, i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="flex w-14 flex-col items-center rounded-xl bg-surface-2 py-2">
                  <div className="text-[10px] uppercase text-muted-foreground">{n.day}</div>
                  <div className="text-display text-lg leading-none">{n.time}</div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="truncate text-sm font-semibold">{n.type}</span>
                    {n.hyrox && <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">HYROX</span>}
                  </div>
                  <div className="text-xs text-muted-foreground">Coach {n.coach} · {n.status}</div>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
              </li>
            ))}
          </ul>
        </section>

        {/* Suggestions */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-display text-2xl">Réserver vite</h2>
            <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground"><Users size={12} /> places limitées</span>
          </div>
          <ul className="mt-4 space-y-3">
            {SUGGEST.map((s, i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="flex w-14 flex-col items-center rounded-xl bg-surface-2 py-2">
                  <div className="text-[10px] uppercase text-muted-foreground">{s.day}</div>
                  <div className="text-display text-lg leading-none">{s.time}</div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="truncate text-sm font-semibold">{s.type}</span>
                    {s.hyrox && <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">HYROX</span>}
                  </div>
                  <div className="text-xs text-muted-foreground">Coach {s.coach} · {s.spots} places</div>
                </div>
                <button className="rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground btn-press">Réserver</button>
              </li>
            ))}
          </ul>
        </section>

        {/* Community pulse */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["A", "K", "T"].map((c, i) => (
                <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-card bg-gradient-to-br from-primary to-cact-deep text-[10px] font-bold text-primary-foreground">{c}</div>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              <strong className="text-foreground">Alex, Kelly et 12 autres</strong> sont inscrits à 18:30 ce soir 🔥
            </div>
          </div>
        </section>

        <div className="mt-8 flex items-center justify-center">
          <Link to="/app/connexion" className="text-xs text-muted-foreground hover:text-foreground">Se déconnecter</Link>
        </div>
      </div>

      <MobileTabBar />
    </main>
  );
}

export default AppHome;

// Calendar import retained (unused intentionally removed)
void Calendar;

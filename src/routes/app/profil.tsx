import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Settings, CreditCard, Bell, Shield, LogOut, ChevronRight } from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";

export const Route = createFileRoute("/app/profil")({
  head: () => ({ meta: [{ title: "Mon profil · CACT" }] }),
  component: ProfilPage,
});

const HISTORY = [
  { date: "8 juin", type: "WOD Collectif", coach: "Armel" },
  { date: "6 juin", type: "HYROX Training", coach: "Sandra" },
  { date: "4 juin", type: "Force & Power", coach: "Armel" },
  { date: "2 juin", type: "WOD Collectif", coach: "Sandra" },
];

function ProfilPage() {
  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/85 px-5 py-4 backdrop-blur-xl">
        <Link to="/app" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowLeft size={14} /> Retour
        </Link>
        <h1 className="text-display text-xl">Profil</h1>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground">
          <Settings size={15} />
        </button>
      </header>

      <div className="mx-auto max-w-md px-5 pt-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cact-deep text-2xl font-bold text-primary-foreground">M</div>
          <div>
            <div className="text-display text-2xl">Marie Dubois</div>
            <div className="text-xs text-muted-foreground">Membre depuis mars 2025</div>
          </div>
        </div>

        <section className="mt-6 rounded-3xl border border-border bg-card p-5">
          <div className="text-xs uppercase tracking-wider text-primary">Abonnement</div>
          <div className="mt-2 text-display text-xl">3 séances / semaine</div>
          <div className="mt-1 text-xs text-muted-foreground">75 €/mois · renouvellement le 1er juillet</div>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-full border border-border py-2 text-xs font-semibold btn-press">Gérer</button>
            <button className="flex-1 rounded-full bg-primary py-2 text-xs font-semibold text-primary-foreground btn-press">Changer de formule</button>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { v: "7", l: "crédits" },
            { v: "32", l: "séances" },
            { v: "5", l: "PR" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-4">
              <div className="text-display text-3xl text-primary">{s.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-display text-2xl">Historique</h2>
          <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {HISTORY.map((h, i) => (
              <li key={i} className="flex items-center gap-3 px-4 py-3">
                <div className="w-14 text-xs text-muted-foreground">{h.date}</div>
                <div className="min-w-0 flex-1 text-sm font-medium">{h.type}</div>
                <div className="text-xs text-muted-foreground">{h.coach}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          {[
            { icon: CreditCard, label: "Paiement & factures" },
            { icon: Bell, label: "Notifications" },
            { icon: Shield, label: "Confidentialité" },
          ].map(({ icon: Icon, label }) => (
            <button key={label} className="flex w-full items-center gap-3 border-b border-border px-4 py-4 text-left last:border-0">
              <Icon size={16} className="text-muted-foreground" />
              <span className="flex-1 text-sm">{label}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </button>
          ))}
        </section>

        <Link to="/app/connexion" className="mt-6 flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm text-muted-foreground btn-press">
          <LogOut size={14} /> Se déconnecter
        </Link>
      </div>

      <MobileTabBar />
    </main>
  );
}

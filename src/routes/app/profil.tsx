import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bell, ChevronRight, CreditCard, LogOut, Settings, Shield } from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";
import { DEMO_MEMBER } from "@/lib/cact-demo";

export const Route = createFileRoute("/app/profil")({
  head: () => ({ meta: [{ title: "Mon profil | CACT Health Community" }] }),
  component: ProfilPage,
});

function ProfilPage() {
  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/92 px-5 py-4 backdrop-blur-xl">
        <Link to="/app" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowLeft size={14} /> Accueil
        </Link>
        <h1 className="text-display text-xl">Profil</h1>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground"
          aria-label="Paramètres"
        >
          <Settings size={15} />
        </button>
      </header>

      <div className="mx-auto max-w-md px-5 pt-7">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cact-deep text-2xl font-bold text-primary-foreground">
            M
          </div>
          <div>
            <div className="text-display text-2xl">{DEMO_MEMBER.fullName}</div>
            <div className="text-xs text-muted-foreground">{DEMO_MEMBER.email}</div>
          </div>
        </div>

        <section className="mt-7 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/12 to-card p-5">
          <div className="text-xs uppercase tracking-wider text-primary">Formule active</div>
          <div className="mt-2 text-display text-2xl">{DEMO_MEMBER.plan}</div>
          <div className="mt-1 text-xs text-muted-foreground">{DEMO_MEMBER.renewal}</div>
          <div className="mt-5 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Séances disponibles
              </div>
              <div className="mt-1 text-display text-4xl text-primary">{DEMO_MEMBER.credits}</div>
            </div>
            <Link
              to="/app/formules"
              className="rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground"
            >
              Voir les formules
            </Link>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          {[
            { icon: CreditCard, label: "Paiements et factures", detail: "Voir mes documents" },
            { icon: Bell, label: "Notifications", detail: "Rappels activés" },
            { icon: Shield, label: "Confidentialité", detail: "Gérer mes données" },
          ].map(({ icon: Icon, label, detail }) => (
            <button
              key={label}
              className="flex w-full items-center gap-3 border-b border-border px-4 py-4 text-left last:border-0"
            >
              <Icon size={16} className="text-primary" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm">{label}</span>
                <span className="block text-[11px] text-muted-foreground">{detail}</span>
              </span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </button>
          ))}
        </section>

        <div className="mt-7 rounded-2xl border border-border bg-card p-4">
          <div className="text-xs font-semibold">Besoin d'aide ?</div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Contactez Sandra ou Armel directement depuis votre espace membre.
          </p>
        </div>

        <Link
          to="/app/connexion"
          className="mt-6 flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm text-muted-foreground btn-press"
        >
          <LogOut size={14} /> Se déconnecter
        </Link>
      </div>

      <MobileTabBar />
    </main>
  );
}

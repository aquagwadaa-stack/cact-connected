import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, CreditCard, ShieldCheck, Sparkles, X } from "lucide-react";
import { MEMBERSHIP_PLANS } from "@/lib/cact-demo";

export const Route = createFileRoute("/app/formules")({
  head: () => ({ meta: [{ title: "Formules | CACT Health Community" }] }),
  component: FormulesPage,
});

function FormulesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const selected = MEMBERSHIP_PLANS.find((plan) => plan.id === selectedId);

  const confirm = () => {
    setSuccess(true);
  };

  return (
    <main className="min-h-[100svh] bg-background pb-12 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
          <Link to="/app" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowLeft size={14} /> Accueil
          </Link>
          <h1 className="text-display text-xl">Formules</h1>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            Démo
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-md px-5 pt-7">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Choisir son rythme</p>
        <h2 className="mt-2 text-display text-4xl">Une formule simple, sans surprise.</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Cette page illustre le futur parcours d'achat. Les noms, prix et conditions seront
          configurés avec CACT.
        </p>

        <div className="mt-7 space-y-4">
          {MEMBERSHIP_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative rounded-3xl border p-5 ${
                plan.popular ? "border-primary/55 bg-primary/7" : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
                  Exemple recommandé
                </span>
              )}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-display text-2xl">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xs font-semibold text-primary">{plan.detail}</div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-border/60 pt-4">
                <span className="text-sm font-semibold">{plan.price}</span>
                <button
                  onClick={() => {
                    setSelectedId(plan.id);
                    setSuccess(false);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:border-primary/50"
                  }`}
                >
                  Choisir
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-xs leading-relaxed text-muted-foreground">
          <Sparkles size={16} className="mt-0.5 shrink-0 text-primary" />
          L'administrateur pourra aussi attribuer manuellement une carte après un règlement effectué
          à la salle.
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center">
          <div className="w-full max-w-sm rounded-[2rem] border border-border bg-card p-6 shadow-elevated">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">
                  {success ? "Activation réussie" : "Récapitulatif"}
                </p>
                <h2 className="mt-2 text-display text-3xl">{selected.name}</h2>
              </div>
              <button
                onClick={() => {
                  setSelectedId(null);
                  setSuccess(false);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            {success ? (
              <div className="py-7 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check size={28} />
                </div>
                <p className="mt-5 text-lg font-semibold">La formule est activée.</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Dans la version finale, le membre recevra aussi sa confirmation par e-mail.
                </p>
                <Link
                  to="/app/planning"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                >
                  Réserver une séance
                </Link>
              </div>
            ) : (
              <>
                <div className="mt-5 rounded-2xl bg-surface-2 p-4">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">Formule</span>
                    <span className="font-semibold">{selected.detail}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-3 text-sm">
                    <span className="text-muted-foreground">Montant</span>
                    <span className="font-semibold">{selected.price}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/8 p-4 text-xs leading-relaxed text-muted-foreground">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                  Mode démonstration : aucune carte bancaire n'est demandée et aucun paiement n'est
                  effectué.
                </div>

                <button
                  onClick={confirm}
                  className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                >
                  <CreditCard size={16} /> Simuler l'activation
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

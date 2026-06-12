import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CreditCard, Sparkles } from "lucide-react";
import { MEMBERSHIP_PLANS } from "@/lib/cact-demo";
import { PublicFooter } from "@/components/cact/PublicFooter";
import { SiteHeader } from "@/components/cact/SiteHeader";

export const Route = createFileRoute("/formules")({
  head: () => ({
    meta: [
      { title: "Formules et tarifs | CACT Health Community" },
      {
        name: "description",
        content:
          "Découvrez les formules CACT : séance découverte, carte, abonnements et coaching individuel.",
      },
    ],
  }),
  component: PublicFormulesPage,
});

function PublicFormulesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Formules & tarifs</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="max-w-4xl text-display text-[clamp(3.2rem,11vw,6.5rem)] leading-[0.88]">
              Trouvez le rythme
              <br />
              <span className="text-primary">qui vous ressemble.</span>
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Commencez ponctuellement, choisissez une carte ou installez une routine régulière.
              Chaque formule donne accès à votre espace de réservation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MEMBERSHIP_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex min-h-80 flex-col rounded-3xl border p-6 ${
                plan.popular ? "border-primary/60 bg-primary/8" : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
                  La plus choisie
                </span>
              )}
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-display text-3xl">{plan.name}</h2>
                <span className="max-w-24 text-right text-[10px] uppercase tracking-wider text-primary">
                  {plan.detail}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-auto flex items-end justify-between gap-4 border-t border-border/60 pt-6">
                <span className="text-display text-2xl">{plan.price}</span>
                <Link
                  to="/app/connexion"
                  className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-xs font-semibold ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:border-primary/50"
                  }`}
                >
                  Choisir
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
              <Sparkles size={14} /> Simple au quotidien
            </span>
            <h2 className="mt-4 text-display text-[clamp(2.4rem,8vw,4.5rem)] leading-[0.94]">
              Votre formule.
              <br />
              Vos réservations.
              <br />
              Un seul espace.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Consultez vos séances restantes",
              "Réservez selon vos disponibilités",
              "Annulez depuis votre téléphone",
              "Renouvelez votre formule facilement",
            ].map((item) => (
              <div
                key={item}
                className="flex min-h-28 items-start gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check size={14} />
                </span>
                <span className="text-sm font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-[2rem] border border-primary/25 bg-[radial-gradient(circle_at_top_right,_rgba(104,196,119,0.22),_transparent_48%),linear-gradient(135deg,#121512,#080A09)] p-8 sm:flex-row sm:items-end sm:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Prêt à commencer ?</p>
            <h2 className="mt-3 text-display text-[clamp(2.3rem,8vw,4.25rem)] leading-[0.95]">
              Créez votre espace
              <br />
              et choisissez votre formule.
            </h2>
          </div>
          <Link
            to="/app/connexion"
            className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground"
          >
            <CreditCard size={18} /> Accéder à mon espace
          </Link>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}

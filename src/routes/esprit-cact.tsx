import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import communityImg from "@/assets/cact/cact-group.jpg.asset.json";
import community2Img from "@/assets/cact/cact-rowers.jpg.asset.json";
import community3Img from "@/assets/cact/cact-deadlift.jpg.asset.json";
import { PublicFooter } from "@/components/cact/PublicFooter";
import { SiteHeader } from "@/components/cact/SiteHeader";

export const Route = createFileRoute("/esprit-cact")({
  head: () => ({
    meta: [
      { title: "L'esprit CACT | CACT Health Community" },
      {
        name: "description",
        content:
          "Découvrez la communauté CACT, les coachs Sandra et Armel et la salle de Saint-François.",
      },
    ],
  }),
  component: EspritCactPage,
});

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Bien encadré",
    text: "Chaque mouvement est expliqué et corrigé pour vous permettre de progresser en confiance.",
  },
  {
    icon: Sparkles,
    title: "Adapté à chacun",
    text: "L'intensité et les exercices s'ajustent à votre niveau, votre forme et vos objectifs.",
  },
  {
    icon: Users,
    title: "À taille humaine",
    text: "Les créneaux limités à 12 participants préservent la qualité du coaching et du groupe.",
  },
];

const COACHES = [
  {
    name: "Sandra",
    initial: "S",
    text: "Écoute, précision et énergie pour vous aider à progresser avec confiance.",
  },
  {
    name: "Armel",
    initial: "A",
    text: "Un accompagnement exigeant et accessible, toujours adapté à votre niveau.",
  },
];

function EspritCactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative flex min-h-[68svh] items-end overflow-hidden">
        <img
          src={communityImg}
          alt="La communauté CACT"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/15" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">L'esprit CACT</p>
          <h1 className="mt-4 max-w-4xl text-display text-[clamp(3rem,11vw,6.5rem)] leading-[0.9]">
            On s'entraîne ensemble.
            <br />
            <span className="text-primary">On progresse chacun.</span>
          </h1>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Notre approche</p>
            <div>
              <h2 className="text-display text-[clamp(2.3rem,7vw,4.25rem)] leading-[0.96]">
                Commencer simplement.
                <br />
                Avancer durablement.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/78">
                Il n'est pas nécessaire d'être déjà sportif pour rejoindre CACT. Vous venez avec
                votre niveau et votre énergie du jour. Sandra, Armel et le groupe vous aident à
                construire une pratique régulière, motivante et adaptée.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {PRINCIPLES.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">La communauté</p>
          <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="max-w-3xl text-display text-[clamp(2.4rem,8vw,4.5rem)] leading-[0.94]">
              L'énergie du collectif,
              <br />
              sans la comparaison.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              On partage l'effort, les progrès et les bons moments, tout en respectant le rythme de
              chacun.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">
            <div className="col-span-12 overflow-hidden rounded-3xl sm:col-span-7">
              <img
                src={community2Img}
                alt="Entraînement collectif chez CACT"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-12 overflow-hidden rounded-3xl sm:col-span-5">
              <img
                src={community3Img}
                alt="Accompagnement pendant une séance CACT"
                className="aspect-[4/3] h-full w-full object-cover sm:aspect-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">L'accompagnement</p>
          <h2 className="mt-3 text-display text-[clamp(2.5rem,8vw,4.75rem)]">Sandra & Armel</h2>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {COACHES.map((coach, index) => (
              <article
                key={coach.name}
                className={`flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-gradient-to-br p-7 ${
                  index === 0
                    ? "from-primary/35 via-cact-deep/55 to-background"
                    : "from-cact-deep/70 via-primary/25 to-background"
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/15 text-display text-3xl">
                  {coach.initial}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Coach</p>
                  <h3 className="mt-2 text-display text-5xl">{coach.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/80">
                    {coach.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">La salle</p>
            <h2 className="mt-3 text-display text-[clamp(2.4rem,8vw,4.5rem)] leading-[0.94]">
              À Manganao,
              <br />à Saint-François.
            </h2>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-primary" size={18} />
              <div>
                <div className="font-semibold">Manganao · Belle-Allée</div>
                <div className="text-sm text-muted-foreground">
                  97118 Saint-François, Guadeloupe
                </div>
              </div>
            </div>
            <div className="my-5 hairline" />
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 text-primary" size={18} />
              <div>
                <div className="font-semibold">Du lundi au samedi</div>
                <div className="text-sm text-muted-foreground">
                  Séances le matin et en fin de journée
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Manganao+Saint-Fran%C3%A7ois+Guadeloupe"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold hover:border-primary/50"
            >
              Ouvrir l'itinéraire <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-primary/25 bg-primary/8 p-8 sm:flex-row sm:items-center sm:p-12">
          <h2 className="max-w-2xl text-display text-[clamp(2.2rem,7vw,4rem)] leading-[0.95]">
            Envie de vivre votre première séance ?
          </h2>
          <Link
            to="/app/planning"
            className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground"
          >
            Voir le planning <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}

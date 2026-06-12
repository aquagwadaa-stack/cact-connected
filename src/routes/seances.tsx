import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, CheckCircle2, HeartPulse, Timer, Trophy, Users } from "lucide-react";
import hyroxImg from "@/assets/hyrox.jpg";
import { PublicFooter } from "@/components/cact/PublicFooter";
import { SiteHeader } from "@/components/cact/SiteHeader";

export const Route = createFileRoute("/seances")({
  head: () => ({
    meta: [
      { title: "Les séances | CACT Health Community" },
      {
        name: "description",
        content:
          "Cours collectifs, coaching individuel et préparation HYROX chez CACT à Saint-François.",
      },
    ],
  }),
  component: SeancesPage,
});

const EXPERIENCES = [
  {
    icon: Users,
    title: "Cours collectifs",
    text: "Des séances variées en petit groupe pour développer force, endurance, mobilité et confiance.",
    detail: "12 participants maximum",
  },
  {
    icon: HeartPulse,
    title: "Coaching individuel",
    text: "Un suivi personnel construit autour de votre niveau, de vos besoins et d'un objectif précis.",
    detail: "Sur rendez-vous",
  },
  {
    icon: Trophy,
    title: "Préparation HYROX",
    text: "Course, endurance, force et technique réunies dans une préparation progressive et structurée.",
    detail: "Club affilié officiel",
  },
];

const STEPS = [
  "Accueil et présentation de la séance",
  "Échauffement progressif et technique",
  "Entraînement adapté au niveau de chacun",
  "Retour au calme et conseils du coach",
];

function SeancesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <img
          src={hyroxImg}
          alt="Séance d'entraînement fonctionnel chez CACT"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/72 to-background/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Les séances</p>
          <h1 className="mt-4 max-w-5xl text-display text-[clamp(3.2rem,12vw,7rem)] leading-[0.88]">
            Plusieurs façons
            <br />
            <span className="text-primary">d'avancer.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Vous choisissez le format. Sandra et Armel adaptent l'intensité pour que chaque séance
            reste utile, motivante et accessible.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {EXPERIENCES.map(({ icon: Icon, title, text, detail }) => (
              <article
                key={title}
                className="flex min-h-72 flex-col rounded-3xl border border-border bg-card p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon size={22} />
                  </span>
                  <span className="max-w-28 text-right text-[10px] uppercase tracking-wider text-primary">
                    {detail}
                  </span>
                </div>
                <div className="mt-auto">
                  <h2 className="text-display text-3xl">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
              <Timer size={14} /> Une séance chez CACT
            </span>
            <h2 className="mt-4 text-display text-[clamp(2.4rem,8vw,4.5rem)] leading-[0.94]">
              Encadrée du début
              <br />
              jusqu'à la fin.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
              Le coach présente l'objectif, explique les mouvements et propose les adaptations
              nécessaires. Vous savez toujours quoi faire et pourquoi vous le faites.
            </p>
          </div>

          <ol className="space-y-3">
            {STEPS.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="text-display text-2xl text-primary">0{index + 1}</span>
                <span className="text-sm font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={hyroxImg}
          alt="Préparation HYROX chez CACT"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
              <Trophy size={12} /> Affiliation officielle
            </span>
            <h2 className="mt-5 text-display text-[clamp(2.6rem,10vw,5.2rem)] leading-[0.92]">
              Préparez votre
              <br />
              prochain HYROX.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Découvrez le format ou préparez une compétition avec un travail équilibré entre
              course, endurance, force et maîtrise des mouvements spécifiques.
            </p>
            <Link
              to="/app/planning"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              Voir les créneaux HYROX <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/25 bg-primary/8 p-8 sm:p-12">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Tous niveaux</p>
              <h2 className="mt-3 max-w-3xl text-display text-[clamp(2.3rem,8vw,4.25rem)] leading-[0.95]">
                Choisissez un créneau.
                <br />
                Le coach adapte le reste.
              </h2>
            </div>
            <Link
              to="/app/planning"
              className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground"
            >
              <Calendar size={18} /> Voir le planning
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {["12 places par créneau", "Réservation mobile", "Mouvements adaptables"].map(
              (item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-primary" /> {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}

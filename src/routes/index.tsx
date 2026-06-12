import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Dumbbell, MapPin, Sparkles, Trophy, Users } from "lucide-react";
import communityImg from "@/assets/cact/cact-rowers.jpg.asset.json";
import deadliftImg from "@/assets/cact/cact-deadlift.jpg.asset.json";
import spartan from "@/assets/cact/spartan.png.asset.json";
import { PublicFooter } from "@/components/cact/PublicFooter";
import { SiteHeader } from "@/components/cact/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CrossFit CACT Health Community | Saint-François, Guadeloupe" },
      {
        name: "description",
        content:
          "Box CrossFit affiliée HYROX à Saint-François, Guadeloupe. Cours collectifs, coaching et préparation HYROX dans une communauté soudée.",
      },
      {
        property: "og:title",
        content: "CrossFit CACT Health Community | Bougez. Progressez. Ensemble.",
      },
      { property: "og:image", content: communityImg.url },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#68C477" },
    ],
  }),
  component: HomePage,
});

const PATHS = [
  {
    icon: Users,
    label: "Le club",
    title: "Découvrir l'esprit CACT",
    text: "La communauté, Sandra et Armel, la salle et la façon dont chacun est accompagné.",
    to: "/esprit-cact",
  },
  {
    icon: Trophy,
    label: "L'entraînement",
    title: "Choisir sa séance",
    text: "Cours collectifs, coaching individuel et préparation HYROX pour tous les niveaux.",
    to: "/seances",
  },
  {
    icon: Dumbbell,
    label: "Votre rythme",
    title: "Voir les formules",
    text: "Séance à l'unité, carte, abonnement ou coaching personnel selon vos objectifs.",
    to: "/formules",
  },
] as const;

function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_rgba(104,196,119,0.18),_transparent_55%),linear-gradient(180deg,#0a0d0a,#070908)] px-5 pt-24 sm:px-8">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
          <div className="reveal flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs backdrop-blur-md">
              <MapPin size={12} className="text-primary" />
              Saint-François · Guadeloupe
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/30 backdrop-blur-md">
              <Trophy size={12} /> Club affilié HYROX
            </span>
          </div>

          <div className="reveal reveal-2 mt-10 flex flex-col items-center text-center">
            <span className="text-sm font-bold uppercase tracking-[0.45em] text-primary sm:text-base">
              CrossFit
            </span>
            <img
              src={spartan.url}
              alt="CACT Health Community"
              className="my-5 h-32 w-auto drop-shadow-[0_0_40px_rgba(104,196,119,0.4)] sm:h-44"
            />
            <h1 className="text-display text-[clamp(4rem,16vw,9rem)] leading-[0.82]">
              CACT
            </h1>
            <span className="mt-3 text-sm font-medium uppercase tracking-[0.4em] text-foreground/75 sm:text-base">
              Health Community
            </span>
          </div>

          <p className="reveal reveal-3 mt-12 max-w-xl text-center text-base leading-relaxed text-foreground/80 sm:text-lg">
            Des séances accessibles, un coaching attentif et l'énergie d'un groupe pour avancer
            ensemble à votre rythme.
          </p>

          <Link
            to="/app/planning"
            className="reveal reveal-4 mt-7 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Calendar size={18} /> Réserver une séance
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Découvrir CACT</p>
            <h2 className="mt-3 text-display text-[clamp(2.3rem,8vw,4.25rem)] leading-[0.95]">
              Tout commence ici.
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
            {PATHS.map(({ icon: Icon, label, title, text, to }) => (
              <Link
                key={to}
                to={to}
                className="group flex min-h-64 flex-col rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/45"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon size={20} />
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
                <div className="mt-auto">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary">{label}</p>
                  <h3 className="mt-2 text-display text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={communityImg.url}
              alt="La communauté CACT après une séance"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:pl-8">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
              <Sparkles size={14} /> L'esprit CACT
            </span>
            <h2 className="mt-4 text-display text-[clamp(2.4rem,8vw,4.5rem)] leading-[0.92]">
              Votre rythme.
              <br />
              Notre énergie.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
              Une salle à taille humaine où les mouvements s'adaptent, les coachs restent présents
              et le collectif donne envie de revenir.
            </p>
            <Link
              to="/esprit-cact"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              Découvrir le club <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-[2rem] border border-primary/25 bg-[radial-gradient(circle_at_top_right,_rgba(104,196,119,0.22),_transparent_48%),linear-gradient(135deg,#121512,#080A09)] p-8 sm:flex-row sm:items-end sm:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Votre prochaine séance
            </p>
            <h2 className="mt-3 text-display text-[clamp(2.4rem,8vw,4.75rem)] leading-[0.94]">
              Trouvez votre créneau.
              <br />
              Réservez votre place.
            </h2>
          </div>
          <Link
            to="/app/planning"
            className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Voir le planning <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* hidden image to keep deadlift asset referenced for other sections */}
      <link rel="prefetch" href={deadliftImg.url} />

      <PublicFooter />
    </main>
  );
}

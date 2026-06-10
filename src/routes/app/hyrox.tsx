import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Dumbbell, Gauge, Trophy } from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";
import hyroxImg from "@/assets/hyrox.jpg";

export const Route = createFileRoute("/app/hyrox")({
  head: () => ({ meta: [{ title: "Préparation HYROX | CACT" }] }),
  component: HyroxPage,
});

const FOCUS = [
  {
    icon: Gauge,
    title: "Endurance",
    text: "Apprendre à maintenir un effort régulier entre course et ateliers.",
  },
  {
    icon: Dumbbell,
    title: "Technique",
    text: "Travailler les mouvements avec des consignes et des adaptations.",
  },
  {
    icon: Trophy,
    title: "Préparation",
    text: "Construire progressivement la confiance nécessaire pour le jour de course.",
  },
];

function HyroxPage() {
  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/92 px-5 py-4 backdrop-blur-xl">
        <Link to="/app" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowLeft size={14} /> Accueil
        </Link>
        <h1 className="text-display text-xl">Préparation HYROX</h1>
        <div className="w-12" />
      </header>

      <section className="relative h-64 overflow-hidden">
        <img
          src={hyroxImg}
          alt="Entraînement fonctionnel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            <Trophy size={11} /> Club affilié officiel
          </span>
          <h2 className="mt-3 text-display text-3xl">Se préparer, étape par étape.</h2>
        </div>
      </section>

      <div className="mx-auto max-w-md px-5 pt-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          CACT accompagne les membres qui souhaitent découvrir le format HYROX ou préparer une
          compétition. Chaque séance développe progressivement l'endurance, la technique et la
          confiance.
        </p>

        <section className="mt-7 space-y-3">
          {FOCUS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Icon size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-primary/30 bg-primary/7 p-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
            <Calendar size={14} /> Séances HYROX
          </div>
          <h3 className="mt-2 text-display text-2xl">Retrouvez les séances dans le planning</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Le filtre HYROX permet d'afficher rapidement les cours concernés.
          </p>
          <Link
            to="/app/planning"
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
          >
            Ouvrir le planning <ArrowRight size={15} />
          </Link>
        </section>
      </div>

      <MobileTabBar />
    </main>
  );
}

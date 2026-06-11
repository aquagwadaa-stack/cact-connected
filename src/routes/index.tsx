import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Dumbbell,
  HeartPulse,
  Instagram,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import hyroxImg from "@/assets/hyrox.jpg";
import communityImg from "@/assets/community.jpg";
import community3 from "@/assets/community-3.jpg";
import { SiteHeader } from "@/components/cact/SiteHeader";
import { CactLogo } from "@/components/cact/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CACT Health Community | Functional fitness à Saint-François" },
      {
        name: "description",
        content:
          "Cours collectifs, coaching individuel et préparation HYROX à Saint-François en Guadeloupe, avec Sandra et Armel.",
      },
      { property: "og:title", content: "CACT Health Community | Bougez. Progressez. Ensemble." },
      {
        property: "og:description",
        content:
          "Une salle à taille humaine, des séances adaptées et une vraie énergie de groupe à Saint-François.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#68C477" },
    ],
  }),
  component: VitrinePage,
});

const EXPERIENCES = [
  {
    icon: Users,
    title: "Cours collectifs",
    text: "Des séances en petit groupe, guidées par un coach et adaptées à votre niveau du jour.",
    tag: "Énergie du groupe",
  },
  {
    icon: HeartPulse,
    title: "Coaching individuel",
    text: "Un accompagnement personnel pour reprendre, progresser ou travailler un objectif précis.",
    tag: "Sur rendez-vous",
  },
  {
    icon: Trophy,
    title: "Préparation HYROX",
    text: "Un entraînement structuré autour de la course, de l'endurance et des mouvements de la discipline.",
    tag: "Club affilié officiel",
  },
];

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Bien encadré",
    text: "Sandra et Armel expliquent chaque mouvement et vous accompagnent pendant la séance.",
  },
  {
    icon: Sparkles,
    title: "Adapté à chacun",
    text: "L'intensité et les mouvements s'ajustent à votre niveau, votre forme et vos objectifs.",
  },
  {
    icon: Users,
    title: "À taille humaine",
    text: "Chaque créneau est limité à 12 participants pour préserver la qualité du coaching.",
  },
];

const COACHES = [
  {
    name: "Sandra",
    initials: "S",
    text: "Écoute, précision et énergie pour vous aider à progresser avec confiance.",
    tone: "from-primary/35 via-cact-deep/55 to-background",
  },
  {
    name: "Armel",
    initials: "A",
    text: "Un accompagnement exigeant et accessible, toujours adapté à votre niveau.",
    tone: "from-cact-deep/70 via-primary/25 to-background",
  },
];

function VitrinePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Ambiance d'un entraînement fonctionnel en salle ouverte"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(36,91,52,0.22),_transparent_58%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 sm:px-8 sm:pb-16">
          <div className="reveal flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-foreground/90 backdrop-blur-md">
              <MapPin size={12} className="text-primary" />
              Saint-François · Guadeloupe
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/30 backdrop-blur-md">
              <Trophy size={12} /> Club affilié HYROX
            </span>
          </div>

          <h1 className="reveal reveal-2 mt-5 text-display text-[clamp(3rem,13vw,7.25rem)] text-foreground">
            Bougez.
            <br />
            <span className="text-primary">Progressez.</span>
            <br />
            Ensemble.
          </h1>

          <p className="reveal reveal-3 mt-5 max-w-lg text-base leading-relaxed text-foreground/85 sm:text-lg">
            Des cours collectifs et un accompagnement personnalisé pour avancer à votre rythme, dans
            une salle ouverte et conviviale à Saint-François.
          </p>

          <div className="reveal reveal-4 mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/app/planning"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground btn-press hover:bg-primary/90"
            >
              Réserver une séance
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#concept"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-black/20 px-7 text-base font-medium text-foreground backdrop-blur-md btn-press hover:bg-white/10"
            >
              Découvrir CACT
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 text-xs text-foreground/70">
            <span className="h-px w-8 bg-primary/70" />
            
          </div>
        </div>
      </section>

      <section id="concept" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">L'esprit CACT</p>
            <h2 className="mt-4 text-display text-[clamp(2.4rem,9vw,5rem)]">
              Votre rythme.
              <br />
              Notre énergie.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Ici, nul besoin d'être déjà sportif pour commencer. Chaque séance est expliquée,
              encadrée et adaptée. Vous venez avec votre niveau, vos objectifs et votre énergie du
              jour. Le groupe vous aide à aller plus loin.
            </p>
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

      <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Les séances</p>
          <h2 className="mt-3 text-display text-[clamp(2.2rem,8vw,4.25rem)]">
            Plusieurs façons
            <br />
            d'avancer.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {EXPERIENCES.map(({ icon: Icon, title, text, tag }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <span className="text-right text-[10px] uppercase tracking-wider text-primary/80">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-6 text-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hyrox" className="relative overflow-hidden">
        <img
          src={hyroxImg}
          alt="Entraînement fonctionnel avec une barre lestée"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
              <Trophy size={12} /> Affiliation officielle
            </span>
            <h2 className="mt-5 text-display text-[clamp(2.5rem,10vw,5.25rem)] leading-[0.92]">
              Préparez votre
              <br />
              prochain HYROX.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              CACT combine course, endurance, force et maîtrise des mouvements spécifiques pour vous
              permettre de découvrir le format ou de préparer votre prochaine compétition.
            </p>
            <Link
              to="/app/planning"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground btn-press hover:bg-primary/90"
            >
              Voir les séances HYROX <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="communaute" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">La communauté</p>
            <h2 className="mt-3 text-display text-[clamp(2.2rem,8vw,4.25rem)]">
              On s'entraîne ensemble.
              <br />
              On progresse chacun.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              L'énergie du collectif aide à rester régulier, sans comparaison ni pression inutile.
              Chacun avance à son rythme, soutenu par les coachs et le groupe.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">
            <div className="col-span-12 overflow-hidden rounded-3xl sm:col-span-8 sm:aspect-[16/10]">
              <img
                src={communityImg}
                alt="Ambiance collective après un entraînement"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="col-span-12 overflow-hidden rounded-3xl sm:col-span-4 sm:aspect-[4/5]">
              <img
                src={community3}
                alt="Coach accompagnant un groupe"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="coachs" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">L'accompagnement</p>
          <h2 className="mt-3 text-display text-[clamp(2.4rem,9vw,5rem)]">Sandra & Armel</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Deux coachs présents pour expliquer, ajuster et encourager. Leur priorité : vous faire
            progresser dans un cadre exigeant, accessible et bienveillant.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {COACHES.map((coach) => (
              <article
                key={coach.name}
                className={`relative flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${coach.tone} p-7 sm:min-h-96`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/15 text-display text-3xl backdrop-blur-sm">
                  {coach.initials}
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

      <section id="formules" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/25 bg-[radial-gradient(circle_at_top_right,_rgba(104,196,119,0.20),_transparent_48%),linear-gradient(135deg,#121512,#080A09)] p-8 sm:p-14">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Choisissez votre rythme
            </p>
            <h2 className="mt-4 text-display text-[clamp(2.4rem,8vw,4.75rem)]">
              Une formule pour chaque objectif.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75">
              Séance à l'unité, carte, abonnement ou coaching individuel : retrouvez toutes les
              options dans un espace dédié.
            </p>
            <Link
              to="/app/formules"
              className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground btn-press hover:bg-primary/90"
            >
              <Dumbbell size={18} /> Voir les formules
            </Link>
          </div>
        </div>
      </section>

      <section id="lieu" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">La salle</p>
          <h2 className="mt-3 text-display text-[clamp(2.2rem,8vw,4.25rem)]">
            Rendez-vous
            <br />à Saint-François.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,#121512,#1a2a1f)]">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(104,196,119,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(104,196,119,0.2)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_0_8px_rgba(104,196,119,0.18)]">
                  <MapPin size={22} />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Manganao · Belle-Allée</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-primary" size={18} />
                <div>
                  <div className="font-semibold">Manganao · Belle-Allée</div>
                  <div className="text-sm text-muted-foreground">
                    97118 Saint-François, Guadeloupe
                  </div>
                </div>
              </div>
              <div className="hairline" />
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
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border text-sm hover:border-primary/50"
              >
                <MapPin size={16} /> Ouvrir l'itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-[radial-gradient(ellipse_at_top_left,_rgba(104,196,119,0.24),_transparent_60%),linear-gradient(180deg,#121512,#080A09)] p-9 sm:p-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Prêt à rejoindre le mouvement ?
          </p>
          <h2 className="mt-4 text-display text-[clamp(2.4rem,9vw,5rem)]">
            Votre prochaine séance
            <br />
            commence ici.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/80">
            Créez votre espace membre, choisissez votre créneau et réservez votre place en quelques
            secondes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/app/planning"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground"
            >
              <Calendar size={18} /> Réserver une séance
            </Link>
            <Link
              to="/app/connexion"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border px-7 text-base font-medium hover:border-primary/50"
            >
              Accéder à mon espace
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {["Tous niveaux", "12 places par créneau", "Réservation mobile"].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-5 pb-10 pt-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <CactLogo className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cours collectifs, coaching et préparation HYROX à Saint-François, en Guadeloupe.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Découvrir
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#concept" className="hover:text-primary">
                  L'esprit CACT
                </a>
              </li>
              <li>
                <a href="#coachs" className="hover:text-primary">
                  Sandra & Armel
                </a>
              </li>
              <li>
                <a href="#formules" className="hover:text-primary">
                  Les formules
                </a>
              </li>
              <li>
                <Link to="/app/planning" className="hover:text-primary">
                  Réserver une séance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> Saint-François, Guadeloupe
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cact_health_community/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Instagram size={14} className="text-primary" /> @cact_health_community
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} CACT Health Community</span>
          <span>Manganao · Saint-François · Guadeloupe</span>
        </div>
      </footer>
    </main>
  );
}

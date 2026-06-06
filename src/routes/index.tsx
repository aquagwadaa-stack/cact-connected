import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Dumbbell,
  Flame,
  HeartPulse,
  Star,
  Instagram,
  Mail,
  Clock,
  CheckCircle2,
  Trophy,
  Zap,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import hyroxImg from "@/assets/hyrox.jpg";
import communityImg from "@/assets/community.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";
import { SiteHeader } from "@/components/cact/SiteHeader";
import { AnimatedNumber } from "@/components/cact/AnimatedNumber";
import { CactLogo } from "@/components/cact/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CACT Health Community — Functional fitness & HYROX à Saint-François" },
      {
        name: "description",
        content:
          "Salle affiliée HYROX à Saint-François, Guadeloupe. Cours collectifs functional fitness, coaching et préparation HYROX avec Sandra et Armel. Une vraie communauté, tous niveaux.",
      },
      { property: "og:title", content: "CACT Health Community — Plus forts. Ensemble." },
      { property: "og:description", content: "Salle affiliée HYROX. Functional fitness et énergie collective au cœur de Saint-François." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
      { name: "theme-color", content: "#68C477" },
    ],
  }),
  component: VitrinePage,
});

const EXPERIENCES = [
  {
    icon: Users,
    title: "Cours collectifs",
    text: "Des WOD variés, guidés et adaptables, portés par l'énergie du groupe et la voix des coachs.",
    tag: "Le cœur du club",
  },
  {
    icon: HeartPulse,
    title: "Coaching personnalisé",
    text: "Un suivi sur-mesure pour progresser à votre rythme, fixer vos objectifs et tenir la distance.",
    tag: "1-to-1",
  },
  {
    icon: Trophy,
    title: "Préparation HYROX",
    text: "Salle affiliée HYROX. Sleds, rowers, sandbags, burpees broad jumps — la prépa officielle, chez vous.",
    tag: "Affilié officiel",
  },
];

const FORMULES = [
  { name: "Séance découverte", price: "Gratuit", note: "1ère séance offerte" },
  { name: "Séance à l'unité", price: "18 €", note: "Sans engagement" },
  { name: "Carte 10 séances", price: "150 €", note: "Valable 3 mois" },
  { name: "2 séances / semaine", price: "59 €", suffix: "/mois", note: "Abonnement mensuel" },
  { name: "3 séances / semaine", price: "75 €", suffix: "/mois", note: "Le plus choisi", popular: true },
  { name: "Illimité", price: "95 €", suffix: "/mois", note: "Accès tous les cours" },
  { name: "Coaching individuel", price: "Sur demande", note: "Devis personnalisé" },
];

const PLANNING = [
  { day: "Lun.", date: "9 juin", time: "07:00", type: "WOD Collectif", coach: "Armel", booked: 8, capacity: 14 },
  { day: "Lun.", date: "9 juin", time: "18:30", type: "HYROX Training", coach: "Sandra", booked: 14, capacity: 14, hyrox: true },
  { day: "Mar.", date: "10 juin", time: "07:00", type: "Full Body", coach: "Sandra", booked: 6, capacity: 14 },
  { day: "Mar.", date: "10 juin", time: "19:00", type: "Force & Power", coach: "Armel", booked: 10, capacity: 14 },
  { day: "Mer.", date: "11 juin", time: "08:00", type: "Mobilité", coach: "Sandra", booked: 4, capacity: 14 },
  { day: "Mer.", date: "11 juin", time: "18:30", type: "HYROX Simulation", coach: "Armel", booked: 12, capacity: 14, hyrox: true },
];

const TESTIMONIALS = [
  { name: "Camille R.", role: "Membre depuis 8 mois", text: "Une vraie famille. Sandra et Armel poussent sans jamais juger, j'ai retrouvé le plaisir de bouger." },
  { name: "Julien M.", role: "Prépa HYROX Nice 2025", text: "La prépa HYROX est dingue. Sleds, runs, burpees — tout y est. Mon chrono a chuté de 14 min." },
  { name: "Aïcha D.", role: "Débutante", text: "J'avais peur de ne pas suivre. En fait tout est adapté, et l'ambiance fait que je reviens." },
];

function VitrinePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Communauté CACT en plein WOD à Saint-François"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(36,91,52,0.25),_transparent_60%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8">
          <div className="reveal flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-foreground/85 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Saint-François · Guadeloupe
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/30">
              <Trophy size={12} /> Affilié HYROX
            </span>
          </div>

          <h1 className="reveal reveal-2 mt-5 text-display text-[clamp(3rem,13vw,7.5rem)] text-foreground">
            Plus forts.
            <br />
            <span className="text-primary">Ensemble.</span>
          </h1>

          <p className="reveal reveal-3 mt-5 max-w-md text-base text-foreground/85 sm:text-lg">
            La communauté functional fitness & HYROX de Saint-François. On transpire, on rigole, on progresse — vraiment ensemble.
          </p>

          <div className="reveal reveal-4 mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/app"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground btn-press hover:bg-primary/90"
            >
              Réserver une séance
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#concept"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-base font-medium text-foreground backdrop-blur-md btn-press hover:bg-white/10"
            >
              Découvrir CACT
            </a>
          </div>

          {/* Marquee social proof */}
          <div className="mt-10 flex items-center gap-3 overflow-hidden">
            <div className="flex -space-x-2">
              {["A", "S", "J", "M", "K"].map((c, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary to-cact-deep text-[11px] font-bold text-primary-foreground"
                >
                  {c}
                </div>
              ))}
            </div>
            <div className="text-xs text-foreground/75">
              <span className="font-semibold text-foreground">+180 membres</span> s'entraînent déjà
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTE */}
      <section id="concept" className="relative px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Le concept</p>
          <h2 className="mt-4 text-display text-[clamp(2.25rem,8vw,4.5rem)]">
            Bien plus<br />qu'une salle.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Chez CACT, on n'aligne pas des machines, on construit une équipe. Chaque WOD se vit en groupe, encadré
            par Sandra et Armel, avec la même règle&nbsp;: tu repars meilleur qu'en arrivant, et jamais seul.
            Débutant, sportif confirmé, ou en route pour ton premier HYROX&nbsp;: ta place est ici.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[
              { value: 180, suffix: "+", label: "membres dans la communauté" },
              { value: 25, suffix: "", label: "cours collectifs / semaine" },
              { value: 1, suffix: "", label: "salle affiliée HYROX en Guadeloupe" },
            ].map((s) => (
              <div key={s.label} className="bg-card p-6">
                <div className="text-display text-5xl text-primary">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYROX BANNER */}
      <section id="hyrox" className="relative overflow-hidden">
        <img src={hyroxImg} alt="Entraînement HYROX au CACT" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
              <Trophy size={12} /> Affiliated Training Club
            </span>
            <h2 className="mt-5 text-display text-[clamp(2.5rem,10vw,5.5rem)] leading-[0.9]">
              HYROX,<br />à la maison.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              CACT est <strong>affilié officiellement à HYROX</strong>. On programme les 8 stations, on simule les runs, on chronomètre
              les blocs. Que tu vises ton premier finisher ou un podium de catégorie, on te prépare ici.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Zap, label: "Sleds & rowers" },
                { icon: Flame, label: "Runs chrono" },
                { icon: Dumbbell, label: "Sandbags" },
                { icon: Trophy, label: "Simulations" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-2xl border border-border/80 bg-card/70 p-3 backdrop-blur-sm">
                  <Icon size={16} className="text-primary" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/app" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground btn-press hover:bg-primary/90">
                Rejoindre la prépa HYROX <ArrowRight size={16} />
              </Link>
              <a href="#planning" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 text-sm backdrop-blur-sm btn-press hover:border-primary/50">
                Voir les créneaux HYROX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPÉRIENCES */}
      <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Expériences</p>
              <h2 className="mt-3 text-display text-[clamp(2rem,7vw,3.75rem)]">
                Trois façons<br />de progresser.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {EXPERIENCES.map(({ icon: Icon, title, text, tag }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-primary/80">{tag}</span>
                </div>
                <h3 className="mt-6 text-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNAUTÉ — GALERIE */}
      <section id="communaute" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">La communauté</p>
              <h2 className="mt-3 text-display text-[clamp(2rem,7vw,3.75rem)]">
                On vient pour les<br />résultats. On reste<br />pour les gens.
              </h2>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary/50 btn-press">
              <Instagram size={16} /> @cact.health
            </a>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">
            <div className="col-span-12 row-span-2 overflow-hidden rounded-3xl sm:col-span-8 sm:aspect-[16/10]">
              <img src={communityImg} alt="Membres CACT après un WOD" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
            <div className="col-span-6 overflow-hidden rounded-3xl sm:col-span-4 aspect-square">
              <img src={community2} alt="Fist bump entre membres" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
            <div className="col-span-6 overflow-hidden rounded-3xl sm:col-span-4 aspect-square">
              <img src={community3} alt="Cours collectif chez CACT" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["#TeamCACT", "#HyroxGuadeloupe", "#WODFamily", "#SaintFrançois", "#PlusFortsEnsemble"].map((t) => (
              <span key={t} className="text-foreground/80">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* COACHS */}
      <section id="coachs" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Les coachs</p>
          <h2 className="mt-3 text-display text-[clamp(2.25rem,9vw,5rem)]">Sandra & Armel</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Deux coachs, un seul mot d'ordre&nbsp;: rendre l'entraînement exigeant mais accessible, précis mais
            vivant. Ils connaissent chaque membre par son prénom — et ses objectifs.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { name: "Sandra", role: "Coach · Mobilité & Endurance", tone: "from-primary/30 to-cact-deep/60" },
              { name: "Armel", role: "Coach · Force & HYROX", tone: "from-cact-deep/60 to-primary/30" },
            ].map((c) => (
              <div
                key={c.name}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.tone} opacity-80`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="text-xs text-foreground/70">Portrait à remplacer</div>
                  <div className="mt-1 text-display text-5xl">{c.name}</div>
                  <div className="mt-1 text-sm text-foreground/85">{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section id="formules" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Formules</p>
          <h2 className="mt-3 text-display text-[clamp(2rem,7vw,3.75rem)]">
            Choisissez votre<br />rythme.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">Tarifs de démonstration.</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FORMULES.map((f) => (
              <div
                key={f.name}
                className={`relative flex flex-col rounded-3xl border p-6 transition-all ${
                  f.popular
                    ? "border-primary/60 bg-gradient-to-b from-primary/10 to-transparent ring-cact"
                    : "border-border bg-card"
                }`}
              >
                {f.popular && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                    <Star size={12} /> Populaire
                  </span>
                )}
                <div className="text-sm text-muted-foreground">{f.name}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-display text-4xl">{f.price}</span>
                  {f.suffix && <span className="text-sm text-muted-foreground">{f.suffix}</span>}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{f.note}</div>
                <Link
                  to="/app"
                  className={`mt-6 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold btn-press ${
                    f.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  Choisir
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING */}
      <section id="planning" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Planning</p>
              <h2 className="mt-3 text-display text-[clamp(2rem,7vw,3.75rem)]">
                Les prochaines<br />séances.
              </h2>
            </div>
            <Link
              to="/app"
              className="hidden sm:inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-sm hover:border-primary/50 btn-press"
            >
              Voir le planning complet <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border">
            {PLANNING.map((s, i) => {
              const full = s.booked >= s.capacity;
              const tight = !full && s.capacity - s.booked <= 3;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 border-b border-border/70 bg-card p-4 last:border-0 sm:p-5`}
                >
                  <div className="flex w-14 shrink-0 flex-col items-center rounded-xl bg-surface-2 py-2 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.day}</div>
                    <div className="text-display text-xl leading-none">{s.time}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="truncate text-base font-semibold">{s.type}</span>
                      {s.hyrox && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                          <Trophy size={10} /> HYROX
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{s.date}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                      <span>Coach {s.coach}</span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                      <div
                        className={`h-full ${full ? "bg-destructive" : tight ? "bg-amber-400" : "bg-primary"}`}
                        style={{ width: `${(s.booked / s.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className={`text-xs font-semibold ${full ? "text-destructive" : tight ? "text-amber-400" : "text-primary"}`}>
                      {full ? "Complet" : tight ? `${s.capacity - s.booked} places` : "Dispo."}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      {s.booked}/{s.capacity} inscrits
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/app"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm hover:border-primary/50 sm:hidden btn-press"
          >
            Voir le planning <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Ils en parlent</p>
              <h2 className="mt-3 text-display text-[clamp(2rem,7vw,3.75rem)]">La voix<br />des membres.</h2>
            </div>
            <span className="hidden sm:inline text-xs text-muted-foreground">Témoignages de démonstration</span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-3xl border border-border bg-card p-7">
                <Quote className="text-primary/60" size={26} />
                <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LIEU */}
      <section id="lieu" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Le lieu</p>
          <h2 className="mt-3 text-display text-[clamp(2rem,7vw,3.75rem)]">
            Votre rendez-vous<br />à Saint-François.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,#121512,#1a2a1f)]">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(104,196,119,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(104,196,119,0.2)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_0_8px_rgba(104,196,119,0.18)]">
                  <MapPin size={22} />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Carte interactive bientôt</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-primary" size={18} />
                <div>
                  <div className="text-base font-semibold">Secteur Manganao / Belle-Allée</div>
                  <div className="text-sm text-muted-foreground">97118 Saint-François, Guadeloupe</div>
                </div>
              </div>
              <div className="hairline" />
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 text-primary" size={18} />
                <div>
                  <div className="text-base font-semibold">Horaires</div>
                  <div className="text-sm text-muted-foreground">Matin · 07:00 – 10:00</div>
                  <div className="text-sm text-muted-foreground">Soir · 17:00 – 20:00</div>
                  <div className="mt-1 text-xs text-muted-foreground/80">Horaires indicatifs pour la démonstration.</div>
                </div>
              </div>
              <a
                href="#"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border text-sm hover:border-primary/50 btn-press"
              >
                <MapPin size={16} /> Ouvrir l'itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-[radial-gradient(ellipse_at_top_left,_rgba(104,196,119,0.25),_transparent_60%),linear-gradient(180deg,#121512,#080A09)] p-10 sm:p-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Première séance offerte</p>
          <h2 className="mt-4 text-display text-[clamp(2.25rem,9vw,5rem)]">
            Prêt à pousser<br />avec nous&nbsp;?
          </h2>
          <p className="mt-5 max-w-lg text-base text-foreground/80">
            Réservez votre séance découverte en moins d'une minute. Aucun engagement, juste l'envie de bouger.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/app"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground btn-press hover:bg-primary/90"
            >
              <Calendar size={18} /> Réserver une séance
            </Link>
            <a
              href="#formules"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border px-7 text-base font-medium btn-press hover:border-primary/50"
            >
              <Dumbbell size={18} /> Voir les formules
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {["Tous niveaux", "Affilié HYROX", "Coachs présents à chaque séance", "Sans engagement"].map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-primary" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface px-5 pb-10 pt-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <CactLogo className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Salle affiliée HYROX. Functional fitness, coaching et communauté à Saint-François, Guadeloupe.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Navigation</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#concept" className="hover:text-primary">Le concept</a></li>
              <li><a href="#hyrox" className="hover:text-primary">HYROX</a></li>
              <li><a href="#coachs" className="hover:text-primary">Les coachs</a></li>
              <li><a href="#formules" className="hover:text-primary">Formules</a></li>
              <li><a href="#planning" className="hover:text-primary">Planning</a></li>
              <li><Link to="/admin" className="hover:text-primary">Espace admin</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Saint-François, Guadeloupe</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> contact@cact-health.fr</li>
              <li className="flex items-center gap-2"><Instagram size={14} className="text-primary" /> @cact.health</li>
            </ul>
            <Link
              to="/app/connexion"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm btn-press hover:border-primary/50"
            >
              Espace membre
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} CACT Health Community — Mentions légales</div>
          <div>Données de démonstration — interface présentée à titre d'illustration.</div>
        </div>
      </footer>
    </main>
  );
}

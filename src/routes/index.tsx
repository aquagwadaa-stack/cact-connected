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
} from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import { SiteHeader } from "@/components/cact/SiteHeader";
import { AnimatedNumber } from "@/components/cact/AnimatedNumber";
import { CactLogo } from "@/components/cact/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CACT Health Community — Functional fitness à Saint-François, Guadeloupe" },
      {
        name: "description",
        content:
          "Salle de functional fitness à Saint-François. Cours collectifs, coaching individuel et préparation HYROX avec Sandra et Armel. Tous niveaux.",
      },
      { property: "og:title", content: "CACT Health Community — Plus forts. Ensemble." },
      { property: "og:description", content: "Functional fitness, coaching et énergie collective au cœur de Saint-François." },
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
    text: "Des séances variées, guidées et adaptables, portées par l'énergie du groupe.",
  },
  {
    icon: HeartPulse,
    title: "Coaching individuel",
    text: "Un accompagnement personnalisé pour progresser selon vos objectifs et votre rythme.",
  },
  {
    icon: Flame,
    title: "Préparation HYROX",
    text: "Développez endurance, puissance et efficacité sur les mouvements emblématiques de la discipline.",
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
  { day: "Lun.", date: "9 juin", time: "07:00", type: "WOD Collectif", coach: "Armel", booked: 8, capacity: 12 },
  { day: "Lun.", date: "9 juin", time: "18:30", type: "HYROX Training", coach: "Sandra", booked: 12, capacity: 12 },
  { day: "Mar.", date: "10 juin", time: "07:00", type: "Full Body", coach: "Sandra", booked: 6, capacity: 12 },
  { day: "Mar.", date: "10 juin", time: "19:00", type: "Force", coach: "Armel", booked: 10, capacity: 12 },
  { day: "Mer.", date: "11 juin", time: "08:00", type: "Mobilité", coach: "Sandra", booked: 4, capacity: 12 },
  { day: "Mer.", date: "11 juin", time: "18:30", type: "Endurance", coach: "Armel", booked: 9, capacity: 12 },
];

const TESTIMONIALS = [
  { name: "Camille R.", role: "Membre depuis 8 mois", text: "Une vraie communauté. Sandra et Armel poussent sans jamais juger, j'ai retrouvé le plaisir de bouger." },
  { name: "Julien M.", role: "Prépa HYROX", text: "Les séances sont intenses mais tellement bien construites. Mon chrono a chuté en quelques semaines." },
  { name: "Aïcha D.", role: "Débutante", text: "J'avais peur de ne pas suivre. En fait, tout est adapté à mon niveau et j'avance à chaque cours." },
];

function VitrinePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Séance de functional fitness à CACT Saint-François"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(36,91,52,0.25),_transparent_60%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8">
          <div className="reveal inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-foreground/85 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Tous niveaux · Saint-François, Guadeloupe
          </div>

          <h1 className="reveal reveal-2 mt-5 text-display text-[clamp(3rem,13vw,7rem)] text-foreground">
            Plus forts.
            <br />
            <span className="text-primary">Ensemble.</span>
          </h1>

          <p className="reveal reveal-3 mt-5 max-w-md text-base text-foreground/85 sm:text-lg">
            Functional fitness, coaching et énergie collective au cœur de Saint-François.
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

          <div className="mt-10 flex items-center gap-3 text-xs text-foreground/60">
            <span className="inline-block h-px w-10 bg-foreground/30" />
            Données de démonstration
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
            Chez CACT, chacun avance à son rythme, mais personne n'avance seul. Nos séances combinent force,
            cardio, mobilité et dépassement de soi dans une ambiance accessible, encadrée et profondément
            collective. Débutant, sportif confirmé ou simplement prêt à reprendre le mouvement&nbsp;: vous avez
            votre place dans la communauté.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[
              { value: 12, suffix: "", label: "places maximum par cours" },
              { value: 2, suffix: "", label: "coachs passionnés" },
              { value: 100, suffix: "%", label: "adaptable à votre niveau" },
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
            {EXPERIENCES.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COACHS */}
      <section id="coachs" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Les coachs</p>
          <h2 className="mt-3 text-display text-[clamp(2.25rem,9vw,5rem)]">Sandra & Armel</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Deux coachs, une même vision&nbsp;: rendre l'entraînement exigeant mais accessible, précis mais vivant,
            et faire de chaque séance un moment que l'on a envie de retrouver.
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
      <section id="formules" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
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
      <section id="planning" className="px-5 py-24 sm:px-8 sm:py-32">
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
              Voir le planning <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border">
            {PLANNING.map((s, i) => {
              const full = s.booked >= s.capacity;
              const tight = !full && s.capacity - s.booked <= 2;
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
                    <div className="truncate text-base font-semibold">{s.type}</div>
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
                      {full ? "Complet" : tight ? "2 places" : "Dispo."}
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

      {/* TÉMOIGNAGES */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Communauté</p>
              <h2 className="mt-3 text-display text-[clamp(2rem,7vw,3.75rem)]">Ils en parlent.</h2>
            </div>
            <span className="hidden sm:inline text-xs text-muted-foreground">Témoignages de démonstration</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground sm:hidden">Témoignages de démonstration</p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-3xl border border-border bg-card p-7">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                  « {t.text} »
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

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
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
            {["Tous niveaux", "12 places max", "Coachs présents", "Sans engagement"].map((b) => (
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
              Functional fitness, coaching et préparation HYROX à Saint-François, Guadeloupe.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Navigation</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#concept" className="hover:text-primary">Le concept</a></li>
              <li><a href="#coachs" className="hover:text-primary">Les coachs</a></li>
              <li><a href="#formules" className="hover:text-primary">Formules</a></li>
              <li><a href="#planning" className="hover:text-primary">Planning</a></li>
              <li><a href="#lieu" className="hover:text-primary">La salle</a></li>
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

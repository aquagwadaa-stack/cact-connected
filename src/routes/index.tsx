import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Dumbbell,
  HeartPulse,
  Instagram,
  Mail,
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
import { DEMO_SESSIONS, MEMBERSHIP_PLANS } from "@/lib/cact-demo";

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
    text: "Des séances en petit groupe, guidées par un coach et ajustées à votre niveau du jour.",
    tag: "Énergie du groupe",
  },
  {
    icon: HeartPulse,
    title: "Coaching individuel",
    text: "Un accompagnement plus personnel pour reprendre, progresser ou travailler un objectif précis.",
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
    title: "Encadré",
    text: "Sandra et Armel vous accompagnent à chaque séance.",
  },
  {
    icon: Sparkles,
    title: "Adaptable",
    text: "Chaque mouvement peut être ajusté à votre niveau.",
  },
  {
    icon: Users,
    title: "À taille humaine",
    text: "12 participants maximum sur les créneaux de démonstration.",
  },
];

function VitrinePage() {
  const publicSessions = DEMO_SESSIONS.slice(0, 6);

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
              Voir les séances
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
            Une proposition de site à personnaliser avec l'équipe CACT
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
              Ici, il n'est pas nécessaire d'être déjà sportif pour commencer. Chaque séance est
              expliquée, encadrée et adaptée. Vous venez avec votre niveau, vos objectifs et votre
              énergie du jour. Le groupe fait le reste.
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
              En tant que club affilié HYROX, CACT propose des séances qui combinent course,
              endurance, force et maîtrise des mouvements spécifiques. Le contenu exact et les
              créneaux seront définis avec Sandra et Armel.
            </p>
            <Link
              to="/app/planning"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground btn-press hover:bg-primary/90"
            >
              Voir le planning <ArrowRight size={16} />
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
              C'est ce lien entre accompagnement et communauté que le futur site devra faire
              ressentir.
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
          <p className="mt-4 text-xs text-muted-foreground">
            Visuels d'ambiance temporaires, à remplacer par les photos de CACT.
          </p>
        </div>
      </section>

      <section id="coachs" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">L'accompagnement</p>
          <h2 className="mt-3 text-display text-[clamp(2.4rem,9vw,5rem)]">Sandra & Armel</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Deux coachs présents pour expliquer, ajuster et encourager. Cette section accueillera
            leur véritable parcours, leurs spécialités et leurs photos après l'échange avec Sandra.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                name: "Sandra",
                line: "Coach · Présentation à compléter ensemble",
                tone: "from-primary/30 to-cact-deep/60",
              },
              {
                name: "Armel",
                line: "Coach · Présentation à compléter ensemble",
                tone: "from-cact-deep/60 to-primary/30",
              },
            ].map((coach) => (
              <article
                key={coach.name}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card sm:aspect-[4/5]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${coach.tone} opacity-80`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs uppercase tracking-wider text-foreground/60">
                    Photo à intégrer
                  </span>
                  <h3 className="mt-1 text-display text-5xl">{coach.name}</h3>
                  <p className="mt-1 text-sm text-foreground/85">{coach.line}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formules" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Formules</p>
          <h2 className="mt-3 text-display text-[clamp(2.2rem,8vw,4.25rem)]">
            Une formule adaptée
            <br />à votre rythme.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Les intitulés et tarifs définitifs seront renseignés avec Sandra et Armel. Cette
            présentation montre comment les visiteurs pourront comparer puis choisir leur formule.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERSHIP_PLANS.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border p-6 ${
                  plan.popular
                    ? "border-primary/60 bg-gradient-to-b from-primary/10 to-transparent ring-cact"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Exemple mis en avant
                  </span>
                )}
                <h3 className="text-display text-2xl">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-5 text-xs uppercase tracking-wider text-primary">
                  {plan.detail}
                </div>
                <div className="mt-1 text-lg font-semibold">{plan.price}</div>
                <Link
                  to="/app/formules"
                  className={`mt-6 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold btn-press ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:border-primary/50"
                  }`}
                >
                  Voir cette formule
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planning" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Planning de démonstration
              </p>
              <h2 className="mt-3 text-display text-[clamp(2.2rem,8vw,4.25rem)]">
                Trouvez votre
                <br />
                prochain créneau.
              </h2>
            </div>
            <Link
              to="/app/planning"
              className="hidden h-11 items-center gap-2 rounded-full border border-border px-4 text-sm hover:border-primary/50 sm:inline-flex"
            >
              Planning complet <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border">
            {publicSessions.map((session) => {
              const full = session.booked >= session.capacity;
              const remaining = session.capacity - session.booked;
              return (
                <div
                  key={session.id}
                  className="flex items-center gap-4 border-b border-border/70 bg-card p-4 last:border-0 sm:p-5"
                >
                  <div className="flex w-14 shrink-0 flex-col items-center rounded-xl bg-surface-2 py-2 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {session.day}
                    </span>
                    <span className="text-display text-xl leading-none">{session.time}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="truncate text-sm font-semibold sm:text-base">
                        {session.type}
                      </span>
                      {session.hyrox && (
                        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                          HYROX
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {session.date} · Coach {session.coach}
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                      <div
                        className={`h-full ${full ? "bg-destructive" : remaining <= 2 ? "bg-amber-400" : "bg-primary"}`}
                        style={{ width: `${(session.booked / session.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div
                      className={`text-xs font-semibold ${full ? "text-destructive" : "text-primary"}`}
                    >
                      {full ? "Complet" : `${remaining} place${remaining > 1 ? "s" : ""}`}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      {session.booked}/{session.capacity} inscrits
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/app/planning"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm hover:border-primary/50 sm:hidden"
          >
            Ouvrir le planning <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section id="lieu" className="px-5 py-24 sm:px-8 sm:py-32">
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
                  <div className="font-semibold">Secteur Manganao / Belle-Allée</div>
                  <div className="text-sm text-muted-foreground">
                    97118 Saint-François, Guadeloupe
                  </div>
                </div>
              </div>
              <div className="hairline" />
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 text-primary" size={18} />
                <div>
                  <div className="font-semibold">Créneaux</div>
                  <div className="text-sm text-muted-foreground">
                    Séances le matin et en fin de journée
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground/80">
                    Les horaires exacts seront synchronisés avec le planning administrateur.
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Manganao+Saint-Fran%C3%A7ois+Guadeloupe"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border text-sm hover:border-primary/50"
              >
                <MapPin size={16} /> Voir le secteur sur la carte
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-[radial-gradient(ellipse_at_top_left,_rgba(104,196,119,0.24),_transparent_60%),linear-gradient(180deg,#121512,#080A09)] p-9 sm:p-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Prêt à découvrir CACT ?
          </p>
          <h2 className="mt-4 text-display text-[clamp(2.4rem,9vw,5rem)]">
            Commencez par
            <br />
            une première séance.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/80">
            Consultez les créneaux, créez votre compte et réservez depuis votre téléphone. La séance
            découverte et ses conditions seront confirmées avec l'équipe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/app/connexion"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground"
            >
              <Calendar size={18} /> Essayer l'espace membre
            </Link>
            <Link
              to="/app/formules"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border px-7 text-base font-medium hover:border-primary/50"
            >
              <Dumbbell size={18} /> Explorer les formules
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {[
              "Tous niveaux",
              "12 places par créneau",
              "Compte membre simple",
              "Réservation mobile",
            ].map((item) => (
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
                <a href="#planning" className="hover:text-primary">
                  Le planning
                </a>
              </li>
              <li>
                <Link to="/admin" className="hover:text-primary">
                  Voir l'administration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> Saint-François, Guadeloupe
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" /> Coordonnées à compléter
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
          <span>Prototype de démonstration · contenus et tarifs à valider</span>
        </div>
      </footer>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  CreditCard,
  Sparkles,
  Trophy,
} from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";
import { CactLogo } from "@/components/cact/Logo";
import { DEMO_MEMBER, DEMO_SESSIONS, UPCOMING_BOOKINGS } from "@/lib/cact-demo";

export const Route = createFileRoute("/app/")({
  head: () => ({ meta: [{ title: "Mon espace | CACT Health Community" }] }),
  component: AppHome,
});

function AppHome() {
  const suggestions = DEMO_SESSIONS.filter((session) => session.booked < session.capacity).slice(
    1,
    4,
  );

  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/90 px-5 py-4 backdrop-blur-xl">
        <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowLeft size={14} /> Vitrine
        </Link>
        <CactLogo className="h-7 w-auto" />
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-cact-deep text-center text-sm font-bold leading-9 text-primary-foreground">
          M
        </div>
      </header>

      <div className="mx-auto max-w-md px-5 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Lundi 8 juin</p>
            <h1 className="mt-1 text-display text-4xl">Bonjour {DEMO_MEMBER.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Que souhaitez-vous réserver cette semaine ?
            </p>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            Démo
          </span>
        </div>

        <section className="relative mt-6 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-6">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-primary">Votre formule</span>
              <CreditCard size={16} className="text-primary" />
            </div>
            <h2 className="mt-3 text-display text-2xl">{DEMO_MEMBER.plan}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{DEMO_MEMBER.renewal}</p>
            <div className="mt-5 flex items-end justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Séances disponibles
                </div>
                <div className="mt-1 text-display text-5xl text-primary">{DEMO_MEMBER.credits}</div>
              </div>
              <Link
                to="/app/formules"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-semibold hover:border-primary/50"
              >
                Voir les formules <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        <Link
          to="/app/planning"
          className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground btn-press"
        >
          <Calendar size={17} /> Trouver un créneau
        </Link>

        <section className="mt-8">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary">À venir</p>
              <h2 className="mt-1 text-display text-2xl">Mes prochaines séances</h2>
            </div>
            <Link to="/app/reservations" className="text-xs text-primary">
              Tout voir
            </Link>
          </div>
          <ul className="mt-4 space-y-3">
            {UPCOMING_BOOKINGS.map((booking) => (
              <li
                key={booking.id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <div className="flex w-14 flex-col items-center rounded-xl bg-surface-2 py-2">
                  <span className="text-[10px] uppercase text-muted-foreground">
                    {booking.date.split(" ")[0]}
                  </span>
                  <span className="text-display text-lg leading-none">{booking.time}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold">{booking.type}</div>
                  <div className="text-xs text-muted-foreground">Coach {booking.coach}</div>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary">Suggestions</p>
              <h2 className="mt-1 text-display text-2xl">Encore quelques places</h2>
            </div>
            <span className="text-[11px] text-muted-foreground">12 max.</span>
          </div>
          <ul className="mt-4 space-y-3">
            {suggestions.map((session) => (
              <li
                key={session.id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <div className="flex w-14 flex-col items-center rounded-xl bg-surface-2 py-2">
                  <span className="text-[10px] uppercase text-muted-foreground">{session.day}</span>
                  <span className="text-display text-lg leading-none">{session.time}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="truncate text-sm font-semibold">{session.type}</span>
                    {session.hyrox && (
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                        HYROX
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {session.capacity - session.booked} place
                    {session.capacity - session.booked > 1 ? "s" : ""} · Coach {session.coach}
                  </div>
                </div>
                <Link
                  to="/app/planning"
                  className="rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
                >
                  Voir
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Link
          to="/app/hyrox"
          className="mt-8 flex items-center gap-4 rounded-3xl border border-primary/30 bg-primary/5 p-5"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <Trophy size={20} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold">Espace préparation HYROX</div>
            <div className="mt-1 text-xs text-muted-foreground">
              Suivi et informations du programme affilié.
            </div>
          </div>
          <ChevronRight size={18} className="text-primary" />
        </Link>

        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-xs text-muted-foreground">
          <Sparkles size={16} className="mt-0.5 shrink-0 text-primary" />
          Les données affichées servent à montrer le fonctionnement. Les formules et contenus
          définitifs seront configurés avec CACT.
        </div>
      </div>

      <MobileTabBar />
    </main>
  );
}

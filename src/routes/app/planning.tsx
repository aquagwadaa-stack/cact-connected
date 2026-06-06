import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, ChevronRight, Info, Minus, Plus, Trophy, X } from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";
import { DEMO_DAYS, DEMO_MEMBER, DEMO_SESSIONS, type DemoSession } from "@/lib/cact-demo";

export const Route = createFileRoute("/app/planning")({
  head: () => ({ meta: [{ title: "Planning | CACT Health Community" }] }),
  component: PlanningPage,
});

type Filter = "Tous" | "Collectif" | "HYROX" | "Mobilité";

function PlanningPage() {
  const [dayKey, setDayKey] = useState(DEMO_DAYS[0].key);
  const [filter, setFilter] = useState<Filter>("Tous");
  const [bookedIds, setBookedIds] = useState<Set<string>>(new Set(["3"]));
  const [credits, setCredits] = useState(DEMO_MEMBER.credits);
  const [selected, setSelected] = useState<DemoSession | null>(null);
  const [message, setMessage] = useState("");

  const sessions = useMemo(
    () =>
      DEMO_SESSIONS.filter((session) => {
        if (session.dayKey !== dayKey) return false;
        if (filter === "HYROX") return session.hyrox;
        if (filter === "Mobilité") return session.type.includes("Mobilité");
        if (filter === "Collectif") return !session.hyrox && !session.type.includes("Mobilité");
        return true;
      }),
    [dayKey, filter],
  );

  const displayBooked = (session: DemoSession) =>
    session.booked + (bookedIds.has(session.id) && session.id !== "3" ? 1 : 0);

  const toggleBooking = (session: DemoSession) => {
    const isBooked = bookedIds.has(session.id);
    if (!isBooked && displayBooked(session) >= session.capacity) return;
    if (!isBooked && credits <= 0) {
      setMessage("Votre carte ne contient plus de séance disponible.");
      return;
    }

    setBookedIds((current) => {
      const next = new Set(current);
      if (isBooked) next.delete(session.id);
      else next.add(session.id);
      return next;
    });
    setCredits((value) => value + (isBooked ? 1 : -1));
    setMessage(
      isBooked ? "Réservation annulée. La séance a été recréditée." : "Votre place est réservée.",
    );
    setSelected(null);
  };

  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
          <Link to="/app" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowLeft size={14} /> Accueil
          </Link>
          <h1 className="text-display text-xl">Planning</h1>
          <div className="rounded-full bg-primary/12 px-3 py-1.5 text-xs font-semibold text-primary">
            {credits} séance{credits > 1 ? "s" : ""}
          </div>
        </div>

        <div className="scrollbar-none mx-auto max-w-md overflow-x-auto px-5 pb-3">
          <div className="flex gap-2">
            {DEMO_DAYS.map((day) => (
              <button
                key={day.key}
                onClick={() => setDayKey(day.key)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  dayKey === day.key
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground/80 hover:border-primary/50"
                }`}
              >
                {day.short}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-md px-5 pt-5">
        <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
          {(["Tous", "Collectif", "HYROX", "Mobilité"] as Filter[]).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`shrink-0 rounded-full px-3 py-2 text-xs ${
                filter === item ? "bg-surface-2 text-foreground" : "text-muted-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {message && (
          <div className="mt-4 flex items-start justify-between gap-3 rounded-2xl border border-primary/30 bg-primary/8 px-4 py-3 text-xs text-foreground">
            <span className="inline-flex items-start gap-2">
              <Check size={14} className="mt-0.5 shrink-0 text-primary" />
              {message}
            </span>
            <button onClick={() => setMessage("")} aria-label="Fermer le message">
              <X size={14} className="text-muted-foreground" />
            </button>
          </div>
        )}

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-primary">
              Données de démonstration
            </p>
            <h2 className="mt-1 text-display text-2xl">
              {DEMO_DAYS.find((day) => day.key === dayKey)?.full}
            </h2>
          </div>
          <span className="text-xs text-muted-foreground">
            {sessions.length} créneau{sessions.length > 1 ? "x" : ""}
          </span>
        </div>

        <ul className="mt-4 space-y-3">
          {sessions.map((session) => {
            const isBooked = bookedIds.has(session.id);
            const booked = displayBooked(session);
            const full = booked >= session.capacity;
            const remaining = session.capacity - booked;
            return (
              <li
                key={session.id}
                className={`rounded-3xl border bg-card p-4 transition-colors ${
                  isBooked ? "border-primary/55" : "border-border"
                }`}
              >
                <button className="w-full text-left" onClick={() => setSelected(session)}>
                  <div className="flex items-start gap-4">
                    <div className="flex w-14 shrink-0 flex-col items-center rounded-xl bg-surface-2 py-2">
                      <span className="text-[10px] uppercase text-muted-foreground">
                        {session.day}
                      </span>
                      <span className="text-display text-lg leading-none">{session.time}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold">{session.type}</span>
                        {session.hyrox && (
                          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                            HYROX
                          </span>
                        )}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        Coach {session.coach} · {session.duration}
                      </div>
                      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                        <div
                          className={`h-full ${full ? "bg-destructive" : remaining <= 2 ? "bg-amber-400" : "bg-primary"}`}
                          style={{ width: `${(booked / session.capacity) * 100}%` }}
                        />
                      </div>
                      <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                        <span>
                          {booked}/{session.capacity} inscrits
                        </span>
                        <span>
                          {full ? "Complet" : `${remaining} place${remaining > 1 ? "s" : ""}`}
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={17} className="mt-2 text-muted-foreground" />
                  </div>
                </button>

                <button
                  onClick={() => toggleBooking(session)}
                  disabled={full && !isBooked}
                  className={`mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold btn-press disabled:cursor-not-allowed disabled:opacity-45 ${
                    isBooked
                      ? "border border-primary/40 bg-primary/10 text-primary"
                      : full
                        ? "border border-border"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {isBooked ? (
                    <>
                      <Minus size={14} /> Annuler ma place
                    </>
                  ) : full ? (
                    "Cours complet"
                  ) : (
                    <>
                      <Plus size={14} /> Réserver
                    </>
                  )}
                </button>
              </li>
            );
          })}
          {sessions.length === 0 && (
            <li className="rounded-3xl border border-border bg-card p-8 text-center">
              <Info className="mx-auto text-primary" size={22} />
              <p className="mt-3 text-sm font-semibold">Aucun créneau pour ce filtre</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Essayez une autre catégorie ou une autre journée.
              </p>
            </li>
          )}
        </ul>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center">
          <div className="w-full max-w-sm rounded-[2rem] border border-border bg-card p-6 shadow-elevated">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">
                  {selected.date} · {selected.time}
                </p>
                <h2 className="mt-2 text-display text-3xl">{selected.type}</h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-surface-2 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Coach
                </div>
                <div className="mt-1 font-semibold">{selected.coach}</div>
              </div>
              <div className="rounded-2xl bg-surface-2 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Durée
                </div>
                <div className="mt-1 font-semibold">{selected.duration}</div>
              </div>
              <div className="rounded-2xl bg-surface-2 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Niveau
                </div>
                <div className="mt-1 font-semibold">{selected.level}</div>
              </div>
              <div className="rounded-2xl bg-surface-2 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Inscrits
                </div>
                <div className="mt-1 font-semibold">
                  {displayBooked(selected)}/{selected.capacity}
                </div>
              </div>
            </div>
            {selected.hyrox && (
              <div className="mt-4 flex items-start gap-2 rounded-2xl border border-primary/30 bg-primary/8 p-4 text-xs text-muted-foreground">
                <Trophy size={15} className="mt-0.5 shrink-0 text-primary" />
                Séance de préparation proposée dans le cadre de l'affiliation officielle HYROX.
              </div>
            )}
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Annulation sans perte de séance jusqu'à 4 heures avant le début du cours.
            </p>
            <button
              onClick={() => toggleBooking(selected)}
              disabled={displayBooked(selected) >= selected.capacity && !bookedIds.has(selected.id)}
              className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground disabled:opacity-45"
            >
              {bookedIds.has(selected.id) ? "Annuler ma réservation" : "Confirmer la réservation"}
            </button>
          </div>
        </div>
      )}

      <MobileTabBar />
    </main>
  );
}

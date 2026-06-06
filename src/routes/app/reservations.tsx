import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CalendarCheck, Check, Clock3, X } from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";
import { UPCOMING_BOOKINGS } from "@/lib/cact-demo";

export const Route = createFileRoute("/app/reservations")({
  head: () => ({ meta: [{ title: "Mes séances | CACT Health Community" }] }),
  component: ReservationsPage,
});

const HISTORY = [
  { id: "h1", date: "Vendredi 5 juin", time: "07:00", type: "Training collectif", coach: "Armel" },
  { id: "h2", date: "Mercredi 3 juin", time: "18:30", type: "Force & technique", coach: "Sandra" },
  { id: "h3", date: "Lundi 1 juin", time: "08:15", type: "Mobilité", coach: "Sandra" },
];

function ReservationsPage() {
  const [upcoming, setUpcoming] = useState(UPCOMING_BOOKINGS);
  const [message, setMessage] = useState("");

  const cancel = (id: string) => {
    setUpcoming((items) => items.filter((item) => item.id !== id));
    setMessage("La réservation a été annulée et la séance recréditée.");
  };

  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
          <Link to="/app" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowLeft size={14} /> Accueil
          </Link>
          <h1 className="text-display text-xl">Mes séances</h1>
          <div className="w-12" />
        </div>
      </header>

      <div className="mx-auto max-w-md px-5 pt-7">
        {message && (
          <div className="mb-5 flex items-start justify-between gap-3 rounded-2xl border border-primary/30 bg-primary/8 p-4 text-xs">
            <span className="inline-flex items-start gap-2">
              <Check size={14} className="mt-0.5 shrink-0 text-primary" /> {message}
            </span>
            <button onClick={() => setMessage("")} aria-label="Fermer">
              <X size={14} />
            </button>
          </div>
        )}

        <p className="text-xs uppercase tracking-[0.2em] text-primary">À venir</p>
        <h2 className="mt-1 text-display text-3xl">Vos réservations</h2>

        {upcoming.length > 0 ? (
          <ul className="mt-5 space-y-3">
            {upcoming.map((booking) => (
              <li key={booking.id} className="rounded-3xl border border-border bg-card p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <CalendarCheck size={19} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold">{booking.type}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {booking.date} · {booking.time}
                    </div>
                    <div className="text-xs text-muted-foreground">Coach {booking.coach}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Clock3 size={12} /> Annulation gratuite jusqu'à 4 h avant
                  </span>
                  <button
                    onClick={() => cancel(booking.id)}
                    className="shrink-0 rounded-full border border-border px-3 py-2 text-xs hover:border-destructive/60 hover:text-destructive"
                  >
                    Annuler
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-5 rounded-3xl border border-border bg-card p-8 text-center">
            <CalendarCheck className="mx-auto text-primary" size={24} />
            <p className="mt-3 text-sm font-semibold">Aucune séance réservée</p>
            <Link
              to="/app/planning"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground"
            >
              Ouvrir le planning
            </Link>
          </div>
        )}

        <section className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Historique</p>
          <h2 className="mt-1 text-display text-2xl">Séances terminées</h2>
          <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {HISTORY.map((item) => (
              <li key={item.id} className="flex items-center gap-3 px-4 py-4">
                <div className="w-16 text-xs text-muted-foreground">
                  {item.date.replace(" juin", "")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{item.type}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.time} · {item.coach}
                  </div>
                </div>
                <Check size={15} className="text-primary" />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <MobileTabBar />
    </main>
  );
}

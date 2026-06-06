import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Filter, Trophy, Check } from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";

export const Route = createFileRoute("/app/planning")({
  head: () => ({ meta: [{ title: "Planning · CACT Health Community" }] }),
  component: PlanningPage,
});

type Session = { id: string; day: string; date: string; time: string; type: string; coach: string; booked: number; capacity: number; hyrox?: boolean };

const DAYS = ["Lun. 9", "Mar. 10", "Mer. 11", "Jeu. 12", "Ven. 13", "Sam. 14"];

const ALL: Record<string, Session[]> = {
  "Lun. 9": [
    { id: "1", day: "Lun.", date: "9 juin", time: "07:00", type: "WOD Collectif", coach: "Armel", booked: 8, capacity: 14 },
    { id: "2", day: "Lun.", date: "9 juin", time: "12:15", type: "Express 45'", coach: "Sandra", booked: 9, capacity: 14 },
    { id: "3", day: "Lun.", date: "9 juin", time: "18:30", type: "HYROX Training", coach: "Sandra", booked: 14, capacity: 14, hyrox: true },
    { id: "4", day: "Lun.", date: "9 juin", time: "19:30", type: "Mobilité", coach: "Sandra", booked: 5, capacity: 14 },
  ],
  "Mar. 10": [
    { id: "5", day: "Mar.", date: "10 juin", time: "07:00", type: "Full Body", coach: "Sandra", booked: 6, capacity: 14 },
    { id: "6", day: "Mar.", date: "10 juin", time: "19:00", type: "Force & Power", coach: "Armel", booked: 12, capacity: 14 },
  ],
  "Mer. 11": [
    { id: "7", day: "Mer.", date: "11 juin", time: "08:00", type: "Mobilité", coach: "Sandra", booked: 4, capacity: 14 },
    { id: "8", day: "Mer.", date: "11 juin", time: "18:30", type: "HYROX Simulation", coach: "Armel", booked: 8, capacity: 14, hyrox: true },
  ],
  "Jeu. 12": [
    { id: "9", day: "Jeu.", date: "12 juin", time: "07:00", type: "WOD Collectif", coach: "Armel", booked: 3, capacity: 14 },
    { id: "10", day: "Jeu.", date: "12 juin", time: "19:00", type: "Endurance", coach: "Sandra", booked: 7, capacity: 14 },
  ],
  "Ven. 13": [
    { id: "11", day: "Ven.", date: "13 juin", time: "07:00", type: "Full Body", coach: "Armel", booked: 5, capacity: 14 },
    { id: "12", day: "Ven.", date: "13 juin", time: "18:30", type: "HYROX Training", coach: "Sandra", booked: 11, capacity: 14, hyrox: true },
  ],
  "Sam. 14": [
    { id: "13", day: "Sam.", date: "14 juin", time: "09:00", type: "Team WOD", coach: "Sandra & Armel", booked: 13, capacity: 20 },
    { id: "14", day: "Sam.", date: "14 juin", time: "10:30", type: "Brunch & Run", coach: "Armel", booked: 9, capacity: 20 },
  ],
};

function PlanningPage() {
  const [day, setDay] = useState(DAYS[0]);
  const [hyroxOnly, setHyrox] = useState(false);
  const [booked, setBooked] = useState<Set<string>>(new Set());

  const sessions = (ALL[day] || []).filter((s) => (hyroxOnly ? s.hyrox : true));

  const toggle = (id: string) => {
    const n = new Set(booked);
    n.has(id) ? n.delete(id) : n.add(id);
    setBooked(n);
  };

  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
          <Link to="/app" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ArrowLeft size={14} /> Retour
          </Link>
          <h1 className="text-display text-xl">Planning</h1>
          <button onClick={() => setHyrox(!hyroxOnly)} className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${hyroxOnly ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground"}`}>
            <Filter size={15} />
          </button>
        </div>

        <div className="mx-auto max-w-md overflow-x-auto px-5 pb-3">
          <div className="flex gap-2">
            {DAYS.map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  day === d ? "bg-primary text-primary-foreground" : "border border-border text-foreground/80 hover:border-primary/50"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-md px-5 pt-5">
        {hyroxOnly && (
          <div className="mb-4 flex items-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-4 py-3 text-xs text-primary">
            <Trophy size={14} /> Filtre HYROX actif
          </div>
        )}

        <ul className="space-y-3">
          {sessions.map((s) => {
            const full = s.booked >= s.capacity;
            const isBooked = booked.has(s.id);
            const tight = !full && s.capacity - s.booked <= 3;
            return (
              <li key={s.id} className={`rounded-2xl border bg-card p-4 transition-colors ${isBooked ? "border-primary/50" : "border-border"}`}>
                <div className="flex items-start gap-4">
                  <div className="flex w-14 shrink-0 flex-col items-center rounded-xl bg-surface-2 py-2">
                    <div className="text-[10px] uppercase text-muted-foreground">{s.day}</div>
                    <div className="text-display text-lg leading-none">{s.time}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold">{s.type}</span>
                      {s.hyrox && <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">HYROX</span>}
                    </div>
                    <div className="text-xs text-muted-foreground">Coach {s.coach}</div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                      <div className={`h-full ${full ? "bg-destructive" : tight ? "bg-amber-400" : "bg-primary"}`} style={{ width: `${(s.booked / s.capacity) * 100}%` }} />
                    </div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{s.booked}/{s.capacity} inscrits</div>
                  </div>
                </div>
                <button
                  onClick={() => toggle(s.id)}
                  disabled={full && !isBooked}
                  className={`mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold btn-press disabled:opacity-40 ${
                    isBooked
                      ? "bg-primary/15 text-primary"
                      : full
                      ? "border border-border"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {isBooked ? (<><Check size={14} /> Inscrit · annuler</>) : full ? "Liste d'attente" : "Réserver"}
                </button>
              </li>
            );
          })}
          {sessions.length === 0 && (
            <li className="rounded-2xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">Aucun créneau pour ce filtre.</li>
          )}
        </ul>
      </div>

      <MobileTabBar />
    </main>
  );
}

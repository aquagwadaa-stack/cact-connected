import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trophy, Edit3 } from "lucide-react";

export const Route = createFileRoute("/admin/planning")({
  component: AdminPlanningPage,
});

const WEEK = [
  { day: "Lundi", date: "9 juin", sessions: [
    { time: "07:00", type: "WOD Collectif", coach: "Armel", booked: 8, cap: 14 },
    { time: "12:15", type: "Express 45'", coach: "Sandra", booked: 9, cap: 14 },
    { time: "18:30", type: "HYROX Training", coach: "Sandra", booked: 14, cap: 14, hyrox: true },
    { time: "19:30", type: "Mobilité", coach: "Sandra", booked: 5, cap: 14 },
  ]},
  { day: "Mardi", date: "10 juin", sessions: [
    { time: "07:00", type: "Full Body", coach: "Sandra", booked: 6, cap: 14 },
    { time: "19:00", type: "Force & Power", coach: "Armel", booked: 12, cap: 14 },
  ]},
  { day: "Mercredi", date: "11 juin", sessions: [
    { time: "08:00", type: "Mobilité", coach: "Sandra", booked: 4, cap: 14 },
    { time: "18:30", type: "HYROX Simulation", coach: "Armel", booked: 8, cap: 14, hyrox: true },
  ]},
];

function AdminPlanningPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-display text-3xl">Planning</h1>
          <p className="mt-1 text-sm text-muted-foreground">Semaine du 9 au 15 juin · 18 séances</p>
        </div>
        <button className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground btn-press">
          <Plus size={15} /> Nouvelle séance
        </button>
      </div>

      <div className="space-y-5">
        {WEEK.map((d) => (
          <section key={d.day} className="overflow-hidden rounded-2xl border border-border bg-card">
            <header className="flex items-center justify-between border-b border-border bg-surface-2/40 px-5 py-3">
              <div>
                <div className="text-display text-lg">{d.day}</div>
                <div className="text-[11px] text-muted-foreground">{d.date}</div>
              </div>
              <div className="text-xs text-muted-foreground">{d.sessions.length} séances</div>
            </header>
            <ul className="divide-y divide-border">
              {d.sessions.map((s, i) => {
                const full = s.booked >= s.cap;
                return (
                  <li key={i} className="flex items-center gap-4 px-5 py-3">
                    <div className="text-display text-xl text-primary">{s.time}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold">{s.type}</span>
                        {s.hyrox && <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary"><Trophy size={9} /> HYROX</span>}
                      </div>
                      <div className="text-xs text-muted-foreground">Coach {s.coach}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-display text-lg ${full ? "text-destructive" : ""}`}>{s.booked}/{s.cap}</div>
                      <div className="text-[10px] uppercase text-muted-foreground">{full ? "complet" : "inscrits"}</div>
                    </div>
                    <button className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground">
                      <Edit3 size={14} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

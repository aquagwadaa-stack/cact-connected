import { createFileRoute } from "@tanstack/react-router";
import { Users, Calendar, Euro, TrendingUp, Trophy, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const KPIS = [
  { label: "Membres actifs", value: "184", trend: "+12", icon: Users, tone: "text-primary" },
  { label: "Séances ce mois", value: "412", trend: "+8%", icon: Calendar, tone: "text-primary" },
  { label: "MRR", value: "12 480 €", trend: "+6%", icon: Euro, tone: "text-primary" },
  { label: "Taux remplissage", value: "78%", trend: "+4 pts", icon: TrendingUp, tone: "text-primary" },
];

const TODAY = [
  { time: "07:00", type: "WOD Collectif", coach: "Armel", booked: 8, capacity: 14 },
  { time: "12:15", type: "Express 45'", coach: "Sandra", booked: 9, capacity: 14 },
  { time: "18:30", type: "HYROX Training", coach: "Sandra", booked: 14, capacity: 14, hyrox: true },
  { time: "19:30", type: "Mobilité", coach: "Sandra", booked: 5, capacity: 14 },
];

const RECENT = [
  { who: "Léa Marchand", what: "a réservé HYROX Training · ce soir 18:30", when: "il y a 3 min" },
  { who: "Antoine P.", what: "a renouvelé l'abonnement Illimité", when: "il y a 22 min" },
  { who: "Camille R.", what: "a annulé Force & Power · jeudi 19:00", when: "il y a 1 h" },
  { who: "Yann B.", what: "a créé un compte", when: "il y a 2 h" },
];

function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Lundi 9 juin</p>
        <h1 className="mt-1 text-display text-4xl">Bonjour Sandra 👋</h1>
        <p className="mt-2 text-sm text-muted-foreground">Voici l'activité du club en un coup d'œil.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {KPIS.map(({ label, value, trend, icon: Icon, tone }) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <Icon size={16} className={tone} />
              <span className="inline-flex items-center gap-0.5 text-[11px] text-primary"><ArrowUpRight size={11} /> {trend}</span>
            </div>
            <div className="mt-4 text-display text-3xl">{value}</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Today schedule */}
        <section className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-display text-2xl">Planning d'aujourd'hui</h2>
            <span className="text-xs text-muted-foreground">4 séances · 36 inscrits</span>
          </div>
          <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {TODAY.map((s, i) => {
              const pct = (s.booked / s.capacity) * 100;
              const full = s.booked >= s.capacity;
              return (
                <li key={i} className="flex items-center gap-4 p-4">
                  <div className="text-display text-xl text-primary">{s.time}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold">{s.type}</span>
                      {s.hyrox && <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary"><Trophy size={9} className="inline mr-0.5" /> HYROX</span>}
                    </div>
                    <div className="text-xs text-muted-foreground">Coach {s.coach}</div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                      <div className={`h-full ${full ? "bg-destructive" : "bg-primary"}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-display text-lg">{s.booked}/{s.capacity}</div>
                    <div className="text-[10px] uppercase text-muted-foreground">{full ? "complet" : "places"}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Activity feed */}
        <section>
          <h2 className="text-display text-2xl">Activité récente</h2>
          <ul className="mt-4 space-y-3">
            {RECENT.map((a, i) => (
              <li key={i} className="rounded-2xl border border-border bg-card p-4">
                <div className="text-sm"><span className="font-semibold">{a.who}</span> <span className="text-muted-foreground">{a.what}</span></div>
                <div className="mt-1 text-[11px] text-muted-foreground">{a.when}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

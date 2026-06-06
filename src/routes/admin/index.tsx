import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle, ArrowRight, Calendar, CreditCard, TrendingUp, Users } from "lucide-react";
import { DEMO_SESSIONS } from "@/lib/cact-demo";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const KPIS = [
  { label: "Réservations semaine", value: "38", note: "Données démo", icon: Calendar },
  { label: "Cours aujourd'hui", value: "4", note: "2 ce soir", icon: Users },
  { label: "Remplissage moyen", value: "72%", note: "Sur 12 places", icon: TrendingUp },
  { label: "Formules à renouveler", value: "3", note: "Dans les 7 jours", icon: CreditCard },
];

const RECENT = [
  { who: "Léa M.", what: "a réservé la préparation HYROX de 18:00", when: "il y a 3 min" },
  { who: "Antoine P.", what: "a activé une carte de 10 séances", when: "il y a 22 min" },
  { who: "Camille R.", what: "a annulé le créneau de jeudi 19:00", when: "il y a 1 h" },
];

function AdminDashboard() {
  const today = DEMO_SESSIONS.filter((session) => session.dayKey === "lun-8");

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Lundi 8 juin</p>
          <h1 className="mt-1 text-display text-4xl">Bonjour Sandra</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Voici ce qu'il faut suivre aujourd'hui.
          </p>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          Mode démonstration
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {KPIS.map(({ label, value, note, icon: Icon }) => (
          <article key={label} className="rounded-2xl border border-border bg-card p-5">
            <Icon size={17} className="text-primary" />
            <div className="mt-4 text-display text-3xl">{value}</div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
              {label}
            </div>
            <div className="mt-2 text-[10px] text-primary/80">{note}</div>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary">Aujourd'hui</p>
              <h2 className="mt-1 text-display text-2xl">Planning des séances</h2>
            </div>
            <Link
              to="/admin/planning"
              className="inline-flex items-center gap-1 text-xs text-primary"
            >
              Gérer <ArrowRight size={13} />
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {today.map((session) => {
              const full = session.booked >= session.capacity;
              return (
                <li key={session.id} className="flex items-center gap-4 p-4">
                  <div className="text-display text-xl text-primary">{session.time}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold">{session.type}</span>
                      {session.hyrox && (
                        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                          HYROX
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">Coach {session.coach}</div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                      <div
                        className={`h-full ${full ? "bg-destructive" : "bg-primary"}`}
                        style={{ width: `${(session.booked / session.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-display text-lg ${full ? "text-destructive" : ""}`}>
                      {session.booked}/{session.capacity}
                    </div>
                    <div className="text-[10px] uppercase text-muted-foreground">
                      {full ? "complet" : "inscrits"}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary">En direct</p>
              <h2 className="mt-1 text-display text-2xl">Activité récente</h2>
            </div>
          </div>
          <ul className="mt-4 space-y-3">
            {RECENT.map((item) => (
              <li
                key={`${item.who}-${item.when}`}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <p className="text-sm">
                  <span className="font-semibold">{item.who}</span>{" "}
                  <span className="text-muted-foreground">{item.what}</span>
                </p>
                <div className="mt-2 text-[11px] text-muted-foreground">{item.when}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Link
          to="/admin/planning"
          className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40"
        >
          <Calendar size={18} className="text-primary" />
          <div className="mt-3 text-sm font-semibold">Ajouter un cours</div>
          <div className="mt-1 text-xs text-muted-foreground">
            Créer un créneau ponctuel ou récurrent.
          </div>
        </Link>
        <Link
          to="/admin/membres"
          className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40"
        >
          <Users size={18} className="text-primary" />
          <div className="mt-3 text-sm font-semibold">Gérer un membre</div>
          <div className="mt-1 text-xs text-muted-foreground">
            Modifier une formule ou recréditer une séance.
          </div>
        </Link>
        <Link
          to="/admin/contenu"
          className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40"
        >
          <AlertCircle size={18} className="text-primary" />
          <div className="mt-3 text-sm font-semibold">Publier une information</div>
          <div className="mt-1 text-xs text-muted-foreground">
            Modifier les horaires ou afficher une annonce.
          </div>
        </Link>
      </section>
    </div>
  );
}

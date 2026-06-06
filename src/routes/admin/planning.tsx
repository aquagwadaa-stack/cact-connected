import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Edit3, Plus, Trash2, X } from "lucide-react";
import { DEMO_DAYS, DEMO_SESSIONS, type DemoSession } from "@/lib/cact-demo";

export const Route = createFileRoute("/admin/planning")({
  component: AdminPlanningPage,
});

function AdminPlanningPage() {
  const [sessions, setSessions] = useState(DEMO_SESSIONS.slice(0, 8));
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<DemoSession | null>(null);
  const [message, setMessage] = useState("");

  const days = useMemo(
    () =>
      DEMO_DAYS.slice(0, 3).map((day) => ({
        ...day,
        sessions: sessions.filter((session) => session.dayKey === day.key),
      })),
    [sessions],
  );

  const openForm = (session?: DemoSession) => {
    setEditing(session ?? null);
    setShowForm(true);
  };

  const save = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const dayKey = String(form.get("dayKey"));
    const dayMeta = DEMO_DAYS.find((day) => day.key === dayKey) ?? DEMO_DAYS[0];
    const [dayName, dayNumber, month] = dayMeta.full.split(" ");
    const next: DemoSession = {
      id: editing?.id ?? `demo-${Date.now()}`,
      dayKey,
      day: `${dayName.slice(0, 3)}.`,
      date: `${dayNumber} ${month}`,
      time: String(form.get("time")),
      type: String(form.get("type")),
      coach: String(form.get("coach")),
      booked: editing?.booked ?? 0,
      capacity: Number(form.get("capacity")),
      duration: String(form.get("duration")),
      level: "Tous niveaux",
      hyrox: String(form.get("type")).toLowerCase().includes("hyrox"),
    };

    setSessions((current) =>
      editing
        ? current.map((session) => (session.id === editing.id ? next : session))
        : [...current, next],
    );
    setShowForm(false);
    setEditing(null);
    setMessage(editing ? "Le créneau a été mis à jour." : "Le nouveau créneau a été ajouté.");
  };

  const remove = (id: string) => {
    setSessions((current) => current.filter((session) => session.id !== id));
    setMessage("Le créneau a été supprimé de la démonstration.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary">
            Semaine de démonstration
          </p>
          <h1 className="mt-1 text-display text-3xl">Planning</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Créez, modifiez ou supprimez un créneau.
          </p>
        </div>
        <button
          onClick={() => openForm()}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground btn-press"
        >
          <Plus size={15} /> Nouvelle séance
        </button>
      </div>

      {message && (
        <div className="flex items-start justify-between gap-3 rounded-2xl border border-primary/30 bg-primary/8 p-4 text-xs">
          <span className="inline-flex items-center gap-2">
            <Check size={14} className="text-primary" /> {message}
          </span>
          <button onClick={() => setMessage("")} aria-label="Fermer">
            <X size={14} />
          </button>
        </div>
      )}

      <div className="space-y-5">
        {days.map((day) => (
          <section
            key={day.key}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <header className="flex items-center justify-between border-b border-border bg-surface-2/40 px-5 py-3">
              <div>
                <div className="text-display text-lg">{day.full.split(" ")[0]}</div>
                <div className="text-[11px] text-muted-foreground">
                  {day.full.replace(`${day.full.split(" ")[0]} `, "")}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {day.sessions.length} séance{day.sessions.length > 1 ? "s" : ""}
              </div>
            </header>
            {day.sessions.length > 0 ? (
              <ul className="divide-y divide-border">
                {day.sessions.map((session) => {
                  const full = session.booked >= session.capacity;
                  return (
                    <li key={session.id} className="flex items-center gap-3 px-4 py-4 sm:px-5">
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
                        <div className="text-xs text-muted-foreground">
                          {session.coach} · {session.duration}
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
                      <button
                        onClick={() => openForm(session)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground"
                        aria-label={`Modifier ${session.type}`}
                      >
                        <Edit3 size={14} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="p-5 text-sm text-muted-foreground">Aucun créneau pour cette journée.</p>
            )}
          </section>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center">
          <form
            onSubmit={save}
            className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-elevated"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">
                  {editing ? "Modifier" : "Créer"}
                </p>
                <h2 className="mt-1 text-display text-3xl">Un créneau</h2>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <label className="col-span-2 text-xs text-muted-foreground">
                Type de séance
                <input
                  name="type"
                  required
                  defaultValue={editing?.type ?? "Training collectif"}
                  className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </label>
              <label className="text-xs text-muted-foreground">
                Jour
                <select
                  name="dayKey"
                  defaultValue={editing?.dayKey ?? "lun-8"}
                  className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground"
                >
                  <option value="lun-8">Lundi</option>
                  <option value="mar-9">Mardi</option>
                  <option value="mer-10">Mercredi</option>
                </select>
              </label>
              <label className="text-xs text-muted-foreground">
                Heure
                <input
                  name="time"
                  type="time"
                  required
                  defaultValue={editing?.time ?? "18:00"}
                  className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground"
                />
              </label>
              <label className="text-xs text-muted-foreground">
                Coach
                <select
                  name="coach"
                  defaultValue={editing?.coach ?? "Sandra"}
                  className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground"
                >
                  <option>Sandra</option>
                  <option>Armel</option>
                  <option>Sandra & Armel</option>
                </select>
              </label>
              <label className="text-xs text-muted-foreground">
                Capacité
                <input
                  name="capacity"
                  type="number"
                  min="1"
                  max="30"
                  defaultValue={editing?.capacity ?? 12}
                  className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground"
                />
              </label>
              <label className="col-span-2 text-xs text-muted-foreground">
                Durée
                <select
                  name="duration"
                  defaultValue={editing?.duration ?? "60 min"}
                  className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground"
                >
                  <option>45 min</option>
                  <option>60 min</option>
                  <option>75 min</option>
                </select>
              </label>
            </div>

            <div className="mt-5 flex gap-3">
              {editing && (
                <button
                  type="button"
                  onClick={() => {
                    remove(editing.id);
                    setShowForm(false);
                  }}
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-destructive/40 text-destructive"
                  aria-label="Supprimer"
                >
                  <Trash2 size={17} />
                </button>
              )}
              <button
                type="submit"
                className="h-12 flex-1 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
              >
                {editing ? "Enregistrer les modifications" : "Ajouter au planning"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

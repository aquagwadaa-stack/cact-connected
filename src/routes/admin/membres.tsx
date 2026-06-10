import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Minus, Plus, Search, UserPlus, X } from "lucide-react";

export const Route = createFileRoute("/admin/membres")({
  component: MembresPage,
});

type Member = {
  id: string;
  name: string;
  email: string;
  plan: string;
  credits: number | "∞";
  status: "Actif" | "En essai" | "Inactif";
  since: string;
};

const INITIAL_MEMBERS: Member[] = [
  {
    id: "1",
    name: "Marie Laurent",
    email: "marie.laurent@gmail.com",
    plan: "Carte 10 séances",
    credits: 6,
    status: "Actif",
    since: "Mai 2026",
  },
  {
    id: "2",
    name: "Antoine Petit",
    email: "antoine.petit@gmail.com",
    plan: "Illimité",
    credits: "∞",
    status: "Actif",
    since: "Janv. 2026",
  },
  {
    id: "3",
    name: "Léa Marchand",
    email: "lea.marchand@gmail.com",
    plan: "Carte 10 séances",
    credits: 4,
    status: "Actif",
    since: "Avril 2026",
  },
  {
    id: "4",
    name: "Camille R.",
    email: "camille.roux@gmail.com",
    plan: "Abonnement régulier",
    credits: 3,
    status: "Actif",
    since: "Mars 2026",
  },
  {
    id: "5",
    name: "Aïcha D.",
    email: "aicha.diallo@gmail.com",
    plan: "Séance découverte",
    credits: 1,
    status: "En essai",
    since: "Juin 2026",
  },
  {
    id: "6",
    name: "Yann B.",
    email: "yann.bernard@gmail.com",
    plan: "Aucune formule",
    credits: 0,
    status: "Inactif",
    since: "Juin 2026",
  },
];

function MembresPage() {
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState("");

  const selected = members.find((member) => member.id === selectedId) ?? null;
  const filtered = useMemo(
    () =>
      members.filter(
        (member) =>
          member.name.toLowerCase().includes(query.toLowerCase()) ||
          member.email.toLowerCase().includes(query.toLowerCase()),
      ),
    [members, query],
  );

  const changeCredits = (delta: number) => {
    if (!selected || selected.credits === "∞") return;
    setMembers((current) =>
      current.map((member) =>
        member.id === selected.id
          ? { ...member, credits: Math.max(0, Number(member.credits) + delta) }
          : member,
      ),
    );
  };

  const addMember = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const member: Member = {
      id: `member-${Date.now()}`,
      name: String(form.get("name")),
      email: String(form.get("email")),
      plan: "Séance découverte",
      credits: 1,
      status: "En essai",
      since: "Juin 2026",
    };
    setMembers((current) => [member, ...current]);
    setAdding(false);
    setMessage("Le membre a été ajouté avec une séance découverte.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary">Communauté CACT</p>
          <h1 className="mt-1 text-display text-3xl">Membres</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {members.length} membres enregistrés.
          </p>
        </div>
        <button
          onClick={() => setAdding(true)}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
        >
          <UserPlus size={15} /> Ajouter
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

      <div className="relative">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rechercher par nom ou e-mail"
          className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none focus:border-primary"
        />
      </div>

      <ul className="space-y-3 lg:hidden">
        {filtered.map((member) => (
          <li key={member.id}>
            <button
              onClick={() => setSelectedId(member.id)}
              className="w-full rounded-2xl border border-border bg-card p-4 text-left hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {member.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold">{member.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{member.email}</div>
                </div>
                <Badge status={member.status} />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <Cell label="Formule" value={member.plan} />
                <Cell label="Séances" value={String(member.credits)} />
                <Cell label="Depuis" value={member.since} />
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card lg:block">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-surface-2/40 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Membre</th>
              <th className="px-5 py-3">Formule</th>
              <th className="px-5 py-3">Séances</th>
              <th className="px-5 py-3">Depuis</th>
              <th className="px-5 py-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((member) => (
              <tr
                key={member.id}
                onClick={() => setSelectedId(member.id)}
                className="cursor-pointer border-b border-border last:border-0 hover:bg-surface-2/30"
              >
                <td className="px-5 py-3">
                  <div className="font-semibold">{member.name}</div>
                  <div className="text-xs text-muted-foreground">{member.email}</div>
                </td>
                <td className="px-5 py-3">{member.plan}</td>
                <td className="px-5 py-3 font-semibold text-primary">{member.credits}</td>
                <td className="px-5 py-3 text-muted-foreground">{member.since}</td>
                <td className="px-5 py-3">
                  <Badge status={member.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center">
          <div className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-elevated">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">Fiche membre</p>
                <h2 className="mt-1 text-display text-3xl">{selected.name}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{selected.email}</p>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            <label className="mt-5 block text-xs text-muted-foreground">
              Formule active
              <select
                value={selected.plan}
                onChange={(event) =>
                  setMembers((current) =>
                    current.map((member) =>
                      member.id === selected.id
                        ? { ...member, plan: event.target.value, status: "Actif" }
                        : member,
                    ),
                  )
                }
                className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground"
              >
                <option>Séance découverte</option>
                <option>Carte 10 séances</option>
                <option>Abonnement régulier</option>
                <option>Illimité</option>
                <option>Aucune formule</option>
              </select>
            </label>

            <div className="mt-4 rounded-2xl bg-surface-2 p-4">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Séances disponibles
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <button
                  onClick={() => changeCredits(-1)}
                  disabled={selected.credits === "∞"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border disabled:opacity-40"
                >
                  <Minus size={15} />
                </button>
                <span className="text-display text-4xl text-primary">{selected.credits}</span>
                <button
                  onClick={() => changeCredits(1)}
                  disabled={selected.credits === "∞"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border disabled:opacity-40"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedId(null);
                setMessage("Les modifications du membre ont été enregistrées.");
              }}
              className="mt-5 h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            >
              Enregistrer
            </button>
          </div>
        </div>
      )}

      {adding && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center">
          <form
            onSubmit={addMember}
            className="w-full max-w-sm rounded-[2rem] border border-border bg-card p-6 shadow-elevated"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">Nouveau</p>
                <h2 className="mt-1 text-display text-3xl">Ajouter un membre</h2>
              </div>
              <button
                type="button"
                onClick={() => setAdding(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="mt-5 space-y-3">
              <input
                name="name"
                required
                placeholder="Prénom et nom"
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Adresse e-mail"
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-5 h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            >
              Ajouter avec une séance découverte
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function Badge({ status }: { status: Member["status"] }) {
  const styles = {
    Actif: "bg-primary/15 text-primary",
    "En essai": "bg-amber-400/15 text-amber-400",
    Inactif: "bg-muted text-muted-foreground",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-2/50 px-2 py-2">
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 truncate text-xs font-semibold">{value}</div>
    </div>
  );
}

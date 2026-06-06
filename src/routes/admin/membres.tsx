import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Plus, MoreHorizontal } from "lucide-react";

export const Route = createFileRoute("/admin/membres")({
  component: MembresPage,
});

const MEMBERS = [
  { name: "Marie Dubois", email: "marie@cact-demo.fr", plan: "3 séances / sem.", credits: 7, status: "Actif", since: "Mars 2025" },
  { name: "Antoine Petit", email: "antoine.p@demo.fr", plan: "Illimité", credits: "∞", status: "Actif", since: "Janv. 2025" },
  { name: "Léa Marchand", email: "lea.m@demo.fr", plan: "Carte 10", credits: 4, status: "Actif", since: "Mai 2025" },
  { name: "Camille R.", email: "camille.r@demo.fr", plan: "2 séances / sem.", credits: 3, status: "Actif", since: "Oct. 2024" },
  { name: "Julien M.", email: "julien.m@demo.fr", plan: "Illimité · HYROX", credits: "∞", status: "Actif", since: "Févr. 2025" },
  { name: "Aïcha D.", email: "aicha.d@demo.fr", plan: "Découverte", credits: 1, status: "En essai", since: "Juin 2025" },
  { name: "Yann B.", email: "yann.b@demo.fr", plan: "—", credits: 0, status: "Inactif", since: "Juin 2025" },
];

function MembresPage() {
  const [q, setQ] = useState("");
  const filtered = MEMBERS.filter((m) => m.name.toLowerCase().includes(q.toLowerCase()) || m.email.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-display text-3xl">Membres</h1>
          <p className="mt-1 text-sm text-muted-foreground">184 membres · 12 nouveaux ce mois</p>
        </div>
        <button className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground btn-press">
          <Plus size={15} /> Ajouter
        </button>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un membre…"
          className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm outline-none focus:border-primary"
        />
      </div>

      {/* Mobile cards */}
      <ul className="space-y-3 lg:hidden">
        {filtered.map((m) => (
          <li key={m.email} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">{m.name.charAt(0)}</div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{m.name}</div>
                <div className="truncate text-xs text-muted-foreground">{m.email}</div>
              </div>
              <Badge status={m.status} />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Cell label="Formule" value={m.plan} />
              <Cell label="Crédits" value={String(m.credits)} />
              <Cell label="Depuis" value={m.since} />
            </div>
          </li>
        ))}
      </ul>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card lg:block">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-surface-2/40 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Membre</th>
              <th className="px-5 py-3">Formule</th>
              <th className="px-5 py-3">Crédits</th>
              <th className="px-5 py-3">Depuis</th>
              <th className="px-5 py-3">Statut</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.email} className="border-b border-border last:border-0 hover:bg-surface-2/30">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">{m.name.charAt(0)}</div>
                    <div>
                      <div className="font-semibold">{m.name}</div>
                      <div className="text-xs text-muted-foreground">{m.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-foreground/85">{m.plan}</td>
                <td className="px-5 py-3 text-primary font-semibold">{m.credits}</td>
                <td className="px-5 py-3 text-muted-foreground">{m.since}</td>
                <td className="px-5 py-3"><Badge status={m.status} /></td>
                <td className="px-5 py-3 text-right"><button className="text-muted-foreground hover:text-foreground"><MoreHorizontal size={16} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Badge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Actif: "bg-primary/15 text-primary",
    "En essai": "bg-amber-400/15 text-amber-400",
    Inactif: "bg-muted text-muted-foreground",
  };
  return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${map[status] || "bg-muted"}`}>{status}</span>;
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-2/50 px-2 py-2">
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 truncate text-xs font-semibold">{value}</div>
    </div>
  );
}

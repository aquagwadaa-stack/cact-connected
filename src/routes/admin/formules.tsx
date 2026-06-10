import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, CreditCard, Edit3, Eye, EyeOff, Plus, X } from "lucide-react";
import { MEMBERSHIP_PLANS } from "@/lib/cact-demo";

export const Route = createFileRoute("/admin/formules")({
  component: AdminFormulesPage,
});

type Plan = (typeof MEMBERSHIP_PLANS)[number] & { visible: boolean };

function AdminFormulesPage() {
  const [plans, setPlans] = useState<Plan[]>(
    MEMBERSHIP_PLANS.map((plan) => ({ ...plan, visible: true })),
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const selected = plans.find((plan) => plan.id === selectedId) ?? null;

  const addPlan = () => {
    const id = `plan-${Date.now()}`;
    setPlans((current) => [
      ...current,
      {
        id,
        name: "Nouvelle formule",
        price: "49 €",
        description: "Une formule personnalisable pour répondre à un besoin précis.",
        detail: "4 séances",
        visible: true,
      },
    ]);
    setSelectedId(id);
  };

  const save = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected) return;
    const form = new FormData(event.currentTarget);
    setPlans((current) =>
      current.map((plan) =>
        plan.id === selected.id
          ? {
              ...plan,
              name: String(form.get("name")),
              price: String(form.get("price")),
              detail: String(form.get("detail")),
              description: String(form.get("description")),
            }
          : plan,
      ),
    );
    setSelectedId(null);
    setMessage("La formule a été mise à jour.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary">Catalogue</p>
          <h1 className="mt-1 text-display text-3xl">Formules</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Gérez les cartes et abonnements proposés aux membres.
          </p>
        </div>
        <button
          onClick={addPlan}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
        >
          <Plus size={15} /> Nouvelle formule
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`rounded-3xl border bg-card p-5 ${plan.visible ? "border-border" : "border-border opacity-55"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-display text-2xl">{plan.name}</h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>
              <CreditCard size={18} className="shrink-0 text-primary" />
            </div>
            <div className="mt-4 flex items-end justify-between gap-4 border-t border-border/60 pt-4">
              <div>
                <div className="text-xs text-primary">{plan.detail}</div>
                <div className="mt-1 text-sm font-semibold">{plan.price}</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setPlans((current) =>
                      current.map((item) =>
                        item.id === plan.id ? { ...item, visible: !item.visible } : item,
                      ),
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground"
                  aria-label={plan.visible ? "Masquer" : "Afficher"}
                >
                  {plan.visible ? <Eye size={15} /> : <EyeOff size={15} />}
                </button>
                <button
                  onClick={() => setSelectedId(plan.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground"
                  aria-label="Modifier"
                >
                  <Edit3 size={15} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center">
          <form
            onSubmit={save}
            className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-elevated"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">Modifier</p>
                <h2 className="mt-1 text-display text-3xl">{selected.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="mt-5 space-y-3">
              <Field name="name" label="Nom" defaultValue={selected.name} />
              <Field name="detail" label="Contenu" defaultValue={selected.detail} />
              <Field name="price" label="Prix affiché" defaultValue={selected.price} />
              <label className="block text-xs text-muted-foreground">
                Description
                <textarea
                  name="description"
                  defaultValue={selected.description}
                  rows={3}
                  className="mt-1 w-full resize-none rounded-xl border border-border bg-background p-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            >
              Enregistrer
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function Field({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue: string;
}) {
  return (
    <label className="block text-xs text-muted-foreground">
      {label}
      <input
        name={name}
        defaultValue={defaultValue}
        className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}

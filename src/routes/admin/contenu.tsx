import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Clock, FileText, ImageIcon, MapPin, Megaphone, Save, Users, X } from "lucide-react";

export const Route = createFileRoute("/admin/contenu")({
  component: AdminContenuPage,
});

type SectionId = "hero" | "concept" | "coaches" | "hours" | "contact" | "gallery";

const SECTIONS = [
  {
    id: "hero" as const,
    icon: Megaphone,
    title: "Accueil",
    desc: "Accroche et texte du premier écran.",
  },
  {
    id: "concept" as const,
    icon: FileText,
    title: "Présentation",
    desc: "Texte sur l'esprit et l'accompagnement CACT.",
  },
  {
    id: "coaches" as const,
    icon: Users,
    title: "Sandra & Armel",
    desc: "Photos, parcours et spécialités des coachs.",
  },
  {
    id: "hours" as const,
    icon: Clock,
    title: "Horaires",
    desc: "Horaires généraux visibles sur la vitrine.",
  },
  {
    id: "contact" as const,
    icon: MapPin,
    title: "Coordonnées",
    desc: "Adresse, e-mail et réseaux sociaux.",
  },
  {
    id: "gallery" as const,
    icon: ImageIcon,
    title: "Photos",
    desc: "Images de la salle et de la communauté.",
  },
];

function AdminContenuPage() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [message, setMessage] = useState("");
  const [announcement, setAnnouncement] = useState("");

  const save = (event: React.FormEvent) => {
    event.preventDefault();
    setActive(null);
    setMessage("Les modifications sont enregistrées dans la démonstration.");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary">Mini-CMS</p>
          <h1 className="mt-1 text-display text-3xl">Contenu du site</h1>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Sandra et Armel pourront mettre à jour les informations courantes sans ouvrir Lovable ni
            toucher au design.
          </p>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          Aperçu fonctionnel
        </span>
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

      <section className="rounded-3xl border border-primary/30 bg-primary/6 p-5">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
          <Megaphone size={14} /> Information exceptionnelle
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Affichez rapidement une fermeture, un changement d'horaire ou une annonce en haut du site.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={announcement}
            onChange={(event) => setAnnouncement(event.target.value)}
            placeholder="Ex. Salle fermée lundi matin"
            className="h-11 flex-1 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary"
          />
          <button
            onClick={() =>
              setMessage(
                announcement
                  ? "L'annonce est prête à être publiée."
                  : "Saisissez d'abord une annonce.",
              )
            }
            className="h-11 rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground"
          >
            Publier
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-display text-2xl">Sections modifiables</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {SECTIONS.map(({ id, icon: Icon, title, desc }) => (
            <li key={id}>
              <button
                onClick={() => setActive(id)}
                className="flex w-full items-start gap-4 rounded-2xl border border-border bg-card p-5 text-left hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold">{title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                  <div className="mt-3 text-[10px] uppercase tracking-wider text-primary">
                    Modifier
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5">
        <h2 className="text-display text-2xl">Ce qui reste protégé</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          La mise en page, les couleurs, les composants et le système de réservation ne sont pas
          modifiables depuis cet écran. Cela évite de casser le site par erreur.
        </p>
      </section>

      {active && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:justify-center">
          <form
            onSubmit={save}
            className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-elevated"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">Modifier</p>
                <h2 className="mt-1 text-display text-3xl">
                  {SECTIONS.find((section) => section.id === active)?.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {active === "hero" && (
                <>
                  <Field label="Titre" defaultValue="Bougez. Progressez. Ensemble." />
                  <TextArea
                    label="Sous-titre"
                    defaultValue="Des cours collectifs et un accompagnement personnalisé pour avancer à votre rythme."
                  />
                </>
              )}
              {active === "concept" && (
                <TextArea
                  label="Texte de présentation"
                  defaultValue="Chaque séance est expliquée, encadrée et adaptée à votre niveau."
                />
              )}
              {active === "coaches" && (
                <>
                  <Field
                    label="Présentation de Sandra"
                    defaultValue="Parcours et spécialités à compléter."
                  />
                  <Field
                    label="Présentation d'Armel"
                    defaultValue="Parcours et spécialités à compléter."
                  />
                  <UploadPlaceholder />
                </>
              )}
              {active === "hours" && (
                <>
                  <Field label="Horaires du matin" defaultValue="À confirmer" />
                  <Field label="Horaires du soir" defaultValue="À confirmer" />
                </>
              )}
              {active === "contact" && (
                <>
                  <Field
                    label="Adresse"
                    defaultValue="Secteur Manganao / Belle-Allée, Saint-François"
                  />
                  <Field label="Instagram" defaultValue="@cact_health_community" />
                  <Field label="E-mail" defaultValue="" placeholder="Adresse à compléter" />
                </>
              )}
              {active === "gallery" && <UploadPlaceholder />}
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            >
              <Save size={16} /> Enregistrer
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  defaultValue,
  placeholder,
}: {
  label: string;
  defaultValue: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-xs text-muted-foreground">
      {label}
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}

function TextArea({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <label className="block text-xs text-muted-foreground">
      {label}
      <textarea
        defaultValue={defaultValue}
        rows={4}
        className="mt-1 w-full resize-none rounded-xl border border-border bg-background p-3 text-sm leading-relaxed text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}

function UploadPlaceholder() {
  return (
    <button
      type="button"
      className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-background p-6 text-center hover:border-primary/50"
    >
      <ImageIcon size={22} className="text-primary" />
      <span className="mt-2 text-sm font-semibold">Ajouter ou remplacer une photo</span>
      <span className="mt-1 text-xs text-muted-foreground">
        Interaction simulée pour la démonstration
      </span>
    </button>
  );
}

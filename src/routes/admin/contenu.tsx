import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon, FileText, Megaphone, Star, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/admin/contenu")({
  component: AdminContenuPage,
});

const BLOCKS = [
  { icon: Megaphone, title: "Hero & accroche", desc: "Titre, sous-titre et photo de couverture du site vitrine.", count: "1 bloc" },
  { icon: FileText, title: "Manifeste & concept", desc: "Texte d'introduction et chiffres clés.", count: "3 stats" },
  { icon: Star, title: "Témoignages", desc: "Avis des membres affichés sur la home.", count: "3 actifs" },
  { icon: ImageIcon, title: "Galerie communauté", desc: "Photos de la vie du club.", count: "12 photos" },
];

const POSTS = [
  { title: "HYROX Nice 2025 — la team CACT en route", date: "5 juin", status: "Publié" },
  { title: "Nouveaux horaires d'été", date: "1 juin", status: "Publié" },
  { title: "Stage mobilité du samedi", date: "24 mai", status: "Brouillon" },
];

function AdminContenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-display text-3xl">Contenu du site</h1>
        <p className="mt-1 text-sm text-muted-foreground">Mettez à jour ce qui apparaît sur la vitrine publique.</p>
      </div>

      <section>
        <h2 className="text-display text-2xl">Sections de la home</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {BLOCKS.map(({ icon: Icon, title, desc, count }) => (
            <li key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-semibold">{title}</div>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                <div className="mt-2 text-[10px] uppercase tracking-wider text-primary">{count}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-display text-2xl">Actualités</h2>
        <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {POSTS.map((p, i) => (
            <li key={i} className="flex items-center gap-3 px-5 py-4">
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold">{p.title}</div>
                <div className="text-xs text-muted-foreground">{p.date}</div>
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${p.status === "Publié" ? "bg-primary/15 text-primary" : "bg-amber-400/15 text-amber-400"}`}>{p.status}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

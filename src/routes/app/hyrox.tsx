import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Trophy, Timer, Flame, Calendar } from "lucide-react";
import { MobileTabBar } from "@/components/cact/MobileTabBar";
import hyroxImg from "@/assets/hyrox.jpg";

export const Route = createFileRoute("/app/hyrox")({
  head: () => ({ meta: [{ title: "Programme HYROX · CACT" }] }),
  component: HyroxPage,
});

const STATIONS = [
  { n: 1, name: "1000m SkiErg", best: "4:12" },
  { n: 2, name: "50m Sled Push", best: "1:48" },
  { n: 3, name: "50m Sled Pull", best: "2:05" },
  { n: 4, name: "80m Burpee Broad Jump", best: "3:22" },
  { n: 5, name: "1000m Row", best: "3:58" },
  { n: 6, name: "200m Farmers Carry", best: "1:31" },
  { n: 7, name: "100m Sandbag Lunges", best: "4:40" },
  { n: 8, name: "100 Wall Balls", best: "3:18" },
];

function HyroxPage() {
  return (
    <main className="min-h-[100svh] bg-background pb-28 text-foreground">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border/60 bg-background/85 px-5 py-4 backdrop-blur-xl">
        <Link to="/app" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowLeft size={14} /> Retour
        </Link>
        <h1 className="text-display text-xl">HYROX</h1>
        <div className="w-12" />
      </header>

      <section className="relative h-56 overflow-hidden">
        <img src={hyroxImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            <Trophy size={11} /> Salle affiliée
          </span>
          <div className="mt-2 text-display text-3xl">Programme HYROX</div>
          <div className="text-xs text-muted-foreground">Saison 2025/2026 · 12 semaines</div>
        </div>
      </section>

      <div className="mx-auto max-w-md px-5 pt-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Timer, v: "1h12", l: "Meilleur temps" },
            { icon: Flame, v: "18", l: "Simulations" },
            { icon: Calendar, v: "S6/12", l: "Cycle actuel" },
          ].map(({ icon: Icon, v, l }) => (
            <div key={l} className="rounded-2xl border border-border bg-card p-3">
              <Icon size={14} className="text-primary" />
              <div className="mt-2 text-display text-2xl">{v}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="text-display text-2xl">Mes records · 8 stations</h2>
          <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {STATIONS.map((s) => (
              <li key={s.n} className="flex items-center gap-3 px-4 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">{s.n}</div>
                <div className="min-w-0 flex-1 text-sm font-medium">{s.name}</div>
                <div className="text-display text-lg text-primary">{s.best}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
            <Trophy size={14} /> Prochaine course
          </div>
          <div className="mt-2 text-display text-2xl">HYROX Nice — 22 nov.</div>
          <div className="mt-1 text-sm text-muted-foreground">5 membres CACT inscrits · 11 places dans la team</div>
          <button className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground btn-press">
            Rejoindre la team
          </button>
        </section>
      </div>

      <MobileTabBar />
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/")({
  component: AppHome,
});

function AppHome() {
  return (
    <main className="min-h-[100svh] bg-background text-foreground">
      <div className="mx-auto flex min-h-[100svh] max-w-md flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Sparkles size={22} />
        </div>
        <h1 className="mt-6 text-display text-4xl">Application membre</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          L'expérience de réservation arrive dans la prochaine itération&nbsp;: planning mobile, gestion des
          crédits, abonnements et profil.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-border px-5 text-sm btn-press hover:border-primary/50"
        >
          <ArrowLeft size={16} /> Retour au site
        </Link>
        <p className="mt-6 text-[11px] text-muted-foreground/80">Mode démonstration</p>
      </div>
    </main>
  );
}

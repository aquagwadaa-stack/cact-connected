import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { CactLogo } from "@/components/cact/Logo";

export const Route = createFileRoute("/app/connexion")({
  head: () => ({ meta: [{ title: "Connexion · CACT" }] }),
  component: ConnexionPage,
});

function ConnexionPage() {
  return (
    <main className="min-h-[100svh] bg-background px-6 py-10 text-foreground">
      <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
        <ArrowLeft size={14} /> Retour au site
      </Link>

      <div className="mx-auto mt-10 flex max-w-sm flex-col items-center text-center">
        <CactLogo className="h-10 w-auto" />
        <h1 className="mt-6 text-display text-3xl">Bon retour.</h1>
        <p className="mt-2 text-sm text-muted-foreground">Connecte-toi pour réserver tes séances.</p>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); window.location.href = "/app"; }}
        className="mx-auto mt-8 flex max-w-sm flex-col gap-3"
      >
        <label className="relative">
          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="email"
            required
            placeholder="Email"
            defaultValue="marie@cact-demo.fr"
            className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="relative">
          <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="password"
            required
            placeholder="Mot de passe"
            defaultValue="••••••••"
            className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-sm outline-none focus:border-primary"
          />
        </label>
        <button type="submit" className="mt-2 h-12 rounded-full bg-primary text-sm font-semibold text-primary-foreground btn-press hover:bg-primary/90">
          Se connecter
        </button>
        <a href="#" className="mt-1 text-center text-xs text-muted-foreground hover:text-foreground">Mot de passe oublié ?</a>
      </form>

      <div className="mx-auto mt-8 flex max-w-sm items-center gap-3 text-xs text-muted-foreground">
        <div className="h-px flex-1 bg-border" />
        ou
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="mx-auto mt-6 max-w-sm text-center">
        <p className="text-sm text-muted-foreground">Pas encore membre&nbsp;?</p>
        <Link to="/" className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full border border-border text-sm font-medium btn-press hover:border-primary/50">
          Réserver une séance découverte
        </Link>
      </div>

      <p className="mt-12 text-center text-[11px] text-muted-foreground">Mode démonstration — aucune authentification réelle.</p>
    </main>
  );
}

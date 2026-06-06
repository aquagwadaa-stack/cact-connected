import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Lock, Mail, User } from "lucide-react";
import { CactLogo } from "@/components/cact/Logo";

export const Route = createFileRoute("/app/connexion")({
  head: () => ({ meta: [{ title: "Connexion | CACT Health Community" }] }),
  component: ConnexionPage,
});

function ConnexionPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate({ to: "/app" });
  };

  return (
    <main className="min-h-[100svh] bg-background px-6 py-8 text-foreground">
      <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground">
        <ArrowLeft size={14} /> Retour à la vitrine
      </Link>

      <div className="mx-auto mt-8 flex max-w-sm flex-col items-center text-center">
        <CactLogo className="h-11 w-auto" />
        <h1 className="mt-7 text-display text-3xl">
          {mode === "login" ? "Bienvenue." : "Créer votre espace."}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {mode === "login"
            ? "Connectez-vous pour réserver et suivre vos séances."
            : "Un compte simple pour gérer votre formule et vos réservations."}
        </p>
      </div>

      <div className="mx-auto mt-7 grid max-w-sm grid-cols-2 rounded-full bg-card p-1">
        <button
          onClick={() => setMode("login")}
          className={`rounded-full py-2.5 text-xs font-semibold ${mode === "login" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
        >
          Se connecter
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`rounded-full py-2.5 text-xs font-semibold ${mode === "signup" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
        >
          Créer un compte
        </button>
      </div>

      <form onSubmit={submit} className="mx-auto mt-6 flex max-w-sm flex-col gap-3">
        {mode === "signup" && (
          <label className="relative">
            <User
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              required
              placeholder="Prénom et nom"
              className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-sm outline-none focus:border-primary"
            />
          </label>
        )}
        <label className="relative">
          <Mail
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="email"
            required
            placeholder="Adresse e-mail"
            defaultValue={mode === "login" ? "marie@demo-cact.fr" : ""}
            className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="relative">
          <Lock
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="password"
            required
            placeholder="Mot de passe"
            defaultValue={mode === "login" ? "Demo2026!" : ""}
            className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-sm outline-none focus:border-primary"
          />
        </label>
        <button
          type="submit"
          className="mt-2 h-12 rounded-full bg-primary text-sm font-semibold text-primary-foreground btn-press hover:bg-primary/90"
        >
          {mode === "login" ? "Se connecter" : "Créer mon compte"}
        </button>
        {mode === "login" && (
          <button
            type="button"
            className="mt-1 text-center text-xs text-muted-foreground hover:text-foreground"
          >
            Mot de passe oublié ?
          </button>
        )}
      </form>

      <div className="mx-auto mt-7 max-w-sm rounded-2xl border border-primary/30 bg-primary/8 p-4 text-center">
        <p className="text-xs font-semibold text-primary">Accès de présentation</p>
        <p className="mt-1 text-xs text-muted-foreground">Les identifiants sont déjà remplis.</p>
        <button
          onClick={() => navigate({ to: "/app" })}
          className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-full border border-primary/40 text-xs font-semibold text-primary"
        >
          Explorer directement la démo
        </button>
      </div>

      <p className="mx-auto mt-8 max-w-sm text-center text-[11px] leading-relaxed text-muted-foreground">
        Prototype : aucune authentification réelle et aucune donnée personnelle n'est enregistrée.
      </p>
    </main>
  );
}

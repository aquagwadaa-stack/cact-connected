import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/app/connexion")({
  component: () => (
    <main className="min-h-[100svh] bg-background px-6 py-20 text-foreground">
      <div className="mx-auto max-w-sm">
        <h1 className="text-display text-3xl">Connexion</h1>
        <p className="mt-2 text-sm text-muted-foreground">Bientôt disponible.</p>
        <Link to="/" className="mt-6 inline-block text-sm text-primary">← Retour</Link>
      </div>
    </main>
  ),
});

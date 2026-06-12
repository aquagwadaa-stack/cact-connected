## Objectif

Deux changements liés :

1. **Identité au chargement** : au lieu du petit bloc logo "CACT" en haut à gauche du header, on affiche dès l'entrée, centré dans le hero et bien grand :
   - en haut : `CROSSFIT` (en petites capitales espacées, au-dessus)
   - en dessous : le logo CACT (image) accompagné du wordmark `CACT Health Community`
   Le header en haut de page est donc **transparent et vide** à l'entrée (juste les liens de navigation, sans logo visible à gauche).

2. **Au scroll** : dès que l'utilisateur défile (~80–100px), le bloc identité du hero se "réduit" et le logo + "CACT" viennent se placer en haut à gauche dans le header, qui devient opaque/floue (effet déjà en place). Le grand wordmark du hero, lui, reste en place mais le header gagne son logo.

3. **Photos** : remplacer **toutes** les photos de démonstration du site par les 7 photos uploadées (vraies photos de la salle CACT à Saint-François, vue mer, structure bois, athlètes en action, matériel vert CACT).

## Détails techniques

### Assets (lovable-assets)
Uploader les 7 images depuis `/mnt/user-uploads/` vers le CDN, créer les `.asset.json` dans `src/assets/cact/` :
- `cact-group.jpg` (image 6 — groupe assis sur tapis vert, vue mer) → nouveau **hero** + section communauté
- `cact-machines.jpg` (image 5 — machines vertes, deck bois)
- `cact-lifting-wide.jpg` (image 4 — vue large, soulevés, océan en fond)
- `cact-rowers.jpg` (image 3 — rameurs Concept2, vue mer)
- `cact-floor.jpg` (image 2 — sol caoutchouc, barres, parking)
- `cact-structure.jpg` (image 1 — structure bois vide, vue mer)
- `cact-deadlift.jpg` (image 0 — jeunes en soulevé de terre)

Supprimer les anciens assets générés qui ne seront plus référencés : `hero-gym.jpg`, `hyrox.jpg`, `community.jpg`, `community-2.jpg`, `community-3.jpg`.

### Mapping dans `src/routes/index.tsx`
- Hero background → `cact-group.jpg`
- Section HYROX (bloc image plein cadre) → `cact-lifting-wide.jpg`
- Section communauté (mosaïque 2 photos) → `cact-rowers.jpg` (grande) + `cact-deadlift.jpg` (portrait)
- Vérifier `src/routes/app/hyrox.tsx` et `src/routes/app/index.tsx` — remplacer toute référence aux anciens assets par les nouveaux.
- `og:image` → `cact-group.jpg`

### Hero — nouveau bloc identité
Dans `src/routes/index.tsx`, restructurer le hero :
- Garder le H1 actuel "Bougez. Progressez. Ensemble." plus bas (ou le condenser).
- Ajouter en **haut/centre** du hero un bloc identité :
  ```
  CROSSFIT                  ← tracking large, petit
  [logo image] CACT         ← gros wordmark + image logo
  Health Community          ← sous-titre
  ```
  Animé d'un fade/scale léger à l'arrivée.
- Le badge "Club affilié HYROX" et le pin "Saint-François · Guadeloupe" restent.

### Header — `src/components/cact/SiteHeader.tsx`
Le header doit :
- Au chargement (scrollY < 80) : **ne pas afficher** le `<CactLogo />` à gauche (ou opacity-0). Background transparent.
- Au scroll (scrollY ≥ 80) : afficher le logo CACT à gauche avec une transition (fade + slide léger), background `backdrop-blur` + bordure (état déjà géré via `scrolled`).
- Conserver les liens de nav et le CTA "Réserver".

Implémentation : utiliser l'état `scrolled` déjà présent dans `SiteHeader` pour conditionner `opacity` / `translate-y` du logo via Tailwind transitions.

### Composant `CactLogo`
Optionnel : ajouter une variante `size="lg"` ou un composant `CactWordmark` dédié pour le hero (logo image + texte plus gros, layout vertical avec "CROSSFIT" overline + "Health Community" sous-titre). Garder `CactLogo` actuel pour le header.

## Hors-scope
Aucun changement aux routes `/app/*` ni `/admin/*` (sauf swap d'images si l'une d'elles référence un ancien asset supprimé).

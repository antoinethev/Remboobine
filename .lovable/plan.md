# Plan : menu de navigation mobile

## Objectif
Permettre aux visiteurs sur mobile d’accéder aux pages secondaires (Processus, Tarifs, À propos, FAQ) depuis le header, car actuellement ces liens sont masqués en dessous de `md`.

## Solution proposée
Ajouter un menu mobile « hamburger » dans le header existant (`src/components/site-chrome.tsx`) :
- Un bouton icône (3 barres) visible uniquement en dessous de `md`, à côté du CTA.
- Au clic, ouverture d’un panneau coulissant ou d’un overlay pleine largeur contenant les 4 liens de navigation + le CTA « Confier mes bobines ».
- Fermeture possible via un bouton croix, un clic en dehors, ou la touche Échap.
- Le menu reste accessible (aria-expanded, aria-label, focus trap simple si pertinent).
- Le CTA principal reste toujours visible dans le header, même sur mobile.

## Implémentation technique
- Utiliser un état React local (`useState`) pour gérer l’ouverture/fermeture.
- Utiliser les icônes Lucide déjà présentes dans le projet (`Menu`, `X`).
- Conserver le style visuel existant : fond pêche/crème, typographie Fraunces/Inter, accent corail.
- S’assurer que l’overlay ne cache pas le contenu de manière gênante et qu’il est positionné sous le header sticky.

## Fichiers concernés
- `src/components/site-chrome.tsx` : ajout du bouton hamburger et du menu mobile.

## Non inclus dans ce plan
- Refonte du header desktop.
- Modification du footer.
- Ajout d’animations complexes (hors transition simple d’ouverture/fermeture).

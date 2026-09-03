# Homogénéiser la page d’accueil — desktop

## Objectif
Réduire les espaces vides visibles sur le format desktop et équilibrer la composition du hero, tout en conservant les ajustements mobile/tablette déjà en place.

## Problèmes constatés
- **Hero desktop** : la colonne de droite (vidéo + témoignage flottant) est beaucoup plus courte que la colonne de texte de gauche, ce qui crée un grand espace vide à droite sous la vidéo.
- **Témoignage du hero** : il affiche encore « Camille, Lyon » alors que les trois témoignages validés sont ceux de Denise, Manon et Laurent.
- **Espace entre sections** : un vide important sépare la section tarifs de la section « Pourquoi maintenant ».

## Modifications prévues

### 1. Rééquilibrage du hero desktop
- Augmenter la hauteur visuelle de la vidéo (passer l’aspect ratio de `4/3` à une hauteur plus proche de la colonne texte, par exemple `aspect-[4/3]` ajusté ou hauteur fixe `min-h`).
- Centrer verticalement la colonne vidéo par rapport au texte (`items-center` sur la grille).
- Déplacer la bulle de témoignage en bas à droite de la vidéo (`-bottom-4 -right-4`) au lieu du haut, pour qu’elle ancre visuellement la colonne sans masquer le haut de la vidéo.

### 2. Mise à jour du témoignage du hero
- Remplacer le contenu actuel par l’un des trois témoignages validés, par exemple :
  > « Voir ses grands-parents jeunes c’est exceptionnelle. j’aurais aimé regarder ces films avec eux. » — Manon, Paris

### 3. Espacement entre les sections
- Réduire le padding vertical entre la section tarifs (`<Pricing />`) et la section « Pourquoi maintenant » (`<WhyDigitize />`) pour supprimer l’espace vide.
- Vérifier que les autres sections conservent un rythme cohérent (pas d’espacements trop larges ou trop serrés).

### 4. Vérification responsive
- S’assurer que les modifications ne dégradent pas le rendu mobile et tablette déjà ajusté.
- Conserver la lecture automatique, muette et en boucle de la vidéo.

## Fichier concerné
- `src/routes/index.tsx`

## Validation
- Capture Playwright du hero en desktop pour vérifier la disparition de l’espace vide.
- Vérification visuelle mobile/tablette.
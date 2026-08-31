# Plan : remplacer la photo Hero par une vidéo MP4 en boucle

## Objectif
Remplacer l’image statique du Hero de la page d’accueil par la vidéo MP4 que l’utilisateur enverra, lue automatiquement en boucle et sans son.

## Étapes

1. **Récupérer la vidéo**
   - Attendre le fichier MP4 de l’utilisateur.
   - Vérifier qu’il fait moins de 20 Mo (limite d’upload conversation) et qu’il est au format MP4.

2. **Intégrer la vidéo dans le projet**
   - Si la vidéo est un fichier binaire, l’externaliser en asset CDN via `lovable-assets` pour ne pas alourdir le repo.
   - Créer le fichier `.asset.json` correspondant dans `src/assets/`.

3. **Modifier le Hero (`src/routes/index.tsx`)**
   - Remplacer la balise `<img>` actuelle (ligne 117) par une balise `<video>` avec :
     - `autoPlay`
     - `muted`
     - `loop`
     - `playsInline`
     - `preload="metadata"`
   - Conserver les styles existants : `rounded-3xl`, bordure crème, ombre, `object-cover`, `h-full w-full`.
   - Garder le grain et la bordure décorative par-dessus.
   - Prévoir un poster/une image de fallback au cas où la vidéo ne charge pas.

4. **Accessibilité et performance**
   - Ajouter un `aria-label` ou `title` décrivant la vidéo.
   - S’assurer que la vidéo est silencieuse (obligatoire pour l’autoplay sur mobile).
   - Vérifier que le poids et le format restent raisonnables pour le mobile.

5. **Vérification**
   - Lancer `bun run build`.
   - Vérifier visuellement dans l’aperçu que la vidéo se lance en boucle et reste bien positionnée sur desktop et mobile.

## Livrable attendu
- Hero animé avec la vidéo fournie, en lecture automatique et en boucle, sans régression visuelle ni responsive.

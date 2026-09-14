# Pourquoi l'ancienne photo réapparaît — et comment la faire disparaître

## Ce qui se passe

La vidéo d'accueil est accompagnée d'une image d'attente (l'ancienne photo de famille). Elle sert de « couverture » affichée tant que la vidéo n'est pas prête :

- **Le flash d'une demi-seconde** : la vidéo pèse presque 6 Mo, donc pendant son chargement le navigateur affiche l'ancienne photo, puis la remplace.
- **Google Images** : cette photo est écrite dans le code de la page comme image principale de l'accueil, donc Google la voit, la télécharge et l'associe à la recherche « remboobine ». La vidéo, elle, n'est pas indexable comme image.

## Ce que je propose

1. **Remplacer l'image d'attente par la première image de la vidéo**
   Extraite directement du fichier vidéo, puis compressée (petit fichier, quelques dizaines de Ko). Résultat : plus aucune ancienne photo, et la transition vers la vidéo devient invisible — on ne voit plus de changement d'image.

2. **Accélérer l'apparition de la vidéo**
   Charger la vidéo dès l'ouverture de la page plutôt qu'en différé, pour réduire le temps où l'image d'attente reste visible.

3. **Retirer l'ancienne photo du site**
   Supprimer le fichier `hero-family.jpg` s'il n'est utilisé nulle part ailleurs, pour qu'il ne puisse plus être récupéré ni réindexé.

4. **Indiquer à Google la bonne image**
   Ajouter la nouvelle image d'attente comme image de partage/aperçu de la page d'accueil, afin que ce soit elle qui remonte dans les résultats à la place de l'ancienne.

## À savoir

Google garde les anciennes images en mémoire quelques semaines. Après publication, la disparition dans Google Images n'est pas immédiate ; on peut accélérer en demandant une réindexation de la page d'accueil dans Search Console.

## Détails techniques

- Extraction de la première frame via ffmpeg → `src/assets/hero-poster.jpg` (qualité ~80, largeur 1280).
- `src/routes/index.tsx` : `poster={heroPoster}`, `preload="auto"`, suppression de l'import `heroFamily`.
- `rm src/assets/hero-family.jpg` après vérification qu'aucune autre référence n'existe.
- `head()` de `src/routes/index.tsx` : `og:image` / `twitter:image` seulement si une URL absolue https est disponible (sinon on s'abstient, l'hébergement génère l'aperçu).

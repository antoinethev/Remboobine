# Ajout de la balise de vérification Google Search Console

## Objectif
Permettre la vérification de la propriété du site dans Google Search Console en ajoutant la balise meta demandée dans le `<head>` de toutes les pages.

## Modification
Dans `src/routes/__root.tsx`, ajouter dans le tableau `meta` de `head()` :

```ts
{
  name: "google-site-verification",
  content: "TrnBexy8wp_m1QJ91fxTa2Dwc9wcbd1BKdcgckxHi8o",
}
```

Cette balise étant déclarée dans le head racine, elle sera présente sur toutes les pages du site (accueil, processus, tarifs, à propos, FAQ, contact, mentions légales), comme l'exige Google.

## Après modification
- La balise apparaîtra dans l'aperçu, mais la validation Google ne fonctionnera qu'après la **publication** du site (le domaine en ligne sert la dernière version publiée).
- Une fois publiée, vous pourrez cliquer sur « Vérifier » dans Google Search Console.

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";
import { FaqAccordion } from "./index";
import { Link } from "@tanstack/react-router";

const items = [
  { q: "Combien de temps dure la numérisation ?", a: "10 jours ouvrés en moyenne, à partir de la réception de vos bobines. Un délai précis vous est donné dans le devis." },
  { q: "Comment sont manipulées mes bobines ?", a: "Avec gants coton, dans un espace de travail dédié. Chaque bobine est numérotée à l'arrivée, inspectée, nettoyée si besoin, puis stockée à l'abri en attendant sa numérisation." },
  { q: "Projetez-vous mes films ?", a: "Jamais. La projection use la bobine et peut même la rayer. Nous utilisons un banc image par image : la pellicule défile lentement devant un capteur haute définition, sans friction." },
  { q: "Quelle résolution finale ?", a: "HD 1080p (Full HD) par défaut, en fichier .mp4 universel. Sur demande, master ProRes 422 haute qualité, idéal pour l'archivage professionnel." },
  { q: "Corrigez-vous les couleurs ?", a: "Oui, un étalonnage doux est inclus. Nous respectons l'esprit d'origine — le grain Super 8 reste, les couleurs redeviennent justes." },
  { q: "Et si mes films sont sonores ?", a: "Le son magnétique des Super 8 sonores est numérisé en synchro avec l'image, sans traitement destructif." },
  { q: "Que se passe-t-il si une bobine est trop abîmée ?", a: "Nous vous prévenons immédiatement, avec photos à l'appui. Aucune restauration lourde n'est engagée sans votre accord écrit." },
  { q: "Sur quel support recevrai-je le rendu ?", a: "Au choix : clé USB gravée à votre nom, lien de téléchargement sécurisé (30 jours), DVD sur demande." },
  { q: "Combien coûte la numérisation ?", a: "À partir de 22€ par bobine dans la formule Famille. Le tarif final dépend du volume, de la durée totale et du niveau de restauration. Voir la page Tarifs." },
  { q: "Quelle est la différence entre Super 8 et 8 mm ?", a: "La taille des perforations et donc de l'image. Le Super 8 (post-1965) offre une image plus grande et plus détaillée. Voir notre article dédié dans le Journal." },
  { q: "Où êtes-vous situés ?", a: "Nous travaillons depuis la France et acceptons les envois de toute l'Europe. Rencontres en mains propres possibles sur rendez-vous." },
  { q: "Puis-je récupérer mes bobines originales ?", a: "Bien sûr, elles vous sont toujours rendues. Nous les remettons dans des boîtes neuves, propres et étiquetées." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Numérisation Super 8 & 8 mm · Remboobine" },
      { name: "description", content: "Toutes vos questions sur la numérisation de films Super 8 et 8 mm : délais, qualité, tarifs, manipulation, formats de rendu." },
      { property: "og:title", content: "FAQ — Remboobine" },
      { property: "og:description", content: "Toutes vos questions sur la numérisation Super 8 et 8 mm." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((i) => ({
          "@type": "Question",
          name: i.q,
          acceptedAnswer: { "@type": "Answer", text: i.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { label: "FAQ" }]} />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Questions fréquentes</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-primary">Tout ce qu'il faut savoir avant de confier vos films.</h1>
        <FaqAccordion items={items} />
        <div className="mt-12 rounded-2xl bg-primary p-8 text-cream">
          <p className="font-display text-2xl">Une question qui n'apparaît pas ici ?</p>
          <p className="mt-2 text-cream/80">Écrivez-nous, nous répondons personnellement à chaque message sous 24h.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-cream hover:bg-cream hover:text-primary">
            Nous écrire →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

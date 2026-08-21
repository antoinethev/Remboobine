import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";
import { FaqAccordion } from "./index";
import { Link } from "@tanstack/react-router";

const items = [
  { q: "Combien de temps dure la numérisation ?", a: "10 jours ouvrés en moyenne, à partir de la réception de vos bobines. Un délai précis vous est donné dans le devis." },
  { q: "Comment sont manipulées mes bobines ?", a: "Dans un espace de travail dédié, avec précaution. Chaque bobine est numérotée à l'arrivée, inspectée, puis stockée à l'abri en attendant sa numérisation." },
  { q: "Projetez-vous mes films ?", a: "Jamais. La projection use la bobine et peut même la rayer. Nous utilisons un banc image par image : la pellicule défile lentement devant un capteur haute définition, sans friction." },
  { q: "Quelle résolution finale ?", a: "1080p Full HD, en fichier .mp4 universel. Idéal pour visionner sur TV, tablette et ordinateur, et pour partager avec la famille." },
  { q: "Corrigez-vous les couleurs ?", a: "Oui, un étalonnage doux est inclus. Nous respectons l'esprit d'origine — le grain Super 8 reste, les couleurs redeviennent justes." },
  { q: "Que se passe-t-il si une bobine est trop abîmée ?", a: "Nous ferons tout ce nous pourrons pour restaurer les bobines endommagés. Cependant en cas d'échec le tarif reste le même en raison du temps de travail passé dessus." },
  { q: "Sur quel support recevrai-je le rendu ?", a: "Par défaut, un lien de téléchargement sécurisé valable 30 jours. Sur demande, vous pouvez aussi recevoir vos fichiers sur clé USB en option." },
  { q: "Combien coûte la numérisation ?", a: "À partir de 15€ par bobine dans la formule Famille. Le tarif varie selon la taille des bobines. Voir la page Tarifs pour un ordre d'idée — le devis est gratuit et sans engagement." },
  { q: "Quelle est la différence entre Super 8 et 8 mm ?", a: "La taille des perforations et donc de l'image. Le Super 8 (post-1965) offre une image plus grande et plus détaillée." },
  { q: "Où êtes-vous situés ?", a: "Nous travaillons depuis la région Parisienne et acceptons les envois de toute la France. Rencontres en mains propres possibles sur rendez-vous." },
  { q: "Puis-je récupérer mes bobines originales ?", a: "Bien sûr, elles vous sont toujours rendues, étiquetées et prêtes à être rangées avec vos archives." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Numérisation Super 8 & 8 mm · Remb∞bine" },
      { name: "description", content: "Toutes vos questions sur la numérisation de films Super 8 et 8 mm : délais, qualité, tarifs, manipulation, formats de rendu." },
      { property: "og:title", content: "FAQ — Remb∞bine" },
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

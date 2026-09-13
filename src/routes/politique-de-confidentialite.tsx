import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Remb∞bine" },
      { name: "description", content: "Politique de confidentialité du site Remb∞bine : quelles données sont collectées, pourquoi, et comment les faire supprimer." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/politique-de-confidentialite" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { label: "Politique de confidentialité" }]} />
      <section className="mx-auto max-w-3xl px-6 py-16 text-primary/80">
        <h1 className="font-display text-5xl text-primary">Politique de confidentialité</h1>
        <p className="mt-4 text-sm text-primary/60">Dernière mise à jour : septembre 2026</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-xl text-primary">Qui collecte tes données ?</h2>
            <p>
              Remb∞bine, atelier artisanal de numérisation Super 8 et 8 mm. Contact :{" "}
              <a href="mailto:remboobine@gmail.com" className="text-coral hover:underline">remboobine@gmail.com</a> — 07 66 26 94 83.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Quelles données sont collectées ?</h2>
            <p>
              Lorsque tu remplis le formulaire de contact (sur le site ou via une publicité Facebook/Instagram),
              je collecte : ton nom, ton adresse email, ton numéro de téléphone, et les informations que tu
              donnes sur tes bobines (taille, quantité, format). Aucune autre donnée n'est collectée.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Pourquoi ces données sont-elles collectées ?</h2>
            <p>
              Uniquement pour te recontacter et établir ton devis de numérisation. Ces informations ne sont
              jamais utilisées à des fins publicitaires ni transmises à un tiers.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Combien de temps sont-elles conservées ?</h2>
            <p>
              Tes coordonnées sont conservées le temps nécessaire au traitement de ta demande, puis supprimées
              si aucune suite n'est donnée dans les 12 mois. Si tu deviens client, elles sont conservées le
              temps du projet et de la durée légale de conservation des factures.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Qui a accès à ces données ?</h2>
            <p>
              Moi seul. Les demandes reçues via Facebook/Instagram sont consultées directement depuis Meta
              Business Suite, puis reportées dans un tableau de suivi personnel non partagé.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Tes droits</h2>
            <p>
              Conformément au RGPD, tu peux à tout moment demander l'accès, la rectification ou la suppression
              de tes données en écrivant à{" "}
              <a href="mailto:remboobine@gmail.com" className="text-coral hover:underline">remboobine@gmail.com</a>.
              Ta demande sera traitée sous 30 jours.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Tes films et images</h2>
            <p>
              Vos bobines et les fichiers numérisés qui en résultent n'appartiennent qu'à vous. Ils ne sont ni
              stockés durablement, ni diffusés, ni exploités à d'autres fins que la numérisation demandée.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques strictement
              nécessaires au fonctionnement du site peuvent être utilisés.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

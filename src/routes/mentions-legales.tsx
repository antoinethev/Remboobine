import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Remb∞bine" },
      { name: "description", content: "Mentions légales du site Remb∞bine, service de numérisation de films Super 8 et 8 mm." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: Legal,
});

function Legal() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { label: "Mentions légales" }]} />
      <section className="mx-auto max-w-3xl px-6 py-16 text-primary/80">
        <h1 className="font-display text-5xl text-primary">Mentions légales</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-xl text-primary">Éditeur du site</h2>
            <p>Remb∞bine — atelier de numérisation Super 8 et 8 mm.</p>
            <p>Contact : <a href="mailto:remboobine@gmail.com" className="text-coral hover:underline">remboobine@gmail.com</a> — 07 66 26 94 83</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Hébergement</h2>
            <p>Site hébergé sur infrastructure sécurisée. Les données transitent par des serveurs situés dans l'Union européenne.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Propriété intellectuelle</h2>
            <p>Les contenus (textes, photographies, identité visuelle) sont la propriété de Remb∞bine. Toute reproduction sans autorisation est interdite.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-primary">Confidentialité</h2>
            <p>Vos images et vos films n'appartiennent qu'à vous. Ils ne sont ni stockés durablement, ni diffusés, ni exploités à d'autres fins que la numérisation demandée.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

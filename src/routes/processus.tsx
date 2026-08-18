import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";
import workspace from "@/assets/workspace.jpg";

export const Route = createFileRoute("/processus")({
  head: () => ({
    meta: [
      { title: "Notre processus de numérisation Super 8 & 8 mm — Remb∞bine" },
      { name: "description", content: "Découvrez notre processus artisanal en 5 étapes : numérisation image par image en HD, montage et livraison par lien de téléchargement sécurisé." },
      { property: "og:title", content: "Notre processus de numérisation — Remb∞bine" },
      { property: "og:description", content: "Un processus artisanal en 5 étapes pour préserver vos films Super 8 et 8 mm." },
      { property: "og:url", content: "/processus" },
    ],
    links: [{ rel: "canonical", href: "/processus" }],
  }),
  component: ProcessPage,
});

const steps = [
  { t: "Prise de contact", d: "Vous nous décrivez votre archive : nombre de bobines, taille des bobines, format supposé, état général. Nous vous répondons sous 24h avec un devis clair et gratuit." },
  { t: "Réception des bobines", d: "En mains propres sur rendez-vous, ou par envoi suivi (Colissimo, Mondial Relay…). Chaque bobine reçoit un numéro unique et une fiche d'inspection." },
  { t: "Numérisation image par image", d: "Passage sur scanner dédié Super 8 / 8 mm : chaque image est capturée individuellement en 1080p Full HD. Aucune projection, aucun contact abrasif." },
  { t: "Montage", d: "Correction colorimétrique douce et assemblage des extraits vidéos. Un fichier par bobine agréable à visionner." },
  { t: "Livraison", d: "Lien de téléchargement sécurisé par défaut, ou clé USB en option. Vos bobines originales vous sont rendues, étiquetées." },
];

function ProcessPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { label: "Processus" }]} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Le processus</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-primary">Un artisanat, pas une chaîne.</h1>
          <p className="mt-5 text-lg text-primary/75">
            Chaque bobine passe entre nos mains à cinq étapes distinctes. Rien n'est automatisé,
            rien n'est traité en masse. Voici comment nous travaillons.
          </p>
        </div>
        <img src={workspace} alt="Établi de numérisation" width={1600} height={1008} className="h-full w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]" loading="lazy" />
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.t} className="grid gap-4 rounded-2xl border border-primary/10 bg-cream/70 p-6 md:grid-cols-[auto_1fr] md:gap-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground">{i + 1}</div>
              <div>
                <h2 className="font-display text-2xl text-primary">{s.t}</h2>
                <p className="mt-1 text-sm leading-relaxed text-primary/70">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 rounded-2xl bg-primary p-8 text-cream">
          <p className="font-display text-2xl">Prêt à démarrer ?</p>
          <p className="mt-2 text-cream/80">Un devis clair, gratuit, sous 24h.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-cream hover:bg-cream hover:text-primary">Demander un devis →</Link>
        </div>
      </section>
    </PageShell>
  );
}

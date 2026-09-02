import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs numérisation Super 8 & 8 mm — Remb∞bine" },
      { name: "description", content: "Tarifs clairs pour la numérisation de vos films Super 8 et 8 mm : formules Découverte, Famille et Patrimoine. Devis gratuit sous 24h." },
      { property: "og:title", content: "Tarifs — Remb∞bine" },
      { property: "og:description", content: "Formules Découverte, Famille et Patrimoine pour numériser vos films Super 8 et 8 mm." },
      { property: "og:url", content: "/tarifs" },
    ],
    links: [{ rel: "canonical", href: "/tarifs" }],
  }),
  component: TarifsPage,
});

const plans = [
  { name: "Découverte", price: "à partir de 18€", per: "/ bobine", desc: "Pour tester avant de confier toute votre archive.", features: ["1 à 3 bobines", "1080p Full HD (.mp4)", "Lien de téléchargement sécurisé", "Clé USB en option"], highlight: false },
  { name: "Famille", price: "à partir de 15€", per: "/ bobine", desc: "La formule la plus choisie.", features: ["4 à 15 bobines", "1080p Full HD (.mp4)", "Lien de téléchargement sécurisé", "Clé USB en option", "Réponse prioritaire sous 12h"], highlight: true },
  { name: "Patrimoine", price: "sur devis", per: "", desc: "Grandes archives ou fonds associatifs.", features: ["16 bobines et plus", "1080p Full HD (.mp4)", "Lien de téléchargement sécurisé", "Clé USB en option", "Suivi personnalisé"], highlight: false },
];

const supplements = [
  { name: "Envoi et retour suivi (Mondial Relay)", price: "10€" },
  { name: "rendu sur clé USB", price: "10€" },
];

function TarifsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { label: "Tarifs" }]} />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Tarifs</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold text-primary">Un devis gratuit et sans engagement en 24h</h1>
        <p className="mt-5 max-w-2xl text-lg text-primary/75">
          les tarifs varient selon la taille des bobines. Ces indications vous donnent un ordre d'idée.
          Le devis final est toujours gratuit et sans engagement.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-3xl border p-8 transition ${p.highlight ? "border-coral bg-cream shadow-[var(--shadow-lift)] md:-translate-y-4" : "border-primary/10 bg-cream/60"}`}>
              {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream">Le plus choisi</span>}
              <h2 className="font-display text-2xl text-primary">{p.name}</h2>
              <p className="mt-2 text-sm text-primary/60">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl text-primary">{p.price}</span>
                <span className="text-sm text-primary/60">{p.per}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-primary/80">
                {p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-coral">✓</span> {f}</li>)}
              </ul>
              <Link to="/contact" className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold ${p.highlight ? "bg-primary text-primary-foreground hover:bg-coral" : "border border-primary/25 text-primary hover:border-coral hover:text-coral"}`}>Demander un devis</Link>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl text-primary">Options & suppléments</h2>
          <div className="mt-6 divide-y divide-primary/10 rounded-2xl border border-primary/10 bg-cream/70">
            {supplements.map((s) => (
              <div key={s.name} className="flex items-center justify-between gap-4 p-5">
                <span className="text-primary">{s.name}</span>
                <span className="font-display text-lg text-coral">{s.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-primary/60">Tarifs TTC susceptibles d'ajustement selon complexité. Devis final toujours communiqué avant démarrage.</p>
        </div>
      </section>
    </PageShell>
  );
}

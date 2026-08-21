import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";
import reels from "@/assets/reels-macro.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Remb∞bine, atelier de numérisation Super 8" },
      { name: "description", content: "Remb∞bine est un atelier artisanal dédié à la numérisation soignée des films Super 8 et 8 mm. Notre passion : rendre vivants les souvenirs de famille." },
      { property: "og:title", content: "À propos — Remb∞bine" },
      { property: "og:description", content: "L'histoire de Remb∞bine, atelier artisanal de numérisation Super 8 et 8 mm." },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { label: "À propos" }]} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Notre histoire</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-primary">Rendre vivants les souvenirs qu'on croyait perdus.</h1>
          <p className="mt-6 text-lg text-primary/80">
            Remb∞bine est né d'un carton oublié dans le grenier de mes grands-parents. Une vingtaine de bobines Super 8 et une envie de découvrir ces films dont j'ignorais le contenu, avant que la pellicule ne se fasse ronger par le temps.
          </p>
          <p className="mt-4 text-primary/75">
            De cette urgence est venue une passion. Aujourd'hui, nous numérisons image par image
            les films de familles. Chaque bobine reçoit le temps et le soin qu'elle mérite.
            Pas de chaîne industrielle, pas de raccourci. Juste un travail d'artisan, au service de la mémoire.
          </p>
          <div className="mt-10 flex gap-3">
            <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-coral">Nous confier vos bobines</Link>
            <Link to="/processus" className="rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary hover:border-coral">Voir le processus</Link>
          </div>
        </div>
        <img src={reels} alt="Bobines Super 8 sur fond pêche" width={1408} height={1408} className="rounded-2xl object-cover shadow-[var(--shadow-lift)]" loading="lazy" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Artisanat", d: "Chaque bobine est traitée à la main, sans automatisation destructrice." },
            { t: "Transparence", d: "Devis clair, communication à chaque étape, aucun frais caché." },
            { t: "Émotion", d: "Nous savons pourquoi vous nous confiez ces films. Nous les traitons comme s'ils étaient les nôtres." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-primary/10 bg-cream p-8">
              <h2 className="font-display text-2xl text-primary">{v.t}</h2>
              <p className="mt-3 text-sm text-primary/70">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

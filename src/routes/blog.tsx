import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Conseils sur les films Super 8 & 8 mm · Remb∞bine" },
      { name: "description", content: "Articles et conseils sur la conservation, la reconnaissance et la numérisation des films Super 8 et 8 mm. Guide pratique et culture du cinéma amateur." },
      { property: "og:title", content: "Journal — Remb∞bine" },
      { property: "og:description", content: "Conseils et guides sur les films Super 8 et 8 mm." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { label: "Journal" }]} />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Journal</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold text-primary">Comprendre, conserver, transmettre.</h1>
        <p className="mt-5 max-w-2xl text-lg text-primary/75">
          Des articles courts et concrets pour prendre soin de vos films Super 8 et 8 mm, avant et après leur numérisation.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to="/blog/$slug"
              params={{ slug: a.slug }}
              className="group flex flex-col rounded-2xl border border-primary/10 bg-cream p-8 transition hover:-translate-y-1 hover:border-coral/40 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">{a.category} · {a.readingTime}</span>
              <h2 className="mt-3 font-display text-2xl text-primary group-hover:text-coral">{a.title}</h2>
              <p className="mt-3 text-sm text-primary/70">{a.description}</p>
              <span className="mt-6 text-sm font-semibold text-coral">Lire l'article →</span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

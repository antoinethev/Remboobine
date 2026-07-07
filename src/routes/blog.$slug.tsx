import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";
import { articles, getArticle, type Article } from "@/lib/articles";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article introuvable — Remboobine" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Remboobine` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: loaderData.title,
          description: loaderData.description,
          author: { "@type": "Organization", name: "Remboobine" },
        }),
      }],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: () => <PageShell><div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="font-display text-4xl text-primary">Une erreur est survenue</h1></div></PageShell>,
  component: ArticlePage,
});

function NotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-5xl text-primary">Article introuvable</h1>
        <Link to="/blog" className="mt-6 inline-block text-coral hover:underline">← Retour au journal</Link>
      </div>
    </PageShell>
  );
}

function ArticlePage() {
  const article = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { to: "/blog", label: "Journal" }, { label: article.title }]} />
      <article className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">{article.category} · {article.readingTime} de lecture</p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-tight text-primary">{article.title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-primary/80">{article.intro}</p>
        <div className="mt-12 space-y-10">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl text-primary">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-primary/80">{p}</p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-16 rounded-2xl bg-primary p-8 text-cream">
          <p className="font-display text-2xl">Vos bobines vous attendent.</p>
          <p className="mt-2 text-cream/80">Devis gratuit sous 24h, aucun engagement.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-cream hover:bg-cream hover:text-primary">Confier mes bobines →</Link>
        </div>
      </article>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="font-display text-2xl text-primary">À lire ensuite</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((a) => (
            <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="rounded-xl border border-primary/10 bg-cream p-5 hover:border-coral/40">
              <p className="text-xs font-semibold uppercase tracking-widest text-coral">{a.category}</p>
              <p className="mt-2 font-display text-lg text-primary">{a.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Header, Footer } from "@/components/site-chrome";
import heroFamily from "@/assets/hero-family.jpg";
import reelsMacro from "@/assets/reels-macro.jpg";
import workspace from "@/assets/workspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Remb∞bine — Numérisation Super 8 & 8 mm en haute définition" },
      {
        name: "description",
        content:
          "Confiez vos bobines Super 8 et 8 mm à un artisan passionné. Numérisation image par image en 1080p Full HD, restauration soignée, livraison sur clé USB ou lien de téléchargement. Vos souvenirs de famille méritent de revivre.",
      },
      { property: "og:title", content: "Remb∞bine — Numérisation Super 8 & 8 mm" },
      { property: "og:description", content: "Numérisation artisanale et restauration de films Super 8 et 8 mm. Vos souvenirs de famille, image par image." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Remb∞bine",
          description: "Numérisation artisanale de films Super 8 et 8 mm.",
          telephone: "+33766269483",
          email: "remboobine@gmail.com",
          areaServed: "FR",
          priceRange: "€€",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhyDigitize />
        <Approach />
        <Process />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FaqPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------- HERO ---------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.35fr_1fr] md:gap-16 md:pb-24 md:pt-20">
        <div className="fade-up flex flex-col justify-center">
          <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-cream/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Atelier de numérisation Super 8 · 8 mm
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.02] text-primary">
            Ces bobines attendent depuis 50 ans.
            <span className="mt-2 block italic text-coral">Il est temps.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary/80">
            Redécouvre ton enfance, tes parents jeunes, tous ces moments qu'on croyait perdus.
            Remb∞bine numérise tes films Super 8 et 8 mm image par image, avec le soin qu'un souvenir mérite.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-coral hover:shadow-[var(--shadow-lift)]"
            >
              Obtenir un devis gratuit
            </Link>
            <Link
              to="/processus"
              className="rounded-full border border-primary/30 bg-cream/50 px-7 py-3.5 text-sm font-semibold text-primary transition hover:border-coral hover:text-coral"
            >
              Voir le processus →
            </Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-6 border-t border-primary/15 pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-primary/60">Format</dt>
              <dd className="mt-1 font-display text-xl text-primary">1080p Full HD</dd>
            </div>
            <div>
              <dt className="text-primary/60">Rendu</dt>
              <dd className="mt-1 font-display text-xl text-primary">Lien de téléchargement ou clé USB</dd>
            </div>
            <div>
              <dt className="text-primary/60">Délai moyen</dt>
              <dd className="mt-1 font-display text-xl text-primary">10 jours</dd>
            </div>
          </dl>
        </div>
        <div className="relative fade-up">
          <div className="relative overflow-hidden rounded-3xl border-[6px] border-cream shadow-[var(--shadow-lift)]">
            <img
              src={heroFamily}
              alt="Image d'archive d'une famille des années 1970 capturée sur film Super 8"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="grain pointer-events-none absolute inset-0 flicker" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/10" />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-cream/90 px-4 py-3 text-xs shadow-lg backdrop-blur md:block">
            <p className="font-display text-lg text-primary">« Revoir ses parents jeunes, c'est exceptionnelle... »</p>
            <p className="mt-1 text-primary/60">— Camille, Lyon</p>
          </div>
        </div>
      </div>
      <div className="sprockets h-6 border-y border-primary/20 bg-primary/5" />
    </section>
  );
}

/* --------------------------- TRUST STRIP -------------------------------- */
function TrustStrip() {
  const items = [
    "Manipulation soigneuse",
    "Rendu 1080p Full HD image par image",
    "Clé USB ou lien de téléchargement",
    "Échange en mains propres ou envoi suivi",
    "Devis gratuit sous 24h",
  ];
  return (
    <div className="border-b border-primary/10 bg-peach-soft">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-5 text-xs font-medium uppercase tracking-[0.18em] text-primary/70">
        {items.map((t) => (
          <span key={t} className="flex items-center gap-2">
            <span aria-hidden className="h-1 w-1 rounded-full bg-coral" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- WHY DIGITIZE ------------------------------- */
function WhyDigitize() {
  const items = [
    { title: "Le temps abîme", body: "Chaque année, la pellicule vieillit. Syndrome du vinaigre, moisissures, décoloration : après 50 ans, le compte à rebours est lancé." },
    { title: "Les projecteurs disparaissent", body: "Les appareils fiables se font rares. Une seule mauvaise projection peut rayer définitivement un film." },
    { title: "Rien ne remplace ces images", body: "La voix, les gestes, les sourires : ce sont les seuls films de vos parents ou grands-parents. Ils méritent d'être vus." },
  ];
  return (
    <section id="pourquoi" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Pourquoi maintenant</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
          Plus le temps passe, plus les bobines s'abîment.
        </h2>
        <p className="mt-5 text-lg text-primary/75">
          Il est urgent de restaurer ces précieux souvenirs. La bonne nouvelle : une fois numérisées,
          vos images ne craignent plus rien. Elles se partagent, se sauvegardent, se transmettent.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-cream p-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          >
            <span className="font-display text-6xl text-coral/25">0{i + 1}</span>
            <h3 className="mt-2 font-display text-2xl text-primary">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary/70">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- APPROACH ----------------------------------- */
function Approach() {
  return (
    <section className="relative bg-primary text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral-soft">Notre approche</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Un rendu honnête, un travail soigné.
          </h2>
          <p className="mt-5 text-lg text-cream/80">
            Nous numérisons vos bobines Super 8 et 8 mm en qualité <strong className="text-cream">1080p Full HD</strong>,
            image par image, avec un scanner dédié préservant le grain du Super 8. Les films reçoivent un montage
            pour un visionnage agréable en famille, tout en conservant l'intégralité des images. Un travail
            garantissant un résultat fidèle à vos films d'origine.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-cream/80">
            <li className="flex gap-3"><span className="text-coral">→</span> Numérisation image par image en 1080p Full HD</li>
            <li className="flex gap-3"><span className="text-coral">→</span> Scanner dédié Super 8 et 8 mm&nbsp;</li>
            <li className="flex gap-3"><span className="text-coral">→</span> Inspection soigneuse et montage vidéo</li>
            <li className="flex gap-3"><span className="text-coral">→</span> Fichier .mp4 universel, prêt à visionner ou partager</li>
          </ul>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border-[6px] border-cream shadow-[var(--shadow-lift)]">
            <img src={workspace} alt="Espace de numérisation Remb∞bine" width={1600} height={1008} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cream px-5 py-4 text-primary shadow-lg md:block">
            <p className="font-display text-2xl">1080p Full HD</p>
            <p className="text-xs uppercase tracking-widest text-primary/60">Image par image</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROCESS --------------------------------- */
function Process() {
  const steps = [
    { t: "Prise de contact", d: "Vous nous décrivez votre projet (nombre de bobines, taille des bobines, format, état). Devis gratuit sous 24h." },
    { t: "Réception des bobines", d: "Remise en mains propres si possible, sinon envoi suivi (Colissimo, Mondial Relay…). Chaque bobine est numérotée." },
    { t: "Numérisation image par image", d: "Capture image par image en 1080p Full HD sur scanner dédié Super 8 / 8 mm. Aucune projection destructrice." },
    { t: "Montage", d: "Correction colorimétrique douce et assemblage des extraits vidéos. Un fichier par bobine agréable à visionner." },
    { t: "Livraison", d: "Lien de téléchargement sécurisé, ou clé USB en option. Vos bobines originales vous sont rendues." },
  ];
  return (
    <section id="processus" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Notre processus</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
            5 étapes pour restaurer vos souvenirs
          </h2>
        </div>
        <img src={workspace} alt="Espace de travail de numérisation Super 8" width={1600} height={1008} className="hidden h-40 w-72 rounded-2xl object-cover md:block" loading="lazy" />
      </div>
      <ol className="relative space-y-4">
        {steps.map((s, i) => (
          <li
            key={s.t}
            className="group grid gap-4 rounded-2xl border border-primary/10 bg-cream/70 p-6 transition hover:border-coral/50 md:grid-cols-[auto_1fr] md:gap-8"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground transition group-hover:bg-coral">
              {i + 1}
            </div>
            <div>
              <h3 className="font-display text-2xl text-primary">{s.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-primary/70">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------ BENEFITS -------------------------------- */
function Benefits() {
  const items = [
    { t: "Manipulation artisanale", d: "Chaque bobine est manipulée avec soin, jamais traitée à la chaîne." },
    { t: "Numérisation 1080p Full HD", d: "Scanner dédié Super 8 & 8 mm, capture image par image en 1080p Full HD." },
    { t: "Aucune projection", d: "Nous ne projetons jamais vos films : votre bobine ne subit aucune usure." },
    { t: "Livraison flexible", d: "Lien de téléchargement sécurisé par défaut, clé USB en option, fichier .mp4 universel." },
    { t: "Vos originaux préservés", d: "Bobines rendues étiquetées, prêtes à être rangées avec vos archives." },
    { t: "Confidentialité totale", d: "Vos images n'appartiennent qu'à vous. Aucune diffusion, aucune sauvegarde permanente sans accord." },
  ];
  return (
    <section className="relative overflow-hidden">
      <img src={reelsMacro} alt="" aria-hidden width={1408} height={1408} className="absolute -right-32 top-10 hidden w-[400px] rotate-12 opacity-30 md:block" loading="lazy" />
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Nos garanties</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
            Un travail que je ne confierais à personne d'autre.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <div key={b.t} className="rounded-2xl border border-primary/10 bg-cream/80 p-6 backdrop-blur">
              <h3 className="font-display text-xl text-primary">{b.t}</h3>
              <p className="mt-2 text-sm text-primary/70">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- PRICING ------------------------------- */
function Pricing() {
  const plans = [
    {
      name: "Découverte",
      price: "18€",
      per: "/ bobine",
      desc: "Pour tester avant de confier toute votre archive.",
      features: ["1 à 3 bobines", "1080p Full HD (.mp4)", "Lien de téléchargement sécurisé", "Clé USB en option"],
      highlight: false,
    },
    {
      name: "Famille",
      price: "15€",
      per: "/ bobine",
      desc: "La formule la plus choisie.",
      features: [
        "4 à 15 bobines",
        "1080p Full HD (.mp4)",
        "Lien de téléchargement sécurisé",
        "Clé USB en option",
        "Réponse prioritaire sous 12h",
      ],
      highlight: true,
    },
    {
      name: "Patrimoine",
      price: "sur devis",
      per: "",
      desc: "Grandes archives ou fonds associatifs.",
      features: [
        "16 bobines et plus",
        "1080p Full HD (.mp4)",
        "Lien de téléchargement sécurisé",
        "Clé USB en option",
        "Suivi personnalisé",
      ],
      highlight: false,
    },

  ];
  return (
    <section id="tarifs" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Tarifs</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
          Un devis gratuit et sans engagement en 24h
        </h2>
        <p className="mt-4 text-primary/70">
          Les tarifs varient selon la taille des bobines. Ces indications vous donnent un ordre d'idée.
          Le devis final est toujours gratuit et sans engagement.
        </p>

      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-3xl border p-8 transition ${
              p.highlight
                ? "border-coral bg-cream shadow-[var(--shadow-lift)] md:-translate-y-4"
                : "border-primary/10 bg-cream/60 hover:border-coral/40"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream">
                Le plus choisi
              </span>
            )}
            <h3 className="font-display text-2xl text-primary">{p.name}</h3>
            <p className="mt-2 text-sm text-primary/60">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl text-primary">{p.price}</span>
              <span className="text-sm text-primary/60">{p.per}</span>
            </div>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-primary/80">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-coral">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                p.highlight
                  ? "bg-primary text-primary-foreground hover:bg-coral"
                  : "border border-primary/25 text-primary hover:border-coral hover:text-coral"
              }`}
            >
              Demander un devis
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ TESTIMONIALS ---------------------------- */
function Testimonials() {
  const items = [
    { q: "J'ai revu mon père jeune, en mouvement, pour la première fois depuis 40 ans. Je n'ai pas de mots.", a: "Camille, Lyon" },
    { q: "Travail d'orfèvre. Les couleurs sont magnifiques, on retrouve tout le charme des vieux 8mm de mes grands-parents.", a: "Étienne, Nantes" },
    { q: "Communication parfaite du début à la fin. Mes bobines me sont revenues étiquetées et rangées.", a: "Sophie, Bordeaux" },
  ];
  return (
    <section className="bg-peach-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Ils m'ont fait confiance</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-primary md:text-5xl">
          Des souvenirs rendus, des émotions retrouvées.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.a} className="flex flex-col rounded-2xl border border-primary/10 bg-cream p-8">
              <span className="font-display text-5xl leading-none text-coral">"</span>
              <blockquote className="mt-2 font-display text-xl leading-snug text-primary">{t.q}</blockquote>
              <figcaption className="mt-6 text-sm text-primary/60">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FAQ ----------------------------------- */
export const faqItems = [
  { q: "Combien de temps dure la numérisation ?", a: "Comptez en moyenne 10 jours ouvrés à partir de la réception de vos bobines. Les commandes importantes ou nécessitant beaucoup de restauration peuvent demander plus de temps — nous vous donnons toujours un délai précis avec le devis." },
  { q: "Mes bobines sont-elles en sécurité ?", a: "Dans un espace de travail dédié. Chaque bobine est numérotée à l'arrivée, inspectée, puis stockée à l'abri en attendant sa numérisation." },
  { q: "Quelle est la qualité finale ?", a: "Nous livrons en 1080p Full HD (fichier .mp4 universel), en numérisation image par image. C'est la qualité standard pour visionner vos films sur TV, tablette et ordinateur, et pour les partager avec la famille." },
  { q: "Sur quel support recevrai-je mes films ?", a: "Par défaut, un lien de téléchargement sécurisé valable 30 jours — pratique et immédiat. Sur demande, vous pouvez aussi recevoir vos fichiers sur clé USB en option." },
  { q: "Et si mes bobines sont vraiment abîmées ?", a: "Nous ferons tout ce nous pourrons pour restaurer les bobines endommagés. Cependant en cas d'échec le tarif reste le même en raison du temps de travail passé dessus." },
  { q: "Puis-je vous rencontrer ?", a: "Oui, l'échange en mains propres est possible et souvent apprécié. Contactez-nous pour convenir d'un rendez-vous. Sinon, l'envoi en suivi (Colissimo ou Mondial Relay) fonctionne très bien — pensez à conserver votre numéro de suivi." },
];

function FaqPreview() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Questions fréquentes</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
          Tout ce qu'il faut savoir avant de nous confier vos bobines.
        </h2>
      </div>
      <FaqAccordion items={faqItems} />
      <div className="mt-10 text-center">
        <Link to="/faq" className="text-sm font-semibold text-coral hover:underline">
          Voir toutes les questions →
        </Link>
      </div>
    </section>
  );
}

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-12 divide-y divide-primary/10 rounded-2xl border border-primary/10 bg-cream/80">
      {items.map((it, i) => (
        <details
          key={it.q}
          open={open === i}
          onClick={(e) => {
            e.preventDefault();
            setOpen(open === i ? null : i);
          }}
          className="group cursor-pointer p-6"
        >
          <summary className="flex list-none items-center justify-between gap-4 text-left font-display text-lg text-primary marker:hidden">
            <span>{it.q}</span>
            <span className="text-2xl text-coral transition group-open:rotate-45">+</span>
          </summary>
          {open === i && <p className="mt-3 text-sm leading-relaxed text-primary/75">{it.a}</p>}
        </details>
      ))}
    </div>
  );
}

/* ---------------------------- CONTACT CTA ------------------------------- */
function ContactCTA() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // slight fade-in on scroll
    const el = contactRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && el.classList.add("fade-up"), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section id="contact" ref={contactRef} className="relative overflow-hidden bg-primary text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral-soft">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Prêt à faire revivre vos souvenirs ?
          </h2>
          <p className="mt-5 text-lg text-cream/80">
            Envoyez-nous un mot avec le nombre approximatif de bobines, leur taille et leur format si vous les connaissez.
            Nous vous répondons sous 24h avec un devis clair et sans engagement.
          </p>
          <div className="mt-10 space-y-4 text-lg">
            <a href="tel:+33766269483" className="flex items-center gap-4 group">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-coral-soft">☎</span>
              <span className="font-display text-2xl group-hover:text-coral-soft">07 66 26 94 83</span>
            </a>
            <a href="mailto:remboobine@gmail.com" className="flex items-center gap-4 group">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-coral-soft">✉</span>
              <span className="font-display text-2xl group-hover:text-coral-soft">remboobine@gmail.com</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    if (!formId) {
      setError("Configuration email manquante. Veuillez contacter l'administrateur.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.error || "Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch {
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur"
    >
      {sent ? (
        <div className="py-16 text-center">
          <p className="font-display text-3xl text-cream">Merci !</p>
          <p className="mt-3 text-cream/70">Votre message est parti. Nous revenons vers vous sous 24h.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Prénom" name="prenom" />
            <Field label="Nom" name="nom" />
          </div>
          <Field label="Email" name="email" type="email" />
          <Field label="Téléphone" name="tel" type="tel" />
          <div>
            <label htmlFor="taille_bobines" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70">
              Taille des bobines
            </label>
            <select
              id="taille_bobines"
              name="taille_bobines"
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-cream focus:border-coral focus:outline-none"
            >
              <option className="bg-primary">Petites (7,5 cm / ~15 m)</option>
              <option className="bg-primary">Moyennes (12 cm / ~60 m)</option>
              <option className="bg-primary">Grandes (18 cm / ~120 m)</option>
              <option className="bg-primary">Mélange de tailles</option>
              <option className="bg-primary">Je ne sais pas encore</option>
            </select>
          </div>
          <div>
            <label htmlFor="nombre_bobines" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70">
              Nombre approximatif de bobines
            </label>
            <select
              id="nombre_bobines"
              name="nombre_bobines"
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-cream focus:border-coral focus:outline-none"
            >
              <option className="bg-primary">1 à 3</option>
              <option className="bg-primary">4 à 10</option>
              <option className="bg-primary">11 à 20</option>
              <option className="bg-primary">Plus de 20</option>
              <option className="bg-primary">Je ne sais pas encore</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-cream focus:border-coral focus:outline-none"
              placeholder="Racontez-nous votre projet, l'état des bobines, ce que vous aimeriez retrouver…"
            />
          </div>
          <input type="hidden" name="_subject" value="Nouvelle demande de devis — Remb∞bine" />
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-coral px-6 py-4 font-semibold text-cream transition hover:bg-cream hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
          {error && <p className="text-center text-sm text-coral">{error}</p>}
          <p className="text-center text-xs text-cream/50">
            Réponse sous 24h. Aucune information n'est partagée.
          </p>
        </div>
      )}
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-cream/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-cream placeholder:text-cream/40 focus:border-coral focus:outline-none"
      />
    </div>
  );
}

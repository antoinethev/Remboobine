import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumbs } from "@/components/site-chrome";
import { ContactForm, faqItems, FaqAccordion } from "./index";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Remboobine · Numérisation Super 8 & 8 mm" },
      { name: "description", content: "Contactez Remboobine pour un devis gratuit sous 24h. Téléphone, email et formulaire pour confier vos films Super 8 et 8 mm." },
      { property: "og:title", content: "Contact — Remboobine" },
      { property: "og:description", content: "Devis gratuit sous 24h pour la numérisation de vos films Super 8 et 8 mm." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ to: "/", label: "Accueil" }, { label: "Contact" }]} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-primary">Écrivons ensemble le prochain chapitre de vos souvenirs.</h1>
          <p className="mt-5 text-lg text-primary/75">
            Quelques mots suffisent pour démarrer. Décrivez-nous votre projet, le nombre approximatif
            de bobines et leur état si vous le savez. Devis clair sous 24 heures.
          </p>
          <div className="mt-10 space-y-4">
            <a href="tel:+33766269483" className="flex items-center gap-4 text-primary group">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">☎</span>
              <span className="font-display text-2xl group-hover:text-coral">07 66 26 94 83</span>
            </a>
            <a href="mailto:remboobine@gmail.com" className="flex items-center gap-4 text-primary group">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">✉</span>
              <span className="font-display text-2xl group-hover:text-coral">remboobine@gmail.com</span>
            </a>
          </div>
          <div className="mt-10 rounded-2xl border border-primary/10 bg-cream/70 p-6 text-sm text-primary/70">
            <p className="font-semibold text-primary">Envoi ou remise en mains propres ?</p>
            <p className="mt-2">Les deux sont possibles. Pour un envoi, un service suivi type Colissimo ou Mondial Relay convient parfaitement — pensez à conserver votre numéro de suivi. Nous confirmons la réception dès l'ouverture du colis.</p>
          </div>
        </div>
        <div className="rounded-3xl border border-primary/10 bg-primary p-8 text-cream shadow-[var(--shadow-lift)]">
          <ContactForm />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="font-display text-3xl text-primary">Questions fréquentes</h2>
        <FaqAccordion items={faqItems.slice(0, 4)} />
        <p className="mt-6 text-sm text-primary/70">
          Vous en trouverez d'autres sur la page <Link to="/faq" className="font-semibold text-coral hover:underline">FAQ complète</Link>.
        </p>
      </section>
    </PageShell>
  );
}

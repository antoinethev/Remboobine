import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Remboobine"
      className={`inline-flex items-baseline font-display text-2xl font-bold tracking-tight text-primary ${className}`}
    >
      <span>Remb</span>
      <span aria-hidden className="mx-0.5 text-coral">∞</span>
      <span>bine</span>
    </Link>
  );
}

export function Header() {
  const nav = [
    { to: "/processus", label: "Processus" },
    { to: "/tarifs", label: "Tarifs" },
    { to: "/a-propos", label: "À propos" },
    { to: "/blog", label: "Journal" },
    { to: "/faq", label: "FAQ" },
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <BrandLogo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-primary/80 transition hover:text-coral"
              activeProps={{ className: "text-coral" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-coral"
        >
          Confier mes bobines
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-primary/10 bg-[oklch(0.94_0.045_68)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandLogo />
          <p className="mt-4 max-w-sm text-sm text-primary/70">
            Numérisation artisanale de films Super 8 et 8 mm. Vos souvenirs de famille,
            restaurés image par image, avec soin.
          </p>
          <p className="mt-6 text-sm text-primary/70">
            <a href="tel:+33766269483" className="font-medium text-coral hover:underline">07 66 26 94 83</a>
            <span className="mx-2">·</span>
            <a href="mailto:remboobine@gmail.com" className="font-medium text-coral hover:underline">remboobine@gmail.com</a>
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Explorer</h4>
          <ul className="space-y-2 text-sm text-primary/80">
            <li><Link to="/processus" className="hover:text-coral">Le processus</Link></li>
            <li><Link to="/tarifs" className="hover:text-coral">Tarifs</Link></li>
            <li><Link to="/a-propos" className="hover:text-coral">À propos</Link></li>
            <li><Link to="/faq" className="hover:text-coral">Questions fréquentes</Link></li>
            <li><Link to="/contact" className="hover:text-coral">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Journal</h4>
          <ul className="space-y-2 text-sm text-primary/80">
            <li><Link to="/blog/comment-conserver-films-super-8" className="hover:text-coral">Conserver ses films Super 8</Link></li>
            <li><Link to="/blog/difference-super-8-8mm" className="hover:text-coral">Super 8 vs 8 mm</Link></li>
            <li><Link to="/blog/pourquoi-numeriser-ses-bobines" className="hover:text-coral">Pourquoi numériser</Link></li>
            <li><Link to="/blog/stocker-films-anciens" className="hover:text-coral">Stocker des films anciens</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-primary/60 md:flex-row">
          <p>© {new Date().getFullYear()} Remboobine — Numérisation Super 8 & 8 mm. Fait avec soin en France.</p>
          <Link to="/mentions-legales" className="hover:text-coral">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { to?: string; label: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-6 pt-8 text-xs text-primary/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to} className="hover:text-coral">{it.label}</Link>
            ) : (
              <span className="text-primary">{it.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function LayoutOutlet() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}

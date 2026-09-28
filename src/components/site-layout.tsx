import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["/", "Naslovna"],
  ["/usluge", "Usluge"],
  ["/galerija", "Galerija"],
  ["/o-nama", "O nama"],
  ["/kontakt", "Kontakt"],
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-baseline gap-2" aria-label="Lily Decor — naslovna">
            <span className="font-display text-3xl text-brand-green">Lily</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink">Decor</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Glavna navigacija">
            {nav.map(([to, label]) => (
              <Link key={to} to={to} className="text-sm font-medium text-foreground/75 transition-colors hover:text-brand-pink" activeProps={{ className: "text-brand-pink" }}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild variant="accent"><Link to="/kontakt">Pošaljite upit</Link></Button>
          </div>
          <button className="grid size-11 place-items-center text-foreground md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobilna navigacija">
            <div className="grid gap-1">
              {nav.map(([to, label]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="py-3 text-base font-medium">{label}</Link>)}
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-brand-green text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_1fr_1fr] lg:px-8">
          <div><p className="font-display text-4xl">Lily Decor</p><p className="mt-3 max-w-sm text-sm leading-7 opacity-80">Cvjetne dekoracije i profinjeni detalji za vjenčanja koja ostaju u sjećanju.</p></div>
          <div className="space-y-3 text-sm"><p className="mb-4 font-semibold uppercase tracking-widest opacity-70">Kontakt</p><a className="flex gap-3 hover:opacity-75" href="tel:+385915733666"><Phone size={17}/>+385 91 573 3666</a><a className="flex gap-3 hover:opacity-75" href="mailto:vjencanjalily@gmail.com"><Mail size={17}/>vjencanjalily@gmail.com</a><p className="flex gap-3"><MapPin size={17} className="shrink-0"/>Bulićeva 2, Donji Čehi, 10020 Zagreb</p></div>
          <div><p className="mb-4 text-sm font-semibold uppercase tracking-widest opacity-70">Pratite nas</p><div className="flex gap-3"><a className="grid size-11 place-items-center border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10" href="https://www.instagram.com/vjencanja_lily/" target="_blank" rel="noreferrer" aria-label="Lily Decor na Instagramu"><Instagram size={20}/></a><a className="grid size-11 place-items-center border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10" href="https://www.facebook.com/vjencanjalily" target="_blank" rel="noreferrer" aria-label="Lily Decor na Facebooku"><Facebook size={20}/></a></div></div>
        </div>
        <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs opacity-65">© 2026 Lily Decor. Sva prava pridržana.</div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="bg-brand-pink-soft"><div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8"><p className="text-xs font-bold uppercase tracking-widest text-brand-pink">{eyebrow}</p><h1 className="mt-4 text-5xl leading-none text-brand-green sm:text-6xl">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{text}</p></div></section>;
}
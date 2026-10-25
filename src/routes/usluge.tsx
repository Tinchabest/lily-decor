// ============= Full file contents =============

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, Flower2, PartyPopper, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import buketImage from "@/assets/lily-buket.jpg.asset.json";
import salaImage from "@/assets/lily-sala-stol.jpg.asset.json";
import autoImage from "@/assets/lily-auto.jpg.asset.json";
import baloniImage from "@/assets/lily-baloni.jpg.asset.json";

export const Route = createFileRoute("/usluge")({ head: () => ({ meta: [{ title: "Usluge — Lily Decor Zagreb" },{ name: "description", content: "Vjenčani buketi, dekoracije prostora za svečanosti, dekoracija auta i crkve te balonske dekoracije." },{ property: "og:title", content: "Usluge — Lily Decor" },{ property: "og:description", content: "Sve što vaše slavlje treba — od buketa do balonskih dekoracija." },{ property: "og:type", content: "website" },{ name: "twitter:card", content: "summary_large_image" }]}), component: Services });

const services = [
  { icon: Flower2, image: buketImage, width: 898, height: 938, alt: "Vjenčani buket od bijelih ruža", title: "Vjenčani buketi", text: "Buket za mladu, nakit za kumove i cvjetni detalji koji se slaguju s vašom odjećom i prostorom." },
  { icon: PartyPopper, image: salaImage, width: 686, height: 944, alt: "Svečano uređena sala s cvijećem i svijećama", title: "Dekoracije prostora za svečanosti", text: "Uređenje sala, stolova i ulaza — cvijeće, svijeće i teksture koje stvaraju atmosferu slavlja." },
  { icon: Car, image: autoImage, width: 931, height: 656, alt: "Vjenčani automobil ukrašen tylom i cvijećem", title: "Dekoracija auta i crkve", text: "Profinjeni ukrasi za vjenčano kola i cvjetni aranžmani za crkvu, u istoj priči s ostatkom dana." },
  { icon: Sparkles, image: baloniImage, width: 491, height: 745, alt: "Balonska girlanda u zelenim i zlatnim tonovima", title: "Balonske dekoracije", text: "Balonske girlande i aranžmani u vašim bojama — za ulaz, pozornicu ili slikanje mladenaca." },
] as const;

function Services(){
  return <><PageIntro eyebrow="Naše usluge" title="Sve što slavlje treba" text="Od vjenčanog buketa do balonske dekoracije — svaku uslugu prilagođavamo vašoj priči, bojama i prostoru."/><section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">{services.map((s, i) => <article key={s.title} className="animate-soft-rise overflow-hidden border border-border bg-card transition-transform duration-300 hover:-translate-y-1" style={{ animationDelay: `${i * 120}ms` }}>{s.image ? <img src={s.image.url} loading="lazy" width={s.width} height={s.height} alt={s.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"/> : null}<div className="p-8"><s.icon className="text-brand-pink" size={30} strokeWidth={1.5}/><h2 className="mt-5 text-2xl leading-snug text-brand-green">{s.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{s.text}</p></div></article>)}</div></section><section className="bg-brand-pink-soft px-5 py-20 text-center lg:px-8"><div className="animate-soft-rise"><h2 className="text-5xl text-brand-green">Recite nam što zamišljate</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">Javite nam se s idejom ili datumom — zajedno ćemo odabrati dekoraciju koja vašem danu najbolje pristaje.</p><Button asChild variant="accent" className="mt-8"><Link to="/kontakt">Kontaktirajte nas <ArrowRight size={17}/></Link></Button></div></section></>;
}

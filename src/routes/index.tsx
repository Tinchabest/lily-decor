import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lily-sala-clean.jpg.asset.json";
import floralImage from "@/assets/lily-cvijece-clean.jpg.asset.json";
import tableImage from "@/assets/lily-stol-clean.jpg.asset.json";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Lily Decor — Dekoracije vjenčanja Zagreb" },
    { name: "description", content: "Elegantne cvjetne dekoracije, uređenje stolova i cjeloviti vizualni koncept vjenčanja u Zagrebu." },
    { property: "og:title", content: "Lily Decor — Vaš dan. Vaši detalji. Vaša priča." },
    { property: "og:description", content: "Profinjene dekoracije vjenčanja osmišljene s pažnjom za svaki detalj." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden">
        <img src={heroImage.url} width={891} height={942} className="absolute inset-0 h-full w-full object-cover" alt="Elegantno uređena sala za vjenčanje s cvjetnim aranžmanima" />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/65 to-transparent" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-2xl animate-soft-rise"><p className="text-xs font-bold uppercase tracking-widest text-brand-pink">Dekoracije vjenčanja · Zagreb</p><h1 className="mt-5 text-6xl leading-[0.92] text-brand-green sm:text-7xl lg:text-8xl">Vaš dan.<br/>Vaši detalji.<br/><span className="text-brand-pink">Vaša priča.</span></h1><p className="mt-7 max-w-lg text-base leading-8 text-foreground/75 sm:text-lg">Stvaramo profinjene cvjetne dekoracije i atmosferu koja svaki prostor pretvara u nezaboravno mjesto slavlja.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="accent"><Link to="/kontakt">Zatražite ponudu <ArrowRight size={17}/></Link></Button><Button asChild variant="outline"><Link to="/galerija">Pogledajte galeriju</Link></Button></div></div>
        </div>
      </section>
      <section className="bg-muted px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div className="image-reveal"><img src={floralImage.url} loading="lazy" width={891} height={942} alt="Ružičasti i bijeli cvjetni aranžman sa svijećama" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.03]"/></div><div className="animate-soft-rise lg:px-10"><p className="text-xs font-bold uppercase tracking-widest text-brand-pink">Naš potpis</p><h2 className="mt-4 text-5xl leading-tight text-brand-green sm:text-6xl">Elegancija koja se osjeća</h2><p className="mt-6 leading-8 text-muted-foreground">Vjerujemo da najljepše dekoracije nisu samo vizualne — one stvaraju osjećaj. Spajamo svježe cvijeće, svjetlost svijeća i pažljivo odabrane detalje u atmosferu koja pripada samo vama.</p><Button asChild variant="outline" className="mt-8"><Link to="/o-nama">Upoznajte Lily Decor <ArrowRight size={17}/></Link></Button></div></div></section>
      <section className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-widest text-brand-pink">Izdvojeni radovi</p><h2 className="mt-3 text-5xl text-brand-green">Prostori ispunjeni pričom</h2></div><Button asChild variant="ghost"><Link to="/galerija">Cijela galerija <ArrowRight size={17}/></Link></Button></div><div className="grid gap-5 md:grid-cols-[1.4fr_1fr]"><img src={tableImage.url} loading="lazy" width={688} height={940} alt="Dugi svečani stol ukrašen cvijećem i svijećama" className="h-full min-h-96 w-full object-cover"/><img src={floralImage.url} loading="lazy" width={891} height={942} alt="Detalj raskošnog cvjetnog aranžmana" className="h-full min-h-96 w-full object-cover"/></div></div></section>
      <section className="bg-brand-pink-soft px-5 py-20 text-center lg:px-8"><div className="animate-soft-rise"><h2 className="text-5xl text-brand-green">Ispričajmo vašu priču kroz detalje</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">Javite nam datum, lokaciju i svoju viziju. Zajedno ćemo osmisliti dekoraciju koja vam savršeno pristaje.</p><Button asChild variant="accent" className="mt-8"><Link to="/kontakt">Kontaktirajte nas</Link></Button></div></section>
    </>
  );
}

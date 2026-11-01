import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { PageIntro } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lily-sala-clean.jpg.asset.json";
import floralImage from "@/assets/lily-cvijece-clean.jpg.asset.json";
import tableImage from "@/assets/lily-stol-clean.jpg.asset.json";
import crkvaImage from "@/assets/lily-crkva.jpg.asset.json";
import salaPlavaImage from "@/assets/lily-sala-plava.jpg.asset.json";
import cvijecePlavoImage from "@/assets/lily-cvijece-plavo.jpg.asset.json";
import salaTamnaImage from "@/assets/lily-sala-tamna.jpg.asset.json";
import stolTamniImage from "@/assets/lily-stol-tamni.jpg.asset.json";
import stolCrniImage from "@/assets/lily-stol-crni.jpg.asset.json";
import stolKremImage from "@/assets/lily-stol-krem.jpg.asset.json";
import buketMladaImage from "@/assets/lily-buket-mlada.jpg.asset.json";
import baloniKrstenjeImage from "@/assets/lily-baloni-krstenje.jpg.asset.json";

export const Route = createFileRoute("/galerija")({ head: () => ({ meta: [{ title: "Galerija vjenčanja — Lily Decor" },{ name: "description", content: "Pogledajte cvjetne dekoracije, svečane stolove i vjenčanja u izvedbi Lily Decor." },{ property: "og:title", content: "Galerija — Lily Decor" },{ property: "og:description", content: "Inspiracija iz cvijeća, svijeća i profinjenih detalja." },{ property: "og:type", content: "website" },{ name: "twitter:card", content: "summary_large_image" }]}), component: Gallery });

const galleryImageClass =
  "animate-soft-rise-delay aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.02]";

function Gallery() {
  return (
    <>
      <PageIntro
        eyebrow="Naši radovi"
        title="Galerija slavlja"
        text="Pogledajte dio atmosfere koju stvaramo — od intimnih cvjetnih detalja do cjelovitog uređenja svečanih prostora."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <img
            src={heroImage.url}
            loading="lazy"
            width={891}
            height={942}
            alt="Raskošno uređena svadbena sala"
            className="animate-soft-rise aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.01] md:col-span-2"
          />
          {/* Plavo-bijeli tonovi */}
          <img
            src={salaPlavaImage.url}
            loading="lazy"
            width={897}
            height={940}
            alt="Svečana sala u plavo-bijelim tonovima sa svijećama"
            className={galleryImageClass}
          />
          <img
            src={cvijecePlavoImage.url}
            loading="lazy"
            width={897}
            height={940}
            alt="Detalj plavo-bijelog cvjetnog aranžmana"
            className={galleryImageClass}
          />
          {/* Tamni, svečani ambijent */}
          <img
            src={salaTamnaImage.url}
            loading="lazy"
            width={897}
            height={940}
            alt="Večernja svečana sala s visokim cvjetnim aranžmanima"
            className={galleryImageClass}
          />
          <img
            src={stolTamniImage.url}
            loading="lazy"
            width={897}
            height={940}
            alt="Dugi svečani stol sa svijećama i bijelim cvijećem"
            className={galleryImageClass}
          />
          {/* Okrugli stolovi */}
          <img
            src={stolCrniImage.url}
            loading="lazy"
            width={897}
            height={940}
            alt="Okrugli stol s crnim stolnjakom i bijelim cvijećem"
            className={galleryImageClass}
          />
          <img
            src={stolKremImage.url}
            loading="lazy"
            width={897}
            height={940}
            alt="Okrugli stol u krem tonovima s ružičastim aranžmanom"
            className={galleryImageClass}
          />
          {/* Cvijeće i buketi */}
          <img
            src={buketMladaImage.url}
            loading="lazy"
            width={897}
            height={940}
            alt="Vjenčani buket u pastelnim tonovima"
            className={galleryImageClass}
          />
          <img
            src={floralImage.url}
            loading="lazy"
            width={891}
            height={942}
            alt="Cvjetni aranžman u ružičastim tonovima"
            className={galleryImageClass}
          />
          {/* Stol i crkva */}
          <img
            src={tableImage.url}
            loading="lazy"
            width={688}
            height={940}
            alt="Svečani stol s cvijećem i svijećama"
            className={galleryImageClass}
          />
          <img
            src={crkvaImage.url}
            loading="lazy"
            width={939}
            height={946}
            alt="Uređena crkva za vjenčanje"
            className={galleryImageClass}
          />
          {/* Baloni */}
          <img
            src={baloniKrstenjeImage.url}
            loading="lazy"
            width={897}
            height={940}
            alt="Balonska dekoracija za krštenje s plišanim medvjedićima"
            className="animate-soft-rise-delay aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.01] md:col-span-2"
          />
        </div>
        <div className="mx-auto mt-14 max-w-2xl animate-soft-rise text-center">
          <h2 className="text-4xl text-brand-green">Još trenutaka na Instagramu</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Pratite naše najnovije dekoracije i pogledajte kako izgleda svaki detalj stvarnih slavlja.
          </p>
          <Button asChild variant="accent" className="mt-6">
            <a href="https://www.instagram.com/vjencanja_lily/" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} />
              Otvori Instagram
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Footer } from "@/components/Footer";
import TiltedCard from "@/components/TiltedCard";

/** Mismos valores de tilt para las dos tarjetas (pandita y QR). */
const cardTilt = {
  rotateAmplitude: 18,
  scaleOnHover: 1.04,
  showMobileWarning: false,
  showTooltip: false,
} as const;

/** Home: barra, hero, categorías, tarjetas pandita/QR y pie. */
export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <Hero />
      <CategoryGrid />

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/*
            Dos TiltedCard:
            - Móvil (grid-cols-1): pandita ARRIBA, QR ABAJO (el primero en el HTML va encima).
            - Desktop (sm:grid-cols-2): pandita a la IZQUIERDA, QR a la DERECHA.
            min-h-[420px] = el pandita no se encoge al estrechar la pantalla; object-cover recorta, no escala hacia abajo.
          */}
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:items-stretch">
            <div id = "pandita-card" className="h-[420px] min-h-[420px] w-full">
              <TiltedCard
                {...cardTilt}
                imageSrc="/pandita.jpeg"
                altText="Pandita"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                imageClassName="tilted-card-img"
              />
            </div>

            <div className="h-[420px] min-h-[420px] w-full">
              <TiltedCard
                {...cardTilt}
                showImage={false}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                displayOverlayContent
                overlayContent={
                  <div className="flex h-full w-full items-center justify-center rounded-[15px] border border-yellow-300/25 bg-[#090909] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                    <div className="flex h-[210px] w-[210px] shrink-0 items-center justify-center rounded-[20px] border border-dashed border-yellow-300/45 bg-[#0b0b0b] text-[10px] font-black uppercase tracking-[0.22em] text-yellow-200/80 shadow-[0_0_30px_rgba(255,196,0,0.08)]">
                      QR
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}

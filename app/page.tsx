import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Footer } from "@/components/Footer";
import TiltedCard from "@/components/TiltedCard";
import CircularGallery from "@/components/CircularGallery";
import "@/components/CircularGallery.css";

const productItems = [
  {
    image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80",
    text: "Taladros",
  },
  {
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
    text: "Sierras",
  },
  {
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    text: "Accesorios",
  },
  {
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    text: "Herramientas",
  },
  {
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=900&q=80",
    text: "Ferretería",
  },
  {
    image: "https://images.unsplash.com/photo-1590793892454-8d1d0e7a4fbe?auto=format&fit=crop&w=900&q=80",
    text: "Electricidad",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <Hero />

      <CategoryGrid />

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[560px]">
              <TiltedCard
                imageSrc="/pandita.jpeg"
                altText="Pandita"
                captionText=""
                containerHeight="310px"
                containerWidth="100%"
                imageHeight="310px"
                imageWidth="100%"
                rotateAmplitude={18}
                scaleOnHover={1.04}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <div className="absolute inset-0 grid grid-cols-[1.5fr_0.5fr] sm:grid-cols-[1.55fr_0.45fr]">
                    <div className="overflow-hidden rounded-l-[15px] bg-[#070707]">
                      <div className="h-full w-full translate-y-1 sm:translate-y-2">
                        <img
                          src="/pandita.jpeg"
                          alt="Pandita"
                          className="h-full w-full object-contain object-bottom select-none"
                          draggable="false"
                          style={{ userSelect: "none", WebkitUserSelect: "none" }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center border-l border-yellow-300/25 bg-[#090909] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                      <div className="flex h-[170px] w-[170px] items-center justify-center rounded-[20px] border border-dashed border-yellow-300/45 bg-[#0b0b0b] text-[10px] font-black uppercase tracking-[0.22em] text-yellow-200/80 shadow-[0_0_30px_rgba(255,196,0,0.08)] sm:h-[210px] sm:w-[210px]">
                        QR
                      </div>
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

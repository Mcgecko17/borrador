import Image from 'next/image';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { BenefitsSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";
import TiltedCard from "@/components/TiltedCard";
import { getProductos, getMarcas, getProductImageUrl } from "@/lib/supabase";

export const revalidate = 30;

/** Mismos valores de tilt para las dos tarjetas (pandita y QR). */
const cardTilt = {
  rotateAmplitude: 18,
  scaleOnHover: 1.04,
  showMobileWarning: false,
  showTooltip: false,
} as const;

/** Home: barra, hero con items de base de datos, marcas, beneficios, tarjetas pandita/QR y pie. */
export default async function Home() {
  const [productos, marcas] = await Promise.all([getProductos(), getMarcas()]);

  // Galería de imágenes de productos de la base de datos (solo imágenes, sin texto)
  const baseGallery = productos.map((p) => ({
    image: getProductImageUrl(p.codigo_producto),
    text: "",
  }));

  const galleryItems =
    baseGallery.length > 0 && baseGallery.length < 6
      ? [...baseGallery, ...baseGallery]
      : baseGallery;

  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <Hero
        totalItems={productos.length}
        totalMarcas={marcas.length}
        galleryItems={galleryItems}
      />
      <CategoryGrid marcas={marcas} />
      <BenefitsSection />

      <section id="contacto" className="mx-auto max-w-7xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center animate-fade-up sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm">
            Contacto y Ubicación
          </p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Visítanos en tienda o escríbenos
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-300">
            Estamos disponibles para asesorarte en obra, taller o proyectos del hogar.
          </p>
        </div>

        <div className="space-y-6">
          {/*
            Dos TiltedCard:
            - Móvil (grid-cols-1): pandita ARRIBA, QR ABAJO.
            - Desktop (sm:grid-cols-2): pandita a la IZQUIERDA (tienda física), QR a la DERECHA (WhatsApp).
          */}
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:items-stretch">
            {/* Tarjeta del Pandita con Dirección */}
            <div id="pandita-card" className="h-[430px] min-h-[430px] w-full">
              <TiltedCard
                {...cardTilt}
                imageSrc="/pandita.jpeg"
                altText="Ubicación de tienda YAWELMAQ"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                imageClassName="tilted-card-img rounded-[15px] object-cover"
                displayOverlayContent
                overlayContent={
                  <div className="flex h-full w-full flex-col justify-between p-5 rounded-[15px] border border-yellow-300/30 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/40 to-black/20">
                    {/* Badge superior */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/40 bg-black/75 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Tienda Física
                      </span>
                      <span className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-bold text-slate-300 backdrop-blur-md">
                        YAWELMAQ
                      </span>
                    </div>

                    {/* Bloque inferior de Dirección */}
                    <div className="space-y-3 rounded-2xl border border-yellow-400/25 bg-black/85 p-4 shadow-xl backdrop-blur-md">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-black uppercase tracking-wider text-yellow-300">Nuestra Dirección</p>
                          <p className="text-sm font-bold text-white leading-snug">Avenida República entre las calles Pulacayo y Punata</p>
                          <p className="text-[11px] text-slate-300">Caseta N° 123 sector ferreteria</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
                        <span className="text-[11px] text-slate-300 flex items-center gap-1">
                          <span className="text-yellow-400">🕒</span> Lun - Sáb: 7:00 a 19:00
                        </span>
                        <a
                          href="https://maps.app.goo.gl/av9hCge462XChe7j8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-black text-black transition hover:bg-yellow-300 active:scale-95"
                        >
                          Cómo llegar →

                        </a>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>

            {/* Tarjeta de Contacto Digital / QR */}
            <div className="h-[430px] min-h-[430px] w-full">
              <TiltedCard
                {...cardTilt}
                showImage={false}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                displayOverlayContent
                overlayContent={
                  <div className="flex h-full w-full flex-col justify-between p-5 rounded-[15px] border border-yellow-300/30 bg-[#0c0c0c] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                    {/* Header del QR */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-yellow-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        Canal Directo
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">WhatsApp Oficial</span>
                    </div>

                    {/* Centro con QR estilizado */}
                    <div className="my-auto flex flex-col items-center justify-center text-center">
                      <div className="relative h-[190px] w-[190px] shrink-0 items-center justify-center rounded-2xl border-2 border-dashed border-yellow-300/50 bg-[#141414] p-3 shadow-[0_0_35px_rgba(255,200,76,0.12)]">
                        <Image
                          src="/qr-whatsapp.svg"
                          alt="Código QR WhatsApp YAWELMAQ"
                          fill
                          className="object-contain p-2 rounded-xl"
                          priority
                        />
                      </div>
                      <p className="mt-3 text-xs font-medium text-slate-300">
                        Escanea o haz clic para consultar precios y pedidos
                      </p>
                    </div>
                    {/* Botón WhatsApp */}
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-2.5 text-xs font-black uppercase tracking-wider text-black transition hover:bg-yellow-300 active:scale-[0.98]"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.07 16.31C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
                      </svg>
                      Chatear por WhatsApp
                    </a>
                  </div>
                }
              />
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </main>
  );
}

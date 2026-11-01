"use client";

import { useState } from "react";

const LOCAL_FALLBACK = "/wallpaperflare.com_wallpaper.jpg";

export function BrandCardImage({
  src,
  fallbackSrc,
  alt,
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (!failed) {
          setFailed(true);
          // Usar la imagen del primer producto de la marca, o el fallback genérico
          setImgSrc(fallbackSrc || LOCAL_FALLBACK);
        } else {
          // Si también falla el fallbackSrc, usar imagen genérica local
          setImgSrc(LOCAL_FALLBACK);
        }
      }}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  );
}

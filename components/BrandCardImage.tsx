"use client";

import { useState } from "react";

const LOCAL_FALLBACK = "/wallpaperflare.com_wallpaper.jpg";

function getJpgVariant(url: string): string | null {
  if (url.endsWith(".webp")) return url.slice(0, -5) + ".jpg";
  if (url.endsWith(".jpg")) return url.slice(0, -4) + ".webp";
  return null;
}

export function BrandCardImage({
  src,
  alt,
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [triedAlt, setTriedAlt] = useState(false);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (!triedAlt) {
          // Intentar con la extensión alternativa (.webp ↔ .jpg)
          const alt = getJpgVariant(imgSrc);
          if (alt) {
            setTriedAlt(true);
            setImgSrc(alt);
            return;
          }
        }
        // Si todo falla, usar imagen local
        setImgSrc(LOCAL_FALLBACK);
      }}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  );
}

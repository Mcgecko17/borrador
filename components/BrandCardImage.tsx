"use client";

import { useState } from "react";

export function BrandCardImage({
  src,
  fallbackSrc,
  alt,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  );
}

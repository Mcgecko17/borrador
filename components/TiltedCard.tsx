"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Tarjeta 3D reutilizable (Motion).
 * - Rota con el mouse; en < 640px el tilt se apaga.
 * - `showImage={false}` deja solo el overlay (sirve para la tarjeta del QR).
 * - `imageClassName` controla recorte: object-cover evita que la foto se encoja.
 */
const springValues = {
  damping: 50,
  stiffness: 80,
  mass: 4,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 4,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  showImage = true,
  imageClassName = "tilted-card-img",
  className = "",
}: {
  imageSrc?: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  /** Si es false, no pinta la foto de fondo (la tarjeta QR no la necesita). */
  showImage?: boolean;
  imageClassName?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  // Distancia del mouse al centro → rotación X/Y (funciona en cualquier resolución).
  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.2);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  // Soporte para interacción táctil en pantallas móviles
  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!ref.current || !e.touches[0]) return;

    const touch = e.touches[0];
    const rect = ref.current.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left - rect.width / 2;
    const offsetY = touch.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(touch.clientX - rect.left);
    y.set(touch.clientY - rect.top);
  }

  function handleTouchStart() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleTouchEnd() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure ${className}`.trim()}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">This effect is not optimized for mobile. Check on desktop.</div>
      )}

      <motion.div
        className="tilted-card-inner overflow-hidden rounded-[15px]"
        style={{
          width: "100%",
          maxWidth: imageWidth,
          height: imageHeight,
          borderRadius: "15px",
          overflow: "hidden",
          rotateX,
          rotateY,
          scale,
        }}
      >
        {showImage && imageSrc ? (
          <motion.img
            src={imageSrc}
            alt={altText}
            className={`${imageClassName} rounded-[15px] object-cover`}
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />
        ) : null}

        {displayOverlayContent && overlayContent && <motion.div className="tilted-card-overlay">{overlayContent}</motion.div>}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const GalleryImages = ({ images, alt = "Photo booth gallery image" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) nextImage();
    else if (diff < -50) prevImage();
    setTouchStartX(null);
  };

  return (
    <div
      className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0 touch-pan-y bg-neutral-100"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Image
        src={images[currentImageIndex]}
        alt={alt}
        fill
        className="object-contain select-none"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        draggable={false}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-white/90 text-neutral-700 w-11 h-11 flex items-center justify-center active:bg-white transition-colors"
          >
            <i className="fas fa-chevron-left text-sm" />
          </button>
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-white/90 text-neutral-700 w-11 h-11 flex items-center justify-center active:bg-white transition-colors"
          >
            <i className="fas fa-chevron-right text-sm" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            {images.length <= 8 ? (
              <div className="flex gap-2">
                {images.map((src, index) => (
                  <button
                    key={src}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            ) : (
              <span className="bg-black/50 text-white text-xs px-2.5 py-1 rounded-full tabular-nums">
                {currentImageIndex + 1} / {images.length}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryImages;

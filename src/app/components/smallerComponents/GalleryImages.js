"use client";
import { useState } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const GalleryImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/equipment0.webp",
    "/images/backdrop0.png",
    "/images/backdrop1.png",
    "/images/backdrop2.png",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0">
      <Image
        src={images[currentImageIndex]}
        alt="Photo booth setup and backdrops"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      <button
        onClick={prevImage}
        aria-label="Previous image"
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 text-neutral-700 w-8 h-8 flex items-center justify-center hover:bg-white transition-colors"
      >
        <i className="fas fa-chevron-left text-xs" />
      </button>
      <button
        onClick={nextImage}
        aria-label="Next image"
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 text-neutral-700 w-8 h-8 flex items-center justify-center hover:bg-white transition-colors"
      >
        <i className="fas fa-chevron-right text-xs" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;

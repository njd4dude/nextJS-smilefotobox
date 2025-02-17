"use client";
import { useState } from "react";

const GalleryImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/equipment0.webp",
    "/images/backdrop0.png",
    "/images/backdrop1.png",
    "/images/backdrop2.png",
  ];
  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div>
      <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg shadow-md overflow-hidden relative">
        <img
          src={images[currentImageIndex]}
          alt="Photo Booth Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
          <button
            onClick={prevImage}
            className="bg-white text-gray-700 p-2 w-6 h-6 rounded-full flex items-center justify-center opacity-40 hover:opacity-100"
          >
            <i className="fas fa-chevron-left text-sm"></i>
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
          <button
            onClick={nextImage}
            className="bg-white text-gray-700 p-2 w-6 h-6 rounded-full flex items-center justify-center opacity-40 hover:opacity-100"
          >
            <i className="fas fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;

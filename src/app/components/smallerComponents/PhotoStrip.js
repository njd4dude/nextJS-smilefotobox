import Image from "next/image";

const photos = [
  { src: "/images/equipment0.webp", alt: "Vintage wood photo booth setup" },
  { src: "/images/backdrop0.png", alt: "Custom event backdrop" },
  { src: "/images/backdrop1.png", alt: "Backdrop option for events" },
  { src: "/images/backdrop2.png", alt: "Another backdrop style" },
  { src: "/images/samplePrint.webp", alt: "Sample photo booth print" },
];

const PhotoStrip = () => {
  return (
    <div className="bg-cream py-6 lg:py-8">
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:max-w-6xl lg:mx-auto lg:pb-0">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative h-36 w-44 flex-shrink-0 lg:h-48 lg:w-full"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 176px, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoStrip;

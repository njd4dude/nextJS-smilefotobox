import Image from "next/image";
import { getPhotostripImages } from "@/lib/photostrip";

const PhotoStrip = () => {
  const photos = getPhotostripImages().map((src) => ({
    src,
    alt: "Photo booth sample",
  }));

  if (photos.length === 0) return null;

  return (
    <div className="bg-cream py-5 sm:py-6 lg:py-8">
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-4 lg:overflow-visible lg:px-6 lg:max-w-6xl lg:mx-auto lg:pb-0">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative h-40 w-52 flex-shrink-0 snap-center sm:h-44 sm:w-56 lg:h-48 lg:w-52 bg-neutral-100"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 208px, 208px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoStrip;

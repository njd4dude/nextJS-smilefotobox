import GalleryImages from "./smallerComponents/GalleryImages";
import { getBackdropImages } from "@/lib/backdrops";

const Backdrops = () => {
  const images = getBackdropImages();

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream" id="backdrops">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row-reverse items-start gap-8 sm:gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <GalleryImages images={images} alt="Photo booth backdrop option" />
          </div>
          <div className="w-full lg:w-1/2 lg:pt-4">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Backdrops
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-monter font-semibold text-neutral-900 leading-snug">
              Backdrops made for your event
            </h2>
            <p className="mt-5 sm:mt-6 text-neutral-600 leading-relaxed text-[15px] sm:text-base">
              Choose from a range of backdrops to match your theme, whether
              you&apos;re going for cozy and vintage or something bold and
              creative. From weddings and quinceañeras to corporate nights and
              birthday parties, we have options to fit the vibe.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed text-[15px] sm:text-base">
              Browse the gallery to see what&apos;s available, or ask us about
              custom options for your event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backdrops;

import Image from "next/image";

const PhotoboothEquipment = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white" id="equipment">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-16">
          <div className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0 lg:w-1/2 bg-neutral-100">
            <Image
              src="/images/equipment0.webp"
              alt="Vintage wood photo booth setup"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pt-4">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
              The setup
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-monter font-semibold text-neutral-900 leading-snug">
              A vintage booth built for your celebration
            </h2>
            <p className="mt-5 sm:mt-6 text-neutral-600 leading-relaxed text-[15px] sm:text-base">
              Our photo booth is built from charming vintage wood, rustic and
              timeless, and ready for your celebration. We shoot on professional
              DSLR cameras so every print comes out sharp and vibrant, and we
              design custom photo templates so your guests walk away with
              something that feels personal to the day.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed text-[15px] sm:text-base">
              For weddings, quinceañeras, corporate nights, and birthday parties
              across Sacramento, we bring the booth, the props, and the energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoboothEquipment;

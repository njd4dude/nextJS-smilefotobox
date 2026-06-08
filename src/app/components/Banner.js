import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-36 sm:h-44 lg:h-[250px]">
      <Image
        src="/images/banner.webp"
        alt="Smile Fotobox event banner"
        fill
        style={{ objectFit: "cover" }}
        className="brightness-75"
        priority
        sizes="100vw"
      />
    </div>
  );
};

export default Banner;

import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-52 lg:h-[250px]">
        <Image
          src="/images/banner.webp" // No need for 'public/' in the path
          alt="Banner"
          fill // Replaces the legacy "layout" prop
          style={{ objectFit: "cover" }} // Replaces the "objectFit" prop
          className="brightness-75"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;

// HeroSection.js
import SocialLinks from "./smallerComponents/SocialLinks";
import FeatCards from "./smallerComponents/FeatCards";
import BookEventButton from "./smallerComponents/BookEventButton";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeroSection = () => {
  return (
    <div
      className="h-full w-full relative "
      id="home"
      style={{
        backgroundImage: "url(/images/samplePrint.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurred Overlay */}
      <div className="pb-24 w-full h-full bg-black bg-opacity-50 backdrop-blur-md relative">
        <div className="pt-10 w-full text-center space-y-4 font-monter">
          <h1 className="text-6xl font-extrabold font-mont text-white">
            Smile Fotobox Company
          </h1>
          <p className="text-2xl text-white font-bold">
            Photobooth business serving from Sacramento, California.
          </p>
        </div>
        <FeatCards />
        <div className="pt-10 flex justify-center ">
          <BookEventButton />
        </div>
      </div>
      <SocialLinks />

      <img
        src="/images/smilefotoboxLogo.png"
        alt="Logo"
        className="absolute bottom-5 right-5 w-16 lg:w-32" // Adjust width and position as needed
      />

      {/* "Located in California" Section */}
      <div className="absolute top-2 left-2 xl:top-3 xl:left-6 flex items-center text-white font-medium xl:text-xl">
        <i className="fas fa-location-dot text-xl xl:text-xl text-red-500 mr-1.5 xl:mr-3"></i>
        <span className="text-[12px] xl:text-[16px] font-monter">
          Located in Sacramento, California
        </span>
      </div>
    </div>
  );
};

export default HeroSection;

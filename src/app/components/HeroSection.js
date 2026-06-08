import SocialLinks from "./smallerComponents/SocialLinks";
import BookEventButton from "./smallerComponents/BookEventButton";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[75vh] sm:min-h-[70vh] lg:min-h-[70vh] flex flex-col justify-end"
      id="home"
      style={{
        backgroundImage: "url(/images/samplePrint.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />

      <div className="absolute top-3 left-4 right-4 sm:left-6 flex items-center text-white/90 z-10">
        <i className="fas fa-location-dot text-red-500 mr-2 flex-shrink-0" />
        <span className="text-xs sm:text-sm font-monter tracking-wide">
          Sacramento, California
        </span>
      </div>

      <div className="relative z-10 px-4 sm:px-6 pb-8 sm:pb-12 pt-24 sm:pt-28 text-center font-monter">
        <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Smile Fotobox Company
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
          Sacramento photobooth rentals for weddings, quinceañeras, and
          celebrations across the greater Sacramento area.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-1 sm:gap-x-3 text-[11px] sm:text-xs uppercase tracking-wide text-white/60">
          <span>DSLR prints</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>Custom templates</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>Your choice of backdrops</span>
        </div>
        <div className="mt-6 sm:mt-8 flex justify-center px-2">
          <BookEventButton />
        </div>
        <SocialLinks className="mt-5 sm:mt-6" />
      </div>

      <img
        src="/images/smilefotoboxLogo.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute bottom-5 right-5 w-28 z-10 opacity-90"
      />
    </section>
  );
};

export default HeroSection;

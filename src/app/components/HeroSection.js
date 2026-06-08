import SocialLinks from "./smallerComponents/SocialLinks";
import BookEventButton from "./smallerComponents/BookEventButton";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[65vh] lg:min-h-[70vh] flex flex-col justify-end"
      id="home"
      style={{
        backgroundImage: "url(/images/samplePrint.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

      <div className="absolute top-3 left-4 xl:left-8 flex items-center text-white/90 z-10">
        <i className="fas fa-location-dot text-red-500 mr-2" />
        <span className="text-xs xl:text-sm font-monter tracking-wide">
          Sacramento, California
        </span>
      </div>

      <div className="relative z-10 px-6 pb-14 pt-28 text-center font-monter">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Smile Fotobox Company
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl mx-auto">
          Photobooth rentals for weddings, quinceañeras, and celebrations across
          the Sacramento area.
        </p>
        <p className="mt-3 text-sm tracking-widest uppercase text-white/60">
          DSLR prints &middot; Custom templates &middot; Your choice of backdrops
        </p>
        <div className="mt-8 flex justify-center">
          <BookEventButton />
        </div>
      </div>

      <SocialLinks />

      <img
        src="/images/smilefotoboxLogo.png"
        alt="Logo"
        className="absolute bottom-5 right-5 w-16 lg:w-28 z-10 opacity-90"
      />
    </section>
  );
};

export default HeroSection;

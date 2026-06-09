import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PhotoStrip from "./components/smallerComponents/PhotoStrip";
import PhotoboothEquipment from "./components/PhotoboothEquipment";
import Backdrops from "./components/Backdrops";
import IGPosts from "./components/IGPosts";
import ContactFooter from "./components/ContactFooter";

const page = () => {
  return (
    <div className="bg-cream">
      <Banner />
      <Navbar />
      <HeroSection />
      <PhotoStrip />
      <PhotoboothEquipment />
      <Backdrops />
      <IGPosts />
      <ContactFooter />
    </div>
  );
};

export default page;

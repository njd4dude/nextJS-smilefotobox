import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PhotoboothEquipment from "./components/PhotoboothEquipment";
import IGPosts from "./components/IGPosts";
import ContactFooter from "./components/ContactFooter";
import PricingSection from "./components/PricingSection";

const page = () => {
  return (
    <div className="bg-gray-200">
      <Banner />
      <Navbar />
      <HeroSection />
      <PhotoboothEquipment />
      <PricingSection />
      <IGPosts />
      <ContactFooter />
    </div>
  );
};

export default page;

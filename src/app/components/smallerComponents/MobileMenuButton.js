"use client";

import { useState } from "react";

const MobileMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white lg:hidden">
        {isMenuOpen ? <i className="fas fa-times w-6 h-6"></i> : <i className="fas fa-bars w-6 h-6"></i>}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="py-2 px-4 block">
            Home
          </a>
          <a href="#equipment" className="py-2 px-4 block">
            Equipment
          </a>
          <a href="#instagram" className="py-2 px-4 block">
            Instagram
          </a>
          <a href="#contact" className="py-2 px-4 block">
            Contact
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeGu4gHN_HFx02-3WZ5pFzhi_onrcwTemh8giaK-ExY_GbRsw/viewform"
            target="_blank"
            className="py-2 px-4 block"
          >
            Book Your Event
          </a>
        </div>
      )}
    </>
  );
};

export default MobileMenuButton;

"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = (
    <>
      <a href="#home" className="py-2 px-4 block lg:inline-block" onClick={closeMenu}>
        Home
      </a>
      <a
        href="#equipment"
        className="py-2 px-4 block lg:inline-block"
        onClick={closeMenu}
      >
        Equipment
      </a>
      <a
        href="#backdrops"
        className="py-2 px-4 block lg:inline-block"
        onClick={closeMenu}
      >
        Backdrops
      </a>
      <a
        href="#instagram"
        className="py-2 px-4 block lg:inline-block"
        onClick={closeMenu}
      >
        Instagram
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeGu4gHN_HFx02-3WZ5pFzhi_onrcwTemh8giaK-ExY_GbRsw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-4 block lg:inline-block"
        onClick={closeMenu}
      >
        Book Your Event
      </a>
    </>
  );

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 min-h-[56px]">
        <a href="#home" onClick={closeMenu} className="flex-shrink-0">
          <img
            src="/images/smilefotoboxLogo.png"
            alt="Smile Fotobox Co."
            className="w-20 sm:w-24"
          />
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white lg:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
        </button>

        <div className="hidden lg:flex font-monter text-white items-center space-x-1">
          {navLinks}
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden font-monter text-white border-t border-white/10 px-2 pb-4">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

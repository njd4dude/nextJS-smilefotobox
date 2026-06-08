"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialLinks = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-monter text-sm ${className}`}
    >
      <a
        href="https://www.instagram.com/smilefotobox.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-white/90 hover:text-pink-400 transition-colors min-h-[44px]"
      >
        <InstagramIcon sx={{ fontSize: 20 }} />
        Instagram
      </a>
      <a
        href="https://www.facebook.com/people/Smile-Fotobox-Company/61570955339151/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-white/90 hover:text-blue-400 transition-colors min-h-[44px]"
      >
        <FacebookIcon sx={{ fontSize: 20 }} />
        Facebook
      </a>
    </div>
  );
};

export default SocialLinks;

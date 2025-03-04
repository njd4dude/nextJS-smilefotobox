"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook"; // Added for Facebook icon

const SocialLinks = () => {
  return (
    <div className="absolute bottom-4 left-0 font-monter text-xs lg:text-sm">
      <a
        href="https://www.instagram.com/smilefotobox.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-4 hover:text-pink-500 transition-colors"
      >
        <InstagramIcon className="mr-2" /> Instagram
      </a>
      <a
        href="https://www.facebook.com/people/Smile-Fotobox-Company/61570955339151/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-4 hover:text-blue-500 transition-colors"
      >
        <FacebookIcon className="mr-2" /> Facebook
      </a>
    </div>
  );
};

export default SocialLinks;

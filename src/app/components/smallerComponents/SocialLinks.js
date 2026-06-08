"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

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
      <a
        href="mailto:smilefotobox.company@gmail.com"
        className="inline-flex items-center gap-1.5 text-white/90 hover:text-amber-400 transition-colors min-h-[44px]"
        title="Email Smile Fotobox Co."
      >
        <EmailIcon sx={{ fontSize: 20 }} />
        Email
      </a>
      <a
        href="tel:+19168575831"
        className="inline-flex items-center gap-1.5 text-white/90 hover:text-green-400 transition-colors min-h-[44px]"
        title="Call Smile Fotobox Co."
      >
        <PhoneIcon sx={{ fontSize: 20 }} />
        (916) 857-5831
      </a>
    </div>
  );
};

export default SocialLinks;

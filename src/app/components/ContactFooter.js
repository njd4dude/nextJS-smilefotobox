const ContactFooter = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-black text-white py-4 mt-8" id="contact">
        <div className="max-w-screen-lg mx-auto text-center">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="mb-4">Feel free to reach out to us via email or phone:</p>
  
          {/* Email and Phone Number */}
          <div className="space-y-2">
            <p>
              <strong>Email:</strong>
              <a
                href="mailto:smilefotobox.company@gmail.com"
                className="text-blue-500 hover:text-blue-300"
                title="Email Smile Fotobox Co."
                rel="noopener noreferrer"
              >
                smilefotobox.company@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>
              <a
                href="tel:+19168575831"
                className="text-green-500 hover:text-green-300"
                title="Call Smile Fotobox Co."
                rel="noopener noreferrer"
              >
                +1 (916) 857-5831
              </a>
            </p>
          </div>
  
          {/* Serving Location */}
          <p className="mt-4 text-sm text-gray-400">
            Serving from the Sacramento area.
          </p>
  
          {/* Copyright */}
          <p className="mt-4 text-sm">
            © {currentYear} <span itemProp="name">Smile Fotobox Company</span>. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default ContactFooter;
  
const ContactFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12" id="contact">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-monter font-semibold">
          Ready to plan your event?
        </h3>
        <p className="mt-3 text-neutral-400 max-w-md mx-auto">
          Reach out by email or phone — we&apos;d love to hear about your
          celebration.
        </p>

        <div className="mt-6 space-y-2 text-neutral-300">
          <p>
            <a
              href="mailto:smilefotobox.company@gmail.com"
              className="hover:text-white transition-colors"
              title="Email Smile Fotobox Co."
              rel="noopener noreferrer"
            >
              smilefotobox.company@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:+19168575831"
              className="hover:text-white transition-colors"
              title="Call Smile Fotobox Co."
              rel="noopener noreferrer"
            >
              (916) 857-5831
            </a>
          </p>
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          Serving the Sacramento area
        </p>

        <p className="mt-6 text-xs text-neutral-600">
          &copy; {currentYear}{" "}
          <span itemProp="name">Smile Fotobox Company</span>
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;

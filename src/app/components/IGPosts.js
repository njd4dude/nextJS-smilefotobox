const IGPosts = () => {
  const postIds = ["DD08cpRRzFy", "DDs6lXfP5wI", "DD81VZOR4KQ", "DEIxwpxxhEk"];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cream" id="instagram">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
          Recent events
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-monter font-semibold text-neutral-900 mb-4">
          From the booth
        </h2>
        <a
          href="https://www.instagram.com/smilefotobox.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          Follow @smilefotobox.co on Instagram &rarr;
        </a>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {postIds.map((id) => (
            <div key={id} className="w-full max-w-sm mx-auto sm:max-w-none">
              <iframe
                src={`https://www.instagram.com/p/${id}/embed`}
                width="100%"
                height="480"
                scrolling="no"
                allow="encrypted-media"
                title={`Instagram Post ${id}`}
                className="max-w-full"
                style={{ border: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IGPosts;

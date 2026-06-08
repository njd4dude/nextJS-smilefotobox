const IGPosts = () => {
  const postIds = ["DD08cpRRzFy", "DDs6lXfP5wI", "DD81VZOR4KQ", "DEIxwpxxhEk"];

  return (
    <section className="py-16 lg:py-20 bg-cream" id="instagram">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
          Recent events
        </p>
        <h2 className="text-3xl lg:text-4xl font-monter font-semibold text-neutral-900 mb-4">
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

        <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
          {postIds.map((id) => (
            <div key={id} className="w-full sm:w-72">
              <iframe
                src={`https://www.instagram.com/p/${id}/embed`}
                width="100%"
                height="500"
                scrolling="no"
                allow="encrypted-media"
                title={`Instagram Post ${id}`}
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

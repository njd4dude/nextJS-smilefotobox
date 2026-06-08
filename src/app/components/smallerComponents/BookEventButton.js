"use client";

const BookEventButton = () => {
  const handleGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeGu4gHN_HFx02-3WZ5pFzhi_onrcwTemh8giaK-ExY_GbRsw/viewform",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleGoogleForm}
      className="px-8 py-3 text-base font-semibold text-white bg-neutral-900 hover:bg-white hover:text-neutral-900 border border-neutral-900 transition-colors"
    >
      Book Your Event
    </button>
  );
};

export default BookEventButton;

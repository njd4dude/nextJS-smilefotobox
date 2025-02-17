// BookEventButton.js
'use client'; // This will make this component a client component

import React from 'react';

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
      className="px-8 py-4 text-xl font-bold text-white bg-black bg-opacity-70 rounded-lg hover:scale-105 hover:bg-white hover:text-black transition-transform"
    >
      Book Your Event
    </button>
  );
};

export default BookEventButton;

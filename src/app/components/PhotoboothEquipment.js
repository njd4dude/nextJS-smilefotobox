import GalleryImages from "./smallerComponents/GalleryImages";

const PhotoboothEquipment = () => {
  return (
    <div
      className="my-12 max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg text-black"
      id="equipment"
    >
      <h2 className="text-3xl  font-monter font-semibold mb-6 text-center">
        Our Photo Booth Setup and Backdrops
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <GalleryImages />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">
            Customizable Backdrops to Fit Your Event
          </h3>
          <p className="text-gray-700">
            Our photo booth features a charming vintage wood design, offering a
            timeless and rustic vibe for your event. With a variety of
            customizable backdrops to choose from, it perfectly blends classic
            elegance with a touch of nostalgia. Whether you're aiming for a
            cozy, vintage feel or something uniquely creative, our photo booth
            and its diverse backdrop options will add a memorable touch to your
            event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoboothEquipment;

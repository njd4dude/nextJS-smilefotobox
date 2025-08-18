import React from "react";

const PricingSection = () => {
    return (
        <div className="bg-gradient-to-tr from-yellow-400 via-purple-500 to-pink-500 text-white py-12 px-6" id="pricing">
            {/* Section Title */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Photobooth Services Pricing</h1>
                <p className="text-lg text-gray-300 mt-2">
                    Choose the perfect package for your event
                </p>
            </div>

            {/* DSLR/Glamour Booth Package */}
            <div className="bg-white text-black rounded-2xl shadow-lg p-6 mb-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">
                    📸 Luxe DSLR/Glamour Booth Package – $650
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>3 Hours of Rental</li>
                    <li>Unlimited Photo Sessions</li>
                    <li>350 Prints + Digital Sharing</li>
                    <li>
                        Customizable Templates (photo strips, logo, event theme or text)
                    </li>
                    <li>Standard Backdrop</li>
                    <li>Props Included 🎭</li>
                    <li>Customized iPad Welcome Screen</li>
                    <li>Access to High-Resolution Event Photos</li>
                </ul>
            </div>

            {/* Additional Services */}
            <div className="bg-white text-black rounded-2xl shadow-lg p-6 mb-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">
                    ➕ Additional Services & Upgrades
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Extra Hour (DSLR Booth): $125/hr</li>
                    <li>Additional Prints: $50</li>
                    <li>Premium Backdrops: $40–$100</li>
                    <li>Neon Signs: $30+</li>
                    <li>USB with All Photos, Originals & GIFs: $35</li>
                    <li>Red Carpet & Stanchions: $85</li>
                </ul>
            </div>

            {/* Digital Package */}
            <div className="bg-white text-black rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">
                    💻 Digital-Only Package – $500
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>3 Hours of Rental</li>
                    <li>Unlimited Photo Sessions & Digital Sharing</li>
                    <li>
                        Customizable Templates (photo strips, logo, event theme or text)
                    </li>
                    <li>Standard Backdrop</li>
                    <li>Customized Welcome Screen</li>
                    <li>Access to High-Resolution Event Photos</li>
                </ul>
            </div>
        </div>
    );
};

export default PricingSection;

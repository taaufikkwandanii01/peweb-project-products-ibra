"use client";

import { FaCameraRetro } from "react-icons/fa";

export default function GalleryView() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      caption: "The Morning Tide",
      rotate: "-rotate-2",
    },
    {
      url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
      caption: "Serene Horizon",
      rotate: "rotate-3",
    },
    {
      url: "https://images.unsplash.com/photo-1544551763-47a0159f963f",
      caption: "Rusty Shipwreck",
      rotate: "-rotate-1",
    },
    {
      url: "https://images.unsplash.com/photo-1520942702018-0862200e6873",
      caption: "Golden Hour",
      rotate: "rotate-2",
    },
    {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      caption: "Whispering Waves",
      rotate: "-rotate-3",
    },
    {
      url: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
      caption: "Coastal Path",
      rotate: "rotate-1",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 bg-driftwood/5 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-12 bg-rusty"></div>
            <FaCameraRetro className="text-rusty text-xl" />
            <div className="h-[1px] w-12 bg-rusty"></div>
          </div>
          <h2 className="text-5xl font-serif font-bold text-driftwood italic tracking-tight">
            Captured <span className="text-rusty">Moments</span>
          </h2>
          <p className="text-sm uppercase tracking-[0.4em] text-driftwood/60 mt-2">
            A Glimpse into the coastal heritage
          </p>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-500 hover:z-20 hover:scale-105 ${img.rotate} hover:rotate-0 animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* The Polaroid Frame */}
              <div className="bg-white p-4 pb-12 shadow-[10px_10px_25px_-5px_rgba(0,0,0,0.3)] border border-gray-200">
                {/* Pin Head */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-rusty rounded-full shadow-md z-10 border-2 border-white/50"></div>

                {/* Image Container */}
                <div className="overflow-hidden bg-driftwood aspect-square">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                {/* Caption - Hand-written Style */}
                <div className="absolute bottom-3 left-0 w-full text-center">
                  <p className="font-serif italic text-driftwood/70 text-lg tracking-tight">
                    {img.caption}
                  </p>
                </div>
              </div>

              {/* Tape Effect (Decorative) */}
              <div className="absolute -top-4 left-4 w-12 h-6 bg-white/40 backdrop-blur-sm -rotate-45 border-l border-white/20"></div>
            </div>
          ))}
        </div>

        {/* Vintage Label */}
        <div className="mt-20 flex justify-center">
          <div className="border-2 border-rusty/30 p-1 rounded-sm">
            <div className="border border-rusty/30 px-8 py-3 bg-sand">
              <p className="text-xs uppercase tracking-[0.5em] font-bold text-rusty">
                Gallery Archives — Volume I
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

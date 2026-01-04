import "animate.css";

const MediaView = () => {
  const photos = [
    {
      id: 1,
      title: "Victory Celebration",
      tag: "Matchday",
      // Mobile: 1 kolom, Desktop: Ambil 2 kolom & 2 baris
      size: "col-span-1 md:col-span-2 md:row-span-2 h-[400px] md:h-full",
      img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 2,
      title: "Training Session",
      tag: "Gym",
      size: "col-span-1 h-[300px] md:h-full",
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Tunnel Walk",
      tag: "Lifestyle",
      size: "col-span-1 h-[300px] md:h-full",
      img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Precision Pass",
      tag: "Skills",
      size: "col-span-1 h-[300px] md:h-full",
      img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section
      id="media"
      className="py-24 bg-black text-white border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Header Section - Centered on Mobile */}
        <div className="flex flex-col mb-16 space-y-4 text-center md:text-left">
          <h3 className="text-4xl md:text-7xl font-black uppercase italic leading-none text-white">
            Gallery <span className="text-outline">Showcase</span>
          </h3>
        </div>

        {/* Bento Grid Gallery - Responsive Logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`${photo.size} group relative overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer`}
            >
              {/* Image with Ken Burns Effect on Hover */}
              <img
                src={photo.img}
                alt={photo.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
              />

              {/* Gradient Overlay - Deeper at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Info - Bottom Left */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                  {photo.tag}
                </p>
                <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-white">
                  {photo.title}
                </h4>
              </div>

              {/* Minimalist Corner Accent */}
              <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-yellow-400/50 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-12 py-4 bg-transparent border border-white/10 overflow-hidden transition-all duration-300">
            <span className="relative z-10 font-black uppercase text-[10px] tracking-[0.3em] group-hover:text-black transition-colors duration-300">
              Explore More
            </span>
            <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaView;

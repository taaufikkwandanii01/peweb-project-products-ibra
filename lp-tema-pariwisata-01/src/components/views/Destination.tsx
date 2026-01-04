"use client";

import { FaMapMarkedAlt, FaCompass, FaUmbrellaBeach } from "react-icons/fa";
import { GiWaveSurfer } from "react-icons/gi";

export default function DestinationView() {
  const destinations = [
    {
      title: "Ancient Reef",
      coord: "8°40'S 115°18'E",
      desc: "Terumbu karang yang telah ada sejak ribuan tahun, menawarkan pemandangan bawah laut yang eksotis.",
      icon: <FaCompass />,
      img: "https://images.unsplash.com/photo-1544551763-47a0159f963f",
    },
    {
      title: "Sunset Cove",
      coord: "8°42'S 115°20'E",
      desc: "Titik terbaik untuk melihat matahari terbenam dengan latar belakang tebing kapur kolonial.",
      icon: <FaUmbrellaBeach />,
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Fisherman's Bay",
      coord: "8°39'S 115°15'E",
      desc: "Dermaga tua yang masih aktif digunakan nelayan lokal dengan kapal kayu tradisional mereka.",
      icon: <GiWaveSurfer />,
      img: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    },
  ];

  return (
    <section
      id="destination"
      className="py-24 bg-sand relative overflow-hidden"
    >
      {/* Decorative Compass Rose Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <FaCompass className="text-[80vh] rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="animate__animated animate__fadeInLeft">
            <div className="flex items-center gap-2 text-rusty mb-2">
              <FaMapMarkedAlt />
              <span className="text-xs uppercase tracking-[0.4em] font-bold">
                Charted Territories
              </span>
            </div>
            <h2 className="text-5xl font-serif font-bold text-driftwood leading-tight">
              Points of <span className="italic text-rusty">Interest</span>
            </h2>
          </div>
          <p className="max-w-md text-driftwood/60 font-serif italic border-l-2 border-rusty/30 pl-6 animate__animated animate__fadeInRight">
            Jelajahi setiap sudut pesisir yang telah kami petakan untuk
            kenyamanan petualangan Anda.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {destinations.map((item, idx) => (
            <div
              key={idx}
              className="group bg-sand border border-rusty/20 shadow-xl hover:shadow-2xl transition-all duration-500 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Image Container with "Antique Filter" */}
              <div className="relative h-64 overflow-hidden border-b border-rusty/20">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-sand/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-rusty tracking-widest border border-rusty/20">
                  {item.coord}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative">
                {/* Floating Icon */}
                <div className="absolute -top-6 right-8 w-12 h-12 bg-rusty text-sand flex items-center justify-center text-xl rounded-full shadow-lg border-4 border-sand group-hover:rotate-[360deg] transition-transform duration-700">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold text-driftwood mb-4 uppercase tracking-tighter group-hover:text-rusty transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-driftwood/70 leading-relaxed mb-6 font-serif italic">
                  {item.desc}
                </p>

                {/* Ticket-style Bottom Decal */}
                <div className="flex items-center justify-between pt-6 border-t border-dashed border-rusty/30">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-driftwood/40">
                    Travel Guide No. 00{idx + 1}
                  </span>
                  <button className="text-xs font-bold text-rusty hover:text-driftwood transition-colors uppercase tracking-widest">
                    View Map
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

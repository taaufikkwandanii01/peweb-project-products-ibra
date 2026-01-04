import React from "react";
import "animate.css";
import { GiPin } from "react-icons/gi";

const GalleryView = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c",
      title: "Suasana Saung",
      desc: "Makan nyaman di atas kolam.",
      size: "large", // Variasi ukuran untuk Masonry look
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1601050638917-3f30fbcad47a",
      title: "Nasi Liwet",
      desc: "Resep asli turun temurun.",
      size: "small",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1589187151003-0dd3c63d47e2",
      title: "Sambal Dadak",
      desc: "Pedas segar petik sendiri.",
      size: "small",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1541014741259-df529411b96a",
      title: "Ikan Gurame",
      desc: "Hasil tangkapan hari ini.",
      size: "large",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1626074353765-517a681e40be",
      title: "Es Kelapa Muda",
      desc: "Kesegaran alami tanah Pasundan.",
      size: "small",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      title: "Pancuran Air",
      desc: "Suara alam yang menenangkan.",
      size: "large",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-[#FDF8F1] min-h-screen py-24 px-6 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-20 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Galeri dengan Gaya Letterpress */}
        <div className="text-center mb-20 animate__animated animate__fadeIn">
          <span className="text-[#BC6C25] font-serif italic tracking-widest uppercase text-sm mb-4 block">
            Album Kenangan
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#3D2B1F] mb-6 drop-shadow-sm">
            Potret <span className="italic font-light">Lembur</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#D4A373]"></div>
            <GiPin className="text-[#BC6C25] rotate-45" />
            <div className="h-[1px] w-12 bg-[#D4A373]"></div>
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`
                break-inside-avoid animate__animated animate__fadeInUp 
                relative group cursor-pointer
              `}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Bingkai Foto Kayu/Vintage */}
              <div
                className={`
                bg-[#F4EBD0] p-3 shadow-2xl transition-all duration-500 group-hover:-translate-y-2
                ${index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"}
                border-t-2 border-l-2 border-white/50 border-r-2 border-r-black/10 border-b-2 border-b-black/20
              `}
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden aspect-[4/5] bg-[#3D2B1F]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  {/* Overlay Tekstur Kaca Tua */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/20 to-transparent"></div>
                </div>

                {/* Info Foto Gaya Tulisan Tangan */}
                <div className="pt-6 pb-2 px-2">
                  <h3 className="text-2xl font-serif font-bold text-[#3D2B1F] leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#BC6C25] font-serif italic opacity-80 uppercase tracking-tighter">
                    {item.desc}
                  </p>
                </div>

                {/* Elemen Paku/Pin di Atas */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#3D2B1F]/30 text-xl hidden group-hover:block transition-all">
                  <GiPin />
                </div>
              </div>

              {/* Bayangan Tambahan untuk Kedalaman */}
              <div className="absolute -z-10 inset-0 bg-black/5 blur-xl translate-y-4 rotate-3"></div>
            </div>
          ))}
        </div>

        {/* Footer Galeri */}
        <div className="mt-20 text-center">
          <p className="font-serif italic text-[#3D2B1F]/60 text-lg">
            Sabanda Sariksa — Menjaga keindahan dalam kebersamaan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryView;

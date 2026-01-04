import React from "react";
import "animate.css";
import { GiManualMeatGrinder, GiWoodPile } from "react-icons/gi";

const AboutView = () => {
  const menus = [
    {
      name: "Nasi Liwet Komplit",
      price: "45",
      desc: "Nasi gurih beraroma rempah, ayam goreng lengkuas, tahu tempe, & sambal dadak.",
    },
    {
      name: "Gurame Bakar Kecap",
      price: "85",
      desc: "Ikan gurame segar dari kolam, dibakar dengan olesan bumbu rempah rahasia.",
    },
    {
      name: "Karedok Leunca",
      price: "25",
      desc: "Lalapan segar dengan bumbu kacang cikur khas Bumi Priangan.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#FDF8F1] overflow-hidden">
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <GiWoodPile className="text-[300px] -rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* --- SECTION SEJARAH --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative group animate__animated animate__fadeInLeft">
            {/* Bingkai Foto Artistik */}
            <div className="absolute -inset-4 border-2 border-[#D4A373]/30 rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative h-[400px] w-full bg-[#3D2B1F] shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000"
                alt="Vintage Kitchen"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16] via-transparent to-transparent"></div>
            </div>
            {/* Label Tahun */}
            <div className="absolute -bottom-6 -right-6 bg-[#BC6C25] text-[#FDF8F1] p-6 shadow-xl rotate-12 uppercase tracking-tighter">
              <p className="text-xs font-bold leading-none">Established</p>
              <p className="text-3xl font-serif font-black">1985</p>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <h3 className="text-[#BC6C25] font-serif italic text-xl mb-2 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#BC6C25]"></span> Selayang
              Pandang
            </h3>
            <h2 className="text-5xl font-serif font-bold text-[#3D2B1F] mb-8 leading-tight">
              Menjaga Tradisi <br /> Di Setiap{" "}
              <span className="text-[#BC6C25]">Suapan</span>
            </h2>
            <div className="space-y-6 text-lg text-[#5E4B3C] font-light leading-relaxed italic">
              <p>
                Berawal dari sebuah gubuk kecil di lereng bukit, kami bermimpi
                untuk menghadirkan kembali memori masakan nenek moyang yang
                mulai terlupakan.
              </p>
              <p className="not-italic text-base opacity-80">
                Resep kami bukanlah rahasia, melainkan ketulusan dalam memilih
                bahan dari tanah lokal dan kesabaran dalam mengolah bumbu dengan
                cobek batu asli.
              </p>
            </div>
          </div>
        </div>

        {/* --- MENU & FASILITAS SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Menu Card - Gaya Old Paper */}
          <div className="lg:col-span-7 bg-[#F4EBD0] p-8 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] relative border border-[#D4A373]/20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-30"></div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-[#3D2B1F] uppercase tracking-widest border-b-2 border-[#BC6C25] inline-block pb-2">
                Jamuan Andalan
              </h2>
            </div>

            <div className="relative z-10 space-y-10">
              {menus.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-serif font-bold text-[#3D2B1F] group-hover:text-[#BC6C25] transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex-grow mx-4 border-b border-dotted border-[#3D2B1F]/30 mb-1"></div>
                    <span className="font-serif font-bold text-[#BC6C25] text-xl tracking-tighter">
                      IDR {item.price}k
                    </span>
                  </div>
                  <p className="text-sm text-[#5E4B3C] italic font-light max-w-md uppercase tracking-tight opacity-70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fasilitas - Gaya Rustic Industrial */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#3D2B1F] p-10 text-[#EAE2B7] relative overflow-hidden group">
              <GiWoodPile className="absolute -bottom-10 -right-10 text-[200px] opacity-5 group-hover:rotate-12 transition-transform duration-1000" />

              <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-4">
                <span className="w-10 h-[1px] bg-[#BC6C25]"></span>
                Fasilitas Kami
              </h3>

              <ul className="grid grid-cols-1 gap-6">
                {[
                  "Area Lesehan Gazebo (Saung)",
                  "Mushola & Area Parkir Luas",
                  "Live Music Kecapi Suling",
                  "Ruang VIP Ber-AC",
                ].map((fasilitas, idx) => (
                  <li key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-2 h-2 bg-[#BC6C25] rotate-45 group-hover/item:scale-150 transition-transform"></div>
                    <span className="text-sm tracking-widest uppercase font-light group-hover/item:translate-x-2 transition-transform">
                      {fasilitas}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-dashed border-[#BC6C25] p-8 text-center">
              <p className="font-serif italic text-[#3D2B1F] mb-4">
                Makan di saung, ditemani suara air, serasa pulang ke kampung
                halaman.
              </p>
              <GiManualMeatGrinder className="mx-auto text-4xl text-[#BC6C25] opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;

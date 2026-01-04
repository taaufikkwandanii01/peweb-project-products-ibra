import React from "react";
import "animate.css";
import {
  FaLongArrowAltRight,
  FaMapMarkedAlt,
  FaClock,
  FaPhoneAlt,
} from "react-icons/fa";

const HomeView = () => {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image dengan Parallax-like effect */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?q=80&w=2000')`,
          }}
        >
          {/* Overlay Gradasi & Vignette untuk kesan dramatis */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a110a]/80 via-[#1a110a]/40 to-[#1a110a]/90"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
        </div>

        {/* Floating Decoration (Bambu/Daun secara abstrak) */}
        <div className="absolute top-20 left-10 opacity-10 hidden lg:block animate-pulse">
          <img
            src="https://www.transparentpng.com/download/bamboo/pX9p5O-bamboo-png-transparent-image.png"
            width="200"
            alt="deco"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate__animated animate__fadeInDown">
            <span className="inline-block px-6 py-2 bg-[#BC6C25]/20 border border-[#BC6C25] text-[#D4A373] uppercase tracking-[0.5em] text-[10px] md:text-xs mb-8 backdrop-blur-sm">
              Warisan Rasa Sejak 1985
            </span>
          </div>

          <h1 className="animate__animated animate__fadeInUp animate__delay-1s font-serif text-6xl md:text-9xl font-black text-[#FDF8F1] leading-[0.85] mb-8 drop-shadow-2xl">
            RASA <br />
            <span className="italic font-light text-[#D4A373] font-serif">
              SUNDA
            </span>
          </h1>

          <div className="animate__animated animate__fadeInUp animate__delay-2s flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-[#BC6C25]"></div>
            <p className="text-[#EAE2B7] text-sm md:text-lg tracking-widest uppercase font-light">
              Nu Geus Kakoncara ka Janapria
            </p>
            <div className="h-[1px] w-12 bg-[#BC6C25]"></div>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-3s flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-[#BC6C25] text-white px-12 py-5 overflow-hidden transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
              <span className="relative z-10 flex items-center gap-3 font-bold uppercase tracking-widest text-sm">
                Jelajahi Menu{" "}
                <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#8B4513] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>

            <button className="px-12 py-5 border border-[#FDF8F1]/50 text-[#FDF8F1] active:scale-95 transition-transform uppercase tracking-widest text-sm font-bold">
              Reservasi Meja
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
          <span className="text-[#D4A373] text-[10px] uppercase tracking-[0.3em] rotate-90 mb-10">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4A373] to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;

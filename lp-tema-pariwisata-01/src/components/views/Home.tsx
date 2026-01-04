"use client";

import { FaArrowDown } from "react-icons/fa";

export default function HomeView() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 1. Background Image dengan Filter Vintage */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center scale-110 animate-[ken-burns_20s_ease_infinite]">
        {/* Overlay Gradasi Warna Rusty ke Gelap */}
        <div className="absolute inset-0 bg-gradient-to-b from-driftwood/60 via-driftwood/40 to-driftwood/80 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
      </div>

      {/* 2. Film Grain Texture Overlay (Opsional namun memperkuat tema) */}
      <div className="absolute inset-0 z-10 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* 3. Main Content */}
      <div className="relative z-20 text-center px-6">
        <div className="animate__animated animate__fadeIn">
          <span className="text-sand/70 text-xs md:text-sm uppercase tracking-[0.8em] font-bold mb-4 block">
            Discover the Heritage of
          </span>

          <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-9xl font-serif text-sand font-bold uppercase leading-none tracking-tighter drop-shadow-2xl">
              Golden <br />
              <span className="italic text-rusty animate__animated animate__fadeInUp animate__delay-1s inline-block mt-2">
                Shore
              </span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center gap-4 my-8 w-full max-w-xs animate__animated animate__zoomIn animate__delay-2s">
              <div className="h-[1px] flex-grow bg-sand/30"></div>
              <div className="w-2 h-2 rotate-45 bg-rusty"></div>
              <div className="h-[1px] flex-grow bg-sand/30"></div>
            </div>

            <p className="max-w-md text-sand/80 font-serif italic text-lg md:text-xl leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
              Di mana pasir menceritakan rahasia masa lalu dan ombak membawa
              kenangan abadi.
            </p>

            {/* Button CTA Vintage */}
            <div className="mt-10 animate__animated animate__fadeInUp animate__delay-3s">
              <a
                href="#about"
                className="group relative inline-flex items-center gap-3 px-8 py-4 border border-sand/30 text-sand uppercase tracking-widest text-xs font-bold hover:bg-sand hover:text-driftwood transition-all duration-500 shadow-xl"
              >
                Explore Archives
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Decorative Info */}
      <div className="absolute bottom-10 left-10 hidden md:block z-20 animate__animated animate__fadeInLeft animate__delay-4s">
        <p
          className="text-sand/40 text-[10px] tracking-[0.4em] uppercase vertical-text transform -rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          Latitude -8.4095 • Longitude 115.1889
        </p>
      </div>

      <div className="absolute bottom-10 right-10 z-20 animate__animated animate__fadeInRight animate__delay-4s text-right">
        <p className="text-sand/60 text-xs uppercase tracking-widest font-bold">
          Est. 1924
        </p>
        <p className="text-rusty text-[10px] uppercase tracking-widest">
          Nautical Heritage
        </p>
      </div>

      {/* Custom Keyframe untuk Ken Burns Effect */}
      <style jsx>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

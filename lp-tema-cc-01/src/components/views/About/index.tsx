// components/views/About/index.tsx
import { FaQuoteLeft, FaFire, FaGlobeAmericas } from "react-icons/fa";

const AboutView = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Box 1: Short Intro */}
          <div
            data-aos="fade-up"
            className="md:col-span-8 bg-slate-900/50 backdrop-blur-md border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-center"
          >
            <FaQuoteLeft className="text-cyan-500 text-4xl mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Saya percaya bahwa video 15 detik bisa mengubah cara seseorang
              melihat dunia.
            </h3>
            <p className="mt-6 text-slate-400 text-lg">
              Berbasis di Jakarta, saya mengeksplorasi perpaduan antara
              sinematografi dan tren viral untuk menciptakan dampak nyata bagi
              brand.
            </p>
          </div>

          {/* Box 2: Stats Highlight */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="md:col-span-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-[2.5rem] p-8 text-white flex flex-col justify-between items-center text-center"
          >
            <FaFire className="text-5xl animate-bounce" />
            <div>
              <h4 className="text-5xl font-black">100M+</h4>
              <p className="text-white/80 uppercase text-xs tracking-[0.2em] font-bold mt-2">
                Annual Views
              </p>
            </div>
            <div className="w-full h-[1px] bg-white/20 my-4"></div>
            <p className="text-sm italic">"Trendsetter of the Year 2024"</p>
          </div>

          {/* Box 3: Reach (Map Style) */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="md:col-span-4 bg-slate-900/50 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center group"
          >
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <FaGlobeAmericas size={30} />
            </div>
            <h4 className="text-white font-bold text-xl">Global Reach</h4>
            <p className="text-slate-500 text-sm mt-2">
              Konten saya telah ditonton di lebih dari 15 negara.
            </p>
          </div>

          {/* Box 4: Collaboration Motto */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="md:col-span-8 bg-white rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-black leading-none mb-4">
                SIAP UNTUK BERKOLABORASI?
              </h3>
              <p className="text-slate-600">
                Mari ciptakan sesuatu yang akan dibicarakan semua orang besok
                pagi.
              </p>
            </div>
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;

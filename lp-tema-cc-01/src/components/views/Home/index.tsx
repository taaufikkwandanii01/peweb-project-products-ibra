import { FaTiktok, FaArrowRight } from "react-icons/fa";

const HomeView = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050505] flex items-center justify-center pt-30 pb-20 md:pt-20 px-6 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl w-full z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          {/* Sisi Kiri: Deskripsi Ringkas */}
          <div
            className="lg:w-1/3 text-center lg:text-left order-2 lg:order-1"
            data-aos="fade-right"
          >
            <h2 className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-sm mb-4">
              Digital Identity
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Membangun narasi visual melalui video pendek yang dirancang untuk
              audiens masa kini. Berfokus pada kualitas, bukan sekadar
              kuantitas.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-[1px] w-12 bg-slate-700"></div>
                <span className="text-white font-bold italic">
                  FYP Specialist
                </span>
              </div>
              <button
                onClick={() => (window.location.hash = "#social")}
                className="group flex items-center justify-center lg:justify-start gap-3 text-white hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <span>See My Analytics</span>
                <FaArrowRight
                  size={12}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Sisi Tengah: Main Visual (The Portrait) */}
          <div className="lg:w-1/3 relative" data-aos="zoom-in">
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Profile"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-0 right-0 text-center">
                <FaTiktok className="mx-auto text-3xl text-white mb-2 animate-pulse" />
                <span className="text-white/60 tracking-widest text-[10px] uppercase">
                  @thecreator_id
                </span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Headline Besar */}
          <div
            className="lg:w-1/3 order-1 lg:order-3 text-center lg:text-left"
            data-aos="fade-left"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white leading-none tracking-tighter">
              BEYOND <br />
              {/* Perbaikan: Menggunakan Tailwind class untuk text-stroke */}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
              >
                LIMITS.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;

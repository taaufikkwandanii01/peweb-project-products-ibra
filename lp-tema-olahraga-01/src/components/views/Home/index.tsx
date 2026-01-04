import Button from "../../ui/Button";
import "animate.css";

const HomeView = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black pt-24 pb-12 lg:pt-32 overflow-hidden"
    >
      {/* 1. Dekorasi Watermark - Dioptimalkan posisinya */}
      <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 text-[18vw] font-black text-white/[0.02] italic leading-none select-none pointer-events-none hidden xl:block uppercase">
        Striker
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8">
          {/* 2. Sisi Kanan (Mobile First: Muncul di atas pada layar HP) */}
          <div className="order-1 lg:order-2 relative flex justify-center animate__animated animate__fadeInRight">
            <div className="relative w-full max-w-[320px] md:max-w-[450px] lg:max-w-[500px]">
              {/* Bingkai Aksen */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-yellow-400/20 z-0"></div>

              {/* Image dengan Shadow yang lebih soft */}
              <div className="relative z-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000"
                  alt="Player Hero"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out transform hover:scale-105"
                />
              </div>

              {/* Badge - Dibuat responsif agar tidak menghalangi wajah di mobile */}
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 p-3 md:p-5 z-20 shadow-xl rotate-[-3deg] hidden sm:block">
                <p className="text-black font-black text-lg md:text-2xl italic uppercase leading-none">
                  Top Scorer
                </p>
                <p className="text-black text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] mt-1">
                  Season 2024/25
                </p>
              </div>
            </div>
          </div>

          {/* 3. Sisi Kiri: Konten Teks */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-5xl md:text-7xl xl:text-9xl font-black uppercase leading-[0.85] text-white italic tracking-tighter">
              Your <br />
              <span className="text-outline block mt-2">Name</span>
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 sm:px-0">
              <Button className="w-full sm:w-auto px-8 py-4">
                Watch Highlights
              </Button>
              <Button variant="outline" className="w-full sm:w-auto px-8 py-4">
                Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Shadow Overlay untuk transisi ke section berikutnya */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
    </section>
  );
};

export default HomeView;

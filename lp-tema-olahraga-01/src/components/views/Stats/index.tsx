import "animate.css";

const StatsView = () => {
  const stats = [
    { label: "Appearances", value: "35", unit: "Games" },
    { label: "Goals Scored", value: "28", unit: "Total" },
    { label: "Assists", value: "12", unit: "Passes" },
    { label: "Top Speed", value: "36.2", unit: "KM/H" },
  ];

  return (
    <section id="stats" className="py-24 bg-black relative overflow-hidden">
      {/* 1. Background Watermark - Angka 10 Raksasa */}
      <div className="absolute -left-10 bottom-0 text-[30rem] font-black text-white/[0.02] italic leading-none select-none pointer-events-none">
        10
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header dengan Style Majalah Olahraga */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center animate__animated animate__fadeInLeft">
            <h3 className="text-4xl md:text-7xl font-black uppercase italic leading-none text-white">
              Season <span className="text-outline">Stats</span>
            </h3>
          </div>
          <div className="hidden md:block text-right animate__animated animate__fadeInRight">
            <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">
              Last Updated: <br /> Dec 2025
            </p>
          </div>
        </div>

        {/* 2. Stats Grid - Responsive & Modern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black p-10 md:p-12 flex flex-col items-center text-center group hover:bg-neutral-900 transition-all duration-500"
            >
              {/* Dekorasi Garis Kuning Kecil */}
              <div className="w-0 group-hover:w-12 h-[2px] bg-yellow-400 transition-all duration-500 mb-6"></div>

              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-6xl md:text-7xl font-black italic text-white group-hover:text-yellow-400 transition-colors duration-500">
                  {stat.value}
                </p>
              </div>

              <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-black text-neutral-500 mb-1">
                {stat.label}
              </p>
              <p className="text-[9px] font-bold text-yellow-400/50 uppercase tracking-widest">
                {stat.unit}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Footer Stats - Decorative Line */}
        <div className="mt-16 flex items-center gap-4 opacity-20">
          <div className="flex-1 h-[1px] bg-white"></div>
          <div className="w-2 h-2 bg-yellow-400 rotate-45"></div>
          <div className="flex-1 h-[1px] bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsView;

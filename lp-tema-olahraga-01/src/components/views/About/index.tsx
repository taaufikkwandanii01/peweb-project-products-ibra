import "animate.css";

const AboutView = () => {
  const skills = [
    { name: "Speed", value: "98" },
    { name: "Finishing", value: "95" },
    { name: "Physical", value: "92" },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-black overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Sisi Gambar - Dibuat Full Width di Mobile */}
          <div className="w-full lg:w-1/2 relative animate__animated animate__fadeInLeft">
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-video lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000"
                alt="Training Session"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />

              {/* Overlay untuk Mobile agar teks di bawahnya lebih enak dibaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden"></div>
            </div>

            {/* Experience Badge - Posisi disesuaikan agar tidak bocor di mobile */}
            <div className="absolute -bottom-4 right-4 lg:-right-10 lg:bottom-10 bg-yellow-400 px-6 py-8 md:px-10 md:py-12 shadow-2xl z-20 rotate-[3deg]">
              <div className="text-center">
                <span className="text-black font-black text-5xl md:text-7xl italic leading-none tracking-tighter block">
                  10+
                </span>
                <p className="text-black font-black uppercase text-[9px] md:text-[11px] tracking-widest mt-2 border-t border-black/20 pt-2">
                  Years Pro
                </p>
              </div>
            </div>
          </div>

          {/* Sisi Konten - Text Centered di Mobile, Left di Desktop */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 animate__animated animate__fadeInRight">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 italic leading-[0.95] text-white">
              Determined to <br />
              <span className="text-outline block mt-2 lg:mt-0">
                Win Every Duel
              </span>
            </h2>

            <p className="text-neutral-400 text-xs md:text-base leading-relaxed mb-10 uppercase tracking-wide max-w-xl mx-auto lg:mx-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              unde eaque, non consequuntur consectetur quaerat sapiente
              inventore maxime architecto odio in, placeat reprehenderit
              pariatur soluta.
            </p>

            {/* Skill Cards - Responsive Grid 3 Kolom */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-12">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-neutral-900/40 border border-white/5 p-3 md:p-5 hover:border-yellow-400/30 transition-all"
                >
                  <p className="text-[8px] md:text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-1">
                    {skill.name}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl md:text-3xl font-black italic text-white leading-none">
                      {skill.value}
                    </span>
                    <span className="text-[8px] md:text-[10px] font-bold text-neutral-600">
                      PT
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Tambahan - Lebih ramping di mobile */}
            <div className="relative p-2 md:p-6 bg-neutral-900/20 border-l-2 border-yellow-400 italic">
              <p className="text-neutral-300 text-xs md:text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                "Football is not just about scoring; it's about the relentless
                pursuit of perfection in every single match."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;

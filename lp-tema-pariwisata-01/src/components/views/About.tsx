"use client";

import { FaClock, FaHistory, FaMapMarkerAlt } from "react-icons/fa";
import { GiShipWheel } from "react-icons/gi";

export default function AboutView() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-sand">
      {/* Dekorasi Latar Belakang - Roda Kapal Samar */}
      <GiShipWheel className="absolute -top-10 -right-10 text-rusty/5 text-[400px] rotate-12 -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* BAGIAN SEJARAH (Left Content) */}
          <div className="md:col-span-7 animate__animated animate__fadeInLeft">
            <div className="inline-block border-b-4 border-rusty mb-4">
              <span className="text-xs uppercase tracking-[0.5em] font-bold text-rusty/60">
                Established 1924
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-driftwood mb-8 leading-tight">
              A Century of <br />
              <span className="italic text-rusty">Maritime Echoes</span>
            </h2>

            <div className="relative p-1 border border-rusty/30">
              <div className="bg-sand p-6 md:p-10 border border-rusty/30 shadow-inner">
                <FaHistory className="text-4xl text-rusty mb-6 opacity-20" />
                <p className="text-lg leading-relaxed text-driftwood/80 text-justify font-serif italic">
                  Ditemukan pada awal abad ke-19, pantai ini merupakan pelabuhan
                  kecil bagi nelayan lokal sebelum akhirnya menjadi destinasi
                  wisata bagi para bangsawan di tahun 1920-an. Arsitektur
                  sekitarnya tetap mempertahankan gaya kolonial rusty yang
                  ikonik.
                </p>
                <div className="mt-6 flex items-center gap-4 text-rusty">
                  <div className="h-[1px] w-12 bg-rusty"></div>
                  <span className="text-xs uppercase tracking-widest font-bold">
                    The Archives
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BAGIAN JADWAL (Right Content) */}
          <div className="md:col-span-5 animate__animated animate__fadeInRight md:mt-20">
            <div className="bg-driftwood p-1 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-sand p-8 border-2 border-driftwood/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-rusty p-3 rounded-full shadow-lg">
                    <FaClock className="text-sand text-xl" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-driftwood uppercase tracking-tighter">
                    Visiting Hours
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-rusty/30 pb-2 group">
                    <div>
                      <p className="text-xs uppercase font-bold text-rusty">
                        Weekdays
                      </p>
                      <p className="text-xl font-serif text-driftwood">
                        Senin - Jumat
                      </p>
                    </div>
                    <p className="text-lg font-bold text-driftwood group-hover:text-rusty transition-colors">
                      08:00 - 18:00
                    </p>
                  </div>

                  <div className="flex justify-between items-end border-b border-rusty/30 pb-2 group">
                    <div>
                      <p className="text-xs uppercase font-bold text-rusty">
                        Weekend
                      </p>
                      <p className="text-xl font-serif text-driftwood">
                        Sabtu - Minggu
                      </p>
                    </div>
                    <p className="text-lg font-bold text-driftwood group-hover:text-rusty transition-colors">
                      06:00 - 21:00
                    </p>
                  </div>
                </div>

                <div className="mt-10 p-4 bg-rusty/5 border-l-4 border-rusty italic text-sm text-driftwood/70">
                  <p>
                    *Mohon perhatikan pasang surut air laut untuk keselamatan
                    selama berkunjung di area bibir pantai.
                  </p>
                </div>

                {/* Elemen Dekoratif Map Tag */}
                <div className="mt-8 flex items-center gap-2 text-rusty opacity-60">
                  <FaMapMarkerAlt />
                  <span className="text-[10px] uppercase tracking-widest font-bold">
                    North Coast, Java Island
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

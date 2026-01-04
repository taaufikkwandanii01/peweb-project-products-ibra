import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import "animate.css";

const faqs = [
  {
    q: "Apakah bisa booking lewat WhatsApp?",
    a: "Tentu bisa! Anda bisa menekan tombol WhatsApp atau tombol Booking untuk menjadwalkan servis tanpa antre. Tim kami akan mengonfirmasi jadwal Anda dalam hitungan menit.",
  },
  {
    q: "Apakah suku cadang yang digunakan asli?",
    a: "Kami menjamin 100% keaslian suku cadang. Kami hanya menggunakan part original pabrikan (OEM) atau part aftermarket performa tinggi yang sudah teruji kualitasnya.",
  },
  {
    q: "Berapa lama estimasi servis rutin?",
    a: "Servis rutin (Tune Up & Ganti Oli) biasanya memakan waktu 30-45 menit. Jika ada tambahan perbaikan berat, mekanik kami akan memberikan estimasi waktu sebelum pengerjaan dimulai.",
  },
  {
    q: "Apakah ada garansi setelah servis?",
    a: "Setiap pengerjaan di bengkel kami mendapatkan garansi servis selama 7 hari. Jika motor terasa kurang nyaman setelah servis, bawa kembali dan kami cek secara gratis!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-zinc-50 relative overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <FaQuestionCircle />
            <span>Customer Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter">
            Punya <span className="text-orange-600">Pertanyaan?</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-lg">
            Kami merangkum pertanyaan yang paling sering diajukan untuk membantu
            Anda.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-[2rem] border ${
                  isOpen
                    ? "bg-white border-orange-200 shadow-xl shadow-orange-100/50"
                    : "bg-white border-zinc-200 hover:border-orange-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left"
                >
                  <span
                    className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                      isOpen ? "text-orange-600" : "text-zinc-800"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-orange-600 text-white rotate-180"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    <FaChevronDown size={14} />
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8">
                    <div className="pt-6 border-t border-zinc-100 text-zinc-600 leading-relaxed text-lg animate__animated animate__fadeInUp animate__faster">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-zinc-900 rounded-[2.5rem] text-center md:flex md:items-center md:justify-between md:text-left">
          <div>
            <h4 className="text-white font-bold text-xl">
              Masih belum menemukan jawaban?
            </h4>
            <p className="text-zinc-400 mt-1">
              Tim kami siap membantu Anda secara langsung via chat.
            </p>
          </div>
          <a
            href="https://wa.me/your-number"
            className="mt-6 md:mt-0 inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold transition-transform active:scale-95 shadow-lg shadow-orange-900/20"
          >
            Hubungi Tim Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

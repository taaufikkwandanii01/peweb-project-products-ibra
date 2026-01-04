import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { GiFountainPen } from "react-icons/gi";
import "animate.css";

const ContactView = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#FDF8F1] py-24 px-6 overflow-hidden"
    >
      {/* Ornamen Background - Cap Stamp Vintage */}
      <div className="absolute -bottom-20 -left-20 opacity-5 pointer-events-none rotate-12">
        <FaEnvelopeOpenText className="text-[400px] text-[#3D2B1F]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Sisi Kiri: Kontak & Deskripsi */}
          <div className="lg:col-span-2 space-y-8 animate__animated animate__fadeInLeft">
            <div>
              <h2 className="font-serif text-5xl font-black text-[#3D2B1F] leading-tight mb-4">
                Pesan <br />
                <span className="text-[#BC6C25] italic font-light">Tempat</span>
              </h2>
              <div className="h-1 w-20 bg-[#BC6C25] mb-6"></div>
              <p className="text-[#5E4B3C] font-light leading-relaxed">
                Ingin merayakan momen spesial atau sekadar makan siang keluarga?
                Kabari kami lebih awal agar saung terbaik siap menyambut Anda.
              </p>
            </div>

            {/* Social Media - Gaya Stamp */}
            <div className="space-y-4">
              <p className="font-serif italic text-sm text-[#BC6C25] uppercase tracking-widest">
                Ikuti Kabar Kami
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <FaInstagram />, href: "#" },
                  { icon: <FaWhatsapp />, href: "#" },
                  { icon: <FaFacebook />, href: "#" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="w-12 h-12 flex items-center justify-center border-2 border-[#D4A373] text-[#D4A373] text-xl hover:bg-[#BC6C25] hover:border-[#BC6C25] hover:text-white transition-all duration-300 transform hover:-rotate-12"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Form Reservasi (Gira Kertas Tua) */}
          <div className="lg:col-span-3 animate__animated animate__fadeInRight">
            <div className="bg-[#F4EBD0] p-8 md:p-12 shadow-[30px_30px_60px_rgba(0,0,0,0.1)] relative border-l-[12px] border-[#3D2B1F]">
              {/* Tekstur Kertas Bergaris */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <h3 className="font-serif text-2xl font-bold text-[#3D2B1F]">
                    Nota Reservasi
                  </h3>
                  <GiFountainPen className="text-3xl text-[#BC6C25] opacity-50" />
                </div>

                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Siapa nama Anda?"
                        className="w-full bg-transparent border-b-2 border-[#3D2B1F]/20 py-2 focus:border-[#BC6C25] outline-none text-[#3D2B1F] font-serif transition-colors placeholder:italic placeholder:text-[#3D2B1F]/40"
                      />
                      <label className="text-[10px] uppercase tracking-widest text-[#BC6C25] font-bold mt-1 block">
                        Nama Pemesan
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Berapa jiwa?"
                        className="w-full bg-transparent border-b-2 border-[#3D2B1F]/20 py-2 focus:border-[#BC6C25] outline-none text-[#3D2B1F] font-serif transition-colors placeholder:italic placeholder:text-[#3D2B1F]/40"
                      />
                      <label className="text-[10px] uppercase tracking-widest text-[#BC6C25] font-bold mt-1 block">
                        Jumlah Tamu
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Tuliskan permintaan khusus Anda di sini..."
                      rows={3}
                      className="w-full bg-transparent border-b-2 border-[#3D2B1F]/20 py-2 focus:border-[#BC6C25] outline-none text-[#3D2B1F] font-serif transition-colors placeholder:italic placeholder:text-[#3D2B1F]/40 resize-none"
                    ></textarea>
                    <label className="text-[10px] uppercase tracking-widest text-[#BC6C25] font-bold mt-1 block">
                      Catatan Tambahan
                    </label>
                  </div>

                  <button className="group relative w-full bg-[#3D2B1F] text-[#FDF8F1] py-4 overflow-hidden transition-all duration-500 shadow-lg">
                    <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-xs">
                      Kirim Undangan Reservasi
                    </span>
                    <div className="absolute inset-0 bg-[#BC6C25] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </form>

                <p className="mt-8 text-center text-[10px] text-[#3D2B1F]/40 uppercase tracking-[0.2em]">
                  * Kami akan menghubungi Anda via WhatsApp untuk konfirmasi
                  meja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactView;

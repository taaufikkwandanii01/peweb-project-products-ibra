import { FaMapMarkerAlt, FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";
import Button from "@/components/ui/Button";

const Lokasi = () => {
  const [copied, setCopied] = useState(false);
  const alamat = "Jl. Alamat Bengkel Anda";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(alamat);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lokasi" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Informasi Lokasi */}
          <div className="lg:w-2/5 space-y-8 animate__animated animate__fadeInLeft">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mt-6 tracking-tighter leading-tight">
                Kunjungi Bengkel <br />
                <span className="text-orange-600">Kami</span>
              </h2>
              <p className="text-zinc-500 mt-6 text-lg leading-relaxed">
                Kami berlokasi di area strategis yang mudah diakses dari segala
                penjuru kota. Nikmati fasilitas ruang tunggu premium sambil
                motor Anda kami tangani.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-zinc-50 p-8 rounded-[2.5rem] border border-zinc-100 space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-200">
                    <FaMapMarkerAlt size={28} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-zinc-900 text-xl">
                      Alamat Lengkap
                    </h4>
                    <p className="text-zinc-600 leading-relaxed">{alamat}</p>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl cursor-pointer ${
                    copied
                      ? "bg-green-500 text-white shadow-green-100"
                      : "bg-zinc-900 text-white hover:bg-orange-600 shadow-zinc-200"
                  }`}
                >
                  {copied ? (
                    <>
                      <FaCheck className="animate__animated animate__zoomIn" />
                      Berhasil Disalin
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      Salin Alamat Lengkap
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:w-3/5 w-full h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-zinc-200 border-[12px] border-zinc-50 relative group animate__animated animate__fadeInRight">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.20948332468!2d106.7891544!3d-6.287232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1f0a8c2d5d1%3A0x6b4506307372a441!2sBlok%20M%20Square!5e0!3m2!1sid!2sid!4v1703750000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.4] contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>

            {/* Overlay Info on Map */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/50 hidden md:flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-zinc-800 font-semibold text-sm">
                Buka Maps untuk Navigasi Real-time
              </span>
              <a
                href="https://goo.gl/maps/..."
                target="_blank"
                className="text-orange-600 font-bold text-sm hover:underline"
              >
                Klik di sini
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lokasi;

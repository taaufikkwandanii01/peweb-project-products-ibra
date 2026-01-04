import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C1E16] text-[#EAE2B7] pt-16 pb-8 border-t-2 border-[#D4A373]/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Kolom 1: Brand & Filosofi */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-bold tracking-tighter text-[#D4A373]">
            PARAHYANGAN <span className="text-[#BC6C25]">RUSTIC</span>
          </h3>
          <p className="text-sm leading-relaxed font-light italic opacity-80">
            Mulas rasa, ngolah basa, nyambung rasa melalui hidangan tradisi
            Sunda yang otentik. Kami menjaga warisan leluhur dalam setiap bumbu
            yang kami sajikan.
          </p>
          <div className="flex gap-4 text-xl">
            <Link href="#" className="hover:text-[#BC6C25] transition-colors">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-[#BC6C25] transition-colors">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-[#BC6C25] transition-colors">
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-[#D4A373]/30 pb-2 inline-block">
            Navigasi
          </h4>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <Link href="/" className="hover:text-[#D4A373] transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#D4A373] transition">
                Tentang Kami & Menu
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#D4A373] transition">
                Galeri Foto
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#D4A373] transition">
                Kontak & Reservasi
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak & Jam Operasional */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-[#D4A373]/30 pb-2 inline-block">
            Hubungi Kami
          </h4>
          <div className="space-y-4 text-sm font-light">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#BC6C25]" />
              <p>
                Jl. Raya Parahyangan No. 45, <br />
                Kabupaten Bandung Barat, Jawa Barat
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#BC6C25]" />
              <p>+62 22 1234 5678</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#BC6C25]" />
              <p>info@parahyanganrustic.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Garis Pemisah & Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#D4A373]/10 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50">
          © {currentYear} Parahyangan Rustic. All Rights Reserved.{" "}
          <br className="md:hidden" />
          Dibuat dengan ❤️ di Tanah Pasundan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

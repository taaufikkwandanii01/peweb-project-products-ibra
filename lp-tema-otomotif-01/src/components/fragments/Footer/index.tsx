import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMotorcycle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400">
      {/* Upper Footer: CTA Box */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="bg-orange-600 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-orange-900/20 translate-y-8">
          <div className="text-center md:text-left">
            <h3 className="text-white text-3xl font-black tracking-tight">
              Butuh Servis Darurat?
            </h3>
            <p className="text-orange-100 mt-2 text-lg">
              Hubungi tim mekanik kami sekarang untuk bantuan cepat.
            </p>
          </div>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-100 transition-all active:scale-95 flex items-center gap-3 shadow-xl"
          >
            <FaWhatsapp size={24} />
            Chat WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-8">
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-default">
              <div className="bg-orange-600 p-2.5 rounded-2xl text-white shadow-lg shadow-orange-900/20 group-hover:rotate-6 transition-transform duration-300">
                <FaMotorcycle size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">
                  NAMA<span className="text-orange-600">BENGKEL</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Bengkel motor modern dengan standarisasi kualitas tinggi. Kami
              hadir untuk memastikan keamanan dan kenyamanan berkendara Anda
              melalui perawatan mesin yang presisi.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {[
                { Icon: FaInstagram, link: "#", label: "Instagram" },
                { Icon: FaFacebook, link: "#", label: "Facebook" },
                { Icon: FaWhatsapp, link: "#", label: "Whatsapp" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-2xl text-zinc-400 hover:bg-orange-600 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-zinc-800/50 shadow-sm"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-l-4 border-orange-600 pl-3">
              Kontak Kami
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 shrink-0 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <FaMapMarkerAlt className="text-orange-600 group-hover:text-white" />
                </div>
                <span>Jl. Alamat Bengkel Anda</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 shrink-0 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <FaPhoneAlt className="text-orange-600 group-hover:text-white" />
                </div>
                <span>(021) 555-0123</span>
              </li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 shrink-0 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <FaEnvelope className="text-orange-600 group-hover:text-white" />
                </div>
                <span>example@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Operational Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-[2rem] border border-zinc-800 shadow-inner">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-60 text-center">
              Jam Operasional
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-sm font-medium">Senin - Sabtu</span>
                <span className="text-white font-bold tracking-tight">
                  08:00 - 17:00
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-sm font-medium">Minggu</span>
                <span className="text-white font-bold tracking-tight">
                  09:00 - 15:00
                </span>
              </div>
              <div className="pt-2">
                <span className="block text-center text-[11px] font-bold text-orange-500 uppercase tracking-tighter">
                  Hari Libur Nasional Tetap Buka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] opacity-60">
          <p>&copy; {currentYear} NamaBengkel Workshop. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

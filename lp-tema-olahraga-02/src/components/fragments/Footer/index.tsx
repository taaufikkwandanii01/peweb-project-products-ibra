import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 py-6 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* SISI KIRI: Brand & Status */}
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold tracking-tight text-white">
              <span className="text-emerald-400">PLAYER</span>NAME
            </h3>
            <span className="hidden md:block w-[1px] h-4 bg-gray-800"></span>
            <p className="hidden md:block text-[11px] uppercase tracking-[0.2em] text-gray-500">
              Official Website
            </p>
          </div>

          {/* TENGAH: Social Media (Minimalis) */}
          <div className="flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-500 hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* SISI KANAN: Copyright */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-500">
            <span>© {currentYear}</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500/80" /> by PlayerName
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

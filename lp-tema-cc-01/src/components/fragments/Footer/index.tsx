import { FaInstagram, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black tracking-tighter mb-2">
              CREATOR<span className="text-cyan-400">.</span>CO
            </h2>
            <p className="text-slate-500 text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Social Links - Simple & Clean */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="mailto:hello@creator.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Minimalist Nav */}
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#social" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

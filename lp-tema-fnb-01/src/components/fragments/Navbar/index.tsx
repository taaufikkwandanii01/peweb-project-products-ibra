import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiBamboo, GiLotus } from "react-icons/gi";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Riwayat & Jamuan", href: "#about" },
    { name: "Galeri", href: "#gallery" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-10 py-4">
      {/* Container Utama */}
      <div className="max-w-7xl h-20 mx-auto bg-[#3D2B1F] border-b-4 border-[#261910] shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Dekorasi Tekstur Kayu */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>

        <div className="flex justify-between items-center px-6 py-4 relative z-10">
          {/* Brand Emblem */}
          <Link
            href="/"
            className="flex flex-col items-center border-2 border-[#D4A373]/30 px-4 py-1 rotate-[-1deg] bg-[#2C1E16] active:scale-95 transition-transform"
          >
            <span className="font-serif text-xl md:text-2xl font-black tracking-tighter text-[#D4A373] leading-none uppercase">
              Parahyangan
            </span>
            <div className="flex items-center gap-2 w-full">
              <div className="h-[1px] bg-[#BC6C25] flex-grow"></div>
              <span className="text-[#BC6C25] text-[8px] md:text-[9px] tracking-[0.3em] font-bold uppercase italic">
                Rustic
              </span>
              <div className="h-[1px] bg-[#BC6C25] flex-grow"></div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-[#EAE2B7] font-serif text-sm font-medium tracking-widest hover:text-[#BC6C25] transition-all duration-300 uppercase relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#BC6C25] group-hover:w-full transition-all"></span>
                </Link>
                {index !== navLinks.length - 1 && (
                  <GiBamboo className="ml-8 text-[#261910] text-xl opacity-40" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle Button - Custom Styled */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center bg-[#2C1E16] border border-[#D4A373]/50 rounded-sm text-[#D4A373]"
          >
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY - REDESIGNED */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-700 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop Backdrop Blur */}
        <div
          className="absolute inset-0 bg-[#1a110a]/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content - Seperti Kertas Tua */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-[#FDF8F1] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out border-l-8 border-[#BC6C25] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Tekstur Kertas Tua */}
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]"></div>

          <div className="relative z-10 h-full flex flex-col p-8 justify-center">
            {/* Ornamen Atas */}
            <div className="absolute top-10 left-0 right-0 flex justify-center opacity-20">
              <GiLotus className="text-6xl text-[#3D2B1F]" />
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-4 transition-all ${
                    isOpen ? "animate__animated animate__fadeInRight" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-[#BC6C25] font-serif text-lg opacity-50 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  <span className="text-[#3D2B1F] text-2xl font-serif font-bold tracking-tighter hover:text-[#BC6C25] transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Footer Menu Mobile */}
            <div className="absolute bottom-12 left-8 right-8 border-t border-[#3D2B1F]/10 pt-6">
              <p className="text-[#3D2B1F]/60 text-[10px] uppercase tracking-widest mb-4 italic text-center">
                ~ Sampurasun ~
              </p>
              <button className="w-full bg-[#3D2B1F] text-[#FDF8F1] py-3 text-xs font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-all">
                Reservasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

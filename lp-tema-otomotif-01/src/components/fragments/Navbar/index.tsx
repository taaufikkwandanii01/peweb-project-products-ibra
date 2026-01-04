import { useState, useEffect } from "react";
import { FaMotorcycle, FaBars, FaTimes } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Menangani perubahan warna saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Mencegah Scroll saat Mobile Menu Terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "#layanan" },
    { name: "Galeri", href: "#galeri" },
    { name: "Lokasi", href: "#lokasi" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
        // Jika scroll ke bawah ATAU menu mobile dibuka, background jadi solid putih
        isScrolled || isMobileMenuOpen
          ? "py-5 bg-white shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer relative z-[101]">
          <div className="bg-orange-600 p-2 rounded-xl text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-200">
            <FaMotorcycle size={24} />
          </div>
          <Link href="/">
            <span className="text-2xl font-black tracking-tighter text-zinc-900 uppercase">
              Nama<span className="text-orange-600">Bengkel</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-100/50 p-1.5 rounded-full border border-zinc-200/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-semibold text-zinc-600 hover:text-orange-600 hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-[101]">
          <Button
            variant="primary"
            className="hidden md:block shadow-orange-200/50 hover:shadow-orange-300 cursor-pointer"
          >
            Chat Admin
          </Button>

          <button
            className="md:hidden text-zinc-900 p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[99] p-8 pt-28 transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-bold text-zinc-800 hover:text-orange-600 transition-all ${
                isMobileMenuOpen ? "animate__animated animate__fadeInUp" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
          <div
            className={`mt-8 ${
              isMobileMenuOpen ? "animate__animated animate__fadeInUp" : ""
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              variant="primary"
              className="w-full py-5 text-xl rounded-2xl shadow-xl shadow-orange-100"
            >
              Chat Admin
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

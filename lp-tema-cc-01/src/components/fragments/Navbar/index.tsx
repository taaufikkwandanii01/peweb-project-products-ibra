import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Socials", href: "#social" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled ? "py-4" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex justify-between items-center px-6 py-4 rounded-full transition-all duration-500 border-2 ${
            isScrolled
              ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white">
            CREATOR<span className="text-cyan-400">.</span>CO
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button (Desktop) */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-white text-black text-xs font-black rounded-full hover:bg-cyan-400 transition-colors cursor-pointer">
              LET'S TALK
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white">
            <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[-1] transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-4xl font-black text-white hover:text-cyan-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button className="mt-4 px-10 py-4 bg-cyan-500 text-white font-bold rounded-full">
          LET'S TALK
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

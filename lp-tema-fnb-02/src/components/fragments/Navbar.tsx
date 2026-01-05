import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Media", href: "#media" },
    { name: "Kontak", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 ${
          scrolled ? "py-3" : "py-3"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl border border-white/20 ${
            scrolled
              ? "bg-white/80 backdrop-blur-lg shadow-xl"
              : "bg-transparent backdrop-blur-md shadow-sm"
          }`}
        >
          <div className="px-6 flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick("#hero")}
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <span className="text-xl md:text-2xl">🔥</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent leading-none">
                  MARTABAK GACOR
                </h1>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-[10px] font-bold text-gray-500 tracking-tighter uppercase">
                    Premium Quality
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center bg-gray-100/50 p-1.5 rounded-2xl border border-gray-200/50">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-5 py-2 text-gray-600 hover:text-orange-600 hover:bg-white rounded-xl transition-all duration-300 font-bold text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center">
              <div className="bg-orange-100 rounded-xl">
                <Hamburger
                  toggled={isOpen}
                  toggle={setIsOpen}
                  size={20}
                  color="#ea580c"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-[-1] transition-all duration-500 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-500 transform ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left p-4 rounded-2xl hover:bg-orange-50 text-gray-700 font-bold flex items-center justify-between group border"
                >
                  {link.name}
                  <div className="w-2 h-2 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

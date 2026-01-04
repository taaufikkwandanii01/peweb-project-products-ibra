import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { FaFutbol } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["hero", "about", "career", "stats", "media"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Career", href: "#career" },
    { name: "Stats", href: "#stats" },
    { name: "Media", href: "#media" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-950/95 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Enhanced Design */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <FaFutbol className="text-white text-xl animate-spin-slow" />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold uppercase">
                  <span className="text-emerald-400">Your</span>
                  <span className="text-white ml-1">Name</span>
                </div>
                <div className="text-xs text-gray-400 font-medium tracking-wider">
                  PROFESSIONAL PLAYER
                </div>
              </div>
            </button>

            {/* Desktop Menu - Enhanced */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-gray-800">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm ${
                      activeSection === link.href.slice(1)
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {activeSection === link.href.slice(1) && (
                      <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/50" />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <div className="lg:hidden">
              <div
                className={`relative z-50 ${
                  isOpen ? "fixed right-4 top-5" : ""
                }`}
              >
                <div
                  className={`${isOpen ? "bg-gray-900 rounded-full p-1" : ""}`}
                >
                  <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                    color={isOpen ? "#10b981" : "#fff"}
                    size={22}
                    rounded
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced Design */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gray-950/98 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center space-y-2 px-8 w-full max-w-md">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                className={`w-full group transition-all duration-300 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                <div
                  className={`relative px-8 py-4 rounded-xl transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30"
                      : "bg-gray-900/50 hover:bg-gray-800/70 border border-gray-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xl font-semibold transition-colors duration-300 ${
                        activeSection === link.href.slice(1)
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`text-2xl transition-transform duration-300 ${
                        activeSection === link.href.slice(1)
                          ? "text-white translate-x-0"
                          : "text-gray-600 -translate-x-2 group-hover:translate-x-0 group-hover:text-emerald-400"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Social Links - Optional */}
          <div className="absolute bottom-12 flex items-center gap-6">
            <div className="w-12 h-0.5 bg-gray-700" />
            <span className="text-gray-500 text-sm font-medium tracking-wider">
              FOLLOW ME
            </span>
            <div className="w-12 h-0.5 bg-gray-700" />
          </div>
        </div>
      </div>

      {/* Custom CSS for slow spin animation */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["Home", "About", "Stats", "Media", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 py-2 flex justify-between items-center ${
          scrolled ? "bg-black/80 backdrop-blur-xl py-4" : "bg-transparent py-4"
        }`}
      >
        {/* Logo Section */}
        <div className="relative z-[110] select-none">
          <h1 className="text-xl md:text-2xl font-black italic tracking-tighter text-white uppercase flex items-center gap-2">
            Your<span className="text-yellow-400">Name</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-10 font-bold uppercase text-[10px] tracking-[0.4em] text-white/70">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-all duration-300 relative group"
              >
                {item}
                {/* Animated Underline */}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger (Mobile Toggle) */}
        <div className="md:hidden relative z-[110]">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            color={isOpen ? "#fbbf24" : "#ffffff"}
            duration={0.4}
          />
        </div>

        {/* Mobile Fullscreen Overlay */}
        <div
          className={`fixed inset-0 min-h-screen w-full flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden bg-black z-[105] ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          }`}
        >
          {/* Background Decorative Text inside Menu */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <span className="text-[30vw] font-black italic uppercase">
              MENU
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`text-4xl font-black uppercase italic tracking-tighter text-white hover:text-yellow-400 transition-all duration-300 ${
                  isOpen ? "animate__animated animate__fadeInUp" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

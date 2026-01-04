"use client";

import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaAnchor, FaTimes, FaCompass, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Logic untuk scroll effect dan body lock
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home", sub: "Starting Point" },
    { name: "History", href: "#about", sub: "Our Legacy" },
    { name: "Destination", href: "#destination", sub: "Charted Places" },
    { name: "Gallery", href: "#gallery", sub: "Captured Moments" },
    { name: "Contact", href: "#contact", sub: "Send Message" },
  ];

  return (
    <>
      {/* NAVBAR UTAMA */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 px-6 py-4 ${
          scrolled
            ? "bg-sand/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO AREA */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <FaAnchor
                className={`text-2xl z-10 animate__animated animate__swing animate__infinite animate__slow transition-colors duration-500 ${
                  scrolled ? "text-driftwood" : "text-white"
                }`}
              />
              <div
                className={`absolute w-8 h-8 border border-dashed rounded-full animate-spin-slow transition-colors duration-500 ${
                  scrolled ? "border-rusty" : "border-white/40"
                }`}
              ></div>
            </div>
            <div className="flex flex-col leading-none text-left">
              <span
                className={`font-serif text-2xl font-bold tracking-tighter uppercase transition-colors duration-500 ${
                  scrolled ? "text-driftwood" : "text-white"
                }`}
              >
                Coastal
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] uppercase font-sans transition-colors duration-500 ${
                  scrolled ? "text-rusty" : "text-white/60"
                }`}
              >
                Heritage Beach
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${
                  scrolled
                    ? "text-driftwood hover:text-rusty"
                    : "text-white hover:text-rusty"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rusty transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden text-3xl p-1 transition-colors duration-500 ${
              scrolled ? "text-driftwood" : "text-white"
            }`}
            aria-label="Open Menu"
          >
            <CiMenuFries className="hover:scale-110 transition-transform" />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU (Manifest Design) */}
      <div
        className={`fixed inset-0 z-[1000] bg-sand transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        style={{
          visibility: isOpen ? "visible" : "hidden",
          backgroundImage: `url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')`,
        }}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-[10%] w-[1px] h-full bg-rusty"></div>
          <div className="absolute top-0 left-[90%] w-[1px] h-full bg-rusty"></div>
          <div className="absolute top-[15%] left-0 w-full h-[1px] bg-rusty"></div>
          <FaCompass className="absolute -bottom-20 -left-20 text-rusty text-[60vh] rotate-12" />
        </div>

        {/* Header Overlay */}
        <div className="relative flex justify-between items-center p-8 border-b border-rusty/10">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.5em] uppercase text-rusty font-bold">
              Navigation Log
            </span>
            <span className="font-serif italic text-driftwood">
              Coastal Heritage
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 flex items-center justify-center border-2 border-rusty text-rusty rounded-full active:bg-rusty active:text-sand transition-all duration-300"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Navigation Manifest Links */}
        <div className="relative flex flex-col px-8 pt-6 overflow-y-auto h-[calc(100vh-180px)]">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between py-6 border-b border-rusty/10 transition-all ${
                isOpen ? "animate__animated animate__fadeInLeft" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col">
                <span className="text-[10px] text-rusty uppercase tracking-widest mb-1 font-bold opacity-60">
                  Point 0{index + 1}
                </span>
                <span className="text-3xl font-serif text-driftwood uppercase group-hover:translate-x-3 transition-transform duration-300 group-hover:text-rusty">
                  {link.name}
                </span>
              </div>
              <span className="font-serif italic text-xs text-driftwood/40 group-hover:text-rusty transition-colors">
                {link.sub}
              </span>
            </a>
          ))}
        </div>

        {/* Footer Overlay - Nautical Info */}
        <div className="absolute bottom-0 w-full p-8 bg-driftwood text-sand flex justify-between items-end shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-rusty">
              <FaMapMarkerAlt className="text-xs" />
              <span className="text-[10px] tracking-widest uppercase font-bold text-rusty">
                Location
              </span>
            </div>
            <p className="text-xs opacity-70 font-serif uppercase tracking-tighter">
              Java Sea • 8.4095° S
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-1">
              Established
            </p>
            <p className="text-3xl font-serif italic leading-none text-sand">
              1924
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Background Image with refined Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2000"
          alt="Football Stadium"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-4xl">
          {/* Small Badge */}
          <div data-aos="fade-right" className="mb-6">
            <span className="px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase rounded-full">
              Forward • #10
            </span>
          </div>

          {/* Headline */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter">
              YOUR <br />
              <span className="text-emerald-500">NAME.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div data-aos="fade-right" data-aos-delay="400">
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light">
              Professional football player for{" "}
              <span className="text-white font-medium">
                Manchester United FC
              </span>
              . Dedicated to pushing the boundaries of the game, one goal at a
              time.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-5 items-start sm:items-center"
          >
            <button
              onClick={() => scrollToSection("#about")}
              className="group relative px-8 py-4 bg-emerald-500 text-gray-950 font-bold rounded-sm transition-all duration-300 hover:bg-emerald-400 overflow-hidden"
            >
              <span className="relative z-10">THE JOURNEY</span>
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></div>
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-sm hover:border-white transition-all duration-300 tracking-wider"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        aria-label="Scroll down"
      >
        <FaChevronDown className="text-4xl text-white opacity-70 hover:opacity-100 transition-opacity" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent z-10" />
    </section>
  );
};

export default Hero;

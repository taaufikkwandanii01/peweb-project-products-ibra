import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-amber-900 via-orange-800 to-red-900"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div data-aos="fade-down">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Martabak <span className="text-amber-300">Gacor</span>
          </h1>
          <div className="inline-block bg-amber-400 px-6 py-2 rounded-full mb-8">
            <p className="text-amber-900 font-bold text-lg">
              🔥 Viral & Enak Banget! 🔥
            </p>
          </div>
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto"
        >
          Rasakan kelezatan martabak dengan topping melimpah dan rasa yang bikin
          nagih! Dijamin gacor setiap gigitan!
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#menu"
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-amber-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
          >
            Lihat Menu
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <FaWhatsapp size={24} />
            <span>Pesan Sekarang</span>
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-300 mb-2">1000+</p>
            <p className="text-amber-100">Pelanggan Puas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-300 mb-2">15+</p>
            <p className="text-amber-100">Varian Rasa</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-300 mb-2">4.9★</p>
            <p className="text-amber-100">Rating</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-amber-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

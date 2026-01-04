import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        data-aos="fade-up"
      >
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-1 mb-6">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl">
              🎬
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Sarah Chen
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          TikTok Content Creator | Digital Storyteller | Brand Partner
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#"
            className="text-white hover:text-pink-500 text-3xl transition-colors"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="text-white hover:text-pink-500 text-3xl transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-pink-500 text-3xl transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105"
        >
          Work With Me
        </a>
      </div>
    </section>
  );
};

export default Hero;

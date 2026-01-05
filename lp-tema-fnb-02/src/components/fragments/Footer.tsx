import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-amber-950 via-amber-900 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">MG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Martabak Gacor</h3>
                <p className="text-sm text-amber-200">Enak & Mantap!</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Martabak terenak di kota dengan berbagai varian rasa yang
              menggugah selera.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-300">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#media"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Galeri
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-300">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Jl. Raya Martabak No. 123, Bandung
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-amber-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  info@martabakgacor.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-300">
              Ikuti Kami
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-2">Jam Operasional:</p>
              <p className="text-sm text-amber-200 font-semibold">
                Setiap Hari
              </p>
              <p className="text-sm text-gray-300">14:00 - 23:00 WIB</p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Martabak Gacor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

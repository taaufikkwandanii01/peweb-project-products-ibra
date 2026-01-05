import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-amber-500" />,
      title: "Alamat",
      detail: "Jl. Raya Martabak No. 123, Bandung, Jawa Barat 40123",
    },
    {
      icon: <FaPhone className="text-3xl text-green-500" />,
      title: "Telepon",
      detail: "+62 812-3456-7890",
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-500" />,
      title: "Email",
      detail: "info@martabakgacor.com",
    },
    {
      icon: <FaClock className="text-3xl text-purple-500" />,
      title: "Jam Buka",
      detail: "Setiap Hari: 14:00 - 23:00 WIB",
    },
  ];

  return (
    <section
      id="contact"
      className="py-35 bg-gradient-to-br from-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Hubungi <span className="text-orange-600">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin pesan martabak? Hubungi kami sekarang!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">
              Informasi Kontak
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="font-bold text-amber-900 text-lg mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-700">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-12 text-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h4 className="text-2xl font-bold text-amber-900 mb-6">
                Temukan Kami di:
              </h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaWhatsapp size={32} />
                </a>
                <a
                  href="https://instagram.com/martabakgacor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaInstagram size={32} />
                </a>
                <a
                  href="https://facebook.com/martabakgacor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaFacebook size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎉 Promo Spesial Hari Ini! 🎉
          </h3>
          <p className="text-lg mb-2">
            Beli 2 Gratis 1 untuk semua varian Martabak Manis!
          </p>
          <p className="text-amber-100">
            *Syarat dan ketentuan berlaku. Hubungi kami untuk info lebih lanjut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

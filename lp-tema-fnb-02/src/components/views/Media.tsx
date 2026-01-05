import { FaInstagram, FaQuoteLeft } from "react-icons/fa";

const Media = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rina Wijaya",
      review:
        "Martabak paling enak yang pernah saya coba! Toppingnya melimpah dan rasanya gacor banget!",
      rating: 5,
      avatar: "👩",
    },
    {
      id: 2,
      name: "Budi Santoso",
      review:
        "Udah langganan di sini 2 tahun! Gak pernah mengecewakan. Recommended!",
      rating: 5,
      avatar: "👨",
    },
    {
      id: 3,
      name: "Siti Nurhaliza",
      review:
        "Martabak duriannya juara! Duriannya asli dan creamy. Worth it banget!",
      rating: 5,
      avatar: "👩‍🦱",
    },
    {
      id: 4,
      name: "Ahmad Fauzi",
      review:
        "Martabak telurnya enak, isiannya banyak. Harga juga masih terjangkau!",
      rating: 5,
      avatar: "👨‍🦰",
    },
  ];

  const gallery = [
    { id: 1, emoji: "🍫", title: "Coklat Keju" },
    { id: 2, emoji: "🥚", title: "Martabak Telur" },
    { id: 3, emoji: "🍪", title: "Nutella Oreo" },
    { id: 4, emoji: "🍵", title: "Green Tea" },
    { id: 5, emoji: "❤️", title: "Red Velvet" },
    { id: 6, emoji: "🌟", title: "Durian" },
  ];

  return (
    <section
      id="media"
      className="py-35 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Galeri & <span className="text-orange-600">Testimoni</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Lihat kelezatan kami dan apa kata pelanggan setia Martabak Gacor
          </p>
        </div>

        <div className="mb-20">
          <h3
            className="text-3xl font-bold text-amber-900 text-center mb-10"
            data-aos="fade-up"
          >
            Galeri Produk
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {gallery.map((item, index) => (
              <div
                key={item.id}
                data-aos="flip-left"
                data-aos-delay={index * 100}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-125 transition-transform duration-300">
                    {item.emoji}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <p className="text-white font-bold text-lg">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="text-3xl font-bold text-amber-900 text-center mb-10"
            data-aos="fade-up"
          >
            Kata Mereka
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-900 text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <div className="flex space-x-1 text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                  <FaQuoteLeft className="text-3xl text-amber-200" />
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
            <FaInstagram size={36} />
            <span>Follow Instagram Kami!</span>
          </h3>
          <p className="text-lg mb-6">
            Lihat foto-foto martabak terbaru dan promo spesial di Instagram
            @martabakgacor
          </p>
          <a
            href="https://instagram.com/martabakgacor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300"
          >
            <FaInstagram size={24} />
            <span>@martabakgacor</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Media;

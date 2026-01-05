import { useState } from "react";
import { FaStar, FaFire, FaWhatsapp } from "react-icons/fa";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Martabak Manis", "Martabak Telur", "Special"];

  const menuItems = [
    {
      id: 1,
      name: "Martabak Coklat Keju",
      category: "Martabak Manis",
      price: "45.000",
      description: "Coklat premium dengan keju berlimpah",
      rating: 4.9,
      isPopular: true,
      image: "🍫",
    },
    {
      id: 2,
      name: "Martabak Green Tea",
      category: "Martabak Manis",
      price: "50.000",
      description: "Green tea premium dengan toping spesial",
      rating: 4.8,
      isPopular: false,
      image: "🍵",
    },
    {
      id: 3,
      name: "Martabak Nutella Oreo",
      category: "Martabak Manis",
      price: "55.000",
      description: "Nutella asli dengan oreo crumble",
      rating: 5.0,
      isPopular: true,
      image: "🍪",
    },
    {
      id: 4,
      name: "Martabak Telur Special",
      category: "Martabak Telur",
      price: "35.000",
      description: "Telur, daging cincang, dan sayuran segar",
      rating: 4.7,
      isPopular: true,
      image: "🥚",
    },
    {
      id: 5,
      name: "Martabak Telur Keju",
      category: "Martabak Telur",
      price: "40.000",
      description: "Kombinasi telur dan keju melimpah",
      rating: 4.8,
      isPopular: false,
      image: "🧀",
    },
    {
      id: 6,
      name: "Martabak Telur Premium",
      category: "Martabak Telur",
      price: "45.000",
      description: "Telur premium dengan kornet dan sosis",
      rating: 4.9,
      isPopular: false,
      image: "🌭",
    },
    {
      id: 7,
      name: "Martabak Red Velvet",
      category: "Special",
      price: "65.000",
      description: "Red velvet dengan cream cheese premium",
      rating: 5.0,
      isPopular: true,
      image: "❤️",
    },
    {
      id: 8,
      name: "Martabak Durian",
      category: "Special",
      price: "70.000",
      description: "Durian asli Medan yang creamy",
      rating: 4.9,
      isPopular: true,
      image: "🌟",
    },
  ];

  const filteredMenu =
    activeCategory === "Semua"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-35 bg-gradient-to-br from-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Menu <span className="text-orange-600">Favorit</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Pilihan menu martabak terlezat dengan berbagai varian rasa yang
            bikin nagih!
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMenu.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 h-48 flex items-center justify-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </span>
                {item.isPopular && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <FaFire />
                    <span>Popular</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <FaStar />
                    <span className="text-gray-700 font-semibold">
                      {item.rating}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-orange-600">
                    Rp {item.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20mau%20pesan%20${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp size={20} />
                  <span>Pesan</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          className="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Mau Custom Topping?
          </h3>
          <p className="text-lg mb-6">
            Kamu bisa request kombinasi topping favoritmu! Hubungi kami untuk
            info lebih lanjut.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300"
          >
            <FaWhatsapp size={24} />
            <span>Hubungi Kami</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;

import { FaCheckCircle, FaHeart, FaAward, FaClock } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-4xl text-amber-500" />,
      title: "Bahan Premium",
      description:
        "Menggunakan bahan pilihan berkualitas tinggi untuk hasil terbaik",
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Dibuat dengan Cinta",
      description:
        "Setiap martabak dibuat dengan penuh kehati-hatian dan kasih sayang",
    },
    {
      icon: <FaAward className="text-4xl text-yellow-500" />,
      title: "Resep Rahasia",
      description: "Resep turun temurun yang telah dipercaya sejak tahun 2015",
    },
    {
      icon: <FaClock className="text-4xl text-blue-500" />,
      title: "Selalu Fresh",
      description: "Dibuat fresh setiap hari, tidak ada yang overnight",
    },
  ];

  return (
    <section
      id="about"
      className="py-35 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Tentang <span className="text-orange-600">Martabak Gacor</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Lahir dari passion untuk menciptakan martabak terenak dan terlezat
            di kota ini
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-amber-900 mb-4">
                  Cerita Kami
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Martabak Gacor dimulai dari sebuah gerobak kecil di tahun
                  2015. Dengan tekad untuk menghadirkan martabak berkualitas
                  dengan harga terjangkau, kami terus berinovasi dan berkembang.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Kini, kami telah melayani ribuan pelanggan setia yang selalu
                  kembali untuk menikmati martabak legendaris kami. Setiap
                  martabak dibuat dengan resep rahasia keluarga dan bahan-bahan
                  pilihan terbaik.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Komitmen kami adalah memberikan pengalaman kuliner yang tak
                  terlupakan di setiap gigitan!
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-amber-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Kenapa Martabak Gacor?
          </h3>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Karena kami tidak hanya menjual martabak, tapi menciptakan
            pengalaman kuliner yang bikin kamu ketagihan! Dengan topping
            berlimpah, tekstur sempurna, dan rasa yang selalu konsisten.
          </p>
          <div className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg">
            #GacorSetiapGigitan 🔥
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

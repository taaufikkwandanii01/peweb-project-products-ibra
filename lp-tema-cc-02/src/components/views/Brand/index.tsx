const Brand = () => {
  const brands = [
    { name: "TechCorp", logo: "💻" },
    { name: "FashionHub", logo: "👗" },
    { name: "BeautyPro", logo: "💄" },
    { name: "FoodieBox", logo: "🍔" },
    { name: "TravelCo", logo: "✈️" },
    { name: "FitLife", logo: "💪" },
  ];

  return (
    <section
      id="brands"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Brand <span className="text-pink-500">Collaborations</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Trusted by leading brands worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-pink-500"
            >
              <div className="text-5xl mb-3">{brand.logo}</div>
              <p className="text-white font-semibold text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

        <div
          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-pink-500/20"
          data-aos="fade-up"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              I work with brands that align with my values and resonate with my
              audience. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-500 font-semibold">
                Sponsored Content
              </span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-500 font-semibold">
                Product Reviews
              </span>
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-500 font-semibold">
                Brand Ambassadorship
              </span>
              <span className="px-4 py-2 bg-green-500/20 rounded-full text-green-500 font-semibold">
                Events & Campaigns
              </span>
            </div>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;

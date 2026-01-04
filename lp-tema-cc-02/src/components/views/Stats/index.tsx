const Stats = () => {
  const stats = [
    { icon: "👥", number: "2.5M+", label: "Total Followers" },
    { icon: "❤️", number: "150M+", label: "Total Likes" },
    { icon: "👁️", number: "500M+", label: "Total Views" },
    { icon: "📈", number: "8.5%", label: "Engagement Rate" },
  ];

  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-pink-500">Impact</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-pink-500"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-6 border border-pink-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Average Views
            </h3>
            <p className="text-pink-500 text-3xl font-bold mb-2">500K+</p>
            <p className="text-gray-400">Per video in the last 30 days</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Audience</h3>
            <p className="text-purple-500 text-3xl font-bold mb-2">18-34</p>
            <p className="text-gray-400">Primary age demographic</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl p-6 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Growth Rate</h3>
            <p className="text-blue-500 text-3xl font-bold mb-2">+25%</p>
            <p className="text-gray-400">Monthly follower increase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

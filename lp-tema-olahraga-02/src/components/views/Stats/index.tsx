import { useEffect } from "react";
import { FaFutbol, FaBullseye, FaRunning, FaHandPaper } from "react-icons/fa";
import AOS from "aos";

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const currentSeasonStats = [
    { icon: FaFutbol, label: "Goals", value: "28", color: "text-emerald-400" },
    { icon: FaBullseye, label: "Assists", value: "15", color: "text-blue-400" },
    {
      icon: FaRunning,
      label: "Matches",
      value: "42",
      color: "text-purple-400",
    },
    {
      icon: FaHandPaper,
      label: "Clean Sheets",
      value: "18",
      color: "text-yellow-400",
    },
  ];

  const detailedStats = [
    {
      category: "Shooting",
      stats: [
        { name: "Shot Accuracy", value: "78%" },
        { name: "Shots on Target", value: "156" },
        { name: "Total Shots", value: "200" },
        { name: "Goal Conversion", value: "14%" },
      ],
    },
    {
      category: "Passing",
      stats: [
        { name: "Pass Accuracy", value: "85%" },
        { name: "Key Passes", value: "89" },
        { name: "Crosses", value: "64" },
        { name: "Through Balls", value: "23" },
      ],
    },
    {
      category: "Physical",
      stats: [
        { name: "Distance Covered", value: "445 km" },
        { name: "Top Speed", value: "34.2 km/h" },
        { name: "Sprints", value: "1,240" },
        { name: "Duels Won", value: "62%" },
      ],
    },
  ];

  const careerStats = [
    { label: "Total Goals", value: "256" },
    { label: "Total Assists", value: "142" },
    { label: "Total Matches", value: "412" },
    { label: "Minutes Played", value: "32,450" },
    { label: "Hat-tricks", value: "12" },
    { label: "Penalties Scored", value: "34/38" },
  ];

  return (
    <section id="stats" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stats & <span className="text-emerald-400">Performance</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Current season performance and career statistics
          </p>
        </div>

        {/* Current Season Stats */}
        <div data-aos="fade-up" className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            2024/25 Season
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {currentSeasonStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800"
              >
                <stat.icon className={`text-5xl ${stat.color} mx-auto mb-4`} />
                <h4 className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Stats */}
        <div data-aos="fade-up" className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Detailed Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detailedStats.map((section, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              >
                <h4 className="text-xl font-bold text-emerald-400 mb-6 text-center">
                  {section.category}
                </h4>
                <div className="space-y-4">
                  {section.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-400">{stat.name}</span>
                      <span className="text-white font-semibold">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div
          data-aos="fade-up"
          className="bg-gradient-to-br from-emerald-900/20 to-gray-900 p-8 rounded-lg border border-emerald-400/30"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Career Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {careerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Note */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Statistics updated as of January 2025 • All competitions included
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

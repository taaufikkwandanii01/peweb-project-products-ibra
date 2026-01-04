import { useEffect } from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";

const Career = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const careerHistory = [
    {
      year: "2023 - Present",
      club: "Manchester United FC",
      league: "Premier League",
      role: "Forward",
      description:
        "Leading the attack line and contributing to the team's success in domestic and European competitions.",
      achievements: [
        "Premier League Top Scorer",
        "FA Cup Winner",
        "Champions League Semi-Finalist",
      ],
    },
    {
      year: "2020 - 2023",
      club: "Liverpool FC",
      league: "Premier League",
      role: "Forward",
      description:
        "Developed into a key player, showcasing consistent performance and leadership qualities.",
      achievements: [
        "Premier League Champion",
        "FIFA Club World Cup Winner",
        "50+ Goals",
      ],
    },
    {
      year: "2017 - 2020",
      club: "Borussia Dortmund",
      league: "Bundesliga",
      role: "Forward",
      description:
        "First major European club experience, establishing reputation as a promising talent.",
      achievements: [
        "DFB-Pokal Winner",
        "Bundesliga Young Player of the Year",
        "35+ Goals",
      ],
    },
    {
      year: "2014 - 2017",
      club: "Southampton FC",
      league: "Premier League",
      role: "Youth Academy / First Team",
      description:
        "Progressed through youth ranks and made first-team debut at age 19.",
      achievements: [
        "Academy Player of the Year",
        "First Team Debut",
        "15+ Goals",
      ],
    },
  ];

  return (
    <section id="career" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career <span className="text-emerald-400">History</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey through professional football, from youth academy to
            top-tier competitions
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-400/30" />

          {careerHistory.map((item, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="relative mb-12 last:mb-0"
            >
              <div
                className={`md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm mb-2">
                      <FaCalendar />
                      <span className="font-semibold">{item.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.club}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <FaMapMarkerAlt />
                      <span>{item.league}</span>
                      <span className="mx-2">•</span>
                      <span>{item.role}</span>
                    </div>

                    <p className="text-gray-300 mb-4">{item.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-gray-400 text-sm flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-400 rounded-full border-4 border-gray-900 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;

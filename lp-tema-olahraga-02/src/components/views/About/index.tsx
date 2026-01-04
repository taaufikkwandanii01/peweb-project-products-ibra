import { useEffect } from "react";
import { FaTrophy, FaFutbol, FaUsers, FaMedal } from "react-icons/fa";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const highlights = [
    { icon: FaTrophy, value: "15+", label: "Trophies Won" },
    { icon: FaFutbol, value: "250+", label: "Goals Scored" },
    { icon: FaUsers, value: "400+", label: "Matches Played" },
    { icon: FaMedal, value: "8", label: "Player of the Month" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div data-aos="fade-right" className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=800"
                alt="Player Portrait"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-400/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-emerald-400/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Born with a passion for football, I began my journey at the age
                of 7 in local youth academies. Through dedication and hard work,
                I've evolved into a professional player competing at the highest
                levels of the sport.
              </p>
              <p>
                My playing style is characterized by speed, technical ability,
                and a keen eye for goal. I pride myself on being a team player
                who can create opportunities and finish with precision.
              </p>
              <p>
                Off the field, I'm committed to inspiring the next generation of
                footballers and giving back to the community through various
                charitable initiatives.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold w-32">
                  Full Name:
                </span>
                <span className="text-gray-300">John Michael Doe</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold w-32">
                  Date of Birth:
                </span>
                <span className="text-gray-300">January 15, 1995</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold w-32">
                  Nationality:
                </span>
                <span className="text-gray-300">England</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold w-32">
                  Position:
                </span>
                <span className="text-gray-300">Forward / Striker</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold w-32">
                  Height:
                </span>
                <span className="text-gray-300">1.85m (6'1")</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold w-32">
                  Foot:
                </span>
                <span className="text-gray-300">Right</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <item.icon className="text-5xl text-emerald-400 mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-white mb-2">
                {item.value}
              </h4>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

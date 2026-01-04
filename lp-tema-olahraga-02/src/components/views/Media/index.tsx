import { useEffect, useState } from "react";
import { FaPlay, FaImage } from "react-icons/fa";
import AOS from "aos";

const Media = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600",
      alt: "Match Action 1",
    },
    {
      url: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=600",
      alt: "Match Action 2",
    },
    {
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600",
      alt: "Training Session 1",
    },
    {
      url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600",
      alt: "Stadium View",
    },
    {
      url: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=600",
      alt: "Team Celebration",
    },
    {
      url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=600",
      alt: "Match Action 3",
    },
  ];

  const videos = [
    {
      title: "Season Highlights 2024/25",
      thumbnail:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600",
      duration: "5:24",
    },
    {
      title: "Top 10 Goals",
      thumbnail:
        "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=600",
      duration: "8:15",
    },
    {
      title: "Training Day Behind the Scenes",
      thumbnail:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600",
      duration: "12:30",
    },
    {
      title: "Interview: Road to Success",
      thumbnail:
        "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600",
      duration: "15:45",
    },
  ];

  const tabs = [
    { id: "photos", label: "Photos", icon: FaImage },
    { id: "videos", label: "Videos", icon: FaPlay },
  ] as const;

  return (
    <section id="media" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Media <span className="text-emerald-400">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Latest photos, videos, and news updates
          </p>
        </div>

        {/* Tabs */}
        <div data-aos="fade-up" className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-emerald-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <tab.icon />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === "photos" && (
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-semibold">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer bg-gray-800"
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-all duration-300">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-white text-xl ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Media;

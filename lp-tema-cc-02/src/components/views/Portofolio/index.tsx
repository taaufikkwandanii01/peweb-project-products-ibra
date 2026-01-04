import { FaPlay, FaEye, FaHeart } from "react-icons/fa";

const Portofolio = () => {
  const videos = [
    {
      id: 1,
      title: "Day in My Life Vlog",
      views: "2.5M",
      likes: "350K",
      thumbnail: "🎬",
    },
    {
      id: 2,
      title: "Tech Review: Latest Gadget",
      views: "1.8M",
      likes: "280K",
      thumbnail: "📱",
    },
    {
      id: 3,
      title: "Morning Routine 2024",
      views: "3.2M",
      likes: "420K",
      thumbnail: "☀️",
    },
    {
      id: 4,
      title: "Trending Challenge",
      views: "5.1M",
      likes: "680K",
      thumbnail: "🔥",
    },
    {
      id: 5,
      title: "Travel Diaries: Bali",
      views: "2.9M",
      likes: "390K",
      thumbnail: "✈️",
    },
    {
      id: 6,
      title: "Recipe Tutorial",
      views: "1.5M",
      likes: "220K",
      thumbnail: "🍳",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-pink-500">Videos</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Check out my most popular content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all border border-gray-700 hover:border-pink-500"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-8xl">
                {video.thumbnail}
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-6xl">
                  <FaPlay />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2">
                  {video.title}
                </h3>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <FaEye /> {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart /> {video.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="relative">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 transform rotate-3"></div>
              <div className="absolute inset-0 w-full h-96 rounded-2xl bg-gray-800 flex items-center justify-center text-8xl transform -rotate-3">
                📱
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-pink-500">Me</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Hey there! I'm a passionate content creator who loves bringing
              stories to life through short-form video content. With over 2
              years of experience on TikTok, I've built a community that values
              authenticity, creativity, and entertainment.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              My content spans lifestyle, tech reviews, daily vlogs, and
              creative challenges. I believe in creating content that not only
              entertains but also inspires and connects with people on a
              personal level.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center text-pink-500 text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="text-white font-semibold">Niche Focus</h3>
                  <p className="text-gray-400">Lifestyle & Tech Content</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-500 text-xl">
                  🌟
                </div>
                <div>
                  <h3 className="text-white font-semibold">Content Style</h3>
                  <p className="text-gray-400">Authentic, Engaging, Creative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

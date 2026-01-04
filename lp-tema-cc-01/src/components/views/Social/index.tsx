// components/views/Social/index.tsx
import { FaTiktok, FaInstagram, FaHeart, FaShare } from "react-icons/fa";

const SocialView = () => {
  return (
    <section id="social" className="py-24 bg-[#020617] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-full">
          {/* Main TikTok Card */}
          <div
            data-aos="fade-right"
            className="md:col-span-2 md:row-span-2 bg-[#ff0050] rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <FaTiktok className="text-9xl absolute -right-10 -top-10 opacity-20 group-hover:rotate-12 transition-transform" />
            <div className="z-10">
              <h3 className="text-5xl font-black text-white">1.2M</h3>
              <p className="text-white/80 font-bold uppercase tracking-widest">
                Followers on TikTok
              </p>
            </div>
            <button className="z-10 mt-20 bg-white text-black py-4 rounded-2xl font-black hover:bg-slate-100 transition-colors">
              FOLLOW FOR TRENDS
            </button>
          </div>

          {/* Engagement Stat Card */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="bg-slate-900 rounded-[2.5rem] p-8 border border-white/5 flex flex-col items-center justify-center text-center"
          >
            <FaHeart className="text-pink-500 text-4xl mb-2" />
            <h4 className="text-2xl font-black text-white">15M+</h4>
            <p className="text-slate-500 text-sm uppercase">Total Likes</p>
          </div>

          {/* Share Stat Card */}
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="bg-slate-900 rounded-[2.5rem] p-8 border border-white/5 flex flex-col items-center justify-center text-center"
          >
            <FaShare className="text-cyan-400 text-4xl mb-2" />
            <h4 className="text-2xl font-black text-white">200K</h4>
            <p className="text-slate-500 text-sm uppercase">Daily Shares</p>
          </div>

          {/* Other Platforms (Small Cards) */}
          <div
            data-aos="fade-up"
            className="md:col-span-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] p-8 flex items-center justify-between group cursor-pointer"
          >
            <div>
              <h4 className="text-white text-2xl font-black">Instagram Feed</h4>
              <p className="text-white/70">Visual Stories & Daily Life</p>
            </div>
            <FaInstagram className="text-5xl text-white group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialView;

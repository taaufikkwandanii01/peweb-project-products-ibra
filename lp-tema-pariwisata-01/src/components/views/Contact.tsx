"use client";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactView() {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "#",
      color: "hover:bg-[#E1306C]",
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      href: "#",
      color: "hover:bg-[#4267B2]",
    },
    {
      icon: <FaYoutube />,
      label: "Youtube",
      href: "#",
      color: "hover:bg-[#FF0000]",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "#",
      color: "hover:bg-rusty",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-driftwood relative overflow-hidden"
    >
      {/* Decorative Wave Overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[url('https://www.transparenttextures.com/patterns/waves.png')] opacity-20 rotate-180"></div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-sand p-1 shadow-[20px_20px_0px_rgba(0,0,0,0.2)] animate__animated animate__fadeIn">
          {/* Main Postcard Container */}
          <div className="border-2 border-driftwood/20 p-8 md:p-12 grid md:grid-cols-2 gap-12 relative">
            {/* Center Divider Line (Postcard Style) */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-driftwood/20"></div>

            {/* Left Side: Message */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 text-rusty">
                <FaPaperPlane className="animate__animated animate__飛行 (custom) animate__infinite" />
                <span className="text-xs uppercase tracking-[0.4em] font-bold">
                  Message from the shore
                </span>
              </div>
              <h2 className="text-5xl font-serif font-bold text-driftwood mb-6 leading-tight">
                Send us a <br />
                <span className="italic text-rusty">Bottle Message</span>
              </h2>
              <p className="text-driftwood/70 leading-relaxed font-serif italic text-lg">
                Kami selalu menantikan cerita dari para penjelajah. Hubungi kami
                melalui kanal digital kami untuk informasi lebih lanjut mengenai
                reservasi, acara, atau sekadar berbagi momen matahari terbenam
                Anda.
              </p>
            </div>

            {/* Right Side: Stamp & Social Links */}
            <div className="relative">
              {/* Vintage Stamp */}
              <div className="absolute -top-4 -right-4 w-24 h-28 bg-sand border-4 border-double border-rusty p-1 rotate-12 shadow-md hidden sm:block">
                <div className="w-full h-full border border-rusty/30 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center grayscale contrast-125"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-rusty/10">
                  <span className="text-[10px] font-bold text-rusty bg-sand px-1 uppercase tracking-tighter">
                    Postage Paid
                  </span>
                </div>
              </div>

              {/* Social List */}
              <div className="mt-16 md:mt-24 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-driftwood/40 mb-4 border-b border-driftwood/10 pb-2">
                  Destination Address:
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="group flex items-center gap-4 p-3 border border-transparent hover:border-rusty/30 hover:bg-rusty/5 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 flex items-center justify-center text-xl rounded-full border border-driftwood/20 text-driftwood group-hover:text-sand transition-all duration-300 ${social.color}`}
                      >
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-rusty font-bold leading-none mb-1">
                          {social.label}
                        </p>
                        <p className="font-serif text-driftwood opacity-60 group-hover:opacity-100 transition-opacity">
                          @coastalvintage.bali
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sand/40 text-[10px] tracking-[0.6em] uppercase">
            Terima Kasih • Matur Suksma • Thank You
          </p>
        </div>
      </div>
    </section>
  );
}

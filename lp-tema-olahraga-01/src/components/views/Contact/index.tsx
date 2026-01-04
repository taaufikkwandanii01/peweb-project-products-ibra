import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "animate.css";

const ContactView = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-xl md:text-2xl" />,
      label: "Business Inquiries",
      value: "management@player.com",
      link: "mailto:management@player.com",
    },
    {
      icon: <FaPhoneAlt className="text-xl md:text-2xl" />,
      label: "Press & Media",
      value: "+44 161 987 6543",
      link: "tel:+441619876543",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl md:text-2xl" />,
      label: "Main Office",
      value: "Manchester, UK",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Tipografi Latar Belakang - Dioptimalkan agar tidak bocor (overflow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.02] italic leading-none whitespace-nowrap pointer-events-none select-none z-0">
        CONNECT
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section - Ukuran Font Adaptif */}
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.9] mb-8 animate__animated animate__fadeInDown">
              LET'S <span className="text-yellow-400">TALK</span> <br />
              <span className="text-outline">BUSINESS</span>
            </h2>
            <p className="text-neutral-500 text-xs md:text-sm max-w-xl mx-auto uppercase tracking-[0.3em] leading-relaxed font-medium">
              Tersedia untuk peluang kerjasama global, endorsement merek, dan
              wawancara media melalui manajemen resmi.
            </p>
          </div>

          {/* Contact Cards Grid - Gap disesuaikan untuk mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-1">
            {contactMethods.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="group bg-neutral-900/40 border border-white/5 p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500 hover:bg-yellow-400"
              >
                <div className="text-yellow-400 group-hover:text-black transition-colors duration-500 mb-6">
                  {item.icon}
                </div>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 group-hover:text-black/60 mb-2 transition-colors duration-500">
                  {item.label}
                </p>
                <p className="text-base md:text-lg font-bold group-hover:text-black transition-colors duration-500 break-all">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          {/* Social Proof & Footer Info */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-12 gap-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600">
                Official Channels
              </span>
              <div className="flex gap-8">
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-all hover:scale-110"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-all hover:scale-110"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="inline-block px-4 py-1 border border-yellow-400/20 mb-2 md:mb-0">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-yellow-400 italic">
                  Authorized Representation Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactView;

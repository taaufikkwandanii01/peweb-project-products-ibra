import {
  FaTools,
  FaOilCan,
  FaCheckCircle,
  FaCogs,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: <FaTools />,
    title: "Tune Up Pro",
    desc: "Optimasi performa mesin secara menyeluruh dengan kalibrasi digital.",
    price: "75rb",
    color: "bg-blue-500",
  },
  {
    icon: <FaOilCan />,
    title: "Ganti Oli",
    desc: "Pilihan oli original berkualitas tinggi untuk perlindungan maksimal.",
    price: "45rb",
    color: "bg-orange-500",
  },
  {
    icon: <FaCheckCircle />,
    title: "Servis Ringan",
    desc: "Pengecekan 18 poin vital motor untuk keamanan berkendara Anda.",
    price: "50rb",
    color: "bg-green-500",
  },
  {
    icon: <FaCogs />,
    title: "Overhaul Mesin",
    desc: "Perbaikan besar dengan teknisi ahli dan suku cadang presisi.",
    price: "500rb",
    color: "bg-purple-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cek Rem & Ban",
    desc: "Perawatan sistem pengereman dan penggantian ban bergaransi.",
    price: "35rb",
    color: "bg-red-500",
  },
  {
    icon: <FaBolt />,
    title: "Kelistrikan",
    desc: "Diagnosis sistem injeksi, aki, dan kelistrikan lampu secara akurat.",
    price: "40rb",
    color: "bg-yellow-500",
  },
];

const Layanan = () => (
  <section
    id="layanan"
    className="py-24 bg-white px-6 relative overflow-hidden"
  >
    {/* Background Decorative Element */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 -z-10"></div>

    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="text-left">
          <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs">
            Our Speciality
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mt-3">
            Layanan <span className="text-orange-600">Terbaik</span> Kami
          </h2>
        </div>
        <p className="text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
          Kami menyediakan berbagai macam perawatan motor dengan peralatan
          standar bengkel resmi dan teknisi berpengalaman.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Card
            key={i}
            className="p-8 border-none bg-zinc-50 hover:bg-white hover:shadow-2xl hover:shadow-orange-200/40 transition-all duration-500 group relative overflow-hidden rounded-[2.5rem]"
          >
            {/* Hover Decor */}
            <div
              className={`absolute top-0 right-0 w-24 h-24 ${s.color} opacity-0 group-hover:opacity-10 translate-x-8 -translate-y-8 rounded-full transition-all duration-500`}
            ></div>

            <div className="relative z-10">
              <div
                className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-lg transition-transform duration-500 group-hover:rotate-6`}
              >
                {s.icon}
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-zinc-900">{s.title}</h3>
                <span className="text-orange-600 font-bold text-sm bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                  Mulai {s.price}
                </span>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-8 group-hover:text-zinc-900 transition-colors">
                {s.desc}
              </p>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:text-orange-600 transition-colors"
              >
                Selengkapnya
                <span className="w-8 h-[2px] bg-zinc-300 group-hover:bg-orange-600 group-hover:w-12 transition-all"></span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Layanan;

import Image from "next/image";

const images = [
  {
    id: 1,
    title: "Area Servis",
    category: "Fasilitas",
    src: "/images/Other/assets.png",
  },
  {
    id: 2,
    title: "Suku Cadang",
    category: "Sparepart",
    src: "/images/Other/assets.png",
  },
  {
    id: 3,
    title: "Ruang Tunggu",
    category: "Fasilitas",
    src: "/images/Other/assets.png",
  },
  {
    id: 4,
    title: "Tune Up Matic",
    category: "Pengerjaan",
    src: "/images/Other/assets.png",
  },
];

const Galeri = () => (
  <section id="galeri" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
        Dokumentasi
      </span>
      <h2 className="text-4xl font-black text-zinc-900 mt-3">Galeri Bengkel</h2>
      <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-4 rounded-full"></div>
      <p className="text-zinc-500 mt-6 max-w-2xl mx-auto italic">
        Melihat lebih dekat dedikasi kami dalam menjaga performa motor Anda
        melalui fasilitas modern dan pengerjaan yang teliti.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {images.map((img) => (
        <div
          key={img.id}
          className="group relative overflow-hidden rounded-[2.5rem] h-80 bg-zinc-100 shadow-xl shadow-zinc-200/50"
        >
          {/* Next.js Optimized Image */}
          <Image
            src={img.src}
            alt={img.title}
            fill
            priority={img.id === 1} // Prioritas untuk gambar pertama agar LCP bagus
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-2">
              {img.category}
            </span>
            <h4 className="text-xl font-bold text-white leading-tight">
              {img.title}
            </h4>

            {/* Decorative Line that appears on hover */}
            <div className="w-0 group-hover:w-12 h-1 bg-orange-600 mt-4 transition-all duration-500 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Galeri;

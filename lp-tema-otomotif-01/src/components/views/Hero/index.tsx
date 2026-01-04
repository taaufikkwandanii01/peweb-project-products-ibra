import Button from "@/components/ui/Button";
import "animate.css";

const Hero = () => (
  <section className="pt-32 pb-16 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="animate__animated animate__fadeInLeft">
        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
          Bengkel Profesional
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 mt-4 leading-tight">
          Solusi Perawatan <br />{" "}
          <span className="text-orange-600">Motor Anda.</span>
        </h1>
        <p className="text-zinc-600 text-lg mt-6 mb-8 max-w-md">
          Servis motor tanpa antre dengan mekanik ahli bersertifikat. Kami
          pastikan motor Anda kembali prima.
        </p>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => (window.location.href = "#layanan")}
          >
            Lihat Layanan
          </Button>
        </div>
      </div>
      <div className="animate__animated animate__zoomIn bg-orange-100 rounded-[3rem] h-[400px] md:h-[500px] flex items-center justify-center relative overflow-hidden">
        {/* Placeholder untuk Image Motor */}
        <div className="text-orange-300 font-black text-9xl rotate-12 select-none">
          MOTO
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

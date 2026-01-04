import MainLayout from "@/components/layouts/MainLayout";
import Seo from "@/components/lib/Seo";
import Hero from "@/components/views/Hero";
import Layanan from "@/components/views/Layanan";
import Galeri from "@/components/views/Galeri";
import FAQ from "@/components/views/FAQ";
import Lokasi from "@/components/views/Lokasi";

export default function Home() {
  return (
    <MainLayout>
      <Seo title="Template Landing Page - Bengkel Motor" />
      <Hero />
      <Layanan />
      <Lokasi />
      <Galeri />
      <FAQ />
    </MainLayout>
  );
}

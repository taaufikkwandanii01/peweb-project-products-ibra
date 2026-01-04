import AboutView from "@/components/views/About";
import ContactView from "@/components/views/Contact";
import GalleryView from "@/components/views/Galerry";
import HomeView from "@/components/views/Home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Parahyangan Rustic | Masakan Sunda Otentik</title>
      </Head>
      <HomeView />
      <AboutView />
      <GalleryView />
      <ContactView />
    </>
  );
}

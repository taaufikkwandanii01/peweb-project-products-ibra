import HomeView from "@/components/views/Home";
import AboutView from "@/components/views/About";
import GalleryView from "@/components/views/Gallery";
import ContactView from "@/components/views/Contact";
import DestinationView from "@/components/views/Destination";

export default function Page() {
  return (
    <>
      <HomeView />
      <AboutView />
      <DestinationView />
      <GalleryView />
      <ContactView />
    </>
  );
}

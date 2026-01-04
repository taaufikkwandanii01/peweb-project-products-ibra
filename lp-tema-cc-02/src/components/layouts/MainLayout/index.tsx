import { useEffect, type ReactNode } from "react";
import Navbar from "../../fragments/Navbar";
import Footer from "../../fragments/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    // Refresh AOS on route change
    AOS.refresh();
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

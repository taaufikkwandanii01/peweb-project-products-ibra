import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "./components/layouts/MainLayout";
import Hero from "./components/views/Hero";
import About from "./components/views/About";
import Menu from "./components/views/Menu";
import Media from "./components/views/Media";
import Contact from "./components/views/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <MainLayout>
      <Hero />
      <About />
      <Menu />
      <Media />
      <Contact />
    </MainLayout>
  );
}

export default App;

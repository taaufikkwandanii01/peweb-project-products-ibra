import { useEffect } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Hero from "./components/views/Hero";
import About from "./components/views/About";
import Career from "./components/views/Career";
import Stats from "./components/views/Stats";
import Media from "./components/views/Media";
import "./index.css";

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire document
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <MainLayout>
      <Hero />
      <About />
      <Career />
      <Stats />
      <Media />
    </MainLayout>
  );
}

export default App;

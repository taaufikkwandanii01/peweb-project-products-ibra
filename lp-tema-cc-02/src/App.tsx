import "./index.css";
import MainLayout from "./components/layouts/MainLayout";
import Hero from "./components/views/Hero";
import About from "./components/views/About";
import Stats from "./components/views/Stats";
import Portofolio from "./components/views/Portofolio";
import Brand from "./components/views/Brand";
import Contact from "./components/views/Contact";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Stats />
      <Portofolio />
      <Brand />
      <Contact />
    </MainLayout>
  );
}

export default App;

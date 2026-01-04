// src/App.tsx
import MainLayout from "./components/layouts/MainLayout";
import HomeView from "./components/views/Home";
import AboutView from "./components/views/About";
import SocialView from "./components/views/Social";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <MainLayout>
      <HomeView />
      <AboutView />
      <SocialView />
    </MainLayout>
  );
}

export default App;

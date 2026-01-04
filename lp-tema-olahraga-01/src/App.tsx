import MainLayout from "./components/layouts/MainLayout";
import AboutView from "./components/views/About";
import ContactView from "./components/views/Contact";
import HomeView from "./components/views/Home";
import MediaView from "./components/views/Media";
import StatsView from "./components/views/Stats";

function App() {
  return (
    <MainLayout>
      <HomeView />
      <AboutView />
      <StatsView />
      <MediaView />
      <ContactView />
    </MainLayout>
  );
}

export default App;

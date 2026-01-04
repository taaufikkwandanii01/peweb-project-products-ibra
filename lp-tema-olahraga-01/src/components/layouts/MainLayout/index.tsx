import Footer from "../../fragments/Footer";
import Navbar from "../../fragments/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden relative">
      <Navbar />

      <main className="flex flex-col w-full relative">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;

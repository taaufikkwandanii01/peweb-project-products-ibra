import Navbar from "@/components/fragments/Navbar";
import Footer from "@/components/fragments/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;

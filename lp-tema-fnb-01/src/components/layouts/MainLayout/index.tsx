import Navbar from "../../fragments/Navbar";
import Footer from "../../fragments/Footer";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#FDF8F1] text-[#3D2B1F] selection:bg-[#BC6C25] selection:text-white relative">
      {/* Tekstur Grain/Kertas Tua untuk Seluruh Halaman */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <Navbar />
      {/* Padding top disesuaikan agar tidak tertutup navbar yang fixed */}
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

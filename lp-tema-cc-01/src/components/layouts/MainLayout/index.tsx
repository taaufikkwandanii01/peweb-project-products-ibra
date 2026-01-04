import Navbar from "../../fragments/Navbar";
import Footer from "../../fragments/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-sans text-slate-900 px-0 md:px-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

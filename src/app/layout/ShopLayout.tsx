import Navbar from "../components/UI/Navbar";
import { Footer } from "../components/UI/Footer";
import { Outlet } from "react-router-dom";
export const ShopLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-154px)] w-full overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

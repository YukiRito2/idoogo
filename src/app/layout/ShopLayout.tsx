import Navbar from "../components/UI/Navbar";
import { Footer } from "../components/UI/Footer";
import { Outlet } from "react-router-dom";
export const ShopLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

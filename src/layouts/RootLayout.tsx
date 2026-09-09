import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Appbar />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;

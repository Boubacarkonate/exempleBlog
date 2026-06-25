import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { Header } from "./hearder/Header";
import ScrollToTopButton from "./main/ScrollToTopButton";

const Layout = () => (
  <div className="grid grid-cols-1 gap-32 bg-amber-50 font-quicksand md:overflow-x-hidden">
    <Header />
    <Outlet />
    <Footer />
    <ScrollToTopButton />
  </div>
);

export default Layout;

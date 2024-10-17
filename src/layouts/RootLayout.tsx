import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
// import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
// import RenderIf from "../components/RenderIf/RenderIf";
import { useContext } from "react";
import { openMenuMobileContext } from "../context/OpenMenuMobileProvider";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/Footer/Footer";
import { Toaster } from "sonner";

const RootLayout = () => {
  // const location = useLocation();
  const context = useContext(openMenuMobileContext);

  return (
    <div
      className={` ${
        context?.isOpen === true && `overflow-y-clip`
      } bg-[#edf0fe] -z-1 text-[#2C2C2C] min-h-screen px-4 pt-14 pb-4 overflow-x-hidden lg:px-8`}
    >
      <ScrollToTop />
      <header>
        <nav>
          <Header />
        </nav>
        {/* <Breadcrumbs /> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <Toaster />
    </div>
  );
};

export default RootLayout;

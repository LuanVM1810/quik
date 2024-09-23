import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import RenderIf from "../components/RenderIf/RenderIf";
import { useContext } from "react";
import { openMenuMobileContext } from "../context/OpenMenuMobileProvider";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const RootLayout = () => {
  const location = useLocation();
  const context = useContext(openMenuMobileContext);

  return (
    <div
      className={` ${
        context?.isOpen === true && `overflow-y-clip`
      } bg-[#edf0fe] -z-1 text-[#2C2C2C] h-auto px-4 py-4 overflow-x-hidden lg:px-8 lg:py-6`}
    >
      <ScrollToTop />
      <header>
        <RenderIf
          isTrue={
            location.pathname !== "/sign-in" &&
            location.pathname !== "/sign-up" &&
            location.pathname !== "/forgot-password" &&
            location.pathname !== "/signup-company"
          }
        >
          <nav>
            <Header />
          </nav>
          <Breadcrumbs />
        </RenderIf>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

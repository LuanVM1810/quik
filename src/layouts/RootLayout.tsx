import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import RenderIf from "../components/RenderIf/RenderIf";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="bg-[#edf0fe] -z-1 text-[#2C2C2C] h-auto px-4 py-4 overflow-x-hidden lg:px-8 lg:py-6">
      <header>
        <RenderIf
          isTrue={
            location.pathname !== "/sign-in" &&
            location.pathname !== "/sign-up" &&
            location.pathname !== "/forgot-password"
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

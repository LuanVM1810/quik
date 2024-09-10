import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootLayout = () => {
  return (
    <div className="bg-[#edf0fe] -z-1 text-[#2C2C2C] h-auto px-4 pt-4 pb-8 overflow-x-hidden lg:px-8 lg:pt-6">
      <header>
        <nav>
          <Header />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const SpaceLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default SpaceLayout;

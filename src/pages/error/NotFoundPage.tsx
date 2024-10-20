import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col text-center justify-center items-center">
      <p className="text-[40px]">Oops!</p>
      <p className="text-[24px]">
        We couldn't find the page you were looking for
      </p>
      <div className="mt-5 text-[24px]">
        <NavLink to="/">
          <button className="bg-quik-purple px-4 rounded-2xl text-white hover:opacity-80 py-2 flex gap-1 items-center">
            <GoArrowLeft size={24} /> Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;

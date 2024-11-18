import QuikLogo from "../../assets/Logo Official.png";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { IoBusinessSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "sonner";

const SidebarAdmin = () => {
  const location = useLocation();
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    context?.logout();
    navigate("/");
    toast.success("Đăng xuất thành công");
  };
  return (
    <div className="fixed top-0 left-0 flex flex-col h-screen max-h-screen w-[230px] bg-white z-10 py-10 text-[16px] text-[#131313]">
      <div className="flex justify-center">
        <img src={QuikLogo} width={75} height={91} />
      </div>
      <div className="flex justify-center mt-20">
        <ul className="flex flex-col gap-10">
          <NavLink to="/admin">
            <li
              className={`${
                location.pathname == "/admin"
                  ? "text-white bg-quik-purple"
                  : "text-[#131313] "
              } flex items-center rounded-2xl gap-2 px-4 py-2 transition-all duration-300`}
            >
              <BsFillPeopleFill size={24} />
              Người dùng
            </li>
          </NavLink>
          <NavLink to="business">
            <li
              className={`${
                location.pathname == "/admin/business"
                  ? "text-white bg-quik-purple"
                  : "text-[#131313] "
              } flex items-center rounded-2xl gap-2 px-4 py-2 transition-all duration-300`}
            >
              <IoBusinessSharp size={24} />
              Doanh nghiệp
            </li>
          </NavLink>
          <NavLink to="transaction">
            <li
              className={`${
                location.pathname == "/admin/transaction"
                  ? "text-white bg-quik-purple"
                  : "text-[#131313] "
              } flex items-center rounded-2xl gap-2 px-4 py-2 transition-all duration-300`}
            >
              <GrTransaction size={24} />
              Giao dịch
            </li>
          </NavLink>
          <NavLink to="revenue">
            <li
              className={`${
                location.pathname == "/admin/revenue"
                  ? "text-white bg-quik-purple"
                  : "text-[#131313] "
              } flex items-center rounded-2xl gap-2 px-4 py-2 transition-all duration-300`}
            >
              <RiMoneyDollarCircleFill size={24} />
              Doanh thu
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="mt-auto flex gap-2 justify-center">
        <button
          onClick={handleLogout}
          className="flex items-center rounded-2xl text-white px-4 py-2 bg-gradient-to-r from-quik-blue to-quik-purple hover:from-quik-green hover:to-quik-purple transition-all duration-500"
        >
          <RiLogoutBoxLine size={24} /> Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarAdmin;

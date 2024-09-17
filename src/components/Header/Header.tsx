import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import QuikLogo from "../../assets/Logo Official@3x.png";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const clickOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const goOrderHistory = () => {
    navigate("/order-history");
    setOpenMenu(false);
  };

  const goHome = () => {
    navigate("/");
    setOpenMenu(false);
  };

  return (
    <nav className="flex items-center">
      <div>
        <NavLink to="/">
          <img
            className="relative font-bold text-4xl w-[280px] lg:w-[300px]"
            src={QuikLogo}
          />
        </NavLink>
      </div>

      <IoIosMenu
        size={"24px"}
        onClick={clickOpenMenu}
        className="ml-auto rounded-full cursor-pointer lg:hidden"
      />
      <div
        className={`fixed top-0 left-0 w-[100%] h-[100%] ${
          openMenu === true ? `block bg-overlay z-1` : `hidden -z-1`
        }transition-all duration-500 lg:hidden`}
      ></div>
      <div
        className={`fixed w-[85%] md:w-[50%] lg:hidden ${
          openMenu === true ? `translate-x-0` : `translate-x-[100%]`
        }  top-0 right-0 bottom-0 bg-white
        transition-all duration-500 z-10 pl-8 pr-4 py-4 `}
      >
        <IoCloseOutline
          onClick={clickOpenMenu}
          size={"30px"}
          className="ml-auto mb-4 hover:bg-gray-500 rounded-full cursor-pointer"
        />
        <ul className="font-bold text-xl flex flex-col gap-4">
          <li
            onClick={goHome}
            className="flex items-center justify-between hover:text-gray-500 cursor-pointer"
          >
            Trang chủ
          </li>
          <li
            onClick={goOrderHistory}
            className="flex items-center justify-between hover:text-gray-500 cursor-pointer"
          >
            Lịch sử giao dịch
          </li>
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Về chúng tôi
          </li>
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            <NavLink to="/sign-in">Hồ sơ</NavLink>
          </li>
        </ul>
        <div className="my-20 cursor-pointer font-semibold">
          <img src={QuikLogo} />
        </div>
        <div className="text-gray-500 text-xl">
          <p>
            Trở thành Thành viên Quik để có những sản phẩm, nguồn cảm hứng và
            câu chuyện hay nhất trong công việc.{" "}
            <span className="font-bold text-[#2C2C2C] cursor-pointer hover:underline">
              Tìm hiểu thêm
            </span>
          </p>
          <div className="flex my-3 text-base font-bold gap-2 mt-[30px]">
            <NavLink to="/sign-up">
              <button className="bg-[#2c2c2c] hover:bg-gray-500 text-white px-4 py-2 rounded-3xl">
                Tham gia
              </button>
            </NavLink>
            <NavLink to="/sign-in">
              <button className="bg-white hover:bg-gray-500 border-solid border-[1px] px-4 py-2 rounded-3xl border-gray-600 text-[#2c2d2c]">
                Đăng nhập
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="hidden lg:block ml-auto text-lg">
        <ul className="flex gap-32 font-semibold">
          <li className="header-li">
            <NavLink to="/">Trang chủ</NavLink>
          </li>

          <li className="header-li">
            <NavLink to="/order-history">Lịch sử giao dịch</NavLink>
          </li>
          <li className="header-li">Về chúng tôi</li>

          <li className="ml-16 header-li">
            <NavLink to="/sign-in">Hồ sơ </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

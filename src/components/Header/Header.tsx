import { useContext } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import QuikLogo from "../../assets/Logo Official@3x.png";
import { NavLink, useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { openMenuMobileContext } from "../../context/OpenMenuMobileProvider";

const Header = () => {
  const value = useContext(openMenuMobileContext);
  const navigate = useNavigate();

  const onClickProfileAvatar = () => {
    navigate("/profile");
  };

  const goOrderHistory = () => {
    navigate("/order-history");
    value?.setIsOpen(false);
  };

  const goHome = () => {
    navigate("/");
    value?.setIsOpen(false);
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
      <div className="ml-auto flex gap-6 lg:hidden">
        <CiHeart size={"24px"} />

        <GoPerson onClick={onClickProfileAvatar} size={"24px"} />

        <HiOutlineMenu
          size={"24px"}
          onClick={() => {
            value?.setIsOpen(true);
          }}
          className="ml-auto rounded-full cursor-pointer lg:hidden"
        />
      </div>

      <div
        className={`fixed top-0 left-0 w-[100%] h-[100%] ${
          value?.isOpen === true ? `block bg-overlay z-1` : `hidden -z-1`
        }transition-all duration-500 lg:hidden`}
      ></div>
      <div
        className={`fixed w-[85%] md:w-[50%] lg:hidden ${
          value?.isOpen === true ? `translate-x-0` : `translate-x-[100%]`
        }  top-0 right-0 bottom-0 bg-white
        transition-all duration-500 z-10 pl-8 pr-4 py-4 `}
      >
        <IoCloseOutline
          onClick={() => {
            value?.setIsOpen(false);
          }}
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
        <ul className="flex gap-24 font-semibold items-center">
          <li className="header-li">
            <NavLink to="/">Trang chủ</NavLink>
          </li>

          <li className="header-li">
            <NavLink to="/order-history">Lịch sử giao dịch</NavLink>
          </li>
          <li className="header-li">Về chúng tôi</li>

          <li className="ml-10 header-li">
            <div className="flex text-base font-bold gap-2">
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
            {/* <NavLink to="/profile">Hồ sơ </NavLink> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

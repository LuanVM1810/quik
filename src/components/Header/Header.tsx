import { useContext, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import QuikLogo from "../../assets/logo exe 1.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { openMenuMobileContext } from "../../context/OpenMenuMobileProvider";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "sonner";

const Header = () => {
  const authContext = useContext(AuthContext);
  const value = useContext(openMenuMobileContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [openService, setOpenService] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);

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

  const onClickLogout = () => {
    setOpenProfile(false);

    toast.success("Đăng xuất thành công", {
      onAutoClose: () => {
        authContext?.logout();
        navigate("/signin");
      },
    });
  };

  return (
    <nav className="fixed z-[2] w-[100%] h-[60px] max-h-[60px] top-0 left-0 py-3 px-4 shadow-btn bg-white flex items-center">
      <div>
        <NavLink to="/">
          <img
            className="relative font-bold text-4xl w-[90px]"
            src={QuikLogo}
          />
        </NavLink>
      </div>

      <div className="ml-auto flex gap-6 lg:hidden">
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
        <div className="my-20 cursor-pointer font-semibold w-[90px]">
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
            <NavLink to="/signup-company">
              <button className="bg-[#2c2c2c] hover:bg-gray-500 text-white px-4 py-2 rounded-3xl">
                Tham gia
              </button>
            </NavLink>
            <NavLink to="/signin">
              <button className="bg-white hover:bg-gray-500 border-solid border-[1px] px-4 py-2 rounded-3xl border-gray-600 text-[#2c2d2c]">
                Đăng nhập
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="hidden lg:block mx-auto text-lg">
        <ul className="flex gap-10 font-semibold items-center">
          <li
            className={`${
              location.pathname === "/" &&
              "border-2 border-[#506DF7] text-[#506df7]"
            } header-li`}
          >
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li
            className={`${
              location.pathname === "/signup-company" &&
              "border-2 border-[#506DF7] text-[#506df7]"
            } header-li`}
          >
            <NavLink to="/signup-company">Hợp tác</NavLink>
          </li>

          <li
            className={`${
              location.pathname === "/order-history" &&
              "border-2 border-[#506DF7] text-[#506df7]"
            } header-li`}
          >
            <NavLink to="/order-history">Lịch sử giao dịch</NavLink>
          </li>
          <li
            onMouseOver={() => {
              setOpenService(true);
            }}
            onMouseLeave={() => {
              setOpenService(false);
            }}
            className="px-4 relative flex gap-2 items-center transition-all duration-500"
          >
            Dịch vụ
            <span
              className={`${
                openService === true ? "rotate-180" : "rotate-0"
              } transition-all duration-500`}
            >
              <IoIosArrowDown size={20} />
            </span>
            <div
              className={`absolute ${
                openService === true ? "block" : "hidden"
              } bg-white border-gradient rounded-2xl py-4 w-[250px] top-8 right-4 shadow-btn transition-all duration-700 pl-4`}
            >
              <ul>
                <li
                  onClick={() => {
                    navigate("/allspace", {
                      state: {
                        search: "",
                        type: "Không gian sự kiện",
                      },
                    });
                  }}
                  className="py-2 hover:text-quik-purple cursor-pointer"
                >
                  Không gian sự kiện
                </li>

                <li
                  onClick={() => {
                    navigate("/allspace", {
                      state: {
                        search: "",
                        type: "Study Hub",
                      },
                    });
                  }}
                  className="py-2 hover:text-quik-purple cursor-pointer"
                >
                  Study Hub
                </li>

                <li
                  onClick={() => {
                    navigate("/allspace", {
                      state: {
                        search: "",
                        type: "Không gian làm việc",
                      },
                    });
                  }}
                  className="py-2 hover:text-quik-purple cursor-pointer"
                >
                  Không gian làm việc
                </li>
                <li
                  onClick={() => {
                    navigate("/allspace", {
                      state: {
                        search: "",
                        type: "Cafe làm việc",
                      },
                    });
                  }}
                  className="py-2 hover:text-quik-purple cursor-pointer"
                >
                  Cafe làm việc
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        {authContext?.isLogin === true ? (
          <div
            onMouseOver={() => setOpenProfile(true)}
            onMouseLeave={() => setOpenProfile(false)}
            className="relative border-gradient px-4 text-[16px] flex items-center gap-2"
          >
            <GoPerson size={18} />
            <p>{localStorage.getItem("username")}</p>
            <div
              className={`bg-white absolute rounded-2xl py-4 w-[180px] top-[26px] right-0 border-gradient shadow-btn transition-all duration-700 pl-4 ${
                openProfile ? "block" : "hidden"
              }`}
            >
              <ul>
                <li className="py-2 hover:text-quik-purple">
                  <NavLink to="/profile">Hồ sơ</NavLink>
                </li>

                <li className="py-2 hover:text-quik-purple cursor-pointer">
                  <NavLink to="/order-history">Lịch sử giao dịch</NavLink>
                </li>
                <li
                  onClick={onClickLogout}
                  className="py-2 hover:text-quik-purple cursor-pointer"
                >
                  Đăng xuất
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex text-base font-bold gap-2">
            <NavLink to="/signup">
              <button className="bg-[#506DF7] text-white hover:bg-white hover:text-[#506DF7] hover:shadow-btn hover:scale-110 px-4 py-2 rounded-3xl transition-all duration-300">
                Đăng ký
              </button>
            </NavLink>
            <NavLink to="/signin">
              <button className="bg-white hover:bg-[#506DF7] hover:scale-110 hover:text-white border-solid border-[1px] px-4 py-2 rounded-3xl border-[#506DF7] text-[#506DF7] transition-all duration-300">
                Đăng nhập
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

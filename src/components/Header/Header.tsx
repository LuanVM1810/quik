import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const clickOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <p className="relative font-bold text-4xl">Quik</p>
      <IoIosMenu
        size={"24px"}
        onClick={clickOpenMenu}
        className="ml-auto rounded-full cursor-pointer"
      />
      <div
        className={`fixed w-[85%] md:w-[50%] ${
          openMenu === true ? `translate-x-0` : `translate-x-[100%]`
        }  top-0 right-0 bottom-0 bg-white
        transition-all duration-500 pl-8 pr-4 py-4 `}
      >
        <IoCloseOutline
          onClick={clickOpenMenu}
          size={"30px"}
          className="ml-auto mb-4 hover:bg-gray-500 rounded-full cursor-pointer"
        />
        <ul className="font-bold text-xl flex flex-col gap-4">
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Trang chủ <GoChevronRight size={"24px"} />
          </li>
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Lịch sử giao dịch
            <GoChevronRight size={"24px"} />
          </li>
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Về chúng tôi <GoChevronRight size={"24px"} />
          </li>
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Hồ sơ <GoChevronRight size={"24px"} />
          </li>
        </ul>
        <div className="my-20 cursor-pointer font-semibold">Quik</div>
        <div className="text-gray-500 text-xl">
          <p>
            Become a Quik Member for best products, inspiration and stories in
            work.{" "}
            <span className="font-bold text-[#2C2C2C] cursor-pointer">
              Learn more
            </span>
          </p>
          <div className="flex my-3 text-base font-bold gap-2 mt-[30px]">
            <button className="bg-[#2c2c2c] hover:bg-gray-500 text-white px-4 py-2 rounded-3xl">
              Tham gia
            </button>
            <button className="bg-white hover:bg-gray-500 border-solid border-[1px] px-4 py-2 rounded-3xl border-gray-600 text-[#2c2d2c]">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

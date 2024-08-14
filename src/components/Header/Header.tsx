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
        className={`fixed w-[50%] ${
          openMenu === true ? `translate-x-0` : `translate-x-[100%]`
        }  top-0 right-0 bottom-0 bg-white
        transition-all duration-500 pl-6 pr-2 py-4 `}
      >
        <IoCloseOutline
          onClick={clickOpenMenu}
          size={"24px"}
          className="ml-auto mb-4 hover:bg-gray-500 rounded-full cursor-pointer"
        />
        <ul className="font-semibold text-xl flex flex-col gap-4">
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Trang chủ <GoChevronRight size={"24px"} />
          </li>
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Lịch sử <GoChevronRight size={"24px"} />
          </li>
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Về chúng tôi <GoChevronRight size={"24px"} />
          </li>
          <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
            Hồ sơ <GoChevronRight size={"24px"} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

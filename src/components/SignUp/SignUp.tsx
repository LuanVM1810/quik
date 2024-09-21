import { useState } from "react";
import { GoHome } from "react-icons/go";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [changeStatusPassword, setChangeStatusPassword] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const moveHome = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen h-auto text-white bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7] mx-[-16px] my-[-16px] lg:mx-[-32px] lg:my-[-24px]">
      <div className="p-4">
        <GoHome
          onClick={moveHome}
          className="bg-[#F7F7F9] p-1 rounded-full cursor-pointer shadow-btn hover:opacity-80 lg:hidden"
          size={"30px"}
          color="black"
        />
      </div>
      <div className="text-center  pb-10">
        <p className="font-bold text-[26px] lg:text-[34px]">Đăng ký</p>
        <p className="font-normal text-[16px] lg:text-[24px]">Tạo tài khoản</p>
      </div>
      <div className="flex flex-col justify-center lg:items-center gap-6 px-5 text-[#1B1E28] font-normal text-[16px] lg:text-[24px]">
        <input
          placeholder="Email"
          className="px-2 py-4 lg:w-[40%] lg:px-4 rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
          type="email"
        />
        <div className="relative lg:w-[40%]">
          <input
            placeholder="Mật khẩu"
            className="px-2 py-4 lg:px-4 w-full rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
            type={changeStatusPassword === false ? "password" : "text"}
          />
          {changeStatusPassword === false ? (
            <RiEyeCloseLine
              onClick={() => {
                setChangeStatusPassword(!changeStatusPassword);
              }}
              className="absolute right-4 top-4 lg:top-6"
              size={"24px"}
            />
          ) : (
            <RiEyeLine
              onClick={() => {
                setChangeStatusPassword(!changeStatusPassword);
              }}
              className="absolute right-4 top-4 lg:top-6"
              size={"24px"}
            />
          )}
        </div>
        <input
          placeholder="Nhập lại mật khẩu"
          className="px-2 py-4 lg:w-[40%] lg:px-4 rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
          type="password"
        />
        <button className="bg-[#0D6EFD] mt-6 lg:mt-10 lg:w-[40%] shadow-btn text-white font-extrabold py-4 px-2 rounded-xl transition-all duration-300 focus:shadow-none focus:scale-95">
          Đăng ký
        </button>
        <div className="text-center text-white font-normal">
          Đã có tài khoản?
          <NavLink to="/sign-in">
            <span className="font-extrabold ml-2 cursor-pointer hover:underline">
              Đăng nhập
            </span>
          </NavLink>
        </div>
        <div className="text-center text-white font-normal mb-10">
          Đăng kí tài khoản doanh nghiệp?
          <NavLink to="/signup-company">
            <span className="font-extrabold ml-2 cursor-pointer hover:underline">
              Đăng ký doanh nghiệp
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

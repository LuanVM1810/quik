import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const SignUpCompany = () => {
  const [changeStatusPassword, setChangeStatusPassword] =
    useState<boolean>(false);
  return (
    <div className="min-h-screen h-auto text-white bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7] mx-[-16px] lg:mx-[-32px] lg:my-[-24px]">
      <div className="text-center pt-28 pb-10">
        <p className="font-bold text-[26px] ">Đăng ký</p>
        <p className="font-normal text-[16px] ">Tạo tài khoản</p>
      </div>
      <div className="flex flex-col justify-center lg:items-center gap-6 px-5 text-[#1B1E28] font-normal text-[16px] ">
        <input
          placeholder="Tên quán"
          className="px-2 py-4 lg:w-[30%] lg:px-4 rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
          type="text"
        />
        <input
          placeholder="Địa chỉ kinh doanh"
          className="px-2 py-4 lg:w-[30%] lg:px-4 rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
          type="text"
        />
        <input
          placeholder="Số điện thoại"
          className="px-2 py-4 lg:w-[30%] lg:px-4 rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
          type="text"
        />
        <input
          placeholder="Email"
          className="px-2 py-4 lg:w-[30%] lg:px-4 rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
          type="text"
        />

        <select className="px-2 py-4 lg:w-[30%] lg:px-4 rounded-xl outline-none transition-all duration-300">
          <option>Không gian làm việc chung</option>
          <option>Phòng họp</option>
          <option>Study hub</option>
          <option>Không gian văn phòng</option>
          <option>Không gian sự kiện</option>
        </select>
        <div className="relative lg:w-[30%]">
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
              className="absolute right-4 top-4"
              size={"24px"}
            />
          ) : (
            <RiEyeLine
              onClick={() => {
                setChangeStatusPassword(!changeStatusPassword);
              }}
              className="absolute right-4 top-4"
              size={"24px"}
            />
          )}
        </div>
        <input
          placeholder="Nhập lại mật khẩu"
          className="px-2 py-4 lg:w-[30%] lg:px-4 rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
          type="password"
        />
        <button className="bg-[#0D6EFD] mt-6 lg:mt-10 lg:w-[30%] shadow-btn text-white font-extrabold py-4 px-2 rounded-xl transition-all duration-300 focus:shadow-none focus:scale-95">
          Đăng ký
        </button>
        <div className="text-center text-white font-normal mb-10">
          Đã có tài khoản?
          <NavLink to="/sign-in">
            <span className="font-extrabold ml-2 cursor-pointer hover:underline">
              Đăng nhập
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpCompany;

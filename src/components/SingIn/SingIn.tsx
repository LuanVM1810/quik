import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import RenderIf from "../RenderIf/RenderIf";
import Loading from "../Loading/Loading";

const SingIn = () => {
  const [changeStatusPassword, setChangeStatusPassword] =
    useState<boolean>(false);
  const [isloading, setIsLoading] = useState(false);

  const onClickSignIn = () => {
    setIsLoading(true);
  };

  return (
    <div className="h-screen text-white bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7] mx-[-16px] my-[-16px] lg:mx-[-32px] lg:my-[-24px]">
      <div className="text-center pt-28 pb-10">
        <p className="font-bold text-[26px] lg:text-[34px]">Đăng nhập</p>
        <p className="font-normal text-[16px] lg:text-[24px]">
          Đăng nhập để tiếp tục sử dụng ứng dụng
        </p>
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
        <p className="text-white font-normal text-right hover:underline cursor-pointer">
          Quên mật khẩu ?{" "}
        </p>
        <button
          onClick={onClickSignIn}
          className="bg-[#0D6EFD] lg:w-[40%]  shadow-btn text-white font-extrabold py-4 px-2 rounded-xl transition-all duration-300 focus:shadow-none focus:scale-95"
        >
          Đăng nhập
        </button>
        <div className="text-center text-white font-normal">
          Chưa có tài khoản?
          <NavLink to="/sign-up">
            <span className="font-extrabold ml-2 cursor-pointer hover:underline">
              Đăng ký
            </span>
          </NavLink>
        </div>
      </div>
      <RenderIf isTrue={isloading === true}>
        <Loading />
      </RenderIf>
    </div>
  );
};

export default SingIn;

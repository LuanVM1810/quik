import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import authApi from "../../services/AuthApi";
import { toast } from "sonner";
import { AuthContext } from "../../context/AuthProvider";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Vui lòng nhập password")
    .min(6, "Password phải có ít nhất 6 ký tự")
    .max(20, "Password không được vượt quá 20 ký tự"),
});
type FormData = yup.InferType<typeof schema>;

const SingIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [changeStatusPassword, setChangeStatusPassword] =
    useState<boolean>(false);
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    authApi
      .singIn({
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        setIsLoading(false);
        localStorage.clear();
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("username", response.data.username);
        toast.success("Đăng nhập thành công", {
          onAutoClose: () => navigate("/"),
        });
        authContext?.login();

        // console.log(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Thông tin không chính xác");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-screen text-white bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7] mx-[-16px] my-[-16px] lg:mx-[-32px] lg:my-[-24px]">
        <div className="text-center pt-28 pb-10">
          <p className="font-bold text-[26px]">Đăng nhập</p>
          <p className="font-normal text-[16px]">
            Đăng nhập để tiếp tục sử dụng ứng dụng
          </p>
        </div>
        <div className="flex flex-col justify-center lg:items-center gap-6 px-5 text-[#1B1E28] font-normal text-[16px]">
          <div className="relative lg:w-[30%]">
            <input
              {...register("email", { required: "Nhập email của bạn" })}
              placeholder="Email"
              className="px-2 py-4 lg:px-4 w-full rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
              type="email"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>

          <div className="relative lg:w-[30%]">
            <input
              {...register("password", {
                required: "Nhập mật khẩu của bạn",
                minLength: {
                  value: 8,
                  message: "Tối thiểu 8 kí tự",
                },
                maxLength: {
                  value: 16,
                  message: "Tối đa 16 kí tự",
                },
              })}
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
            <p className="text-red-700">{errors.password?.message}</p>
          </div>
          <p className="text-white font-normal text-right hover:underline cursor-pointer">
            <NavLink to="/forgot-password">Quên mật khẩu ? </NavLink>
          </p>
          <button
            type="submit"
            disabled={isloading ? true : false}
            className={`bg-[#0D6EFD] lg:w-[30%] shadow-btn text-white font-extrabold py-4 px-2 rounded-xl transition-all duration-300 focus:shadow-none focus:scale-95`}
          >
            {isloading ? "..." : "Đăng nhập"}
          </button>
          <div className="text-center text-white font-normal">
            Chưa có tài khoản?
            <NavLink to="/signup">
              <span className="font-extrabold ml-2 cursor-pointer hover:underline">
                Đăng ký
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SingIn;

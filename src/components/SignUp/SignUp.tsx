import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authApi from "../../services/AuthApi";
import { toast } from "sonner";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  name: yup
    .string()
    .required("Vui lòng nhập họ và tên")
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(30, "Tên không vượt quá 30 ký tự"),
  username: yup
    .string()
    .required("Vui lòng nhập tên người dùng")
    .min(6, "Tên người dùng có ít nhất 6 kí tự")
    .max(15, "Tên người dùng không vượt quá 10 ký tự"),
  phoneNumber: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(/^[0-9]{10}$/, "Số điện thoại không đúng định dạng"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Password phải có ít nhất 6 ký tự")
    .max(20, "Password không được vượt quá 20 ký tự"),
  confirmPassword: yup
    .string()
    .required("Vui lòng xác nhận mật khẩu")
    .oneOf([yup.ref("password")], "Mật khẩu phải trùng khớp"),
});

type FormData = yup.InferType<typeof schema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const [isloading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    authApi
      .signUp({
        email: data.email,
        name: data.name,
        username: data.username,
        password: data.password,
        phoneNumber: data.phoneNumber,
      })
      .then((response) => {
        if (response.data.responseCode == "409") {
          setIsLoading(false);
          toast.warning(response.data.message);
        } else if (response.data.responseCode == "200") {
          toast.success("Đăng kí tài khoản thành công", {
            onAutoClose: () => {
              setIsLoading(false);
              navigate("/signin");
            },
          });
        }
        // console.log(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error);
        // console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen h-auto text-white bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7] mx-[-16px] lg:mx-[-32px] lg:my-[-24px]">
        <div className="text-center pt-28 pb-10">
          <p className="font-bold text-[26px]">Đăng ký</p>
          <p className="font-normal text-[16px]">Tạo tài khoản</p>
        </div>
        <div className="flex flex-col justify-center lg:items-center gap-6 px-5 text-[#1B1E28] font-normal text-[16px] ">
          <div className="relative lg:w-[30%]">
            <input
              {...register("email")}
              placeholder="Email"
              className="px-2 py-4 lg:px-4 w-full rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
              type="email"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="relative lg:w-[30%]">
            <input
              {...register("name")}
              placeholder="Họ và tên"
              className="px-2 py-4 lg:px-4 w-full rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
              type="text"
            />
            <p className="text-red-600">{errors.name?.message}</p>
          </div>
          <div className="relative lg:w-[30%]">
            <input
              {...register("username")}
              placeholder="Tên người dùng"
              className="px-2 py-4 lg:px-4 w-full rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
              type="text"
            />
            <p className="text-red-600">{errors.username?.message}</p>
          </div>
          <div className="relative lg:w-[30%]">
            <input
              {...register("phoneNumber")}
              placeholder="Số điện thoại"
              className="px-2 py-4 lg:px-4 w-full rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
              type="text"
            />
            <p className="text-red-600">{errors.phoneNumber?.message}</p>
          </div>
          <div className="relative lg:w-[30%]">
            <input
              {...register("password")}
              placeholder="Mật khẩu"
              className="px-2 py-4 lg:px-4 w-full rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
              type="password"
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          <div className="relative lg:w-[30%]">
            <input
              {...register("confirmPassword")}
              placeholder="Nhập lại mật khẩu"
              className="px-2 py-4 lg:px-4 w-full rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
              type="password"
            />
            <p className="text-red-600">{errors.confirmPassword?.message}</p>
          </div>
          <button
            type="submit"
            disabled={isloading ? true : false}
            className={` ${
              isloading ? "bg-black" : "bg-[#0D6EFD]"
            } lg:w-[30%] shadow-btn text-white font-extrabold py-4 px-2 rounded-xl transition-all duration-300 focus:shadow-none focus:scale-95`}
          >
            {isloading ? (
              <div className="flex justify-center">
                <AiOutlineLoading size={24} className="animate-spin" />
              </div>
            ) : (
              "Đăng ký"
            )}
          </button>
          <div className="text-center text-white font-normal">
            Đã có tài khoản?
            <NavLink to="/signin">
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
    </form>
  );
};

export default SignUp;

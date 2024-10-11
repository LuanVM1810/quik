const ForgotPassword = () => {
  return (
    <div className="h-screen text-white bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7] mx-[-16px] py-[40px] lg:mx-[-32px] lg:my-[-24px]">
      <div className="px-4 py-8 mt-10 flex flex-col gap-4 lg:gap-8 items-center justify-center text-center lg:text-[24px]">
        <p className="font-bold text-[26px] lg:text-[34px]">Quên mật khẩu</p>
        <p className="font-normal text-[16px] lg:text-[24px]">
          Nhập tài khoản email của bạn để đặt lại mật khẩu
        </p>
        <input
          placeholder="Email"
          className="px-2 py-4 w-[100%] lg:w-[40%] text-black lg:px-4 rounded-xl outline-none transition-all duration-300 focus:scale-105 focus:translate-y-[-5px] focus:shadow-image"
          type="email"
        />
        <button className="bg-[#0D6EFD] mt-6 lg:mt-10 w-[100%] lg:w-[40%] shadow-btn text-white font-extrabold py-4 px-2 rounded-xl transition-all duration-300 focus:shadow-none focus:scale-95">
          Đặt lại mật khẩu
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;

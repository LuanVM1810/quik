import Avatar from "../../assets/astronaut.png";
const Profile = () => {
  return (
    <>
      <div className="flex flex-col text-[#1B1E28] h-auto px-4 min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <img src={Avatar} />
          <div className="text-center">
            <p className="text-[20px]">User</p>
            <p className="text-[#7D848D]">user2003@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:px-[20%] lg:px-[30%]">
          <div>
            <label className="text-[16px]">Họ và tên</label>
            <div className="rounded-[16px] text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
              User
            </div>
          </div>
          <div>
            <label className="text-[16px]">Email</label>
            <div className="rounded-[16px] text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
              User2003@gmail.com
            </div>
          </div>
          <div>
            <label className="text-[16px]">Địa chỉ</label>
            <div className="rounded-[16px] text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
              Ho Chi Minh, Viet Nam
            </div>
          </div>
          <div>
            <label className="text-[16px]">Số điện thoại</label>
            <div className="rounded-[16px] text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
              09084902750
            </div>
          </div>
          <div>
            <label className="text-[16px]">Ngày sinh</label>
            <div className="rounded-[16px] text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
              09/26/2003
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

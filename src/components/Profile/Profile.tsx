import Avatar from "../../assets/astronaut.png";
import useUserInfor from "../../hooks/useUserInfor";
import Loading from "../Loading/Loading";
import ProfileBgr from "../../assets/pexels-photo-924824.jpeg";
const Profile = () => {
  const { userInfor, loading } = useUserInfor(localStorage.getItem("username"));

  return (
    <>
      <div
        style={{ backgroundImage: `url(${ProfileBgr})` }}
        className="flex flex-col bg-cover bg-center mx-[-16px] lg:mx-[-32px] text-white pt-[80px] h-auto px-4 min-h-screen"
      >
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="flex flex-col items-center gap-3">
              <img src={Avatar} className="border-gradient rounded-full" />
              <div className="text-center">
                <p className="text-[20px]">{userInfor?.username}</p>
                <p className="text-quik-purple">{userInfor?.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:px-[20%] lg:px-[30%]">
              <div>
                <label className="text-[16px]">Họ và tên</label>
                <div className="rounded-[16px] text-quik-purple text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
                  {userInfor?.name}
                </div>
              </div>
              <div>
                <label className="text-[16px]">Email</label>
                <div className="rounded-[16px] text-quik-purple text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
                  {userInfor?.email}
                </div>
              </div>
              <div>
                <label className="text-[16px]">Địa chỉ</label>
                <div className="rounded-[16px] text-quik-purple text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
                  Ho Chi Minh, Viet Nam
                </div>
              </div>
              <div>
                <label className="text-[16px]">Số điện thoại</label>
                <div className="rounded-[16px] text-quik-purple text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
                  {userInfor?.phoneNumber}
                </div>
              </div>
              {/* <div>
            <label className="text-[16px]">Ngày sinh</label>
            <div className="rounded-[16px] text-[14px] bg-[#F7F7F9] px-4 py-2 shadow-btn">
              09/26/2003
            </div>
          </div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;

import { Divider } from "@mui/material";
import Logo from "../../assets/Logo Official.png";
import FacebookIcon from "../../assets/facebook.png";
import ThreadsIcon from "../../assets/threads.png";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white mx-[-16px] lg:mx-[-32px] mb-[-16px] px-4 lg:px-8 pb-4 text-[14px]">
      <Divider variant="fullWidth" sx={{ marginBottom: "40px" }} />
      <div className="flex gap-10 lg:gap-20 flex-row flex-wrap">
        <div className="flex flex-col max-w-[300px]">
          <img src={Logo} width={64} height={64} />
          <div className="leading-8">
            Trên trang web đặt phòng họp, bạn sẽ tìm thấy một không gian trực
            tuyến linh hoạt và tiện lợi, cho phép bạn dễ dàng chọn lựa phòng họp
            phù hợp với nhu cầu của mình. Giao diện trang web được thiết kế đẹp
            mắt và dễ sử dụng, cung cấp thông tin chi tiết về các phòng họp, bao
            gồm kích thước, tiện nghi, và giá cả. Đặt phòng họp trở nên đơn giản
            chỉ trong vài bước với trải nghiệm mượt mà và thuận tiện trên mọi
            thiết bị di động.
          </div>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px] text-[#506DF7]">
            Về chúng tôi
          </div>
          <ul>
            <li>Giới thiệu</li>
            <li>An toàn - Bảo mật</li>
            <li>Điều khoản - Điều lệ</li>
            <li>Chính sách quyền riêng tư</li>
          </ul>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px] text-[#506DF7]">
            Dịch vụ nổi bật
          </div>
          <ul>
            <li>Không gian làm việc chung</li>
            <li>Phòng họp</li>
            <li>Study Hub</li>
            <li>Không gian văn phòng</li>
            <li>Không gian sự kiện</li>
          </ul>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px] text-[#506DF7]">
            Chăm sóc khách hàng
          </div>
          <ul>
            <li className="flex items-center">
              <GrMapLocation className="mr-2" size={20} /> Thành phố Hồ Chí Minh
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" size={20} /> 091 212 17 48
            </li>
            <li className="flex items-center">
              <MdOutlineEmail size={20} className="mr-2" />
              quik.vietnam@gmail.com
            </li>
          </ul>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px] text-[#506DF7]">
            Kết nối với chúng tôi
          </div>
          <ul className="flex gap-2">
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61565969382131"
              >
                <img src={FacebookIcon} alt="Facebook" width={32} height={32} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.threads.net/@quik.vietnam">
                <img src={ThreadsIcon} alt="Threads" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

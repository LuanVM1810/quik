import { Divider } from "@mui/material";
import Logo from "../../assets/Logo Official.png";
import FacebookIcon from "../../assets/facebook.png";
import ThreadsIcon from "../../assets/threads.png";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white mx-[-16px] lg:mx-[-32px] mb-[-16px] px-4 lg:px-8 pb-4 text-[14px]">
      <Divider variant="fullWidth" sx={{ marginBottom: "40px" }} />
      <div className="flex gap-10 lg:gap-20 flex-row flex-wrap">
        <div className="flex flex-col max-w-[300px]">
          <img src={Logo} width={64} height={64} />
          <div className="leading-8">
            QUIK ra đời với sứ mệnh đơn giản hóa việc tìm kiếm và đặt chỗ các
            không gian làm việc chung, working cafe, study hub, meeting room và
            không gian tổ chức sự kiện, mang đến sự linh hoạt và tiện lợi tối đa
            đáp ứng mọi nhu cầu từ doanh nghiệp, freelancer, các đội nhóm
            startup cho đến học sinh, sinh viên.
          </div>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px] text-[#506DF7]">
            Về chúng tôi
          </div>
          <ul>
            <li>
              {" "}
              <NavLink to="/about-us">Giới thiệu </NavLink>
            </li>

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
            <li>Không gian sự kiện</li>
            <li>Study Hub</li>
            <li>Không gian làm việc</li>
            <li>Cafe làm việc</li>
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

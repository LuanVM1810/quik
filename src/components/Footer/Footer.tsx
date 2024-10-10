import { Divider } from "@mui/material";
import Logo from "../../assets/Logo Official.png";
import FacebookIcon from "../../assets/facebook.png";
import TikTokIcon from "../../assets/tiktok.png";

const Footer = () => {
  return (
    <div className="mt-10 lg:mt-32 text-[14px]">
      <Divider variant="fullWidth" sx={{ marginBottom: "40px" }} />
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-20 lg:flex-row">
        <div className="flex flex-col gap-5">
          <img src={Logo} width={64} height={64} />
          <div>
            Chào mừng bạn đến với nền tảng của chúng tôi, nơi mà những cá nhân
            trẻ đồng điệu kết nối dựa trên tính cách thông qua các phương pháp
            hấp dẫn như MBTI, cung hoàng đạo và thần số học. Chúng tôi không chỉ
            tạo điều kiện cho những kết nối này mà còn cung cấp các dịch vụ tiện
            ích như hỗ trợ chuyển nhà, đóng gói đồ đạc, tìm kiếm nhà ở, bảo trì
            và dọn dẹp để đảm bảo một trải nghiệm sống chung mượt mà và thoải
            mái cho mọi người. Hãy tham gia cùng chúng tôi trong một không gian
            được thiết kế cho các cuộc họp và tọa đàm hài hòa.
          </div>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px]">Về chúng tôi</div>
          <ul>
            <li>Giới thiệu</li>
            <li>An toàn - Bảo mật</li>
            <li>Diều khoản - Điều lệ</li>
            <li>Chính sách quyền riêng tư</li>
          </ul>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px]">Dịch vụ nổi bật</div>
          <ul>
            <li>Không gian làm việc chung</li>
            <li>Phòng họp</li>
            <li>Study Hub</li>
            <li>Không gian văn phòng</li>
            <li>Không gian sự kiện</li>
          </ul>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px]">Chăm sóc khách hàng</div>
          <ul>
            <li>Địa chỉ: Thành phố Hồ Chí Minh</li>
            <li>Hotline: 0931337204</li>
            <li>Email: quik@gmail.com</li>
          </ul>
        </div>
        <div className="leading-8">
          <div className="font-bold text-[18px]">Kết nối với chúng tôi</div>
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
              <a href="">
                <img src={TikTokIcon} alt="Tiktok" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

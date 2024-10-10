import { Divider } from "@mui/material";
import Logo from "../../assets/Logo Official.png";
import FacebookIcon from "../../assets/facebook.png";
import ThreadsIcon from "../../assets/threads.png";

const Footer = () => {
  return (
    <div className="mt-10 lg:mt-32 text-[14px]">
      <Divider variant="fullWidth" sx={{ marginBottom: "40px" }} />
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-20 lg:flex-row">
        <div className="flex flex-col gap-5">
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
            <li>Diều khoản - Điều lệ</li>
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
            <li>Địa chỉ: Thành phố Hồ Chí Minh</li>
            <li>Hotline: 0931337204</li>
            <li>Email: quik@gmail.com</li>
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

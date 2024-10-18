import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BusinessListFilter from "./Filter/BusinessListFilter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#506df7", // Your custom primary color
    },
  },
});

const businessData = [
  {
    soThuTu: 1,
    tenDoanhNghiep: "Công ty TNHH Đầu Tư Phát Triển Phúc An",
    diaChi: "123 Đường Nguyễn Văn Trỗi, Quận Tân Bình, TP. Hồ Chí Minh",
    email: "contact.phucan@gmail.com",
    matKhau: "PhucAn@2024",
    soDienThoai: "028-3945-6789",
  },
  {
    soThuTu: 2,
    tenDoanhNghiep: "Công ty Cổ phần Dịch vụ Kinh Doanh Minh Phát",
    diaChi: "456 Đường Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh",
    email: "info.minhphat@outlook.com",
    matKhau: "MinhPhat#2023",
    soDienThoai: "028-3839-1122",
  },
  {
    soThuTu: 3,
    tenDoanhNghiep: "Công ty TNHH Xây Dựng Nam Phương",
    diaChi: "789 Đường Trường Chinh, Quận Thanh Xuân, Hà Nội",
    email: "support.namphuong@gmail.com",
    matKhau: "NamPhuong@789",
    soDienThoai: "024-3765-2345",
  },
  {
    soThuTu: 4,
    tenDoanhNghiep: "Công ty TNHH Sản Xuất Thương Mại Hải Long",
    diaChi: "101 Đường Phạm Văn Đồng, Quận Bắc Từ Liêm, Hà Nội",
    email: "contact.hailong@outlook.com",
    matKhau: "HaiLong!2023",
    soDienThoai: "024-3856-7788",
  },
  {
    soThuTu: 5,
    tenDoanhNghiep: "Công ty Cổ phần Đầu Tư Kinh Doanh Thành Đạt",
    diaChi: "121 Đường Võ Văn Kiệt, Quận 1, TP. Hồ Chí Minh",
    email: "info.thanhdat@gmail.com",
    matKhau: "ThanhDat@2024*",
    soDienThoai: "028-3810-4455",
  },
  {
    soThuTu: 6,
    tenDoanhNghiep: "Công ty TNHH Dịch Vụ Phúc Thịnh",
    diaChi: "141 Đường Phan Đình Phùng, Quận Phú Nhuận, TP. Hồ Chí Minh",
    email: "phucthinh_corp@gmail.com",
    matKhau: "PhucThinh2023@",
    soDienThoai: "028-3996-5566",
  },
  {
    soThuTu: 7,
    tenDoanhNghiep: "Công ty Cổ phần Thương Mại Á Châu",
    diaChi: "161 Đường Hai Bà Trưng, Quận 1, TP. Hồ Chí Minh",
    email: "sales.achau@outlook.com",
    matKhau: "ACorp2023!",
    soDienThoai: "028-3833-4455",
  },
  {
    soThuTu: 8,
    tenDoanhNghiep: "Công ty TNHH Phát Triển Phương Nam",
    diaChi: "181 Đường Hoàng Quốc Việt, Quận Cầu Giấy, Hà Nội",
    email: "contact.phuongnam@gmail.com",
    matKhau: "PhuongNam@2024",
    soDienThoai: "024-3745-6677",
  },
  {
    soThuTu: 9,
    tenDoanhNghiep: "Công ty Cổ phần Dịch Vụ Long Hải",
    diaChi: "201 Đường Nguyễn Hữu Cảnh, Quận Bình Thạnh, TP. Hồ Chí Minh",
    email: "info.longhai@outlook.com",
    matKhau: "LongHai!2023",
    soDienThoai: "028-3865-9988",
  },
  {
    soThuTu: 10,
    tenDoanhNghiep: "Công ty TNHH Thương Mại Quốc Tế Minh Quang",
    diaChi: "221 Đường Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh",
    email: "support.minhquang@gmail.com",
    matKhau: "MinhQuang@2024#",
    soDienThoai: "028-3845-7788",
  },
];

const BusinessList = () => {
  return (
    <div className="pl-[230px]">
      <BusinessListFilter />
      <div className="overflow-x-auto shadow-btn rounded-2xl border-gradient">
        <table className="table-auto w-full bg-white">
          <thead className="bg-quik-purple text-white">
            <tr className="font-semibold">
              <th className="px-4 py-2">Số thứ tự</th>
              <th className="px-4 py-2">Tên doanh nghiệp</th>
              <th className="px-4 py-2">Địa chỉ</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mật khẩu</th>
              <th className="px-4 py-2">Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
            {businessData.map((item) => (
              <tr>
                <td className="border px-4 py-2">{item.soThuTu}</td>
                <td className="border px-4 py-2">{item.tenDoanhNghiep}</td>
                <td className="border px-4 py-2">{item.diaChi}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.matKhau}</td>
                <td className="border px-4 py-2">{item.soDienThoai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex justify-center">
        <ThemeProvider theme={theme}>
          <Pagination count={5} color="primary" variant="text" />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default BusinessList;

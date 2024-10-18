import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TransactionListFilter from "./Filter/TransactionListFilter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#506df7", // Your custom primary color
    },
  },
});

const transactionsData = [
  {
    soThuTu: 1,
    nguoiDat: "Nguyễn Thị Mai",
    maPhong: "AB101",
    soGiaoDich: 10001,
    ngayDat: "2024-10-18",
    soNguoi: 2,
    tienThanhToan: 1500000,
    trangThai: "Chấp nhận",
  },
  {
    soThuTu: 2,
    nguoiDat: "Trần Văn An",
    maPhong: "B202-X1",
    soGiaoDich: 10002,
    ngayDat: "2024-10-19",
    soNguoi: 3,
    tienThanhToan: 2500000,
    trangThai: "Đang chờ",
  },
  {
    soThuTu: 3,
    nguoiDat: "Lê Thị Hương",
    maPhong: "C303-A2",
    soGiaoDich: 10003,
    ngayDat: "2024-10-20",
    soNguoi: 4,
    tienThanhToan: 3500000,
    trangThai: "Chấp nhận",
  },
  {
    soThuTu: 4,
    nguoiDat: "Phạm Văn Nam",
    maPhong: "D404-01",
    soGiaoDich: 10004,
    ngayDat: "2024-10-21",
    soNguoi: 1,
    tienThanhToan: 1000000,
    trangThai: "Đang chờ",
  },
  {
    soThuTu: 5,
    nguoiDat: "Đỗ Văn Sơn",
    maPhong: "E505B",
    soGiaoDich: 10005,
    ngayDat: "2024-10-22",
    soNguoi: 2,
    tienThanhToan: 2000000,
    trangThai: "Chấp nhận",
  },
  {
    soThuTu: 6,
    nguoiDat: "Nguyễn Thế Anh",
    maPhong: "F606X",
    soGiaoDich: 10006,
    ngayDat: "2024-10-23",
    soNguoi: 3,
    tienThanhToan: 3000000,
    trangThai: "Đang chờ",
  },
  {
    soThuTu: 7,
    nguoiDat: "Trần Thị Lệ",
    maPhong: "G707-2Y",
    soGiaoDich: 10007,
    ngayDat: "2024-10-24",
    soNguoi: 2,
    tienThanhToan: 1800000,
    trangThai: "Chấp nhận",
  },
  {
    soThuTu: 8,
    nguoiDat: "Lê Văn Bình",
    maPhong: "H808-AAA",
    soGiaoDich: 10008,
    ngayDat: "2024-10-25",
    soNguoi: 4,
    tienThanhToan: 3200000,
    trangThai: "Đang chờ",
  },
  {
    soThuTu: 9,
    nguoiDat: "Nguyễn Văn Tài",
    maPhong: "I909-Z1",
    soGiaoDich: 10009,
    ngayDat: "2024-10-26",
    soNguoi: 1,
    tienThanhToan: 900000,
    trangThai: "Chấp nhận",
  },
  {
    soThuTu: 10,
    nguoiDat: "Trần Văn Khánh",
    maPhong: "K1010-AB",
    soGiaoDich: 10010,
    ngayDat: "2024-10-27",
    soNguoi: 3,
    tienThanhToan: 2700000,
    trangThai: "Đang chờ",
  },
  {
    soThuTu: 11,
    nguoiDat: "Bùi Minh Hằng",
    maPhong: "L202-XX",
    soGiaoDich: 10011,
    ngayDat: "2024-10-28",
    soNguoi: 2,
    tienThanhToan: 1600000,
    trangThai: "Chấp nhận",
  },
  {
    soThuTu: 12,
    nguoiDat: "Đặng Văn Hoàng",
    maPhong: "M303-YZ",
    soGiaoDich: 10012,
    ngayDat: "2024-10-29",
    soNguoi: 1,
    tienThanhToan: 1200000,
    trangThai: "Đang chờ",
  },
  {
    soThuTu: 13,
    nguoiDat: "Vũ Thị Phương",
    maPhong: "N404-3D",
    soGiaoDich: 10013,
    ngayDat: "2024-10-30",
    soNguoi: 3,
    tienThanhToan: 2200000,
    trangThai: "Chấp nhận",
  },
];

const TransactionList = () => {
  return (
    <div className="pl-[230px] ">
      <TransactionListFilter />
      <div className="overflow-x-auto shadow-btn rounded-2xl border-gradient">
        <table className="table-auto w-full bg-white">
          <thead className="bg-quik-purple text-white">
            <tr className="font-semibold">
              <th className="px-4 py-2">Số thứ tự</th>
              <th className="px-4 py-2">Người đặt</th>
              <th className="px-4 py-2">Mã phòng</th>
              <th className="px-4 py-2">Số giao dịch</th>
              <th className="px-4 py-2">Ngày đặt</th>
              <th className="px-4 py-2">Số người</th>
              <th className="px-4 py-2">Thanh toán(VND)</th>
              <th className="px-4 py-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((item) => (
              <tr>
                <td className="border px-4 py-2">{item.soThuTu}</td>
                <td className="border px-4 py-2">{item.nguoiDat}</td>
                <td className="border px-4 py-2">{item.maPhong}</td>
                <td className="border px-4 py-2">{item.soGiaoDich}</td>
                <td className="border px-4 py-2">{item.ngayDat}</td>
                <td className="border px-4 py-2">{item.soNguoi}</td>
                <td className="border px-4 py-2">{item.tienThanhToan}</td>
                <td className={` border px-4 py-2`}>
                  <p
                    className={`${
                      item.trangThai == "Chấp nhận"
                        ? "bg-[#00B69B]/20 text-[#00B69B] font-bold"
                        : "bg-[#6226EF]/20 text-[#6226EF] font-bold"
                    } text-center rounded-md`}
                  >
                    {item.trangThai}
                  </p>
                </td>
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

export default TransactionList;

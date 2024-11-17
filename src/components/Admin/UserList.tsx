import { Pagination } from "@mui/material";
import UserListFilter from "./Filter/UserListFilter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import userApi from "../../services/userApi";
import { UserInfor } from "../../interfaces/UserInterface";

const theme = createTheme({
  palette: {
    primary: {
      main: "#506df7", // Your custom primary color
    },
  },
});

// const usersData = [
//   {
//     soThuTu: 1,
//     tenTaiKhoan: "JohnDev123",
//     ten: "Nguyễn Văn Anh",
//     email: "van.anh123@gmail.com",
//     matKhau: "anh123456",
//     soDienThoai: "0912-345-678",
//     trangThai: "Active",
//   },
//   {
//     soThuTu: 2,
//     tenTaiKhoan: "lehoa1985",
//     ten: "Lê Thị Hoa",
//     email: "lehoa85@yahoo.com",
//     matKhau: "hoa2021",
//     soDienThoai: "0987-654-321",
//     trangThai: "Inactive",
//   },
//   {
//     soThuTu: 3,
//     tenTaiKhoan: "TuanMichell75",
//     ten: "Phạm Quốc Tuấn",
//     email: "tuanpham75@hotmail.com",
//     matKhau: "tuanpassword",
//     soDienThoai: "0935-555-555",
//     trangThai: "Active",
//   },
//   {
//     soThuTu: 4,
//     tenTaiKhoan: "linh.tran88",
//     ten: "Trần Thị Linh",
//     email: "linhtran88@gmail.com",
//     matKhau: "linhtran8888",
//     soDienThoai: "0908-444-444",
//     trangThai: "Inactive",
//   },
//   {
//     soThuTu: 5,
//     tenTaiKhoan: "hoangquocviet",
//     ten: "Hoàng Quốc Việt",
//     email: "viet.hoang@outlook.com",
//     matKhau: "viet1990",
//     soDienThoai: "0933-777-777",
//     trangThai: "Active",
//   },
//   {
//     soThuTu: 6,
//     tenTaiKhoan: "lily.nguyen",
//     ten: "Nguyễn Thị Mai",
//     email: "mai.nguyen@hotmail.com",
//     matKhau: "mai1234",
//     soDienThoai: "0911-222-222",
//     trangThai: "Active",
//   },
//   {
//     soThuTu: 7,
//     tenTaiKhoan: "kevinnguyen",
//     ten: "Nguyễn Thanh Tú",
//     email: "kevin.tu@gmail.com",
//     matKhau: "kevin9876",
//     soDienThoai: "0903-333-333",
//     trangThai: "Inactive",
//   },
//   {
//     soThuTu: 8,
//     tenTaiKhoan: "milana",
//     ten: "Trần Minh Anh",
//     email: "minhanh.tran@outlook.com",
//     matKhau: "minhtran789",
//     soDienThoai: "0919-666-666",
//     trangThai: "Active",
//   },
//   {
//     soThuTu: 9,
//     tenTaiKhoan: "david.brown",
//     ten: "Lê Văn Phúc",
//     email: "david.phuc.brown@gmail.com",
//     matKhau: "brown1991",
//     soDienThoai: "0907-999-999",
//     trangThai: "Active",
//   },
//   {
//     soThuTu: 10,
//     tenTaiKhoan: "wilson.emily",
//     ten: "Phạm Ngọc Hương",
//     email: "emily.wilson.pham@gmail.com",
//     matKhau: "emilyhieu456",
//     soDienThoai: "0918-080-808",
//     trangThai: "Inactive",
//   },
// ];

const UserList = () => {
  const [users, setUsers] = useState<UserInfor[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await userApi.getAll();
      // console.log(response.data);
      if (response.data.length > 0) {
        setUsers(response.data);
      }
    };
    fetchData();
  }, [users]);
  return (
    <div className="pl-[230px] ">
      <UserListFilter />
      <div className="overflow-x-auto shadow-btn rounded-2xl border-gradient">
        <table className="table-auto w-full bg-white">
          <thead className="bg-quik-purple text-white">
            <tr className="font-semibold">
              <th className="px-4 py-2">Tên tài khoản</th>
              <th className="px-4 py-2">Tên</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mật khẩu</th>
              <th className="px-4 py-2">Số điện thoại</th>
              <th className="px-4 py-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.password}</td>
                <td className="border px-4 py-2">{item.phoneNumber}</td>
                <td className={` border px-4 py-2`}>
                  <p
                    className={`${
                      item.status == "Active"
                        ? "bg-[#00B69B]/20 text-[#00B69B] font-bold"
                        : "bg-[#ef3826]/20 text-[#ef3826] font-bold"
                    } text-center rounded-md`}
                  >
                    {item.status}
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

export default UserList;

// import { Pagination } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { transactions } from "../../constants";
import TransactionListFilter from "./Filter/TransactionListFilter";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#506df7", // Your custom primary color
//     },
//   },
// });

const TransactionList = () => {
  return (
    <div className="pl-[230px] ">
      <TransactionListFilter />
      <div className="overflow-x-auto shadow-btn rounded-2xl border-gradient">
        <table className="table-auto w-full bg-white">
          <thead className="bg-quik-purple text-white">
            <tr className="font-semibold">
              <th className="px-4 py-2">Số thứ tự</th>
              <th className="px-4 py-2">Ngân hàng</th>
              <th className="px-4 py-2">Tên tài khoản</th>
              <th className="px-4 py-2">Quán</th>
              <th className="px-4 py-2">Số lượng</th>
              <th className="px-4 py-2">Số tiền(VND)</th>
              <th className="px-4 py-2">Cú pháp</th>
              <th className="px-4 py-2">Ngày</th>
              <th className="px-4 py-2">Giờ</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => (
              <tr>
                <td className="border px-4 py-2">{item.STT}</td>
                <td className="border px-4 py-2">{item.Bank}</td>
                <td className="border px-4 py-2">{item.Name}</td>
                <td className="border px-4 py-2">{item.Business}</td>
                <td className="border px-4 py-2">{item.Quantity}</td>
                <td className="border px-4 py-2">{item.Amount}</td>
                <td className="border px-4 py-2">{item.Description}</td>
                <td className="border px-4 py-2">{item.Date}</td>
                <td className="border px-4 py-2">{item.Time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="mt-5 flex justify-center">
        <ThemeProvider theme={theme}>
          <Pagination count={5} color="primary" variant="text" />
        </ThemeProvider>
      </div> */}
    </div>
  );
};

export default TransactionList;

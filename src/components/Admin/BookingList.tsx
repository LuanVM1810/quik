// import { Pagination } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import TransactionListFilter from "./Filter/TransactionListFilter";
import bookingApi from "../../services/bookingApi";
import { Booking } from "../../interfaces/BookingInterface";
import parseDate from "../../utils/parseDate";
import parseDateTime from "../../utils/parseTime";
import { toast } from "sonner";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#506df7", // Your custom primary color
//     },
//   },
// });

const BookingList = () => {
  const [bookingList, setBookingList] = useState<Booking[]>([]);

  const onClickUpdateStatusToPaid = async (bookingId: string) => {
    const response = await bookingApi.updateStatusToPaid(bookingId);
    toast.success(response.data.message);
  };

  const onClickUpdateStatusToUnPaid = async (bookingId: string) => {
    const response = await bookingApi.updateStatusToUnPaid(bookingId);
    toast.success(response.data.message);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await bookingApi.getAll();
      //   console.log(response.data);
      if (response.data.length > 0) {
        setBookingList(response.data);
      }
    };
    fetchData();
  }, [bookingList]);
  return (
    <div className="pl-[230px] ">
      <TransactionListFilter />
      <div className="overflow-x-auto shadow-btn rounded-2xl border-gradient">
        <table className="table-auto w-full bg-white">
          <thead className="bg-quik-purple text-white">
            <tr className="font-semibold">
              <th className="px-4 py-2">Người đặt</th>
              <th className="px-4 py-2">Tên phòng</th>
              <th className="px-4 py-2">Tên doanh nghiệp</th>
              <th className="px-4 py-2">Ngày đặt</th>
              <th className="px-4 py-2">Giờ bắt đầu - kết thúc</th>
              <th className="px-4 py-2">Số người</th>
              <th className="px-4 py-2">Thanh toán(VND)</th>
              <th className="px-4 py-2">Trạng thái</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((item) => (
              <tr key={item.bookingId}>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.businessName}</td>
                <td className="border px-4 py-2">
                  {parseDate(item.bookingDate.toString())}
                </td>
                <td className="border px-4 py-2">
                  {parseDateTime(item.startTime.toString())} -{" "}
                  {parseDateTime(item.endTime.toString())}
                </td>
                <td className="border px-4 py-2">{item.numberOfPeople}</td>
                <td className="border px-4 py-2">{item.totalAmount}</td>
                <td className={` border px-4 py-2`}>
                  <p
                    className={`${
                      item.status == "Đã thanh toán"
                        ? "bg-[#00B69B]/20 text-[#00B69B] font-bold"
                        : "bg-[#ef3826]/20 text-[#ef3826] font-bold"
                    } text-center rounded-md`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="border px-4 py-2">
                  {item.status == "Chưa thanh toán" ? (
                    <button
                      onClick={() => onClickUpdateStatusToPaid(item.bookingId)}
                      className="bg-quik-purple/80 text-white font-bold rounded-md p-1 hover:bg-quik-green/80"
                    >
                      Đã nhận tiền
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        onClickUpdateStatusToUnPaid(item.bookingId)
                      }
                      className="bg-quik-purple/80 text-white font-bold rounded-md p-2 hover:bg-quik-green/80"
                    >
                      Hoàn tác
                    </button>
                  )}
                </td>
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

export default BookingList;

import { useEffect, useState } from "react";
import OrderHistoryList from "../components/OrderHistory/OrderHistoryList";
import bookingApi from "../services/bookingApi";
import { BookingList } from "../interfaces/BookingInterface";

const OrderHistoryPage = () => {
  const [orderStatus, setOrderStatus] = useState("pending");
  const username = localStorage.getItem("username");
  const [bookingList, setBookingList] = useState<BookingList[]>([]);
  const orderPending = () => {
    setOrderStatus("pending");
  };
  const orderSuccess = () => {
    setOrderStatus("success");
  };
  const orderCancel = () => {
    setOrderStatus("cancel");
  };

  const fetchBooking = async () => {
    try {
      const response = await bookingApi.getBookingOfSaptoi(username);
      // console.log(response.data);
      setBookingList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooking();
  });

  return (
    <div className="lg:grid lg:grid-cols-3 py-[40px] lg:min-h-screen">
      <div className="ml-2 lg:text-[20px] lg:col-span-1 lg:mr-20">
        <ul className="flex justify-between lg:flex-col">
          <li
            onClick={orderPending}
            className={`px-[16px] py-[12px] mx-1 border-b-2 cursor-pointer ${
              orderStatus === "pending" &&
              `border-[#506DF7] text-[#506DF7] font-bold`
            }`}
          >
            Sắp tới
          </li>
          <li
            onClick={orderSuccess}
            className={`px-[16px] py-[12px] mx-1 border-b-2 cursor-pointer ${
              orderStatus === "success" &&
              `border-[#506DF7] text-[#506DF7] font-bold`
            }`}
          >
            Hoàn tất
          </li>
          <li
            onClick={orderCancel}
            className={`px-[16px] py-[12px] mx-1 border-b-2 cursor-pointer ${
              orderStatus === "cancel" &&
              `border-[#506DF7] text-[#506DF7] font-bold`
            }`}
          >
            Đã hủy
          </li>
        </ul>
      </div>
      <div className="lg:col-span-2">
        <OrderHistoryList bookingList={bookingList} />
      </div>
    </div>
  );
};

export default OrderHistoryPage;

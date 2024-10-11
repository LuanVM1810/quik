import { useState } from "react";
import OrderHistoryList from "../components/OrderHistory/OrderHistoryList";

const OrderHistoryPage = () => {
  const [orderStatus, setOrderStatus] = useState("pending");
  const orderPending = () => {
    setOrderStatus("pending");
  };
  const orderSuccess = () => {
    setOrderStatus("success");
  };
  const orderCancel = () => {
    setOrderStatus("cancel");
  };
  return (
    <div className="lg:grid lg:grid-cols-3 lg:min-h-screen">
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
        <OrderHistoryList />
      </div>
    </div>
  );
};

export default OrderHistoryPage;

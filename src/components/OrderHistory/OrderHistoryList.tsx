import { Divider } from "@mui/material";
import { PiCreditCard } from "react-icons/pi";
// import { IoReload } from "react-icons/io5";
// import { IoRemoveCircleOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosBusiness } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import EmptyList from "../EmptyList/EmptyList";
import parseDate from "../../utils/parseDate";
import parseDateTime from "../../utils/parseTime";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Booking } from "../../interfaces/BookingInterface";
import { useNavigate } from "react-router-dom";

type Props = {
  bookingList: Booking[];
};

const OrderHistoryList = ({ bookingList }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-10 my-5 text-[13px] md:text-[16px]">
      {bookingList.length != 0 ? (
        bookingList.map((booking) => (
          <div className="bg-white mb-5 rounded-md shadow-btn h-auto lg:w-[450px] ">
            <div className="flex gap-2 items-center pt-2 px-2 pb-4">
              <div className=" bg-[#506DF7] cursor-pointer text-white font-medium text-xs p-1 rounded-[8px] lg:text-sm">
                {booking.roomType}
              </div>
              <div className="font-semibold text-[20px]">{booking.title}</div>
            </div>

            <div className="flex px-2 pb-4 gap-2 max-lg:items-center">
              <div className="lg:flex-col space-y-2 truncate lg:gap-20 text-sm md:text-base">
                <p className="flex items-center gap-1 font-medium text-[18px]">
                  <span>
                    <IoIosBusiness size={"18px"} />
                  </span>
                  {booking.businessName}
                </p>
                <p className="text-[#7D848D] font-normal flex gap-1 items-center">
                  <span>
                    <HiOutlineMapPin size={"16px"} />
                  </span>
                  {booking.location}
                </p>
                <p className="text-[#7D848D] font-normal flex gap-1 items-center">
                  <span>
                    <CiCalendarDate size={"16px"} />
                  </span>
                  {parseDate(booking.bookingDate.toString())}
                </p>

                <p className="text-[#7D848D] font-normal flex gap-1 items-center">
                  <span>
                    <IoTime size={"16px"} />
                  </span>
                  {parseDateTime(booking.startTime.toString())} -{" "}
                  {parseDateTime(booking.endTime.toString())}
                </p>
                <p className="flex items-center gap-1 font-bold text-[#4C4DDC] text-base md:text-lg">
                  <span>
                    <FaMoneyCheckDollar size={"18px"} />
                  </span>
                  {booking.totalAmount} VND
                </p>
              </div>
            </div>
            <Divider variant="fullWidth" />
            <div className="py-2 px-2">
              <p
                className={`rounded-xl flex gap-2 items-center ${
                  booking.status == "Chưa thanh toán"
                    ? "text-orange-400"
                    : "text-[#08a79f]"
                } `}
              >
                <PiCreditCard size={"20px"} />
                {booking.status}
              </p>
            </div>
            <Divider variant="fullWidth" />
            <div className="flex py-2 px-2">
              <button
                onClick={() => {
                  navigate("/payment", {
                    state: { amount: booking.totalAmount },
                  });
                }}
                disabled={booking.status == "Đã thanh toán" ? true : false}
                className={` ${
                  booking.status == "Đã thanh toán"
                    ? `bg-gray-500`
                    : `bg-[#506DF7]`
                }  text-white px-6 py-2 rounded-lg ml-auto`}
              >
                Thanh toán
              </button>
            </div>
          </div>
        ))
      ) : (
        <EmptyList message="Không có lịch sử giao dịch" />
      )}

      {/* <div className="bg-white mb-5 rounded-md shadow-btn h-auto lg:min-w-[450px]">
        <div className="flex gap-2 items-center pt-2 px-2 pb-4">
          <div className=" bg-[#506DF7] cursor-pointer text-white font-medium text-xs p-1 rounded-[8px] lg:text-sm">
            Study hub
          </div>
          <div className="font-semibold text-[20px]">Bamos</div>
        </div>
        <div className="flex px-2 pb-4 gap-2 max-lg:items-center">
          <div className="w-[100px] lg:w-[220px] border-2">
            <img
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="lg:flex-col lg:gap-20 text-base md:text-lg">
            <p className="font-medium text-[18px]">Mã đặt chỗ: 002</p>
            <p className="text-[#7D848D] font-normal flex gap-1 items-center">
              <HiOutlineMapPin size={"16px"} />4 Lê Thánh Tôn
            </p>
            <p className="font-bold text-[#4C4DDC] md:text-lg">300.000 VND</p>
          </div>
        </div>
        <Divider variant="fullWidth" />
        <div className="py-2 px-2">
          <p className="rounded-xl flex gap-2 items-center text-orange-400">
            <IoReload className="animate-spin" size={"20px"} />
            Chờ xác nhận
          </p>
        </div>
        <Divider variant="fullWidth" />
        <div className="flex py-2 px-2">
          <button className=" bg-[#506DF7] text-white px-6 py-2 rounded-lg ml-auto ">
            Đánh giá
          </button>
        </div>
      </div>
      <div className="bg-white mb-5 rounded-md shadow-btn h-auto lg:min-w-[450px]">
        <div className="flex gap-2 items-center pt-2 px-2 pb-4">
          <div className=" bg-[#506DF7] cursor-pointer text-white font-medium text-xs p-1 rounded-[8px] lg:text-sm">
            Phòng họp
          </div>
          <div className="font-semibold text-[20px]">Ori Working</div>
        </div>
        <div className="flex px-2 pb-4 gap-2 max-lg:items-center">
          <div className="w-[100px] lg:w-[220px] border-2">
            <img
              className="object-cover"
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="lg:flex-col lg:gap-20 text-base md:text-lg">
            <p className="font-medium text-[18px]">Mã đặt chỗ: 004</p>
            <p className="text-[#7D848D] font-normal flex gap-1 items-center">
              <HiOutlineMapPin size={"16px"} />
              VinHome GrandPark
            </p>
            <p className="font-bold text-[#4C4DDC] md:text-lg">180.000 VND</p>
          </div>
        </div>
        <Divider variant="fullWidth" />
        <div className="py-2 px-2">
          <p className="rounded-xl flex gap-2 items-center text-red-400">
            <IoRemoveCircleOutline size={"20px"} />
            Đã hủy
          </p>
        </div>
        <Divider variant="fullWidth" />
        <div className="flex py-2 px-2">
          <button className=" bg-[#506DF7] text-white px-6 py-2 rounded-lg ml-auto ">
            Đánh giá
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default OrderHistoryList;

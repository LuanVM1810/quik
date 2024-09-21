import { Divider } from "@mui/material";
import { HiOutlineMapPin } from "react-icons/hi2";
import { PiCreditCard } from "react-icons/pi";

const OrderHistoryList = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-10 my-5 text-[13px] md:text-[16px] lg:text-[19px]">
      <div className="bg-white mb-5 rounded-md shadow-btn h-auto">
        <div className="flex gap-2 items-center pt-2 px-2 pb-4">
          <div className=" bg-[#506DF7] cursor-pointer text-white font-medium text-xs p-1 rounded-[8px] lg:text-sm">
            Không gian làm việc chung
          </div>
          <div className="font-semibold text-[20px] lg:text-[22px]">L'Mak</div>
        </div>
        <div className="flex px-2 pb-4 gap-2 max-lg:items-center">
          <div className="w-[100px] lg:w-[30%] border-2">
            <img
              className="object-cover"
              src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="lg:flex-col lg:gap-20 text-base md:text-lg lg:text-xl">
            <p className="font-medium text-[18px] lg:text-[20px]">
              Mã đặt chỗ: 0001
            </p>
            <p className="text-[#7D848D] font-normal flex gap-1 items-center">
              <HiOutlineMapPin size={"16px"} />
              47 Hai Bà Trưng
            </p>
            <p className="font-bold text-[#4C4DDC] md:text-lg lg:text-xl">
              400.000 VND
            </p>
          </div>
        </div>
        <Divider variant="fullWidth" />
        <div className="py-2 px-2">
          <p className="rounded-xl flex gap-2 items-center text-[#08a79f]">
            <PiCreditCard size={"16px"} />
            Hoàn tất thanh toán
          </p>
        </div>
        <Divider variant="fullWidth" />
        <div className="flex py-2 px-2">
          <button className=" bg-[#506DF7] text-white px-6 py-2 rounded-lg ml-auto ">
            Đánh giá
          </button>
        </div>
      </div>
      <div className="bg-white mb-5 rounded-md shadow-btn h-auto">
        <div className="flex gap-2 items-center pt-2 px-2 pb-4">
          <div className=" bg-[#506DF7] cursor-pointer text-white font-medium text-xs p-1 rounded-[8px] lg:text-sm">
            Study hub
          </div>
          <div className="font-semibold text-[20px] lg:text-[22px]">L'Mak</div>
        </div>
        <div className="flex px-2 pb-4 gap-2 max-lg:items-center">
          <div className="w-[100px] lg:w-[30%] border-2">
            <img
              className="object-cover"
              src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="lg:flex-col lg:gap-20 text-base md:text-lg lg:text-xl">
            <p className="font-medium text-[18px] lg:text-[20px]">
              Mã đặt chỗ: 0001
            </p>
            <p className="text-[#7D848D] font-normal flex gap-1 items-center">
              <HiOutlineMapPin size={"16px"} />
              47 Hai Bà Trưng
            </p>
            <p className="font-bold text-[#4C4DDC] md:text-lg lg:text-xl">
              400.000 VND
            </p>
          </div>
        </div>
        <Divider variant="fullWidth" />
        <div className="py-2 px-2">
          <p className="rounded-xl flex gap-2 items-center text-[#08a79f]">
            <PiCreditCard size={"16px"} />
            Hoàn tất thanh toán
          </p>
        </div>
        <Divider variant="fullWidth" />
        <div className="flex py-2 px-2">
          <button className=" bg-[#506DF7] text-white px-6 py-2 rounded-lg ml-auto ">
            Đánh giá
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryList;

import { Rating } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { roomList } from "../../constants";

const WeeklyDeals = () => {
  return (
    <nav className="flex flex-col gap-3 text-[#101010] mx-[-16px] lg:mx-[-32px] mb-10">
      <div className="flex items-center justify-between px-4 lg:px-8">
        <span className="text-lg md:text-xl lg:text-2xl ">Ưu đãi tuần này</span>
        <button className="text-sm md:text-base lg:text-lg text-[#4C4DDC] hover:opacity-50">
          Xem thêm
        </button>
      </div>
      <div className="flex gap-5 px-4 overflow-x-auto pb-5 lg:px-8">
        {roomList.map((item) => (
          <div className="bg-white shadow-room rounded-2xl min-w-[50%] h-[300px] md:h-[450px] lg:h-[500px]">
            <div className="relative w-full h-[60%] md:h-[65%] lg:h-[70%]">
              <img
                className="rounded-tl-2xl rounded-tr-2xl object-cover w-full h-full"
                src={item.img}
              />
              <span className="absolute cursor-pointer top-3 right-3 bg-[#1B1E28]/40 hover:bg-[#1b1e28]/80 p-2 rounded-full">
                <FaRegHeart size={"16px"} color="white" />
              </span>
            </div>
            <div className="px-2 flex flex-col gap-1">
              <p className="pt-2 font-medium md:text-lg lg:text-xl">
                {item.name}
              </p>

              <p className="text-xs md:text-sm lg:text-base text-[#7D848D]">
                {item.address}
              </p>
              <div className="flex items-center gap-1 text-xs md:text-sm lg:text-base">
                <Rating
                  sx={{ color: "#506df7" }}
                  name="read-only"
                  size="small"
                  precision={0.1}
                  value={item.rating}
                  readOnly
                />
                <p className="font-normal text-xs text-[#1B1E28] md:text-sm lg:text-base">
                  {item.rating}
                </p>
              </div>
            </div>
            <p className="pl-2 my-4 text-sm md:text-base lg:text-lg font-bold text-[#4C4DDC]">
              {item.price} VND
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default WeeklyDeals;

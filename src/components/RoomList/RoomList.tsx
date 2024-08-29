import { Rating } from "@mui/material";
import { HiOutlineMapPin } from "react-icons/hi2";
import { roomList } from "../../constants";
import { FaRegHeart } from "react-icons/fa";

const RoomList = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {roomList.map((item) => (
          <div className="flex flex-col bg-white p-3 gap-[8px] rounded-2xl shadow-room cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <div className="h-[150px] md:h-[200px] lg:h-[250px] relative">
              <img className="rounded-xl h-full w-full" src={item.img} />
              <span className="absolute cursor-pointer top-3 right-3 bg-[#1B1E28]/40 hover:bg-[#1b1e28]/80 p-2 rounded-full">
                <FaRegHeart size={"16px"} color="white" />
              </span>
            </div>
            <div className="pl-1">
              <p className="text-sm font-extrabold md:text-base lg:text-lg">
                {item.name}
              </p>
            </div>

            <div className="text-[#7D848D] flex gap-1 items-center">
              <HiOutlineMapPin size={"16px"} />
              <p className="font-normal text-xs md:text-sm lg:text-base">
                {item.address}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs md:text-sm lg:text-base">
              <Rating
                sx={{ color: "#FFD336" }}
                name="read-only"
                size="small"
                precision={0.1}
                value={item.rating}
                readOnly
              />
              <p className="font-normal text-xs text-[#1B1E28]  md:text-sm lg:text-base">
                {item.rating}
              </p>
            </div>
            <div className="pl-1">
              <p className="font-normal text-base md:text-lg lg:text-xl">
                {item.price} VND
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomList;

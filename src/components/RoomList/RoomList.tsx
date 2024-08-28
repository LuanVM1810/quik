import { Rating } from "@mui/material";
import { HiOutlineMapPin } from "react-icons/hi2";
import { roomList } from "../../constants";
import { FaRegHeart } from "react-icons/fa";

const RoomList = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {roomList.map((item) => (
          <div className="flex flex-col bg-white p-3 gap-[8px] rounded-2xl shadow-room">
            <div className="h-[50%] relative">
              <img className="rounded-xl h-full w-full" src={item.img} />
              <span className="absolute cursor-pointer top-3 right-3 bg-[#1B1E28] p-2 opacity-60 rounded-full hover:opacity-100">
                <FaRegHeart size={"16px"} color="white" />
              </span>
            </div>
            <div className="pl-1">
              <p className="text-sm font-extrabold">{item.name}</p>
            </div>

            <div className="text-[#7D848D] flex gap-1">
              <HiOutlineMapPin size={"16px"} />
              <p className="font-normal text-xs">{item.address}</p>
            </div>
            <div className="text-[#FFD336] flex items-center gap-1 text-xs">
              <Rating
                name="read-only"
                size="small"
                precision={0.1}
                value={item.rating}
                readOnly
              />
              <p className="font-normal text-xs text-[#1B1E28]">
                {item.rating}
              </p>
            </div>
            <div className="pl-1">
              <p className="font-normal text-base">{item.price} VND</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomList;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import UuDaiImg from "../../assets/ưu đãi cuối tuần 1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SwiperList.css";

const slider = [
  {
    id: 1,
    name: "PERCE%T Coffee",
    rating: "4.5",
  },
  {
    id: 2,
    name: "Serepok",
    rating: "4.3",
  },
  {
    id: 3,
    name: "The Xi Cafe",

    rating: "4.8",
  },
  {
    id: 4,
    name: "Saha Coffee",

    rating: "4.9",
  },
  {
    id: 5,
    name: "Plantrip Thé Des Arts",

    rating: "4.2",
  },
];

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SwiperList() {
  return (
    <div className="py-10 bg-quik-purple mx-[-16px] lg:mx-[-32px]">
      <div className="flex justify-center">
        <img src={UuDaiImg} alt="" />
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="
        mySwiper"
      >
        {slider.map((item) => (
          <SwiperSlide>
            <div key={item.id} className="relative rounded-[24px]">
              <div className="absolute flex items-center gap-2 top-4 left-4 px-[8px] bg-white/30 rounded-[50px] py-[4px]">
                <FaStar size={14} color="#FFCC00" />
                <p className="text-[14px] text-white">{item.rating}</p>
              </div>
              <div className="absolute top-4 right-4">
                <AiOutlineHeart size={28} color="white" />
              </div>
              <img className="shadow-btn" src={item.name} />
              <div className="my-2 flex justify-between w-[300px] font-bold size-[18px] text-white">
                <p className=" font-bold">{item.name}</p>
                <p className="text-[#C49C74] font-extrabold">$ 920</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

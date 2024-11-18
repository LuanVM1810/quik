import { IoSearchOutline } from "react-icons/io5";
// import WeeklyDeals from "../components/WeeklyDeals/WeeklyDeals";
import AboutUs from "../components/AboutUs/AboutUs";
import SwiperList from "../components/Swiper/SwiperList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [searchByLocation, setSearchByLocation] = useState("");
  const navigate = useNavigate();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchByLocation(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await e.preventDefault();
    navigate(`/allspace`, {
      state: {
        search: searchByLocation,
        type: "",
      },
    });
  };
  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-10">
        <div className="flex items-center leading-8 lg:leading-10 text-center font-bold text-xl md:text-2xl lg:text-3xl justify-center relative aspect-video mx-[-32px]">
          <video
            autoPlay
            loop
            muted
            className="w-[100%] h-[100%] absolute object-cover -z-2 right-0 top-0 brightness-50"
          >
            <source
              src="https://videos.pexels.com/video-files/3191291/3191291-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute flex flex-col items-center text-white">
            <p className="lg:text-[32px] uppercase">Meet đâu không khó, </p>
            <p className="lg:text-[32px] uppercase">book QUIK khỏi lo</p>
            <form onSubmit={handleSubmit}>
              <div className="relative mt-5 px-6 py-2 rounded-[30px]">
                <div className="flex items-center">
                  <IoSearchOutline size={24} className="absolute left-10" />
                  <input
                    value={searchByLocation}
                    onChange={onChangeSearch}
                    placeholder="Nhập địa chỉ"
                    className="pl-14 pr-6 py-2 outline-none shadow-btn bg-[#252525] text-[16px] lg:text-[20px] text-[#CCCCCC] rounded-[12px]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 shadow-btn bg-quik-purple rounded-[12px] mt-4 lg:ml-5 text-[16px] lg:text-[20px]"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        </div>
        <AboutUs />
        <SwiperList />
        {/* <ImageSlider
          autoSlide={true}
          autoSlideInterval={2500}
          slider={slider}
        /> */}
        {/* <WeeklyDeals /> */}
      </div>
    </>
  );
};

export default HomePage;

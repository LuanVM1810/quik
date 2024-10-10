import { NavLink } from "react-router-dom";
import Category from "../components/Category/Category";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Search from "../components/Search/Search";
import { FaRegHandPointDown } from "react-icons/fa6";
import WeeklyDeals from "../components/WeeklyDeals/WeeklyDeals";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-10">
        <div className="lg:flex gap-5">
          <Search placeholder="Tìm kiếm" />
          <Category />
        </div>
        <div className="flex items-center leading-8 lg:leading-10 text-center uppercase font-bold text-xl md:text-2xl lg:text-3xl justify-center relative aspect-video mb-10 mx-[-32px]">
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
            <p>Book phòng khó </p>
            <p>Có Quik lo</p>
            <FaRegHandPointDown size={35} className="mt-8 animate-bounce" />
            <NavLink to="/allspace">
              <button className="mt-4 px-6 py-2 border-2 outline-none rounded-2xl border-white hover:bg-white hover:text-[#506DF7] transition-all duration-300">
                Book ngay
              </button>
            </NavLink>
          </div>
        </div>
        <ImageSlider autoSlide={true} />
        <WeeklyDeals />
      </div>
    </>
  );
};

export default HomePage;

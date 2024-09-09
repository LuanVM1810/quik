import BookNow from "../components/BookNow/BookNow";
import Category from "../components/Category/Category";
import Search from "../components/Search/Search";
import Suggest from "../components/Suggest/Suggest";
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
            className="w-[100%] h-[100%] absolute object-cover z-0 right-0 top-0 brightness-50"
          >
            <source
              src="src\assets\3191291-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute text-white animate-bounce">
            <p>Book phòng khó </p>
            <p>Có Quik lo</p>
          </div>
        </div>
        <WeeklyDeals />
        <BookNow />
        <Suggest />
      </div>
    </>
  );
};

export default HomePage;

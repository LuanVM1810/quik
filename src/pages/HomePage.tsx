import BookNow from "../components/BookNow/BookNow";
import Category from "../components/Category/Category";
import Header from "../components/Header/Header";
import MyService from "../components/MyService/MyService";
import Suggest from "../components/Suggest/Suggest";
import WeeklyDeals from "../components/WeeklyDeals/WeeklyDeals";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="grid grid-rows-4 gap-6 mt-[50px]">
        <div className="space-y-8">
          <Category />
          <MyService />
        </div>

        <WeeklyDeals />
        <BookNow />
        <Suggest />
      </div>
    </>
  );
};

export default HomePage;

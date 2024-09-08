import BookNow from "../components/BookNow/BookNow";
import Category from "../components/Category/Category";
import Search from "../components/Search/Search";
import Suggest from "../components/Suggest/Suggest";
import WeeklyDeals from "../components/WeeklyDeals/WeeklyDeals";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="lg:flex gap-5">
          <Search placeholder="Tìm kiếm" />
          <Category />
        </div>
        <WeeklyDeals />
        <BookNow />
        <Suggest />
      </div>
    </>
  );
};

export default HomePage;

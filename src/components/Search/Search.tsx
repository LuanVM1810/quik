import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className="flex items-center my-10 bg-red-200 p-[1px] bg-gradient-to-r from-[#38AAF0]  to-[#42FCAC] rounded-3xl relative">
        <input
          type="search"
          placeholder="Tìm kiếm"
          className="py-2 pl-12 pr-4 rounded-3xl w-full h-full outline-none relative"
        />
        <CiSearch className="absolute top-2 left-4" size={"24px"} />
      </div>
    </>
  );
};

export default Search;

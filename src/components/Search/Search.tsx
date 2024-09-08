import { CiSearch } from "react-icons/ci";

type Props = {
  placeholder: string;
};

const Search = ({ placeholder }: Props) => {
  return (
    <>
      <div className="flex items-center my-10 border-2 border-[#506DF7] bg-white rounded-[8px] lg:w-[20%]">
        <span className="ml-2">
          <CiSearch size={"24px"} />
        </span>
        <input
          placeholder={placeholder}
          type="Search"
          className=" w-full h-full rounded-[8px] px-4 py-2 outline-none"
        />
      </div>
    </>
  );
};

export default Search;

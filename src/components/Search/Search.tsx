import { CiSearch } from "react-icons/ci";

type Props = {
  placeholder: string;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ placeholder, searchValue, setSearchValue }: Props) => {
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <div className="flex items-center my-10 border-2 border-[#506DF7] bg-white rounded-[8px]">
        <span className="ml-2">
          <CiSearch size={"24px"} />
        </span>
        <input
          value={searchValue}
          onChange={onChangeSearch}
          placeholder={placeholder}
          type="Search"
          className=" w-full h-full rounded-[8px] px-4 py-2 outline-none"
        />
      </div>
    </>
  );
};

export default Search;

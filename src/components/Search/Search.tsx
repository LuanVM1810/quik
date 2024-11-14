import { useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
  placeholder: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ placeholder, setSearchValue }: Props) => {
  const [tempSearchValue, setTempSearchValue] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchValue(e.target.value);
  };

  const handleConfirm = () => {
    setSearchValue(tempSearchValue);
  };

  return (
    <>
      <div className="flex items-center my-10 border-2 border-[#506DF7] bg-white rounded-[8px]">
        <span className="ml-2">
          <CiSearch size={"24px"} />
        </span>
        <input
          value={tempSearchValue}
          onChange={onChangeSearch}
          placeholder={placeholder}
          type="Search"
          className="w-[95%] h-full rounded-[8px] px-4 py-2 outline-none"
        />
        <button
          type="button"
          className="bg-quik-purple text-white"
          onClick={handleConfirm}
        >
          Xác nhận
        </button>
      </div>
    </>
  );
};

export default Search;

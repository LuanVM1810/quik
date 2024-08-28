import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const goToAllSpace = () => {
    navigate("/allspace");
  };
  return (
    <div className="flex items-center gap-4 text-sm">
      <button
        onClick={goToAllSpace}
        className="p-[2px] w-[70%] bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7] rounded-3xl"
      >
        <div className="rounded-3xl p-2 bg-white w-full h-full">
          Không gian làm việc chung
        </div>
      </button>
      <button className="p-[2px] w-[30%] bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7] rounded-3xl">
        <div className="rounded-3xl p-2 bg-white w-full h-full">Study Hub</div>
      </button>
    </div>
  );
};

export default Category;

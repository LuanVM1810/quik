import KhongGianSuKienImg from "../../assets/pexels-pixabay-260931.png";
import StudyHubImg from "../../assets/pexels-pixabay-159806.png";
import KhongGianLamViecImg from "../../assets/Rectangle 4012.png";
import CafeLamViecImg from "../../assets/Rectangle 4012(1).png";
import { NavLink } from "react-router-dom";

const infor = [
  {
    id: 1,
    title: "Không gian sự kiện",
    img: KhongGianSuKienImg,
  },
  {
    id: 2,
    title: "Study Hub",
    img: StudyHubImg,
  },
  {
    id: 3,
    title: "Không gian làm việc",
    img: KhongGianLamViecImg,
  },
  {
    id: 4,
    title: "Cafe làm việc",
    img: CafeLamViecImg,
  },
];
const Category = () => {
  return (
    <div>
      <div className="px-10 my-20 lg:px-20">
        <ul className="flex flex-col gap-10 lg:gap-6 lg:flex-row flex-wrap">
          {infor.map((item) => (
            <NavLink to="/allspace">
              <li className="flex flex-col items-center gap-4">
                <div
                  key={item.id}
                  className="text-[20px] text-quik-purple font-bold text-center"
                >
                  {item.title}
                </div>
                <img
                  className="hover:scale-95 transition-all duration-300"
                  src={item.img}
                  width={320}
                  height={631}
                />
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;

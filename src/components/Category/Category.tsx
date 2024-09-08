import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <ul className="flex flex-wrap gap-[12px] my-10 lg:flex-nowrap">
        <NavLink to="/allspace">
          <li className="btn-li">Không gian làm việc chung</li>
        </NavLink>

        <li className="btn-li">Phòng họp</li>
        <li className="btn-li">Study hub</li>
        <li className="btn-li">Không gian văn phòng</li>
        <li className="btn-li">Không gian sự kiện</li>
      </ul>
    </div>
  );
};

export default Category;

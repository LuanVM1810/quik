import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const pathSegments = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");

  const crumbs = pathSegments.map((crumb, index) => {
    currentLink += `/${crumb}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <div className="flex" key={crumb}>
        <Link
          className="cursor-pointer hover:opacity-80 hover:underline"
          to={currentLink}
        >
          {crumb}
        </Link>
        {!isLast && <p className="mx-2">{"/"}</p>}
      </div>
    );
  });

  return <div className="flex my-5 text-lg lg:text-xl">{crumbs}</div>;
};

export default Breadcrumbs;

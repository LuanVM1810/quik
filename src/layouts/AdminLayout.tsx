import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/Admin/SidebarAdmin";

const AdminLayout = () => {
  return (
    <div>
      <SidebarAdmin />
      <Outlet />
    </div>
  );
};

export default AdminLayout;

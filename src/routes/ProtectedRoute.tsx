import { Navigate } from "react-router-dom";
import { toast } from "sonner";
interface Props {
  children: JSX.Element;
  isAllowed: boolean;
}

const ProtectedRoute = ({ children, isAllowed }: Props) => {
  if (isAllowed) {
    return children;
  }

  return (
    <Navigate
      to="/signin"
      state={toast.info("Xin vui lòng đăng nhập đăng nhập")}
    />
  );
};

export default ProtectedRoute;

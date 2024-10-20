import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface Props {
  children: ReactNode;
  isAllowed: boolean;
  token: string;
}

const ProtectedRoute = ({ children, isAllowed, token }: Props) => {
  if (!token) {
    return <Navigate to="/" />;
  }
  if (isAllowed) {
    return children;
  }

  return <Navigate to="/404" />;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";
interface Props {
  children: JSX.Element;
  isAllowed: boolean;
}

const ProtectedRoute = ({ children, isAllowed }: Props) => {
  if (isAllowed) {
    return children;
  }

  return <Navigate to="/" />;
};

export default ProtectedRoute;

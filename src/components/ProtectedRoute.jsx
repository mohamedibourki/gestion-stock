import { Navigate } from "react-router-dom";
import { useAuth } from "src/context/Auth";
import { Spinner } from "./ui/spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

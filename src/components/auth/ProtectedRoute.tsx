import { Navigate, Outlet } from "react-router-dom";
// import { PreLoader } from "../loaders/Preloader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export function ProtectedRoute() {
  //   const { user, loading } = useAuth();
  const { isLogged } = useSelector((state: RootState) => state.auth);

  //   if (loading) {
  //     return <PreLoader />;
  //   }

  if (!isLogged) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  // if (!user.setupCompleted) {
  //   return <Navigate to="/setup" replace />;
  // }

  return <Outlet />;
}

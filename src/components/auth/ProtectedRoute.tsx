import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export function ProtectedRoute() {
  const { isLogged } = useSelector((state: RootState) => state.auth);
  const { session_id } = useSelector(
    (state: RootState) => state.productSession
  );
  const { pathname } = useLocation();

  if (!isLogged) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  if (session_id && pathname === "/") {
    return <Navigate to="/cvp-lite" replace />;
  }

  return <Outlet />;
}

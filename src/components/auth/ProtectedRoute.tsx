import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export function ProtectedRoute() {
  const { isLogged } = useSelector((state: RootState) => state.auth);
  const { session_id, first_step } = useSelector(
    (state: RootState) => state.productSession
  );
  const { pathname } = useLocation();

  if (!isLogged) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  if (session_id && pathname === "/" && first_step !== "") {
    return <Navigate to={`/cvp-lite/${first_step}`} replace />;
  }

  return <Outlet />;
}

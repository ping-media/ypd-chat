import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

export const usePageData = () => {
  const { pathname } = useLocation();

  const pageName =
    pathname === "/" ? "home" : pathname.replace(/\//g, "_").replace(/^_/, "");

  const dataList = useSelector(
    (state: RootState) => state.data.dataList[pageName] ?? null
  );
  const loading = useSelector((state: RootState) => state.data.loading);

  return { dataList, loading };
};

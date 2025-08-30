import { useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";

const usePageName = (loadingBarRef: any) => {
  const location = useLocation();
  const [pathname, setPathName] = useState<string>(location.pathname);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      loadingBarRef.current?.continuousStart();
    } else if (navigation.state === "idle") {
      loadingBarRef.current?.complete();
    } else {
      loadingBarRef.current?.complete();
    }
    setPathName(location.pathname);
  }, [navigation.state]);

  const pageTitle = pathname
    .split("/")[1]
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return { pageTitle };
};

export default usePageName;

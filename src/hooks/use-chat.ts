import API from "@/data/api";
import { setData, setLoading } from "@/redux/DataSlice/DataSlice";
import { store } from "@/redux/store";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";

const useChat = () => {
  const { pathname } = useLocation();

  const pageName =
    pathname === "/" ? "home" : pathname.replace(/\//g, "_").replace(/^_/, "");

  const fetchData = useCallback(async (nextStep: string) => {
    const Store = store.getState();
    const session = Store.productSession;
    const sessionId = session?.session_id || "";
    const userId = Store?.auth?.user?.user_id || "";

    if (!nextStep) {
      console.log("not able to fetch next step");
      return null;
    }

    store.dispatch(setLoading(true));

    try {
      const response = await API.post(
        `/profile-setup/step-questions/${nextStep}`,
        {
          session_id: sessionId,
          user_id: userId,
          previous_step_context: {
            additionalProp1: {},
          },
          language: "en",
        }
      );

      if (response?.data) {
        const prevData = Store.data.dataList[pageName] ?? [];

        const newData = [...prevData, response.data];

        store.dispatch(
          setData({
            pageName,
            data: newData,
          })
        );
      }

      return null;
    } catch (error) {
      console.log(error);
    } finally {
      store.dispatch(setLoading(false));
    }
  }, []);

  return { fetchData };
};

export default useChat;

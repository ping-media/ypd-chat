import API from "@/data/api";
import { handleAddSteps } from "@/redux/stepsSlice/StepsSlice";
import { store } from "@/redux/store";
import { useCallback } from "react";

const useSteps = () => {
  const fetchData = useCallback(async () => {
    try {
      const response = await API.get("/profile-setup/available-steps");

      if (response?.data) {
        store.dispatch(handleAddSteps(response.data));
      }

      return null;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { fetchData };
};

export default useSteps;

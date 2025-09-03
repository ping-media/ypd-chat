import API from "@/data/api";
import { getErrorMessage } from "@/lib/utils";
import { addSession } from "@/redux/productSessionSlice/ProductSessionSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useProductsession = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const createSession = async () => {
    try {
      setLoading(true);
      if (!user.user_id) {
        setLoading(false);
        return toast.error("Unable to get user id! try again");
      }

      const response = await API.post("/start_session", {
        user_id: user.user_id,
      });

      if (response) {
        dispatch(addSession(response.data));
        toast.success("Profile update successful.");
        return navigate("/profile-setup");
      } else {
        toast.error("Unable to generate session id! try again");
      }
    } catch (error) {
      console.error("Error during admin login:", error);
      toast(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return { createSession, loading };
};

export default useProductsession;

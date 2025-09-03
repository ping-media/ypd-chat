import API from "@/data/api";
import { ProfileSetupSchema } from "./schemas/profile";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addNextStep } from "@/redux/productSessionSlice/ProductSessionSlice";

const useProfile = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { session_id } = useSelector(
    (state: RootState) => state["product-session"]
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onProfileSubmit = async (
    data: z.infer<typeof ProfileSetupSchema>,
    reset: () => void
  ) => {
    try {
      if (!user.user_id) {
        return toast.error("Unable to get user id! try again");
      }

      if (!session_id) {
        return toast.error("Unable to get session id! try again");
      }

      const response = await API.post("/profile-setup/profile-setup/complete", {
        ...data,
        session_id: session_id,
        user_id: user.user_id,
        language: "en",
        hobbies: ["string"],
        country: "India",
      });
      if (response) {
        toast.success("Profile update successful.");
        dispatch(addNextStep(response?.data?.next_step || ""));
        navigate("/cvp-lite");
        reset();
      } else {
        toast.error(response);
      }
    } catch (error) {
      console.error("Error during admin login:", error);
      toast(getErrorMessage(error));
    }
  };

  return { onProfileSubmit };
};

export default useProfile;

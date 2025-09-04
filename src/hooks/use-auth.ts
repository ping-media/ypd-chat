import { toast } from "sonner";
import { z } from "zod";
import { getErrorMessage } from "../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { FormLoginSchema, FormRegisterSchema } from "./schemas/auth";
import API from "@/data/api";
import { handleLogin, logout } from "@/redux/authSlice/AuthSlice";

const useAuth = () => {
  const { session_id } = useSelector(
    (state: RootState) => state.productSession
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onRegisterSubmit = async (
    data: z.infer<typeof FormRegisterSchema>,
    reset: () => void
  ) => {
    try {
      const response = await API.post("/auth/register", {
        ...data,
        language: "en",
        date_of_birth: "string",
        phone: "string",
        city: "string",
        city_tier: "tier_2",
        country: "string",
        role: "student",
      });
      if (response) {
        toast.success("Register successful.");
        navigate("/auth/verification");
        reset();
      } else {
        toast.error(response);
      }
    } catch (error) {
      console.error("Error during admin login:", error);
      toast(getErrorMessage(error));
    }
  };

  const onLoginSubmit = async (
    data: z.infer<typeof FormLoginSchema>,
    reset: () => void
  ) => {
    try {
      const response: any = await API.post("/auth/login", data);
      if (response) {
        dispatch(handleLogin(response.data));
        reset();

        if (session_id !== "") {
          navigate("/cvp-lite");
        } else {
          navigate("/");
        }

        toast.success("login successfully");
      }
    } catch (err) {
      toast.error("unable to login! try again");
      console.error(err);
    }
  };

  const onLogout = async () => {
    dispatch(logout());
    navigate("/auth/sign-in");
  };

  return {
    FormRegisterSchema,
    FormLoginSchema,
    onRegisterSubmit,
    onLoginSubmit,
    onLogout,
  };
};

export default useAuth;

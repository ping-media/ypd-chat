import { toast } from "sonner";
import { z } from "zod";
import { getErrorMessage } from "../lib/utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { FormLoginSchema, FormRegisterSchema } from "./schemas/auth";
import API from "@/data/api";
import { handleLogin, logout } from "@/redux/authSlice/AuthSlice";

const useAuth = () => {
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
        // console.log(response);
        dispatch(handleLogin(response));
        reset();
        navigate("/");
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

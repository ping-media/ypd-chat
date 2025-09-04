import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../Error/ErrorBoundary";
import NotFoundError from "../Error/404";
import UnauthorisedError from "../Error/401";
import { PreLoader } from "../components/loaders/Preloader";
import Home from "./pages/Home";
import Layout from "../components/layout/layout";
import { LoginForm } from "@/components/auth/LoginForm";
import { LoginWithNumberForm } from "@/components/auth/LoginWithNumberForm";
import { EmailVerfication } from "@/components/auth/EmailVerification";
import OtpVerification from "@/components/auth/OtpVerification";
import { RegisterForm } from "@/components/auth/RegisterForm";
import AuthLayout from "@/components/layout/AuthLayout";
import Setup from "./pages/Setup";
import SetupLayout from "@/components/layout/SetupLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Role from "./pages/Role";
import OnBoardingLayout from "@/components/layout/OnBoarding";
import ProfileSetupLayout from "../components/layout/ProfileSetupLayout";
import PrepareScreen from "@/components/loaders/PrepareScreen";
import Pricing from "./pages/Pricing";
import ChatScreen from "./pages/ChatScreen";
import ProfileSetup from "./pages/ProfileSetup";
// import { testLoader } from "./loaders";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Navigate to="/auth" replace />,
  // },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <LoginForm />,
      },
      {
        path: "sign-up",
        element: <RegisterForm />,
      },
      {
        path: "phone-number/sign-in",
        element: <LoginWithNumberForm />,
      },
      {
        path: "phone-number/verification",
        element: <OtpVerification />,
      },
      {
        path: "verification",
        element: <EmailVerfication />,
      },
    ],
  },
  {
    path: "/setup-profile",
    element: <SetupLayout />,
    children: [
      { index: true, element: <ProfileSetupLayout /> },
      { path: "choose-role", element: <Role /> },
      { path: "prepare", element: <PrepareScreen /> },
      {
        element: <OnBoardingLayout />,
        children: [
          {
            path: "basic",
            element: <Setup />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <ErrorBoundary />,
    hydrateFallbackElement: <PreLoader />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/cvp-lite",
            element: <ChatScreen />,
            // loader: testLoader,
          },
          {
            path: "/profile-setup",
            element: <ProfileSetup />,
          },
          {
            path: "/pricing",
            element: <Pricing />,
          },
          {
            path: "unauthorized",
            element: <UnauthorisedError />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundError />,
  },
]);

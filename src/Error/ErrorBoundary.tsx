import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NotFoundError from "./404";
import GeneralError from "./GeneralError";
import UnauthorisedError from "./401";

const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <NotFoundError />;
      case 500:
        return <GeneralError />;
      case 401:
        return <UnauthorisedError />;
      default:
        return <GeneralError />;
    }
  }

  return <GeneralError />;
};

export default ErrorBoundary;

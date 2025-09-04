import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { LoadingBarProvider } from "./context/LoadingBarContext";
import { ThemeProvider } from "./context/ThemeProvider";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
// import { PreLoader } from "./components/loaders/Preloader";
import { router } from "./routes/Router";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <LoadingBarProvider>
        <ThemeProvider defaultTheme="light" storageKey="youth-pulse-digital">
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </ThemeProvider>
      </LoadingBarProvider>
    </StrictMode>
  </Provider>
);

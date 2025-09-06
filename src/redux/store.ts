import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";

import userReducer from "./authSlice/AuthSlice";
import dataReducer from "./DataSlice/DataSlice";
import productSessionReducer from "./productSessionSlice/ProductSessionSlice";
import StepsReducer from "./stepsSlice/StepsSlice";
import { encryptedAdminTransform } from "../lib/utils";
import persistReducer from "redux-persist/es/persistReducer";

const persistAdminConfig = {
  key: "user",
  storage,
  transforms: [encryptedAdminTransform],
};

const persistProductSessionConfig = {
  key: "productSession",
  storage,
  transforms: [encryptedAdminTransform],
};

const persistStepsConfig = {
  key: "steps",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAdminConfig, userReducer),
  productSession: persistReducer(
    persistProductSessionConfig,
    productSessionReducer
  ),
  steps: persistReducer(persistStepsConfig, StepsReducer),
  data: dataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { requestReducer } from "entities/request/model";

export const setupStore = () =>
  configureStore({
    reducer: {
      requests: requestReducer,
    },
  });

export type RootState = ReturnType<ReturnType<typeof setupStore>["getState"]>;
export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];

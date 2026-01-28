import { configureStore } from "@reduxjs/toolkit";
import { applicationsReducer } from "entities/applicationsSlice";

export const setupStore = () =>
  configureStore({
    reducer: {
      applications: applicationsReducer,
    },
  });

export type RootState = ReturnType<ReturnType<typeof setupStore>["getState"]>;
export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];

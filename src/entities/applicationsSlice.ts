//* setting redux
import type { RootState } from "app/providers/store/storeConfig";
import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  new: string;
}

const initialState: ThemeState = {
  new: "new",
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {},
});
export const applicationsReducer = applicationsSlice.reducer;
// selector
export const applications = (state: RootState) => state.applications;
// reducers
// export const {} = themeSlice.actions;

// setting redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// types
import type { Request, RequestsState } from "./types";

const STORAGE_KEY = "requests_storage";

//* загрузить заявку из localStorage
const loadStateFromStorage = (): Request[] => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (serialized === null) {
      return [];
    }
    return JSON.parse(serialized);
  } catch (err) {
    console.error("Не удалось загрузить заявку из localStorage:", err);
    return [];
  }
};

//* сохранить заявку в localStorage
export const saveStateToStorage = (requests: Request[]): void => {
  try {
    const serialized = JSON.stringify(requests);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    console.error("Не удалось сохранить заявку в localStorage:", err);
  }
};

const initialState: RequestsState = {
  requests: loadStateFromStorage(),
};

const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    //* создать заявку
    createRequest: (
      state,
      action: PayloadAction<Omit<Request, "id" | "createdAt" | "updatedAt">>,
    ) => {
      const newRequest: Request = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      state.requests.push(newRequest);
      saveStateToStorage(state.requests);
    },
    //* обновить заявку
    updateRequest: (
      state,
      action: PayloadAction<{
        id: string;
        data: Partial<Omit<Request, "id" | "createdAt">>;
      }>,
    ) => {
      const { id, data } = action.payload;
      const index = state.requests.findIndex((req) => req.id === id);

      if (index !== -1) {
        state.requests[index] = {
          ...state.requests[index],
          ...data,
        };
        saveStateToStorage(state.requests);
      }
    },
    //* удалить заявку
    deleteRequest: (state, action: PayloadAction<string>) => {
      state.requests = state.requests.filter((req) => req.id !== action.payload);
      saveStateToStorage(state.requests);
    },
  },
});

export const { createRequest, updateRequest, deleteRequest } = requestSlice.actions;

export default requestSlice.reducer;

import type { RootState } from "app/providers/store/storeConfig";

export const selectAllRequests = (state: RootState) => state.requests.requests;

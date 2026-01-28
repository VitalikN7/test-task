import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { setupStore } from "./storeConfig";

const store = setupStore();

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

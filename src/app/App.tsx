//* providers
import { StoreProvider } from "./providers/store/StoreProvider";
import { RouterProvider } from "./providers/router/RouterProvider";

export const App = () => {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
};

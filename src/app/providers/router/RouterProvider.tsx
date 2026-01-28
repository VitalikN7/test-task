import { RouterProvider as ReactRouterProvider } from "react-router";
import { router } from "./routerConfig";

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

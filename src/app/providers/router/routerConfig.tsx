//* router
import { createBrowserRouter } from "react-router";
//* pages
import { Home } from "pages/Home";
//* все роуты приложения
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

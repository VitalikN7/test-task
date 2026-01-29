//* router
import { createHashRouter, Navigate } from "react-router";
//* pages
import { RequestsListPage } from "pages/RequestsListPage";
import { CreateRequestPage } from "pages/CreateRequestPage";
import { RequestDetailsPage } from "pages/RequestDetailsPage";
//* все роуты приложения
export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/requests" replace />,
  },
  {
    path: "/requests",
    element: <RequestsListPage />,
  },
  {
    path: "/requests/new",
    element: <CreateRequestPage />,
  },
  {
    path: "requests/:id",
    element: <RequestDetailsPage />,
  },
]);

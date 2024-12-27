import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // path home page
    ],
  },
]);

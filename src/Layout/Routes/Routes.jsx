import { createBrowserRouter } from "react-router-dom";
import AddProductPage from "../../Pages/AddProduct/AddProductPage";
import Home from "../../Pages/Home/Home/Home";
import MainLayout from "../MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // path home page
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProductPage />,
      },
    ],
  },
]);

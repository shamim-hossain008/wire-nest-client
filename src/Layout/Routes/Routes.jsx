import { createBrowserRouter } from "react-router-dom";
import AddProductPage from "../../Pages/AddProduct/AddProductPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
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
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

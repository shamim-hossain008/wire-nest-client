import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Layout/Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { CartProvider } from "./Provider/CartProvider/CartProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);

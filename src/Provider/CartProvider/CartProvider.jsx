import { createContext, useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  //   Fetch cart items when the user is logged in
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5070/myProduct/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data);
        });
    }
  }, [user]);

  const cartInfo = {
    cartItems,
    setCartItems,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

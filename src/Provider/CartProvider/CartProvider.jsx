import { createContext, useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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
  //  Calculate total amount whenever cart updated
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + Number(item.price || 0),
      0
    );
    setTotalAmount(total || 0);
  }, [cartItems]);

  const cartInfo = {
    cartItems,
    setCartItems,
    totalAmount,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

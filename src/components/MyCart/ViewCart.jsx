import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Provider/CartProvider/CartProvider";
import ProductCard from "./ProductCard";

function ViewCart() {
  const { cartItems, totalAmount } = useCart();

  return (
    <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <div className="flex justify-between text-2xl text-center text-blue-600 font-bold shadow-sm p-2">
        <h2>Your Cart</h2>
        <h2>Total Items: {cartItems.length}</h2>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <ProductCard key={item._id} item={item} />)
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">
            RM {Number(totalAmount).toFixed(2)}
          </span>
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link
          to="/"
          type="button"
          className="px-6 py-2 border rounded-md border-violet-400 dark:border-violet-600"
        >
          Back
          <span className="sr-only sm:not-sr-only"> to Shop</span>
        </Link>
        <button
          type="button"
          className="px-6 py-2 border rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 border-violet-400 dark:border-violet-600"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
}

export default ViewCart;

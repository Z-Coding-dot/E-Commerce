import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateQuantity, removeFromCart } from "../features/cart/cartSlice"; // Adjust the path based on your project structure

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => {
    const price = item.price || 0; // Access nested price
    const quantity = item.quantity || 0;
    return sum + price * quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2>Your Cart is Empty</h2>
          <p className="text-gray-600 text-sm mb-4">
            You have no items in your cart. Please add some items to your cart
            before proceeding.
          </p>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 inline-block px-4 py-2 rounded-lg mb-4"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 lg:px-32 lg:py-16">
      <h2 className="text-2xl font-semibold mb-5">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md bg-white p-6">
          {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 border-b"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image || "placeholder.jpg"} // Use a placeholder image if image is missing
                    alt={item.title || "Product Image"}
                    className="w-40 h-40 rounded-lg object-cover hidden lg:block"
                  />
                </Link>
                <div className="flex-1">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-lg font-semibold hover:text-blue-500"
                  >
                    {item.title || "Unknown Product"}
                  </Link>
                  <p className="text-gray-600">
                    ${(item.price || 0).toFixed(2)}
                  </p>

                  <div className="flex gap-4 items-center mt-5">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="text-gray-600 px-2 py-1 font-bold rounded-lg hover:bg-blue-600 hover:text-white"
                    >
                      +
                    </button>
                    <span className="font-bold mx-4">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(0, item.quantity - 1),
                          })
                        )
                      }
                      className="text-gray-600 font-bold px-2 py-1 rounded-lg hover:bg-red-600 hover:text-white"
                    >
                      -
                    </button>
                    <div
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <FaTrash size={20} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold">
                    ${((item.price || 0) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="shadow-md rounded-lg p-8 bg-white">
            <h3 className="text-xl font-semibold mb-5">Order Summary</h3>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between mb-3">
                <span>Sub Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between my-3 font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg my-4 cursor-pointer hover:bg-blue-800">
                Process to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

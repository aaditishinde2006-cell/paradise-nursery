
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main style={{ padding: "24px" }}>
      <h1>Shopping Cart</h1>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map((item) => (
        <article className="cart-item" key={item.id}>
          <img
            src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80`}
            alt={item.name}
          />

          <div>
            <h3>{item.name}</h3>
            <p>Unit price: ${item.price.toFixed(2)}</p>
            <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>

            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              −
            </button>
            <span style={{ margin: "0 12px" }}>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>

            <button
              style={{ marginLeft: "12px" }}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Delete
            </button>
          </div>
        </article>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button onClick={() => window.alert("Checkout Coming Soon!")}>
        Checkout
      </button>

      <button
        style={{ marginLeft: "12px" }}
        onClick={onContinueShopping}
      >
        Continue Shopping
      </button>
    </main>
  );
}

export default CartItem;

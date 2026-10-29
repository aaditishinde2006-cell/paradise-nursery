
import React, { useState } from "react";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page !== "home" && (
        <nav className="navbar">
          <strong>Paradise Nursery</strong>

          <div>
            <a href="#" onClick={() => setPage("home")}>Home</a>
            <a href="#" onClick={() => setPage("plants")}>Plants</a>
            <a href="#" onClick={() => setPage("cart")}>Cart</a>
          </div>
        </nav>
      )}

      {page === "home" && (
        <section className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Bring nature home, one plant at a time.</p>
          <button onClick={() => setPage("plants")}>
            Get Started
          </button>
          <button onClick={() => setPage("about")}>
            About Us
          </button>
        </section>
      )}

      {page === "about" && <AboutUs />}

      {page === "plants" && (
        <ProductList onOpenCart={() => setPage("cart")} />
      )}

      {page === "cart" && (
        <CartItem onContinueShopping={() => setPage("plants")} />
      )}
    </div>
  );
}

export default App;

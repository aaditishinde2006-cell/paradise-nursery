
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", category: "Air Purifying", price: 18, image: "photo-1501004318641-b39e6451bec6" },
  { id: 2, name: "Peace Lily", category: "Air Purifying", price: 22, image: "photo-1497250681960-ef046c08a56e" },
  { id: 3, name: "Spider Plant", category: "Air Purifying", price: 15, image: "photo-1485955900006-10f4d324d411" },
  { id: 4, name: "Boston Fern", category: "Air Purifying", price: 20, image: "photo-1459156212016-c812468e2115" },
  { id: 5, name: "Areca Palm", category: "Air Purifying", price: 28, image: "photo-1509423350716-97f9360b4e09" },
  { id: 6, name: "Aloe Vera", category: "Air Purifying", price: 12, image: "photo-1509423350716-97f9360b4e09" },

  { id: 7, name: "Jade Plant", category: "Succulents", price: 14, image: "photo-1459411552884-841db9b3cc2a" },
  { id: 8, name: "Echeveria", category: "Succulents", price: 10, image: "photo-1501004318641-b39e6451bec6" },
  { id: 9, name: "Haworthia", category: "Succulents", price: 11, image: "photo-1485955900006-10f4d324d411" },
  { id: 10, name: "String of Pearls", category: "Succulents", price: 17, image: "photo-1497250681960-ef046c08a56e" },
  { id: 11, name: "Burro's Tail", category: "Succulents", price: 16, image: "photo-1459156212016-c812468e2115" },
  { id: 12, name: "Zebra Plant", category: "Succulents", price: 13, image: "photo-1509423350716-97f9360b4e09" },

  { id: 13, name: "Monstera", category: "Decorative", price: 30, image: "photo-1497250681960-ef046c08a56e" },
  { id: 14, name: "Fiddle Leaf Fig", category: "Decorative", price: 35, image: "photo-1501004318641-b39e6451bec6" },
  { id: 15, name: "Rubber Plant", category: "Decorative", price: 25, image: "photo-1485955900006-10f4d324d411" },
  { id: 16, name: "Calathea", category: "Decorative", price: 24, image: "photo-1459156212016-c812468e2115" },
  { id: 17, name: "Chinese Money Plant", category: "Decorative", price: 19, image: "photo-1509423350716-97f9360b4e09" },
  { id: 18, name: "Dracaena", category: "Decorative", price: 21, image: "photo-1459411552884-841db9b3cc2a" },
];

function ProductList({ onOpenCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <main>
      <header className="navbar">
        <strong>Paradise Nursery</strong>
        <button onClick={onOpenCart}>
          Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </header>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const added = cartItems.some((item) => item.id === plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <img
                    src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=500&q=80`}
                    alt={plant.name}
                  />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    disabled={added}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {added ? "Added to Cart" : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;

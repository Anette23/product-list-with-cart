import React, { useState } from "react";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [cart, setCart] = useState([]);

  const [activeCards, setActiveCards] = useState([]);

  const toggleActive = (id) => {
    setActiveCards((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((activeId) => activeId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((cartProduct) => {
      return cartProduct.id === product.id;
    });

    if (existingProduct) {
      setCart(
        cart.map((cartProduct) => {
          return cartProduct.id === product.id
            ? { ...cartProduct, count: cartProduct.count + 1 }
            : cartProduct;
        })
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const decreaseCount = (product) => {
    setCart(
      cart.map((cartProduct) => {
        return cartProduct.id === product.id && cartProduct.count > 1
          ? { ...cartProduct, count: cartProduct.count - 1 }
          : cartProduct;
      })
    );
  };

  const deleteProduct = (productId) => {
    setCart(
      cart.filter((cartProduct) => {
        return cartProduct.id !== productId;
      })
    );
    setActiveCards((prevActiveCards) => {
      return prevActiveCards.filter((activeId) => {
        return activeId !== productId;
      });
    });
  };

  

  return (
    <>
      <header>
        <h1>Desserts</h1>
      </header>
      <main>
        <ProductCard
          addToCart={addToCart}
          decreaseCount={decreaseCount}
          cart={cart}
          activeCards={activeCards}
          toggleActive={toggleActive}
        />
        <aside>
          <Cart cart={cart} setCart={setCart} setActiveCards={setActiveCards} deleteProduct={deleteProduct} />
        </aside>
      </main>
    </>
  );
};

export default App;

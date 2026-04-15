import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let found = false;

    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        found = true;
        return {
          ...item,
         qty: item.qty + (product.qty || 1)
        };
      }
      return item;
    });

    if (found) {
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        { ...product, qty: product.qty || 1 },
      ]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
      .filter((item) => item.qty > 0);

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};  
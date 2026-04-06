import { createContext, useState } from "react";

export let cartStore = createContext();

export let CardProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  let cartLength = cartItems.length ?? 0;

  const addToCart = (product) => {
    setcartItems((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product],
    );
    setIsCartOpen(true);
  };

  const removeItemFromCart = (id) => {
    setcartItems((prev) => {
      return prev.filter((item) => id !== item.id);
    });
  };

  const isItemInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  }
  return (
    <cartStore.Provider
      value={{
        cartItems,
        setcartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        cartLength,
        removeItemFromCart,
        isItemInCart
      }}
    >
      {children}
    </cartStore.Provider>
  );
};

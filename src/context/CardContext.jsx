import { createContext, useState } from "react";

export let cartStore = createContext();

export let CardProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  let cartLength = cartItems.length ?? 0;

  const addToCart = (product) => {
    setcartItems((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev
        : [...prev, { ...product, qty: 1 }],
    );
    setIsCartOpen(true);
  };

  const clearCart =()=> {
    setcartItems([]);
  }

  const removeItemFromCart = (id) => {
    setcartItems((prev) => {
      return prev.filter((item) => id !== item.id);
    });
  };

  const isItemInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const totalPrice = cartItems.reduce((acc, curr) => {
    console.log(cartItems)
    return acc + curr.price * (curr?.qty ?? 0)
  }, 0).toFixed(2);

  const totalQty = (id) => {
  return cartItems.find((item) => item.id === id)?.qty ?? 0;
};

  const incrementQty = (id) => {
    setcartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decrementQty = (id) => {
    setcartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

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
        isItemInCart,
        totalPrice,
        incrementQty,
        decrementQty,
        totalQty,
        clearCart
      }}
    >
      {children}
    </cartStore.Provider>
  );
};

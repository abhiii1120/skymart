import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import Shop from "../screens/Shop";
import About from "../screens/About";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../components/Cart";

const AppRoutes = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
        </Route>
          <Route path="/shop/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Cart />
    </main>
  );
};

export default AppRoutes;

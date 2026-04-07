import { Route, Routes, useLocation } from "react-router";
import Home from "../screens/Home";
import Shop from "../screens/Shop";
import About from "../screens/About";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../components/Cart";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  
  const mainClasses = isAuthPage 
    ? "w-full" 
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 max-h-full";  

  return (
    <main className={mainClasses}>
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* protected routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/shop" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
        <Route path="/shop/product/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      </Routes>
      <Cart />
    </main>
  );
};

export default AppRoutes;
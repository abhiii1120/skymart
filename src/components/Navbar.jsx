// components/Navbar.jsx
import React, { useContext, useEffect, useState } from "react";
import {
  RiFlashlightFill,
  RiLogoutBoxRLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { NavLink } from "react-router";
import { cartStore } from "../context/CardContext";
import { authStore } from "../context/AuthContext";

const Navbar = () => {
  const navs = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "About", to: "/about" },
  ];

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { cartLength, setIsCartOpen } = useContext(cartStore);
  const { user, logout } = useContext(authStore);

  // Get user initial for avatar
  const getUserInitial = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return "U";
  };

  // Get display name
  const getDisplayName = () => {
    if (user?.name) {
      return user.name.length > 15 ? user.name.slice(0, 15) + "..." : user.name;
    }
    return "Guest User";
  };

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2 shrink-0 active">
          <div className="w-8 h-8 bg-volt-green rounded-xl flex items-center justify-center">
            <RiFlashlightFill className="text-ink" />
          </div>
          <span className="font-heading font-bold text-lg flex">
            Sky <span className="text-volt">Mart</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          {navs.map((item, idx) => {
            return (
              <NavLink
                key={idx}
                className={({ isActive }) =>
                  isActive ? "text-[#c8f400]" : "text-[#ffffff80]"
                }
                to={item.to}
              >
                {item.name}
              </NavLink>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-2 bg-[#ffffff0d] border border-white/10 px-3 py-1.5 rounded-xl">
            <div className="w-6 h-6 bg-volt-green rounded-lg flex items-center justify-center text-ink text-xs font-bold">
              {getUserInitial()}
            </div>
            <div className="text-sm text-white/70 font-body max-w-25 truncate">
              {getDisplayName()}
            </div>
          </div>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl transition-all"
          >
            <RiShoppingCart2Line />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-volt-green text-ink text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartLength}
            </span>
          </button>
          
          <button
            onClick={() => logout()}
            className="p-2.5 bg-white/8 hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400"
          >
            <RiLogoutBoxRLine />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React from "react";
import { useContext } from "react";
import { cartStore } from "../context/CardContext";
import {
    RiArrowRightLongLine,
  RiCloseLine,
  RiDeleteBin5Line,
  RiInstanceLine,
  RiShoppingBag3Line,
  RiShoppingBagLine,
} from "react-icons/ri";
import { FiDelete } from "react-icons/fi";

const Cart = () => {
  let { isCartOpen, setIsCartOpen, cartLength, cartItems, removeItemFromCart } =
    useContext(cartStore);
  console.log(cartLength);
  return (
    <div
      className={`${isCartOpen ? "fixed inset-0 bg-black/60 backdrop-blur-sm z-40" : ""}`}
    >
      <div className={`cart-drawer h-full w-full flex flex-col sm:w-105 ${isCartOpen ? "open" : ""}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b ">
          <div className="flex items-center gap-3">
            <RiShoppingBag3Line size={20} className="text-volt" />
            <div className="font-heading font-bold text-lg text-white">
              Cart
            </div>
            <span className="badge bg-volt text-volt text-xs">
              {cartLength} items
            </span>
          </div>
          <button
            className="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white"
            onClick={() => setIsCartOpen(false)}
          >
            <RiCloseLine />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {cartItems?.length > 0 ? (
            cartItems.map((item) => {
              return (
                <div
                  className="flex gap-4 p-3 bg-white/4 border  rounded-2xl animate-fade-in"
                  key={item.id}
                >
                  <div className="w-18 h-18 bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80 font-body clamp-2 leading-snug">
                      {item.name}
                    </p>
                    <p className="text-volt font-heading font-bold text-base mt-1">
                      $ {item.price}
                    </p>
                    <p className="text-white/30 text-xs">$ {item.price} each</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => removeItemFromCart(item.id)}
                        className="ml-auto text-red-400/60 hover:text-red-400 transition-colors"
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
                  <RiInstanceLine size={36} className="text-volt" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white/70 text-lg">
                    Cart is empty
                  </p>
                  <p className="text-white/30 text-sm mt-1">
                    Go shop something cool!
                  </p>
                </div>
                <button className="btn-volt mt-2">Browse Products</button>
              </div>
            </div>
          )}
        </div>
        {cartItems?.length > 0 ? (
          <div className="px-6 py-5 border-t border-white/8 space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-white/50 text-sm font-body">Total</span>
                <span className="font-heading font-bold text-2xl text-white">$ hehe</span>
            </div>
            <button className="w-full btn-volt flex items-center justify-center gap-2 py-3.5 text-base font-heading font-bold">
                Checkout
                <RiArrowRightLongLine />
            </button>
            <button className="w-full text-center text-xs text-white/25 hover:text-red-400 transition-colors py-1">Clear cart</button>
          </div> 
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Cart;

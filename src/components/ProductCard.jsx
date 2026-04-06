import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { cartStore } from "../context/CardContext";
import { RiCheckLine, RiShoppingCart2Line } from "react-icons/ri";
import Star from "./utils/Star";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  let { addToCart, isItemInCart } = useContext(cartStore);
  return (
    <div className="cursor-pointer overflow-hidden border rounded-3xl border-[#ffffff1a] bg-[#111111] flex flex-col group hover:border-[#c8f40066] transition-transform duration-500">
      <div
        onClick={() => navigate(`/shop/product/${product.id}`)}
        className="relative aspect-square bg-white overflow-hidden"
      >
        <img
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          src={`${product?.image}`}
          alt=""
        />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full px-2.5 py-0.5 font-medium bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px]">
          {product.category}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-white/30 text-[10px]  tracking-widest font-body capitalize">
          {product.category}
        </p>
        <div className="font-body font-medium text-white/85 text-sm leading-snug clamp-2 flex-1">
          {product.title}
        </div>
        <div className="flex items-center gap-1.5">
          <Star rating={product.rating.rate}/>
          <span className="text-white/30 text-[10px]">({product.rating.count})</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white">
          <span className="font-heading font-bold text-volt text-lg">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold font-body
                        transition-all duration-200 active:scale-95 ${
                          isItemInCart(product.id)
                            ? "bg-green-500/15 text-green-400 border border-green-500/20"
                            : " bg-[#c8f400] text-[#0d0d0d] hover:bg-volt-light"
                        }`}
          >
            {isItemInCart(product.id) ? (
              <>
                <RiCheckLine /> Added
              </>
            ) : (
              <>
                <RiShoppingCart2Line /> add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

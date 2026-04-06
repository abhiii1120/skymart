import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { products, subCards } from "../data/Productdata";
import Star from "../components/utils/Star";
import Button from "../components/utils/Button";
import { RiShoppingCart2Line } from "react-icons/ri";
import { cartStore } from "../context/CardContext";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const product = products.find((elem) => elem.id === Number(id));
    setProductDetail(product);
  }, [id]);
  
  console.log(productDetail);
  const { addToCart, isItemInCart ,totalQty,incrementQty,decrementQty} = useContext(cartStore);
  if (!productDetail.rating) {
    return <p className="text-white">Loading...</p>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <nav className="flex items-center gap-2 text-sm text-white/30 font-body mb-8"></nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">
        <div className="bg-white rounded-3xl p-10 flex items-center justify-center aspect-square animate-scale-in">
          <img
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            src={`${productDetail.image}`}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 animate-fade-up">
          <span className="badge bg-volt/10 text-volt border border-volt/20 capitalize w-fit text-xs">
            {productDetail.category}
          </span>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-tight">
            {productDetail.title}
          </h1>
          <div className="flex items-center gap-3">
            <Star rating={productDetail.rating.rate} size={14} />
            <span className="font-semibold text-white/70 text-sm">
              {productDetail?.rating?.rate}
            </span>
            <span className="text-white/30 text-sm">
              ({productDetail?.rating?.count} reviews)
            </span>
          </div>

          <div className="py-4 border-y border-white">
            <span className="font-heading font-bold text-4xl text-volt">
              ${productDetail.price}
            </span>
          </div>
          <p className="text-white/50 font-body text-sm leading-relaxed">
            {productDetail?.description}
          </p>
          <div className="flex gap-3">
            {!isItemInCart(productDetail.id) ? (
              <>
                <Button
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl  font-bold! text-lg! transition-all duration-200 active:scale-95`}
                  onclick={() => addToCart(productDetail)}
                >
                  <RiShoppingCart2Line size={22} />
                  Add to Cart
                </Button>
                <button className="p-3.5 border rounded-2xl transition-all border-white/10 text-white/30 hover:text-red-400 hover:border-red-500/30">
                  <BiHeart size={20} />
                </button>
              </>
            ) : (
              <div className=" flex-1 flex items-center gap-3 bg-white/4 border border-white/8 rounded-2xl p-4">
                <span className="text-white/50 text-sm font-body">
                  In cart:
                </span>
                <div className="flex items-center gap-3 ml-auto">
                  <button onClick={() => decrementQty(productDetail.id)} className="w-8 h-8 flex items-center justify-center bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl transition-all">
                    <BiMinus />
                  </button>
                  <span className="font-heading font-bold text-lg w-6 text-center">
                    {totalQty(productDetail.id)}
                  </span>
                  <button onClick={() => incrementQty(productDetail.id)} className="w-8 h-8 flex items-center justify-center bg-white/8 hover:bg-white/15 border border-white/10 rounded-xl transition-all">
                    <BiPlus />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3 mt-1">
            {subCards.map((item, idx) => {
              return (
                <div
                  className={`bg-white/3 border border-white/6 rounded-2xl p-3 flex flex-col items-center  ${item.class}`}
                >
                  {item.icon}
                  <p className="text-white/60 text-[11px] font-body font-semibold mt-2">
                    {item.title}
                  </p>
                  <p className="text-white/25 text-[10px] font-body">
                    {item.subTitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

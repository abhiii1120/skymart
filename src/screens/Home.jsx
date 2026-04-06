import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products ,subCards } from "../data/Productdata";
import { cartStore } from "../context/CardContext";
import Cart from "../components/Cart";
import Button from "../components/utils/Button";
import {
  RiArrowRightLongLine,
  RiBookmarkLine,
  RiBox3Line,
  RiFireLine,
  RiFlashlightFill,
  RiPriceTag3Line,
  RiShieldLine,
  RiStarLine,
} from "react-icons/ri";
const Home = () => {
  const { cartItems, cartLength ,totalPrice} = useContext(cartStore);
  const cardItemsData = [
    {
      number: cartLength,
      title: "Cart Items",
      subTitle: "In your bag",
      icon: <RiBox3Line />,
      class: "bg-[#c8f4001a] text-volt",
    },
    {
      number: `$${totalPrice}`,
      title: "Cart Value",
      subTitle: "Ready to checkout",
      icon: <RiFireLine />,
      class: "bg-blue-500/10 text-blue-400",
    },
    {
      number: 5,
      title: "Top Products",
      subTitle: "Highly rated",
      icon: <RiStarLine />,
      class: "bg-amber-500/10 text-amber-400",
    },
    {
      number: 6,
      title: "Categories",
      subTitle: "To explore",
      icon: <RiPriceTag3Line />,
      class: "bg-purple-500/10 text-purple-400",
    },
  ];

  const categoryData = [
    {
      icon: "💻",
      title: "electronics",
      count: 17,
      class: "bg-blue-500/20 text-blue-400",
      parentClass: "border-blue-500/20 bg-blue-500/10",
      textClass: "text-blue-200/55",
    },
    {
      icon: "👕",
      title: "clothing",
      count: 2,
      class: "bg-pink-500/20 text-pink-400",
      parentClass: "border-pink-500/20 bg-pink-500/10",
      textClass: "text-pink-200/55",
    },
    {
      icon: "🛏️",
      title: "furniture",
      count: 3,
      class: "bg-yellow-500/20 text-yellow-400",
      parentClass: "border-yellow-500/20 bg-yellow-500/10",
      textClass: "text-yellow-200/55",
    },
    {
      icon: "🏠",
      title: "home",
      count: 14,
      class: "bg-green-500/20 text-green-400",
      parentClass: "border-green-500/20 bg-green-500/10",
      textClass: "text-green-200/55",
    },
    {
      icon: "🏀",
      title: "sports",
      count: 8,
      class: "bg-orange-500/20 text-orange-400",
      parentClass: "border-orange-500/20 bg-orange-500/10",
      textClass: "text-orange-200/55",
    },
    {
      icon: "⌚",
      title: "accessories",
      count: 6,
      class: "bg-purple-500/20 text-purple-400",
      parentClass: "border-purple-500/20 bg-purple-500/10",
      textClass: "text-purple-200/55",
    },
  ];


  return (
    <>
      <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white p-8 sm:p-12 mb-10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-size-[40px_40px] bg-[linear-gradient(rgb(200,244,0)_1px,transparent_1px),linear-gradient(90deg,rgb(200,244,0)_1px,transparent_1px)]"></div>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-volt/70 text-sm font-body tracking-widest uppercase mb-3">
              Good Morning 👋
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl flex flex-col text-white leading-tight mb-4">
              Welcome back, <span className="text-volt">abhinay!</span>
            </h1>
            <p className="text-white/40 font-body max-w-md">
              Discover today's picks - hand-curated products across electronics,
              fashion, and more.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap">
              <Button to={"/shop"}>
                Shop Now <RiArrowRightLongLine />
              </Button>
              <Button to={"/shop"} primary={false}>
                View All Products
              </Button>
            </div>
          </div>
          <div className="shrink-0 flex flex-col gap-3">
            <div className="bg-[#c8f4001a] border border-[#c8f40033] rounded-2xl px-6 py-4 text-center">
              <p className="font-heading font-bold text-4xl text-volt">20+</p>
              <p className="text-white/40 text-xs font-body mt-1">
                Products Available
              </p>
            </div>
            <div className="bg-white/4 border border-white rounded-2xl px-6 py-4 text-center">
              <p className="font-heading font-bold text-2xl text-white">Free</p>
              <p className="text-white/40 text-xs font-body mt-1">
                Delivery on ₹999+
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger">
        {cardItemsData.map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#111] border border-white rounded-3xl p-6 flex items-center gap-4"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.class}`}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-heading font-bold text-2xl text-white">
                  {item.number}
                </p>
                <p className="text-white/50 text-sm font-body">{item.title}</p>
                <p className="text-white/25 text-xs font-body mt-0.5">
                  {item.subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-heading font-bold text-xl">Shop By Category</h2>
          <a
            className="text-volt text-sm hover:text-volt-light transition-colors flex items-center gap-1"
            href="/shop"
          >
            View All <RiArrowRightLongLine />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categoryData.map((item, idx) => {
            return (
              <div
                className={`${item.parentClass} border  rounded-3xl p-6 flex items-start gap-4`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.class}`}
                >
                  {item.icon}
                </div>
                <div
                  className={`font-heading font-bold text-xl ${item.textClass}`}
                >
                  <p>{item.title}</p>
                  <p className="text-sm">{item.count} items</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {subCards.map((item, idx) => {
            return (
              <div
                className={`bg-[#111] border border-white/8 rounded-2xl p-5 flex items-center gap-4 ${item.class}`}
              >
                {item.icon}
                <div>
                  <p className="font-body font-semibold text-white/80 text-sm">
                    {item.title}
                  </p>
                  <p className="text-white/30 text-xs">{item.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

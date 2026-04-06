import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { products } from "../data/Productdata";
const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState({});
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    const product = products.find((elem) => elem.id === Number(id));
    console.log(product);
    setProductDetail(product);
  }, [id]);

  console.log(productDetail);

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
            {productDetail.name}
          </h1>

          <div className="flex items-center gap-3">
            <div className="font-semibold text-white/70 text-sm">
              {productDetail.rating}
            </div>
          </div>
          <div className="py-4 border-y border-white/8">
            <span className="font-heading font-bold text-4xl text-volt">
              ${productDetail.price}
            </span>
          </div>
          <p className="text-white/50 font-body text-sm leading-relaxed">
            {productDetail?.desc}
          </p>
          <div className="flex gap-3">
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-heading font-bold text-base transition-all duration-200 active:scale-95
                btn-volt"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

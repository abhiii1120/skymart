import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Productdata";
import { BiSearch } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useLocation } from "react-router";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const location = useLocation();

  const categories = useMemo(() => {
    const cats = products.map((p) => p.category);
    return ["all", ...new Set(cats)];
  }, []);

  // check if any filter is active
  const isAnyFilterActive =
    search.trim() || selectedCategory !== "all" || sortBy !== "default";

  const clearAll = () => {
    setSearch("");
    setSelectedCategory("all");
    setSortBy("default");
  };

  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case "price_low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating_low":
        result.sort((a, b) => a.rating.rate - b.rating.rate);
        break;
      case "rating_high":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  const sortLabels = {
    price_low: "Price: Low → High",
    price_high: "Price: High → Low",
    rating_low: "Rating: Low → High",
    rating_high: "Rating: High → Low",
  };

  useEffect(() => {
    if (location.state) {
      if (location.state.sortBy) {
        setSortBy(location.state.sortBy);
      }
      if (location.state.category) {
        setSelectedCategory(location.state.category);
      }
    }
  }, [location.state]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-2">
          All Products
        </h1>
        <p className="text-white/40 font-body text-sm">
          {filteredAndSorted.length} products found
        </p>
      </div>

      <div className="bg-[#111] border border-white/8 rounded-2xl p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <BiSearch
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="bg-[#ffffff0d] pl-10 pr-8 h-10 w-full border border-gray-700/50 rounded-2xl text-sm"
            />
            {search && (
              <MdOutlineClose
                size={15}
                onClick={() => setSearch("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 cursor-pointer hover:text-white transition-colors"
              />
            )}
          </div>

          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`bg-[#ffffff0d] border rounded-2xl h-10 px-3 pr-8 text-sm appearance-none cursor-pointer transition-colors
                ${
                  selectedCategory !== "all"
                    ? "border-[#c8f135] text-[#c8f135]"
                    : "border-gray-700/50 text-white/70"
                }`}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#111] text-white">
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
            <RiArrowDownSLine className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`bg-[#ffffff0d] border rounded-2xl h-10 px-3 pr-8 text-sm appearance-none cursor-pointer transition-colors
                ${
                  sortBy !== "default"
                    ? "border-[#c8f135] text-[#c8f135]"
                    : "border-gray-700/50 text-white/70"
                }`}
            >
              <option value="default" className="bg-[#111] text-white">
                Featured
              </option>
              <option value="price_low" className="bg-[#111] text-white">
                Price: Low → High
              </option>
              <option value="price_high" className="bg-[#111] text-white">
                Price: High → Low
              </option>
              <option value="rating_low" className="bg-[#111] text-white">
                Rating: Low → High
              </option>
              <option value="rating_high" className="bg-[#111] text-white">
                Rating: High → Low
              </option>
            </select>
            <RiArrowDownSLine className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
          </div>

          {/* Clear All Button */}
          {isAnyFilterActive && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 px-4 h-10 rounded-2xl bg-red-500/15 border border-red-500/40 text-red-400 text-sm hover:bg-red-500/25 transition-colors cursor-pointer whitespace-nowrap"
            >
              <MdOutlineClose size={14} />
              Clear
            </button>
          )}
        </div>

        {isAnyFilterActive && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/8">
            {selectedCategory !== "all" && (
              <span
                onClick={() => setSelectedCategory("all")}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8f135]/10 border border-[#c8f135]/30 text-[#c8f135] text-xs cursor-pointer hover:bg-[#c8f135]/20 transition-colors"
              >
                {selectedCategory}
                <MdOutlineClose size={11} />
              </span>
            )}
            {search.trim() && (
              <span
                onClick={() => setSearch("")}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8f135]/10 border border-[#c8f135]/30 text-[#c8f135] text-xs cursor-pointer hover:bg-[#c8f135]/20 transition-colors"
              >
                "{search}"
                <MdOutlineClose size={11} />
              </span>
            )}
            {sortBy !== "default" && (
              <span
                onClick={() => setSortBy("default")}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8f135]/10 border border-[#c8f135]/30 text-[#c8f135] text-xs cursor-pointer hover:bg-[#c8f135]/20 transition-colors"
              >
                {sortLabels[sortBy]}
                <MdOutlineClose size={11} />
              </span>
            )}
          </div>
        )}
      </div>

      {filteredAndSorted.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredAndSorted.map((elem) => (
            <ProductCard product={elem} key={elem.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-white/30">
          <BiSearch size={40} className="mb-3" />
          <p className="text-lg font-heading">No products found</p>
          <p className="text-sm mt-1">Try a different search or category</p>
        </div>
      )}
    </div>
  );
};

export default Shop;

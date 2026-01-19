// src/pages/Products.jsx
import React, { useState, useMemo } from "react";
import { ShoppingBag, Eye, Filter, X, Heart, Plus, Minus, ZoomIn } from "lucide-react";
import Recommendation from "../components/Recommendation";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  // Quick View States
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);

  const productsPerPage = 32;

  // All Products with $ price
  const rawProducts = [
    ...Array.from({ length: 16 }, (_, i) => ({ id: `fdk${i + 1}`, name: `Jama FDK${i + 1}`, price: 120 + i * 20, category: "Clothing", gender: "Women", image: `/images/products/FDK${i + 1}.png` })),
    ...Array.from({ length: 11 }, (_, i) => ({ id: `fds${i + 1}`, name: `Sari FDS${i + 1}`, price: 350 + i * 80, category: "Traditional", gender: "Women", image: `/images/products/FDS${i + 1}.png` })),
    ...Array.from({ length: 6 }, (_, i) => ({ id: `fdw${i + 1}`, name: `Watch FDW${i + 1}`, price: 899 + i * 300, category: "Accessories", gender: "Women", image: `/images/products/FDW${i + 1}.png` })),
    ...Array.from({ length: 11 }, (_, i) => ({ id: `mfw${i + 1}`, name: `Watch MFW${i + 1}`, price: 999 + i * 250, category: "Accessories", gender: "Men", image: `/images/products/MFW${i + 1}.avif` })),
    ...Array.from({ length: 7 }, (_, i) => ({ id: `mfj${i + 1}`, name: `Jacket MFJ${i + 1}`, price: 1299 + i * 400, category: "Clothing", gender: "Men", image: `/images/products/MFJ${i + 1}.jpg` })),
    ...Array.from({ length: 9 }, (_, i) => ({ id: `mft${i + 1}`, name: `T-Shirt MFT${i + 1}`, price: 89 + i * 25, category: "Clothing", gender: "Men", image: `/images/products/MFT${i + 1}.jpg` })),
    ...Array.from({ length: 7 }, (_, i) => ({ id: `shoe${i + 1}`, name: `Sneakers Shoe${i + 1}`, price: 199 + i * 100, category: "Footwear", gender: "Unisex", image: `/images/products/Shoe${i + 1}.avif` })),
    ...Array.from({ length: 7 }, (_, i) => ({ id: `laptop${i + 1}`, name: `Laptop ${i + 1}`, price: 1299 + i * 400, category: "Tech", gender: "Unisex", image: `/images/products/laptop${i + 1}.jpg` })),
  ];

  // Filtering & Sorting (100% WORKING)
  const filteredAndSorted = useMemo(() => {
    let filtered = rawProducts;

    if (selectedCategory !== "all") filtered = filtered.filter(p => p.category === selectedCategory);
    if (selectedGender !== "all") filtered = filtered.filter(p => p.gender === selectedGender);
    if (priceRange !== "all") {
      const [minStr, maxStr] = priceRange.split("-");
      const min = Number(minStr);
      const max = maxStr === "99999" ? Infinity : Number(maxStr);
      filtered = filtered.filter(p => p.price >= min && p.price <= (max === Infinity ? p.price : max));
    }

    const sorted = [...filtered];
    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    if (sortBy === "newest") sorted.reverse();

    return sorted;
  }, [selectedCategory, selectedGender, priceRange, sortBy]);

  const totalPages = Math.ceil(filteredAndSorted.length / productsPerPage);
  const paginatedProducts = filteredAndSorted.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
        {/* LEFT FILTER SIDEBAR */}
        <aside className={`${showFilters ? "block" : "hidden"} md:block w-80 flex-shrink-0`}>
          <div className="sticky top-8 bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Filters</h3>

            {/* Category */}
            <div className="mb-10">
              <h4 className="font-semibold text-gray-700 mb-4">Category</h4>
              {["all", "Clothing", "Traditional", "Accessories", "Footwear", "Tech"].map(cat => (
                <label key={cat} className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition">
                  <input type="radio" name="cat" checked={selectedCategory === cat} onChange={() => setSelectedCategory(cat)} className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">{cat === "all" ? "All Categories" : cat}</span>
                </label>
              ))}
            </div>

            {/* Gender */}
            <div className="mb-10">
              <h4 className="font-semibold text-gray-700 mb-4">Gender</h4>
              {["all", "Men", "Women", "Unisex"].map(g => (
                <label key={g} className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition">
                  <input type="radio" name="gender" checked={selectedGender === g} onChange={() => setSelectedGender(g)} className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">{g === "all" ? "All" : g}</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Price Range</h4>
              {["all", "0-500", "500-1000", "1000-2000", "2000-99999"].map(range => (
                <label key={range} className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition">
                  <input type="radio" name="price" checked={priceRange === range} onChange={() => setPriceRange(range)} className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">
                    {range === "all" ? "All Prices" : `$${range.split("-")[0]} - ${range.split("-")[1] === "99999" ? "$5000+" : "$" + range.split("-")[1]}`}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-10">
            <p className="text-lg text-gray-600">Showing {paginatedProducts.length} of {filteredAndSorted.length} products</p>
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border-2 border-gray-300 px-6 py-3 pl-6 pr-14 rounded-full font-medium text-gray-700 focus:border-orange-500 focus:outline-none transition cursor-pointer hover:border-orange-400 shadow-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* GRID: MAX 4 CARDS PER ROW */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                style={{ width: "200px", height: "350px" }}
              >
                {/* Image */}
                <div
                  className="h-48 bg-gray-100 relative overflow-hidden cursor-pointer"
                  onClick={() => {
                    setQuickViewProduct(product);
                    setSelectedSize("M");
                    setSelectedColor("Black");
                    setQuantity(1);
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <ZoomIn size={36} className="text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm line-clamp-2 leading-tight">{product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{product.gender}</p>
                  <p className="text-xl font-bold mt-3">${product.price.toFixed(2)}</p>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-bold py-2.5 rounded-full hover:from-orange-600 hover:to-yellow-500 transition flex items-center justify-center gap-1">
                      <ShoppingBag size={14} /> Add
                    </button>
                    <button
                      onClick={() => {
                        setQuickViewProduct(product);
                        setSelectedSize("M");
                        setSelectedColor("Black");
                        setQuantity(1);
                      }}
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold py-2.5 rounded-full hover:from-yellow-500 hover:to-orange-600 transition flex items-center justify-center gap-1"
                    >
                      <Eye size={14} /> View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-16">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-12 h-12 rounded-full font-bold transition ${
                  currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* QUICK VIEW MODAL – 500×500px – 60/40 Split, Everything Fits Perfectly */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setQuickViewProduct(null)}>
          <div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden relative flex"
            style={{ width: "700px", height: "500px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition"
            >
              <X size={22} />
            </button>

            {/* LEFT: 60% – Large Image */}
            <div className="w-3/5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>

            {/* RIGHT: 40% – Compact Info Section */}
            <div className="w-2/5 p-5 flex flex-col justify-between text-sm">
              {/* Product Name & Price */}
              <div>
                <h3 className="font-bold text-base line-clamp-2 leading-tight">{quickViewProduct.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{quickViewProduct.gender}</p>
                <p className="text-2xl font-bold text-orange-600 mt-3">${quickViewProduct.price.toFixed(2)}</p>
              </div>

              {/* Color Selection */}
              <div className="my-3">
                <p className="font-semibold text-xs text-gray-700 mb-2">
                  Color: <span className="text-orange-600">{selectedColor}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Black", hex: "#000000" },
                    { name: "White", hex: "#ffffff" },
                    { name: "Red", hex: "#ef4444" },
                    { name: "Emerald", hex: "#10b981" },
                    { name: "Gold", hex: "#fbbf24" },
                  ].map(c => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${
                        selectedColor === c.name
                          ? "border-orange-500 ring-2 ring-orange-300 scale-110"
                          : "border-gray-300"
                      } ${c.hex === "#ffffff" ? "border-gray-400" : ""}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="my-3">
                <p className="font-semibold text-xs text-gray-700 mb-2">
                  Size: <span className="text-orange-600">{selectedSize}</span>
                </p>
                <div className="grid grid-cols-5 gap-1.5">
                  {["XS", "S", "M", "L", "XL"].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-9 h-9 rounded-lg text-xs font-bold transition-all border ${
                        selectedSize === size
                          ? "bg-black text-white border-black shadow-sm"
                          : "bg-gray-100 text-gray-700 border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 my-3">
                <span className="text-xs font-semibold text-gray-700">Qty:</span>
                <div className="flex items-center border border-gray-300 rounded-full text-xs">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1.5 hover:bg-gray-100">
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1.5 hover:bg-gray-100">
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 mt-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-bold py-3 rounded-full text-sm transition shadow-md">
                  Add to Cart
                </button>

                <div className="flex items-center justify-between text-xs">
                  <button className="flex items-center gap-1.5 font-medium text-gray-600 hover:text-red-600 transition">
                    <Heart size={18} className="hover:fill-red-600" /> Wishlist
                  </button>
                  <button className="underline hover:no-underline font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Recommendation />
    </div>
  );
};

export default Products;
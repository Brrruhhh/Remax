"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PropertySearch() {
  const [searchFilters, setSearchFilters] = useState({
    address: "",
    minPrice: "",
    maxPrice: "",
    minBeds: "NO MIN",
    maxBeds: "NO MAX",
    baths: "ANY",
  });

  const handleFilterChange = (filter, value) => {
    setSearchFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const clearFilters = () => {
    setSearchFilters({
      address: "",
      minPrice: "",
      maxPrice: "",
      minBeds: "NO MIN",
      maxBeds: "NO MAX",
      baths: "ANY",
    });
  };

  const handleSearch = () => {
    console.log("Search filters:", searchFilters);
    alert("Searching with filters: " + JSON.stringify(searchFilters, null, 2));
  };

  return (
    <main className="min-h-screen bg-[#F4F4F4]">
      {/* Header Navigation */}
      <Header />

      {/* Enhanced Property Search Section */}
      <section className="relative py-12">
        <div className="absolute inset-0"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6">
            {/* Enhanced Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-semibold text-gray-700 mb-2">
                <span className="">Homes for Sale</span>
              </h1>
            </div>

            {/* Enhanced Address Input */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Address, City, ZIP, and More"
                  value={searchFilters.address}
                  onChange={(e) => handleFilterChange("address", e.target.value)}
                  className="w-full pl-4 pr-2 py-1 text-gray-600 border-2 border-gray-200 bg-gray-50 transition-colors text-lg"
                />
              </div>
            </div>

            {/* Enhanced Price Section */}
            <div className="">
              <label className="text-md font-semibold text-gray-600 mb-2">
                PRICE
              </label>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="No Min"
                    value={searchFilters.minPrice}
                    onChange={(e) =>
                      handleFilterChange("minPrice", e.target.value)
                    }
                    className="w-full text-gray-600 pl-4 pr-2 py-1 border-2 border-gray-200 bg-gray-50 transition-colors"
                  />
                </div>
                <span className="text-gray-400 text-xl">-</span>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="No Max"
                    value={searchFilters.maxPrice}
                    onChange={(e) =>
                      handleFilterChange("maxPrice", e.target.value)
                    }
                    className="w-full text-gray-600 pl-4 pr-2 py-1 border-2 border-gray-200 bg-gray-50 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Beds Section */}
            <div className="mb-4 mt-4">
              <label className="text-md font-semibold text-gray-600 mb-2">
                Beds
              </label>

              {/* Min Beds */}
              <div className="mb-4">
                <div className="flex gap-3">
                  {["NO MIN", "1", "2", "3", "4"].map((option) => (
                    <button
                      key={`min-${option}`}
                      onClick={() => handleFilterChange("minBeds", option)}
                      className={`flex-1  py-2 border-2  text-sm font-medium transition-all duration-300 ${searchFilters.minBeds === option
                        ? "border-[#004bcc] bg-[#f0f5ff] text-[#004bcc] shadow-lg"
                        : "border-gray-200 text-gray-600 hover:border-[#f0f5ff] hover:bg-[#f0f5ff]/5"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Beds */}
              <div>
                <div className="flex gap-3">
                  {["NO MAX", "1", "2", "3", "4"].map((option) => (
                    <button
                      key={`max-${option}`}
                      onClick={() => handleFilterChange("maxBeds", option)}
                      className={`flex-1 py-2 border-2  text-sm font-medium transition-all duration-300 ${searchFilters.maxBeds === option
                        ? "border-[#004bcc] bg-[#f0f5ff] text-[#004bcc] shadow-lg"
                        : "border-gray-200 text-gray-600 hover:border-[#f0f5ff] hover:bg-[#f0f5ff]/5"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Baths Section */}
            <div className="mb-6">
              <label className="text-md font-semibold text-gray-600 mb-4">
                Baths
              </label>
              <div className="flex gap-3">
                {["ANY", "1+", "2+", "3+", "4+"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleFilterChange("baths", option)}
                    className={`flex-1 py-2 border-2  text-sm font-medium transition-all duration-300 ${searchFilters.baths === option
                      ? "border-[#004bcc] bg-[#f0f5ff] text-[#004bcc] shadow-lg"
                      : "border-gray-200 text-gray-600 hover:border-[#f0f5ff] hover:bg-[#f0f5ff]/5"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={clearFilters}
                className="text-remax-blue font-semibold hover:text-remax-dark-blue transition-colors px-6 py-3 rounded-xl hover:bg-remax-blue/10 transition-all duration-300"
              >
                Clear All Filters
              </button>
              <button
                onClick={handleSearch}
                className="bg-[#dc1c2e] text-white px-6 py-2 00 font-semibold transform"
              >
                Search Homes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Property Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-1">
                Properties for Sale
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
              <select className="w-full sm:w-auto px-4 py-3 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00458b]/30 focus:border-[#00458b] bg-white">
                <option>Sort by: Price (Low to High)</option>
                <option>Price (High to Low)</option>
                <option>Newest First</option>
                <option>Size (Largest First)</option>
              </select>
              <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden w-full sm:w-auto">
                <button className="px-4 py-2 text-sm font-semibold bg-[#00458b] text-white">
                  List
                </button>
                <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white">
                  Map
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Property 1 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                  New
                </div>
                <div className="absolute bottom-4 left-4 bg-remax-blue text-white rounded-full px-3 py-1 text-sm font-semibold">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-md font-semibold text-gray-600">
                    AED 1,560,000
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">3 days ago</span>
                </div>
                <h3 className="text-md font-bold text-gray-900 mb-2">
                  Beautiful Family Home
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  📍 123 Main Street, Springfield, IL 62701
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <span className="flex items-center gap-1">🛏️ 3 beds</span>
                  <span className="flex items-center gap-1">🚿 2 baths</span>
                  <span className="flex items-center gap-1">📐 1,850 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 2 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                  Luxury
                </div>
                <div className="absolute bottom-4 left-4 bg-remax-blue text-white rounded-full px-3 py-1 text-sm font-semibold">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-md font-semibold text-gray-600">
                    AED 2,480,000
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">1 week ago</span>
                </div>
                <h3 className="text-md font-bold text-gray-900 mb-2">
                  Modern Luxury Condo
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  📍 Dubai Marina, Dubai, UAE
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <span className="flex items-center gap-1">🛏️ 2 beds</span>
                  <span className="flex items-center gap-1">🚿 2 baths</span>
                  <span className="flex items-center gap-1">📐 1,200 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 3 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                  Affordable
                </div>
                <div className="absolute bottom-4 left-4 bg-remax-blue text-white rounded-full px-3 py-1 text-sm font-semibold">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-md font-semibold text-gray-600">
                    AED 1,195,000
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">2 weeks ago</span>
                </div>
                <h3 className="text-md font-bold text-gray-900 mb-2">
                  Cozy Starter Home
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  📍 789 Pine Street, Peoria, IL 61602
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <span className="flex items-center gap-1">🛏️ 2 beds</span>
                  <span className="flex items-center gap-1">🚿 1 bath</span>
                  <span className="flex items-center gap-1">📐 1,100 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 4 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                  Spacious
                </div>
                <div className="absolute bottom-4 left-4 bg-remax-blue text-white rounded-full px-3 py-1 text-sm font-semibold">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-md font-semibold text-gray-600">
                    AED 3,120,000
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">5 days ago</span>
                </div>
                <h3 className="text-md font-bold text-gray-900 mb-2">
                  Spacious Estate
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  📍 321 Elm Drive, Naperville, IL 60540
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <span className="flex items-center gap-1">🛏️ 4 beds</span>
                  <span className="flex items-center gap-1">🚿 3 baths</span>
                  <span className="flex items-center gap-1">📐 2,800 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 5 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                  Modern
                </div>
                <div className="absolute bottom-4 left-4 bg-remax-blue text-white rounded-full px-3 py-1 text-sm font-semibold">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-md font-semibold text-gray-600">
                    AED 2,020,000
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">1 day ago</span>
                </div>
                <h3 className="text-md font-bold text-gray-900 mb-2">
                  Downtown Loft
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  📍 Business Bay, Dubai, UAE
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <span className="flex items-center gap-1">🛏️ 2 beds</span>
                  <span className="flex items-center gap-1">🚿 2 baths</span>
                  <span className="flex items-center gap-1">📐 1,500 sqft</span>
                </div>
              </div>
            </div>

            {/* Sample Property 6 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")',
                  }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                  Charming
                </div>
                <div className="absolute bottom-4 left-4 bg-remax-blue text-white rounded-full px-3 py-1 text-sm font-semibold">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-md font-semibold text-gray-600">
                    AED 1,450,000
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">1 week ago</span>
                </div>
                <h3 className="text-md font-bold text-gray-900 mb-2">
                  Charming Bungalow
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  📍 890 Maple Avenue, Aurora, IL 60505
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
                  <span className="flex items-center gap-1">🛏️ 3 beds</span>
                  <span className="flex items-center gap-1">🚿 2 baths</span>
                  <span className="flex items-center gap-1">📐 1,650 sqft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-remax-blue text-white px-6 py-2 font-semibold shadow-md ">
              Load More Properties
            </button>
            <p className="text-gray-600 mt-4">Showing 6 of 1,247 properties</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

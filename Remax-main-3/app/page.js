'use client'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  
  const [activeTab, setActiveTab] = useState('BUY');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Hero Section - Exact Dimensions 2380x510 */}
      <section className="relative w-full overflow-hidden" style={{ maxWidth: '2380px', height: '430px', margin: '0 auto' }}>
        {/* Background image with enhanced overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url('https://static-images.remax.com/assets/web/homepage/homepage-hero-4-2025.jpg')`,
            width: '100%',
            height: '100%'
          }}
        />

        {/* Enhanced Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
          <h1 className="text-white font-[600] text-center mb-2 max-w-4xl leading-tight uppercase" style={{ fontSize: '1.5rem', lineHeight: '2.25rem', fontFamily: '"Montserrat", "Montserrat Fallback", sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            WHEN HOME MATTERS MOST, GO WITH THE MOST TRUSTED.
          </h1>


          {/* Search Container */}
          <div className="flex flex-col items-center">
            {/* Tabs */}
            <div className="bg-gray-100 rounded-t-md flex">
              {['BUY', 'RENT', 'SELL', 'AGENTS', 'OFFICES'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 font-bold text-xs transition-all border-b-3 ${activeTab === tab
                    ? 'bg-#e0dedc text-gray-900 border-remax-blue'
                    : 'bg-#e0dedc text-gray-600 hover:text-gray-900 border-transparent'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Compact Search Bar - Same width as tabs */}
            <div className="bg-white/95 backdrop-blur-sm rounded-b-md shadow-xl p-0 w-full">
              <div className="flex gap-0">
                <input
                  type="text"
                  placeholder="Address, City, ZIP, and More"
                  className="px-3 py-1.5 text-sm flex-1"
                />
                <button className="bg-remax-red text-white px-4 py-2.5 hover:bg-red-700 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>


            </div>
            <p className="text-xs text-white-600 mt-2 text-center flex items-center justify-center">
              <span className="w-1.5 h-1.5  rounded-full mr-1.5"></span>
              LISTING DATA LAST UPDATED TODAY AT 01:07 AM
            </p>
            {/* Global Search Link */}
            <p className="text-white text-xs mt-3 text-center flex items-center justify-center hover:underline cursor-pointer">
              Search for RE/MAX properties in over 110 countries and territories
              <svg className="w-3 h-3 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </p>
          </div>
        </div>
      </section>
      {/* Trust Badge Section */}
      <section className="py-8 bg-white">
        <div className="max-w-2xl lg:max-w-2xl mx-auto px-2">
          <div className="border border-gray-300 rounded-lg p-4 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img
                src="https://static-images.remax.com/assets/web/homepage/bmta-red-2024.png"
                alt="BrandSpark Most Trusted"
                className="w-20 h-24 object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1rem' }}>
                Voted #1 Most Trusted Real Estate Agents in the USA
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '0.675rem' }}>
                Voted most trusted Real Estate Agency brand by American shoppers based on the BrandSpark® American Trust Study, years 2022-2024 and 2019.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Confidence Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="flex">
              <img
                src="https://static-images.remax.com/assets/web/homepage/Exteriors_Fuji_3520.jpg"
                alt="House exterior"
                className="w-full h-full object-cover shadow-1xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-bold text-gray-900 mb-4 leading-tight" style={{ fontSize: '1rem' }}>
                Have confidence in any market with us.
              </h2>
              <p className="text-[#636366] mb-4 leading-relaxed" style={{ fontSize: '0.75rem' }}>
                RE/MAX® agents have the experience to get the job done in today's market1, backed by a robust network of over 140,000 agents in more than 9,000 offices worldwide. With our extensive global connections and deep local insights, you gain an edge that transcends what you'll find online. Regardless of market conditions, life moves on—people need to move, sell and buy. RE/MAX agents understand that market shifts open new doors of opportunity, and with a trusted and experienced RE/MAX agent, these opportunities are yours to seize.
              </p>
              <p className="text-[#636366] mb-6 leading-relaxed" style={{ fontSize: '0.75rem' }}>
                The right time to move is when you're with the right agent—nobody sells more real estate than RE/MAX2
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-remax-blue text-white px-2 py-2 hover:bg-remax-dark-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-xs w-fit">
                  FIND YOUR RE/MAX AGENT TODAY
                </button>
                <div className="flex gap-4">
                  <button className="bg-remax-blue text-white px-4 py-2 hover:bg-remax-dark-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-xs flex-1">
                    GET THE HOMEBUYER'S GUIDE
                  </button>
                  <button className="bg-remax-blue text-white px-4 py-2 hover:bg-remax-dark-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-xs flex-1">
                    EXPLORE MORE OPTIONS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Popular Searches Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-sembold text-[#292C3D]" style={{ fontSize: '1.5rem' }}>
              Popular Searches in Dubai & UAE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'New Listings', image: 'https://static-images.remax.com/assets/web/homepage/01_NewListings.jpg' },
              { title: 'Luxury Homes', image: 'https://static-images.remax.com/assets/web/homepage/02_LuxuryHomes.jpg' },
              { title: 'Open Houses', image: 'https://static-images.remax.com/assets/web/homepage/03_OpenHouses.jpg' },
              { title: 'Price Reductions', image: 'https://static-images.remax.com/assets/web/homepage/04_PriceReductions.jpg' },
              { title: 'Virtual Tours', image: 'https://static-images.remax.com/assets/web/homepage/05_VirtualTours.jpg' },
              { title: 'Miracle Homes', image: 'https://static-images.remax.com/assets/web/childrens_hospitals/childrens_hospital.jpg' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-1xl overflow-hidden  cursor-pointer ">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="px-2 py-3">
                  <h3 className="font-sembold text-[#292C3D]" style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced RE/MAX News Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-sembold text-[#292C3D]" style={{ fontSize: '1.73rem' }}>
              <span>RE/MAX News</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-1xl overflow-hidden max-w-5xl w-full">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-2 h-64 md:h-auto">
                  <img
                    src="https://news.remax.com/wp-content/uploads/2025/06/May_Home.jpeg"
                    alt="Market Update"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="mb-1 text-[#292C3D]" style={{ fontSize: '0.8rem' }}>
                    UAE Real Estate Market: Strong Growth in Dubai & Abu Dhabi
                  </h3>
                  <p className="text-gray-500  font-bold text-sm mt-4 mb-1">October 18, 2025</p>
                  <span className="text-remax-blue text-sm mb-1 w-fit font-semibold">
                    Market Trends
                  </span>
                  <p className="mb-8 text-[#292C3D]" style={{ fontSize: '0.7rem' }}>
                    Discover the latest insights on UAE property market trends, new developments, pricing dynamics,
                    and investment opportunities across Dubai, Abu Dhabi, and other Emirates.
                  </p>
                  <a href="#" className="text-remax-blue font-semibold hover:underline uppercase text-sm flex items-center gap-2">
                    READ POST
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Section */}
      <section className="relative" style={{ height: '320px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-end">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-md ml-auto text-right">
              <div className="mb-6">
                <svg className="w-16 h-16 ml-auto mb-4 text-white" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M50 5 Q70 25, 50 50 T50 95 M50 5 Q30 25, 50 50 T50 95 M5 50 Q25 30, 50 50 T95 50 M5 50 Q25 70, 50 50 T95 50" stroke="white" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">Worldwide</h2>
              <div className="w-20 h-1 bg-remax-red mb-4 ml-auto"></div>
              <p className="text-white text-lg mb-6">One World. One Search.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="relative" style={{ height: '320px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://static-images.remax.com/assets/web/homepage/08_Commercial.jpg')`
          }}
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold text-white mb-2">Commercial</h2>
              <div className="w-20 h-1 bg-remax-red mb-4"></div>
              <p className="text-white text-lg mb-6">Commercial with Confidence</p>
              <button className="border-2 border-white text-white px-2 py-1 rounded hover:bg-white hover:text-black transition" style={{ fontSize: '0.8rem' }}>
                EXPLORE COMMERCIAL REAL ESTATE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Collection Section */}
      <section className="relative" style={{ height: '320px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 100, 200, 0.3), rgba(0, 100, 200, 0.3)), linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://static-images.remax.com/assets/web/homepage/09_Collection.jpg')`
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-end">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-md ml-auto text-right">
              <h2 className="text-4xl font-bold mb-2">Luxury</h2>
              <p className="text-lg mb-6">Fine Homes & Luxury Properties</p>
              <button className="border-2 border-white text-white px-2 py-1 rounded hover:bg-white hover:text-black transition" style={{ fontSize: '0.8rem' }}>
                DISCOVER LUXURY
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer - City Links Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-6">Real Estate Listings By Location</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="text-remax-blue hover:underline">Properties in Dubai Marina</a>
            <a href="#" className="text-remax-blue hover:underline">Properties in Downtown Dubai</a>
            <a href="#" className="text-remax-blue hover:underline">Properties in Palm Jumeirah</a>
            <a href="#" className="text-remax-blue hover:underline">Properties in Abu Dhabi</a>
            <a href="#" className="text-remax-blue hover:underline">Properties in Jumeirah Beach Residence</a>
            <a href="#" className="text-remax-blue hover:underline">Properties in Business Bay</a>
            <a href="#" className="text-remax-blue hover:underline">Properties in Dubai Hills Estate</a>
            <a href="#" className="text-remax-blue hover:underline">Properties in Arabian Ranches</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
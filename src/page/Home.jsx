import React from 'react'
import HeroBanner from '../component/HeroBanner'
import CategoryScroller from '../component/CategoryScroller'
import LuxeSection from '../component/LuxeSection'
import ProductCard from '../component/ProductCard'
import BrandSpotlight from '../component/BrandSpotlight'
import StoreSection from '../component/StoreSection'
import ProductSlider from '../component/ProductSlider'
import VideoFeed from '../component/VideoFeed'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Nykaa Fashion</h3>
            <p className="text-gray-400 text-sm">Your one-stop fashion destination</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Customer Care</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Offers</li>
              <li>New Arrivals</li>
              <li>Brands</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">i</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          © 2023 Nykaa Fashion. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <CategoryScroller />
      <LuxeSection />
      {/* <div className='py-8 px-4 md:px-8'>
        <div className=' px-8 mb-6' >
          <h2 className='font-medium'>IN THE SPOTLIGHT</h2>
          <p className="font-medium text-2xl">Procuts on offer</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
      </div> */}
      <ProductSlider />
      <VideoFeed/>
      <ProductSlider />
      <BrandSpotlight />

      <div className='py-8 lg:px-4 md:px-8'>
        <div className='px-8 mb-6' >
          <h2 className='font-medium'>IN THE SPOTLIGHT</h2>
          <p className="font-medium text-2xl">Trending Summer Picks      </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
      </div>
      <StoreSection />

    </div>
  )
}

export default Home

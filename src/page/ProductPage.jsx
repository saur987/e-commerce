import React, { useState } from 'react';
import { Star, Heart, Share2, ChevronRight, Minus, Plus } from 'lucide-react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('UK 8');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    brand: "Campus",
    name: "Deccan Navy Running Shoes",
    price: 1272,
    mrp: 2399,
    discount: "47% Off",
    rating: 4.0,
    reviews: 24,
    colors: ["Navy Blue", "Black"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    images: [
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/d/5df0b2cPCAMPU00020459_1.jpg",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/d/5df0b2cPCAMPU00020459_2.jpg",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/d/5df0b2cPCAMPU00020459_3.jpg",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/d/5df0b2cPCAMPU00020459_4.jpg",
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-2 text-sm text-slate-500">
        <a href="/" className="hover:text-black">Home</a>
        <ChevronRight size={14} />
        <a href="/men" className="hover:text-black">Men</a>
        <ChevronRight size={14} />
        <span className="text-slate-900 font-medium">{product.brand}</span>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6 lg:flex lg:space-x-12">
        {/* Left: Image Gallery */}
        <div className="lg:w-3/5 flex flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`flex-shrink-0 w-20 h-24 border-2 rounded-md overflow-hidden transition-all ${
                  selectedImage === idx ? 'border-indigo-600' : 'border-transparent'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-slate-50 rounded-xl overflow-hidden group relative">
            <img 
              src={product.images[selectedImage]} 
              alt="Main Product" 
              className="w-full h-[500px] lg:h-[650px] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
            <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-2/5 mt-8 lg:mt-0 space-y-6">
          <div>
            <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-1">
              {product.brand}
            </h2>
            <h1 className="text-3xl font-light text-slate-800 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center mt-3 space-x-4">
              <div className="flex items-center bg-emerald-50 px-2 py-1 rounded">
                <span className="text-emerald-700 font-bold text-sm mr-1">{product.rating}</span>
                <Star size={14} className="fill-emerald-700 text-emerald-700" />
              </div>
              <span className="text-slate-400 text-sm border-l pl-4 font-medium">
                {product.reviews} Ratings
              </span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Pricing */}
          <div className="space-y-1">
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-bold">₹{product.price}</span>
              <span className="text-lg text-slate-400 line-through">MRP ₹{product.mrp}</span>
              <span className="text-orange-500 font-bold text-lg">{product.discount}</span>
            </div>
            <p className="text-xs text-slate-400 font-medium italic">Inclusive of all taxes</p>
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Select Color</h3>
            <div className="flex space-x-3">
              <button className="w-12 h-12 rounded-full border-2 border-indigo-600 p-0.5 ring-2 ring-offset-2 ring-transparent">
                <div className="w-full h-full rounded-full bg-navy-800 bg-[#000080]" title="Navy Blue" />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-slate-200 p-0.5 hover:border-slate-400 transition-colors">
                <div className="w-full h-full rounded-full bg-black" title="Black" />
              </button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Select Size</h3>
              <button className="text-indigo-600 text-xs font-bold hover:underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm font-medium border rounded-md transition-all ${
                    selectedSize === size 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                    : 'border-slate-200 hover:border-black text-slate-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Action Buttons */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-slate-300 rounded-md">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:bg-slate-50 text-slate-600 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:bg-slate-50 text-slate-600 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-indigo-600 text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
                Add to Bag
              </button>
              <button className="px-6 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group">
                <Heart size={24} className="group-hover:text-red-500 group-hover:fill-red-500 transition-colors" />
              </button>
            </div>
          </div>

          {/* Product Details (Accordion Style) */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer font-bold text-sm uppercase text-slate-600 list-none">
                Product Details
                <ChevronRight size={18} className="group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-4 text-slate-500 text-sm leading-relaxed space-y-2">
                <p>Breathable mesh upper for superior comfort.</p>
                <p>Phylon sole for lightweight cushioning and durability.</p>
                <p>Ideal for running, gym sessions, and daily wear.</p>
              </div>
            </details>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
import React, { useState } from 'react';
import { Star, Heart, Share2, ChevronRight, Minus, Plus,ShoppingBag } from 'lucide-react';
import ProductCard from '../component/ProductCard';

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
        <div className="lg:w-3/5 flex flex-col-reverse lg:flex-row gap-6">

          {/* --- THUMBNAILS (Sticky Sidebar) --- */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[650px] no-scrollbar pb-2 lg:pb-0 lg:w-24 shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`group relative flex-shrink-0 w-20 h-24 lg:w-full lg:h-32 rounded-2xl overflow-hidden transition-all duration-300 
          ${selectedImage === idx
                    ? 'ring-2 ring-primary ring-offset-2'
                    : 'ring-1 ring-slate-200 hover:ring-slate-300'
                  }`}
              >
                <img
                  src={img}
                  alt={`View ${idx}`}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${selectedImage === idx ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
                />
                {/* Active Overlay */}
                {selectedImage === idx && (
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                )}
              </button>
            ))}
          </div>

          {/* --- MAIN IMAGE SHOWCASE --- */}
          <div className="flex-1 relative aspect-[3/4] lg:aspect-auto lg:h-[750px] bg-[#F9FAFB] rounded-[2.5rem] overflow-hidden group border border-slate-100">

            {/* Floating Action Badges */}
            <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm border border-slate-100">
                New Arrival
              </span>
              {/* <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                -20% OFF
              </span> */}
            </div>

            {/* Top Right Actions */}
            <div className="absolute top-6 right-6 z-10 flex flex-col gap-3">
              <button className="p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm hover:bg-white hover:text-primary transition-all duration-300 hover:rotate-12">
                <Share2 size={20} />
              </button>
              <button className="p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm hover:bg-white hover:text-rose-500 transition-all duration-300 group/fav">
                <Heart size={20} className="group-hover/fav:fill-rose-500 transition-colors" />
              </button>
            </div>

            {/* Product Image */}
            <div className="w-full h-full flex items-center justify-center p-8 lg:p-12">
              <img
                src={product.images[selectedImage]}
                alt="Featured Product"
                className="w-full h-full object-contain mix-blend-multiply transition-all duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Bottom Gradient Overlay (Subtle) */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />

            {/* Image Navigation Hint (Mobile) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 lg:hidden">
              {product.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${selectedImage === i ? 'w-6 bg-primary' : 'w-2 bg-slate-300'}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Right: Product Info */}
        <div className="lg:w-2/5 mt-8 lg:mt-0 lg:pl-10 space-y-10">
          {/* Header Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-primary/40"></span>
              <h2 className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                {product.brand}
              </h2>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? "fill-orange-400 text-orange-400" : "text-slate-200"}
                  />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-4">
                {product.reviews} Global Reviews
              </span>
            </div>
          </div>

          {/* Pricing Section - High Contrast */}
          <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100/50">
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black text-slate-900">₹{product.price}</span>
              <span className="text-lg text-slate-400 line-through mb-1 font-medium">₹{product.mrp}</span>
              <div className="mb-1 bg-primary/10 text-primary px-2 py-0.5 rounded-lg text-xs font-black">
                {product.discount}
              </div>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-2">
              Tax included • <span className="text-emerald-500">Free Express Shipping</span>
            </p>
          </div>

          {/* Color Selection - Minimalist Rings */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-500">Selected Tone</h3>
            <div className="flex gap-4">
              {['#000080', '#000000'].map((color, idx) => (
                <button
                  key={idx}
                  className={`relative group w-10 h-10 rounded-full transition-all duration-500 ${idx === 0 ? 'ring-2 ring-primary ring-offset-4' : 'hover:scale-110'
                    }`}
                >
                  <div
                    className="w-full h-full rounded-full border border-black/5"
                    style={{ backgroundColor: color }}
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {idx === 0 ? 'Navy' : 'Black'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection - Floating Style */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-500">Tailored Fit</h3>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-slate-900 transition-colors underline underline-offset-4">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[54px] h-[54px] rounded-2xl text-xs font-black transition-all duration-300 border-2 ${selectedSize === size
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xl shadow-slate-200 scale-105'
                      : 'border-slate-100 hover:border-slate-300 text-slate-600'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & CTA - Modern Integrated Bar */}
          <div className="space-y-4">
            <div className="flex gap-4 h-16">
              {/* Dynamic Quantity Controller */}
              <div className="flex items-center bg-slate-100 rounded-2xl px-2">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 hover:text-primary transition-colors">
                  <Minus size={14} strokeWidth={3} />
                </button>
                <span className="w-8 text-center text-sm font-black">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-3 hover:text-primary transition-colors">
                  <Plus size={14} strokeWidth={3} />
                </button>
              </div>

              <button className="flex-1 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95">
                <ShoppingBag size={18} />
                Add to Bag
              </button>

              <button className="w-16 flex items-center justify-center border-2 border-slate-100 rounded-2xl hover:border-red-100 group transition-all">
                <Heart size={20} className="group-hover:text-red-500 group-hover:fill-red-500 transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Modern Clean Accordions */}
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {[
              { title: "Product Story", content: "Breathable mesh upper for superior comfort with Phylon cushioning." },
              { title: "Materials & Care", content: "100% Recycled Polyester. Wipe with a damp cloth." },
              { title: "Returns & Shipping", content: "Free 30-day returns and express 2-day delivery." }
            ].map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800">
                    {item.title}
                  </span>
                  <span className="relative h-5 w-5">
                    <Plus size={16} className="absolute inset-0 transition-transform duration-300 group-open:rotate-45" />
                  </span>
                </summary>
                <div className="mt-4 text-xs font-medium leading-relaxed text-slate-500 max-w-sm">
                  {item.content}
                </div>
              </details>
            ))}
          </div>
        </div>


      </main>
      <div className='py-8 lg:px-4 md:px-8'>
        <div className='px-8 mb-6' >
          <p className="font-medium text-2xl">More Product</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, Layers, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from "react-router";


// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RouterPath } from '../router/RouterPath';

const ProductCard = () => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef(null);

  const product = {
    brand: "Puma",
    title: "Smashic Womens White Sneakers",
    price: 1800,
    mrp: 4499,
    discount: 60,
    // tag: "BESTSELLER",
    images: [
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/7/d704a39QQPUMAX00237075_1.jpg",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/2/7293ae2OPUMAX00237075_2.jpg",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/2/7293ae2OPUMAX00237075_3.jpg",
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/2/7293ae2OPUMAX00237075_4.jpg"
    ]
  };

  // 👉 Start autoplay on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    swiperRef.current?.autoplay.start();
  };

  // 👉 Stop autoplay + reset
  const handleMouseLeave = () => {
    setIsHovered(false);
    swiperRef.current?.autoplay.stop();
    swiperRef.current?.slideToLoop(0); // better with loop
  };

  const pageNavigate =()=>{
    navigate(RouterPath.ProductPage);
  };

  return (
    
   <div onClick={pageNavigate}>
     <div
      className="group relative w-full max-w-[280px] bg-white transition-all duration-300 hover:cursor-p"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
      
    >
      {/* Image Section */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#f3f3f3]">

        {/* Tag */}
        {product.tag && (
          <div className="absolute top-2 left-0 z-20 bg-[#ff69b4] px-2 py-0.5">
            <span className="text-[10px] font-bold text-white tracking-widest uppercase italic">
              {product.tag}
            </span>
          </div>
        )}

        {/* Wishlist */}
        <button className="absolute top-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
          <Heart size={18} className="text-[#001325]/90 hover:fill-red-500 hover:text-red-500" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.autoplay.stop(); // ❗ stop initially
          }}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // we control manually
          }}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="h-full w-full"
        >
          {product.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${product.title}-${index}`}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}

          {/* Arrows */}
          <button
            className={`swiper-button-prev-custom absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-md transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className={`swiper-button-next-custom absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-md transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </Swiper>

        {/* Overlay */}
        <div
          className={`absolute bottom-0 left-0 z-20 w-full bg-white/95 py-3 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button className="flex w-full items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#001325]">
            <Layers size={14} />
            View Similar
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="mt-3 px-1 space-y-1">
        <h3 className="text-sm font-bold text-[#001325] truncate uppercase">
          {product.brand}
        </h3>

        <p className="truncate text-[13px] text-gray-500">
          {product.title}
        </p>

        <div className="flex items-center gap-2 pt-1">
          <span className="text-[16px] font-bold text-[#001325]">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-[13px] text-gray-400 line-through">
            ₹{product.mrp.toLocaleString()}
          </span>
          <span className="text-[12px] font-bold text-[#ff69b4]">
            ({product.discount}% OFF)
          </span>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ProductCard;
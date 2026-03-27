import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

const ProductCard = () => {
  // Mock data based on your HTML
  const product = {
    brand: "BOSTON LEVIN",
    title: "White Pods Bluetooth Wireless Ear Buds with Total Playtime Upto 60hr",
    price: 1210,
    mrp: 10999,
    discount: 89,
    image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/d/5df0b2cPCAMPU00020459_2.jpg",
    colors: ["#ffffff", "#000000"]
  };

  return (
    <div className="group relative w-full hover:border border-gray-200 rounded-lg p-1 cursor-pointer bg-white transition-all">
      {/* 1. Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Wishlist Button (Top Right) */}
        <button className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm hover:bg-white">
          <FavoriteBorderIcon sx={{ fontSize: 20 }} className="text-gray-800" />
        </button>

        {/* View Similar Hover Action (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-white/90 py-2 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-tight text-gray-800">
            <AutoAwesomeMotionIcon sx={{ fontSize: 16 }} />
            View Similar
          </div>
        </div>
      </div>

      {/* 2. Product Details */}
      <div className="mt-3 space-y-1 px-1">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
          {product.brand}
        </h3>

        <p className="truncate text-sm text-gray-500">
          {product.title}
        </p>

        {/* Color Swatches */}
        <div className="flex gap-1.5 py-1">
          {product.colors.map((color, i) => (
            <div
              key={i}
              style={{ backgroundColor: color }}
              className="h-3 w-3 rounded-full border border-gray-200 shadow-inner"
            />
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ₹{product.mrp.toLocaleString()}
          </span>
          <span className="text-xs font-bold text-green-600">
            {product.discount}% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
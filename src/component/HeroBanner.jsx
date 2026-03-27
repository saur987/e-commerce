const HeroBanner = () => {
    return (
        <section className="w-full overflow-hidden bg-white mt-16">
            {/* Container for the banner image */}
            <div className="relative w-full cursor-pointer group">
                {/* <a
                    href="#"
                    className="block w-full transition-transform duration-500 ease-out"
        </a> */}
            <img
                src="https://images-static.nykaa.com/uploads/156925a0-a1cd-4c08-84a4-23848799483f.jpg?tr=w-1800,cm-pad_resize"
                alt="Main Fashion Banner"
                className="w-full h-auto object-cover display-block"
                loading="eager"
            />

            {/* Optional: Overlay for "Shop Now" on hover if you want extra interactivity */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

      {/* Trust Bar / Promo Bar (Common in Nykaa-style headers) */ }
    <div className="flex justify-center space-x-8 py-3 bg-gray-50 border-b border-gray-100">
        <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest">
            ✨ 100% Authentic Products
        </p>
        <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest">
            🚚 Free Shipping on orders over ₹1000
        </p>
    </div>
    </section >
  );
};

export default HeroBanner;
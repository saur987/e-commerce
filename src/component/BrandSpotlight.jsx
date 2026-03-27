import React from 'react';

const spotlightBrands = [
  {
    id: 1,
    brand: "Forever New",
    offer: "Up to 50% Off",
    desc: "Elegant Eveningwear",
    image: "https://images-static.nykaa.com/uploads/4ee71bd4-d592-4667-8a93-821f1bc21e0c.jpg?tr=w-480",
  },
  {
    id: 2,
    brand: "Twenty Dresses",
    offer: "Up to 70% Off",
    desc: "Street Style Must-haves",
    image: "https://images-static.nykaa.com/uploads/8139734a-fb9b-40e0-a3a5-270586a7186d.jpg?tr=w-480",
  },
  {
    id: 3,
    brand: "Libas",
    offer: "Min 30% Off",
    desc: "Modern Ethnic Sets",
    image: "https://images-static.nykaa.com/uploads/872c74cd-57b7-42e3-bcd1-473bd22329ba.jpg?tr=w-480",
  },
  {
    id: 4,
    brand: "Puma",
    offer: "Min 40% Off",
    desc: "Performance Activewear",
    image: "https://images-static.nykaa.com/uploads/a7a3309d-e433-4e2f-847b-63351fe6d9e7.jpg?tr=w-480",
  },
];

const BrandSpotlight = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-16">
      <div className=" mx-auto">
        
        {/* Modern Header Design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
              Curated Selection
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
              In The <span className="font-serif italic text-5xl">Spotlight</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium">Discover the labels everyone is talking about.</p>
          </div>
          <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-primary hover:border-primary transition-all uppercase tracking-widest">
            View All Brands
          </button>
        </div>

        {/* Featured Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightBrands.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image with subtle zoom */}
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Overlay / Bottom Content */}
              <div className="p-5 text-center bg-white relative">
                {/* Floating Badge (Offer) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest group-hover:bg-primary transition-colors">
                  {item.offer}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1 uppercase tracking-tighter">
                  {item.brand}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {item.desc}
                </p>
                
                {/* Hover Reveal Button */}
                <div className="mt-4 h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 transition-all duration-300">
                   <span className="text-[10px] font-black border border-gray-900 px-4 py-2 uppercase tracking-tighter hover:bg-black hover:text-white">
                     Shop Now
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSpotlight;
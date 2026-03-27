import React from 'react';

const storeData = [
  { id: 1, name: "Women", image: "https://images-static.nykaa.com/uploads/8f13793a-0156-49af-b20c-2323ec6cde3f.jpg?tr=w-240" },
  { id: 2, name: "Men", image: "https://images-static.nykaa.com/uploads/c1f68994-bc6d-4fb0-9cac-d0ce47d67838.jpg?tr=w-240" },
  { id: 3, name: "Kids", image: "https://images-static.nykaa.com/uploads/49e6ae70-6e96-44d6-8d56-a5359731b8ec.jpg?tr=w-240" },
  { id: 4, name: "Home", image: "https://images-static.nykaa.com/uploads/a66486e0-8eb4-4ef1-a6be-4a135f16432a.jpg?tr=w-240" },
  { id: 5, name: "Luxe Edit", image: "https://images-static.nykaa.com/uploads/585628e7-8d3a-45b1-aedc-195daff883ff.jpg?tr=w-240" },
  { id: 6, name: "Hidden Gems", image: "https://images-static.nykaa.com/uploads/d92a7ba6-ed6b-4d4e-a3ed-2524525ee042.jpg?tr=w-240" },
  { id: 7, name: "Global Store", image: "https://images-static.nykaa.com/uploads/3918fadc-f7d4-4c90-b698-05a083736705.jpg?tr=w-240" },
  { id: 8, name: "Revolve", image: "https://images-static.nykaa.com/uploads/d2145972-3bfb-4f68-aff1-2b6bb376b59b.jpg?tr=w-240" },
  { id: 9, name: "House of Nykaa", image: "https://images-static.nykaa.com/uploads/f6a1b761-90bb-483c-ae5d-e17184459fd2.jpg?tr=w-240" },
];

const StoreSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className=" mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight uppercase">
            Our Stores
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            Find everything for your every need
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {storeData.map((store) => (
            <div 
              key={store.id} 
              className="flex-shrink-0 w-[110px] md:w-[140px] snap-start group cursor-pointer"
            >
              {/* Image Circle */}
              <div className="relative aspect-square overflow-hidden rounded-full border-2 border-transparent transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                <img 
                  src={store.image} 
                  alt={store.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <div className="mt-3 text-center">
                <span className="text-xs md:text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors whitespace-nowrap">
                  {store.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
const luxeBanners = [
  { id: 1, alt: "luxe-01", src: "https://images-static.nykaa.com/uploads/2c60c4f0-fd46-460a-a549-c68b0511da0d.jpg", link: "#" },
  { id: 2, alt: "luxe-02", src: "https://images-static.nykaa.com/uploads/6129c9d8-9b96-4b00-a6ff-d8e1ba059abe.jpg", link: "#" },
  { id: 3, alt: "the-bridesmaid-edit", src: "https://images-static.nykaa.com/uploads/3e8eaaca-99ea-40c6-9740-f193e1798b37.jpg", link: "#" },
  { id: 4, alt: "travel-resort", src: "https://images-static.nykaa.com/uploads/5703d929-e825-4673-819b-e30694640d21.jpg", link: "#" },
  { id: 5, alt: "luxe-03", src: "https://images-static.nykaa.com/uploads/dc45b5f1-8b81-452d-9b9a-33434377dc61.jpg", link: "#" },
  { id: 6, alt: "luxe-04", src: "https://images-static.nykaa.com/uploads/8286489c-2d2b-4891-aaba-485cac019e92.jpg", link: "#" },
  { id: 7, alt: "sequined-diva", src: "https://images-static.nykaa.com/uploads/bea04ddc-9c81-4c9b-a539-a7642054ce65.jpg", link: "#" },
  { id: 8, alt: "under-20k-store", src: "https://images-static.nykaa.com/uploads/0c425ece-4844-41cd-a5d9-d333aa443071.jpg", link: "#" },
];

const LuxeSection = () => {
  return (
    <section className="bg-[#310914] py-8 px-4 md:px-8">
      {/* Container to match your site's max-width */}
      <div className="max-w-screen-xl mx-auto">
        
        {/* Optional Title like the original */}
        <div className="mb-6 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-serif italic tracking-wide">
                The Luxe Store
            </h2>
        </div>

        {/* The Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {luxeBanners.map((banner) => (
            <a 
              key={banner.id} 
              href={banner.link}
              className="group overflow-hidden rounded-sm transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-[3/4] w-full bg-gray-200">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Subtle hover overlay to make it look premium */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxeSection;
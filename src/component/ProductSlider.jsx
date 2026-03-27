import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ProductCard from './ProductCard';

const ProductSlider = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = 300; // Adjust based on card width
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-8 px-4 md:px-16 group">
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h2 className="font-medium text-gray-500 uppercase tracking-wider text-sm">In the Spotlight</h2>
                    <p className="font-medium text-2xl">Products on Slider</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full border border-gray-400 hover:bg-black hover:text-white transition-colors duration-300"
                    >
                        <ChevronLeft fontSize="medium" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full border border-gray-400 hover:bg-black hover:text-white transition-colors duration-300"
                    >
                        <ChevronRight fontSize="medium" />
                    </button>
                </div>
            </div>

            {/* Slider Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 px-8 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Mocking ProductCards - Replace with your actual component and data mapping */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="min-w-[250px] md:min-w-[280px] snap-start">
                        <ProductCard />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSlider;
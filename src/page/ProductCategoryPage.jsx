import React, { useState } from 'react';
import { Filter, ChevronDown, Heart, Eye, RotateCcw } from 'lucide-react';
import ProductCard from '../component/ProductCard';

const ProductCategoryPage = () => {
    const [activeSort, setActiveSort] = useState('Popularity');

    const categories = ['Kurtas', 'Sarees', 'Lehengas', 'Co-ord Sets', 'Gowns'];
    const colors = ['#ffffff', '#ffff00', '#800000', '#FF00FF', '#000000'];


    return (
        <div className=" bg-gray-50 text-slate-900 font-sans pt-6">
            {/* Breadcrumbs */}
            <nav className="px-6 py-4 text-sm text-gray-500 flex items-center gap-2  p-10 ">
                <a href="#" className="hover:text-black transition-colors">Home</a>
                <span>/</span>
                <a href="#" className="hover:text-black transition-colors">Women</a>
                <span>/</span>
                <span className="font-semibold text-black">Indianwear</span>
            </nav>

            <div className="max-w-[1440px] mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-md">
                    <div>
                        <h1 className="text-3xl font-light tracking-tight text-gray-900">Indianwear</h1>
                        <p className="text-gray-400 text-sm mt-1">228,873 items</p>
                    </div>

                    {/* Custom Sort Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-white hover:shadow-sm transition-all text-sm font-medium">
                            <span className="text-gray-500">Sort by:</span> {activeSort}
                            <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                <div className="flex gap-10">
                    {/* Sticky Sidebar Filters */}
                    <aside className="w-64 flex-shrink-0 hidden lg:block">
                        {/* sticky */}
                        <div className="sticky top-24 space-y-8">
                            <div className="flex justify-between items-center pb-4 border-b">
                                <h3 className="text-lg font-medium flex items-center gap-2">
                                    <Filter size={18} /> Filters
                                </h3>
                                <button className="text-xs uppercase tracking-wider text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors">
                                    <RotateCcw size={12} /> Reset
                                </button>
                            </div>

                            {/* Filter Sections */}
                            <FilterSection title="Category" items={categories} />
                            <FilterSection title="Color">
                                <div className="flex gap-2 flex-wrap pt-2">
                                    {colors.map((color, idx) => (
                                        <button
                                            key={idx}
                                            className="w-6 h-6 rounded-full border border-gray-200 ring-offset-2 hover:ring-2 ring-gray-300 transition-all"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </FilterSection>
                            <FilterSection title="Price Range" items={['Under ₹1,000', '₹1,000 - ₹2,000', '₹2,000 - ₹5,000']} />
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8 pb-20">
                        <ProductCard/>
                        <ProductCard/>
                        {/* Repeat Cards */}
                    </main>
                </div>
            </div>
        </div>
    );
};

const FilterSection = ({ title, items, children }) => (
    <div className="space-y-3">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-900">{title}</h4>
        {children || (
            <div className="space-y-2">
                {items.map((item, idx) => (
                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black" />
                        <span className="group-hover:text-black transition-colors">{item}</span>
                    </label>
                ))}
            </div>
        )}
    </div>
);



export default ProductCategoryPage;
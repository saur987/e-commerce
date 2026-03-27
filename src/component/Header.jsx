import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CartDrawer from "./CartDrawer";

const subCategories = [
    "What's New", "Sale", "Indian Wear", "Western Wear",
    "Footwear", "Lingerie", "Bags", "Jewellery",
    "Active & Sports", "Watches", "Accessories"
];

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Women');

    return (
        <header className="fixed top-0 z-[100] w-full bg-white shadow-sm">
            {/* 1. WRAPPER FOR HOVER AREA */}
            <div className=" relative bg-white">

                <div className="mx-auto px-8 py-2">
                    <div className="flex items-center justify-between">
                        {/* Logo & Main Nav */}


                        {/* 1. This container now has the 'group' class to control the hover state for everything inside */}
                        <div className="flex items-center space-x-16 group relative">

                            <div className="text-2xl font-semibold">
                                NY Fashion
                            </div>

                            {/* Main Categories */}
                            <nav className="mt-4 text-lg flex justify-between space-x-4">
                                {['Women', 'Men', 'Kids', 'Beauty', 'All Brand', 'More'].map((category) => (
                                    <div
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`cursor-pointer pb-2 border-b-2 transition-all font-semibold ${activeCategory === category
                                            ? 'border-pink-600 text-pink-600'
                                            : 'border-transparent hover:border-pink-600 hover:text-pink-600'
                                            }`}
                                    >
                                        {category}
                                    </div>
                                ))}
                            </nav>

                            {/* 2. SUB-MENU - Now correctly triggered by the parent 'group' */}
                            <div className="hidden group-hover:block w-[100vw] absolute left-[-40px] bg-white border-b border-gray-200 shadow-md z-40 top-full">
                                <div className="max-w-screen-xl mx-auto">
                                    <div className="flex items-center overflow-x-auto no-scrollbar px-4 space-x-6">
                                        {subCategories.map((item, index) => (
                                            <button
                                                key={index}
                                                className="flex items-center space-x-1 whitespace-nowrap py-4 px-2 group/sub cursor-pointer hover:bg-gray-50"
                                            >
                                                <span className="text-md font-medium text-gray-800 group-hover/sub:text-pink-600 transition-colors">
                                                    {item}
                                                </span>
                                                <KeyboardArrowDownIcon
                                                    className="text-gray-400 group-hover/sub:text-pink-600 transition-transform group-hover/sub:rotate-180"
                                                    sx={{ fontSize: 16 }}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Search and Icons */}
                        <div className="flex items-center space-x-6">
                            <div className="flex-1 max-w-lg mx-4 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon className="text-gray-400" fontSize="small" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full pl-10 pr-10 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 bg-gray-50 focus:bg-white transition-all"
                                />
                                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-pink-500">
                                    <PhotoCameraIcon fontSize="small" />
                                </button>
                            </div>

                            {/* Profile, Wishlist, Bag */}
                            <div className="flex items-center gap-1 cursor-pointer color-ny-dark transition-colors">
                                <PersonOutlineIcon sx={{ fontSize: 24 }} />
                                <span className="text-xs font-bold hidden lg:block uppercase mt-1">Profile</span>
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-pink-500 transition-colors">
                                <FavoriteBorderIcon sx={{ fontSize: 24 }} />
                                <span className="text-xs font-bold hidden lg:block uppercase mt-1">Wishlist</span>
                            </div>
                            <div onClick={() => setIsCartOpen(true)} className="flex items-center gap-1 cursor-pointer relative hover:text-pink-500 transition-colors">
                                <LocalMallOutlinedIcon sx={{ fontSize: 24 }} />
                                <span className="text-xs font-bold hidden lg:block uppercase mt-1">Bag</span>
                                <span className="absolute -top-1 right-6 bg-pink-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
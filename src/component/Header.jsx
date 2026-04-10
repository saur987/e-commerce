import { useState } from "react";
import {
    Search as SearchIcon,
    PhotoCamera as PhotoCameraIcon,
    PersonOutline as PersonOutlineIcon,
    FavoriteBorder as FavoriteBorderIcon,
    LocalMallOutlined as LocalMallOutlinedIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    Menu as MenuIcon,
    Close as CloseIcon
} from '@mui/icons-material';
import CartDrawer from "./CartDrawer";
import { RouterPath } from "../router/RouterPath";
import { Link } from "react-router-dom";

const subCategories = [
    "What's New", "Sale", "Indian Wear", "Western Wear",
    "Footwear", "Lingerie", "Bags", "Jewellery",
    "Active & Sports", "Watches", "Accessories"
];

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Women');

    return (
        <header className="fixed top-0 z-[100] w-full bg-white shadow-sm font-sans">
            <div className="relative bg-white">
                <div className="mx-auto px-4 md:px-8 py-3">
                    <div className="flex items-center justify-between gap-4">

                        {/* LEFT: Mobile Menu & Logo */}
                        <div className="flex items-center gap-2 lg:gap-8 group relative">
                            <button
                                className="lg:hidden p-1"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <MenuIcon />
                            </button>
                            <div className="text-xl md:text-2xl font-bold whitespace-nowrap tracking-tight">
                                NY <span className="text-pink-600">FASHION</span>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex  items-center space-x-6">
                                {['Women', 'Men', 'Kids', 'Beauty'].map((category) => (
                                    <div
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`cursor-pointer pb-1 border-b-2 transition-all font-semibold text-sm uppercase tracking-wide ${activeCategory === category
                                            ? 'border-pink-600 text-pink-600'
                                            : 'border-transparent hover:border-pink-600 hover:text-pink-600'
                                            }`}
                                    >
                                        {category}
                                    </div>
                                ))}
                            </nav>
                            {/* DESKTOP HOVER SUB-MENU */}
                            <div className="hidden group-hover:block w-[100vw] absolute left-[-40px] bg-white border-b border-gray-200 shadow-md z-40 top-full">
                                <div className="max-w-screen-xl mx-auto px-8">
                                    <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar">
                                        {subCategories.map((item, index) => (
                                            <div key={index} className="flex items-center space-x-1 py-3 whitespace-nowrap cursor-pointer hover:text-pink-600 group">
                                                <span className="text-xs font-semibold text-gray-700 group-hover:text-pink-600 uppercase tracking-tighter">
                                                    {item}
                                                </span>
                                                <KeyboardArrowDownIcon sx={{ fontSize: 14 }} className="text-gray-400 group-hover:text-pink-600" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CENTER: Search Bar (Hidden on very small screens, or full width on md) */}
                        <div className="hidden sm:flex flex-1 max-w-md relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="text-gray-400" sx={{ fontSize: 20 }} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-10 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-1 focus:ring-pink-500 focus:bg-white transition-all"
                            />
                            <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                                <PhotoCameraIcon sx={{ fontSize: 18 }} />
                            </button>
                        </div>

                        {/* RIGHT: Icons */}
                        <div className="flex items-center space-x-3 md:space-x-6">
                            <Link to='/profile'>
                                <div className="flex flex-col items-center cursor-pointer hover:text-pink-600 transition-colors">
                                    <PersonOutlineIcon />
                                    <span className="text-[10px] font-bold hidden md:block uppercase">Profile</span>
                                </div>
                            </Link>
                            <Link to={RouterPath.Wishlist}>

                                <div className="hidden sm:flex flex-col items-center cursor-pointer hover:text-pink-600 transition-colors">
                                    <FavoriteBorderIcon />
                                    <span className="text-[10px] font-bold hidden md:block uppercase">Wishlist</span>
                                </div>
                            </Link>
                            <div
                                onClick={() => setIsCartOpen(true)}
                                className="flex flex-col items-center cursor-pointer relative hover:text-pink-600 transition-colors"
                            >
                                <LocalMallOutlinedIcon />
                                <span className="text-[10px] font-bold hidden md:block uppercase">Bag</span>
                                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* MOBILE SIDEBAR OVERLAY */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-[110] lg:hidden" onClick={() => setIsMenuOpen(false)}>
                    <div
                        className="w-[280px] h-full bg-white p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div className="font-bold text-xl">MENU</div>
                            <CloseIcon onClick={() => setIsMenuOpen(false)} />
                        </div>
                        <nav className="flex flex-col space-y-6">
                            {['Women', 'Men', 'Kids', 'Beauty', 'All Brands'].map((cat) => (
                                <a key={cat} href="#" className="text-lg font-medium border-b pb-2">{cat}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </header>
    );
};

export default Header;
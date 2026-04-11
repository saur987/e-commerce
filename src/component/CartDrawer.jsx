import { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  // Prevent scrolling of the background when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[150] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={onClose}
      />

      {/* 2. Sliding Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[200] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <LocalMallOutlinedIcon className="text-gray-700" />
            <span className="font-bold text-lg uppercase tracking-tight">Shopping Bag (0)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Cart Items Area (Scrollable) */}
        <div className="flex-1 h-[calc(100vh-200px)] overflow-y-auto p-4">
          {/* Empty State Example */}
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <LocalMallOutlinedIcon sx={{ fontSize: 40 }} className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">Your bag is empty</p>
            <button
              onClick={onClose}
              className="px-8 py-2 border-2 border-primary text-primary font-bold hover:bg-pink-600 hover:text-white transition-all"
            >
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Footer / Checkout Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-600">Total</span>
            <span className="font-bold text-lg">₹0.00</span>
          </div>
          <Link to="/checkout">
            <button onClick={onClose} className="w-full bg-primary text-white py-3 font-bold uppercase tracking-widest hover:bg-pink-700 transition-colors">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
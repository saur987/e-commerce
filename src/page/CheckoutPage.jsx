import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('cod');

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: Shipping & Payment (8 Columns) */}
                <div className="lg:col-span-8 space-y-6">
                    <Link to="/cart" className="flex items-center text-sm font-medium text-gray-500 hover:text-pink-600 transition-colors mb-4">
                        <ArrowBackIosIcon sx={{ fontSize: 12 }} className="mr-1" />
                        Back to Cart
                    </Link>

                    {/* Shipping Address Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Shipping Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Phone Number</label>
                                <input type="text" placeholder="+91 98765 43210" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Street Address</label>
                                <input type="text" placeholder="House No, Building, Street Name" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">City</label>
                                <input type="text" placeholder="Varanasi" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Pincode</label>
                                <input type="text" placeholder="221005" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-pink-500 outline-none transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Payment Method Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Method</h2>
                        <div className="space-y-3">
                            <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-pink-600 bg-pink-50' : 'border-gray-100'}`}>
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    className="accent-pink-600 w-4 h-4" 
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')}
                                />
                                <div className="ml-4">
                                    <p className="font-bold text-gray-800">Cash on Delivery</p>
                                    <p className="text-xs text-gray-500">Pay when your order arrives</p>
                                </div>
                            </label>

                            <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'online' ? 'border-pink-600 bg-pink-50' : 'border-gray-100'}`}>
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    className="accent-pink-600 w-4 h-4" 
                                    checked={paymentMethod === 'online'}
                                    onChange={() => setPaymentMethod('online')}
                                />
                                <div className="ml-4">
                                    <p className="font-bold text-gray-800">Online Payment (UPI / Cards)</p>
                                    <p className="text-xs text-gray-500">Secure payment via Razorpay</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Right Side: Order Summary (4 Columns) */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-6 border-b pb-4">Order Summary</h2>
                        
                        {/* Mini Product List */}
                        <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                            <div className="flex gap-3">
                                <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                    <img src="https://via.placeholder.com/64" alt="product" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-gray-800 line-clamp-1">Pure Mustard Oil</p>
                                    <p className="text-xs text-gray-500">Qty: 2 • 1L</p>
                                    <p className="text-sm font-bold text-pink-600 mt-1">₹900</p>
                                </div>
                            </div>
                        </div>

                        {/* Totals */}
                        <div className="space-y-3 border-t pt-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="font-medium text-gray-800">₹900.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Shipping</span>
                                <span className="text-green-600 font-medium font-bold">FREE</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Estimated Tax</span>
                                <span className="font-medium text-gray-800">₹18.00</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                                <span>Total</span>
                                <span className="text-pink-600">₹918.00</span>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-4 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700 transition-all shadow-lg shadow-pink-100 transform active:scale-[0.98]">
                            Place Order
                        </button>
                        
                        <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest">
                            Secure Checkout • 100% Genuine Products
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default CheckoutPage;
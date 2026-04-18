import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Assuming Material UI Icons
import UserSidebar from '../component/UserSidebar';
import { Package, Truck, MapPin, ChevronRight, Receipt } from 'lucide-react';

const OrderDetails = () => {
    // This would typically come from your API or state
    const orderData = {
        orderId: "#ORD-99281",
        date: "March 24, 2026",
        status: "In Transit",
        items: [
            {
                id: 1,
                name: "Premium Mustard Oil",
                variant: "1 Litre Bottle",
                price: 450,
                quantity: 2,
                image: "https://via.placeholder.com/100" // Replace with your S3 URL
            }
        ],
        shippingAddress: {
            name: "John Doe",
            street: "123 Tech Park, Phase 1",
            city: "Varanasi, UP",
            pincode: "221005"
        },
        summary: {
            subtotal: 900,
            shipping: 50,
            tax: 18,
            total: 968
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8 mt-14">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                {/* --- RESPONSIVE SIDEBAR --- */}
                <UserSidebar />
                <main className="flex-1 space-y-8">
                    <div className="">
                        {/* Header Navigation */}
                        {/* <Link to="/orders" className="flex items-center text-gray-600 hover:text-pink-600 mb-6 transition-colors">
                            <ArrowBackIcon fontSize="small" className="mr-2" />
                            <span className="font-medium">Back to Orders</span>
                        </Link> */}

                        <div className="max-w-6xl mx-auto space-y-6 p-4">
                            {/* 1. TOP HEADER BAR */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600">
                                        <Package size={28} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Order ID</span>
                                            <span className="text-xs font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600">{orderData.orderId}</span>
                                        </div>
                                        <h1 className="text-xl font-black text-slate-900 mt-0.5">Summary for {orderData.shippingAddress.name.split('')[0]}</h1>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="text-right hidden md:block">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                                        <p className="text-sm font-bold text-slate-800">{orderData.status}</p>
                                    </div>
                                    {/* <div className="h-10 w-10 rounded-full border-4 border-pink-100 border-t-pink-600 animate-spin hidden md:block"></div> */}
                                    <span className="px-5 py-2 bg-pink-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pink-200">
                                        {orderData.status}
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* 2. LEFT COLUMN: ITEMS & PROGRESS */}
                                <div className="lg:col-span-2 space-y-6">

                                    {/* Item Cards */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                            <div className="h-1 w-4 bg-pink-600 rounded-full"></div>
                                            Your Items ({orderData.items.length})
                                        </h3>

                                        {orderData.items.map((item) => (
                                            <div key={item.id} className="group bg-white p-4 rounded-3xl border border-slate-100 hover:border-pink-200 transition-all flex gap-5 items-center">
                                                <div className="relative">
                                                    <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-2xl shadow-sm group-hover:scale-105 transition-transform" />
                                                    <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-bold h-6 w-6 flex items-center justify-center rounded-full border-2 border-white">
                                                        {item.quantity}
                                                    </span>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-slate-800 text-lg group-hover:text-pink-600 transition-colors">{item.name}</h4>
                                                            <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-tighter">{item.variant}</p>
                                                        </div>
                                                        <p className="text-lg font-black text-slate-900">₹{item.price}</p>
                                                    </div>

                                                    <div className="mt-4 flex items-center gap-4">
                                                        <button className="text-[10px] font-bold uppercase text-slate-400 hover:text-pink-600 flex items-center gap-1 transition-colors">
                                                            View Product <ChevronRight size={12} />
                                                        </button>
                                                        <button className="text-[10px] font-bold uppercase text-slate-400 hover:text-pink-600 flex items-center gap-1 transition-colors">
                                                            Write Review
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. RIGHT COLUMN: LOGISTICS & BILLING */}
                                <div className="space-y-6">

                                    {/* Shipping Address Card */}
                                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 text-slate-50 pointer-events-none">
                                            <Truck size={80} />
                                        </div>

                                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <MapPin size={16} className="text-pink-600" />
                                            Delivery
                                        </h3>

                                        <div className="relative z-10">
                                            <p className="font-bold text-slate-800 text-base">{orderData.shippingAddress.name}</p>
                                            <div className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">
                                                <p>{orderData.shippingAddress.street}</p>
                                                <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.pincode}</p>
                                            </div>
                                            <button className="mt-4 text-xs font-bold text-pink-600 hover:underline">
                                                Change Address
                                            </button>
                                        </div>
                                    </div>

                                    {/* Payment Summary Card */}
                                    <div className="bg-slate-900 p-6 rounded-3xl shadow-xl shadow-slate-200 text-white relative overflow-hidden">
                                        {/* Abstract background circles */}
                                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-600/20 rounded-full blur-2xl"></div>

                                        <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                                            <Receipt size={16} className="text-pink-500" />
                                            Payment Summary
                                        </h3>

                                        <div className="space-y-3 relative z-10">
                                            <div className="flex justify-between text-sm font-medium text-slate-400">
                                                <span>Subtotal</span>
                                                <span className="text-slate-200">₹{orderData.summary.subtotal}</span>
                                            </div>
                                            <div className="flex justify-between text-sm font-medium text-slate-400">
                                                <span>Shipping Fee</span>
                                                <span className="text-emerald-400">Free</span>
                                            </div>
                                            <div className="flex justify-between text-sm font-medium text-slate-400">
                                                <span>Est. Tax</span>
                                                <span className="text-slate-200">₹{orderData.summary.tax}</span>
                                            </div>

                                            <div className="pt-4 mt-2 border-t border-slate-800">
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Amount</p>
                                                        <p className="text-2xl font-black text-white">₹{orderData.summary.total}</p>
                                                    </div>
                                                    <div className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-1 rounded-md font-bold mb-1">
                                                        PAID
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full mt-6 py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg shadow-pink-900/20 flex items-center justify-center gap-2">
                                            <Truck size={18} />
                                            Live Tracking
                                        </button>
                                    </div>

                                    <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        Need help with this order? <span className="text-pink-600 cursor-pointer">Contact Support</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default OrderDetails;
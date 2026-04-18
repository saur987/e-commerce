import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Edit2, Plus, MapPin, Mail, Phone, User, Heart, ShoppingBag, LogOut } from 'lucide-react';


const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('cod');
     const user = {
    name: "Saurabh Saurabh",
    email: "test123@gmail.com",
    address: {
      isDefault: true,
      street: "DLW Road",
      landmark: "Near BHU",
      city: "Varanasi",
      zip: "221002",
      state: "Uttar Pradesh",
      country: "India",
      phone: "+91 9685741425"
    }
  };


    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: Shipping & Payment (8 Columns) */}
                <div className="lg:col-span-8 space-y-6">
                    <Link to="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-pink-600 transition-colors mb-4">
                        <ArrowBackIosIcon sx={{ fontSize: 12 }} className="mr-1" />
                        Back
                    </Link>

    <section className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                Shipping Addresses
              </h2>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-primary transition-all font-bold text-xs uppercase tracking-wider">
                <Plus size={16} />
                Add New
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Address Card */}
              <div className="bg-white p-6 rounded-2xl border-2 border-primary/10 shadow-sm relative group hover:border-primary/40 transition-all">
                {user.address.isDefault && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                    Default
                  </div>
                )}
                
                <div className="space-y-3">
                  <p className="font-bold text-gray-900 text-lg">{user.name}</p>
                  <div className="text-sm text-gray-500 space-y-1 font-medium leading-relaxed">
                    <p>{user.address.street}, {user.address.landmark}</p>
                    <p>{user.address.city}, {user.address.state}</p>
                    <p className="text-gray-900 font-bold">{user.address.zip}</p>
                  </div>
                  <div className="pt-3 flex items-center gap-2 text-sm font-bold text-gray-900 border-t border-gray-50">
                    <Phone size={14} className="text-primary" />
                    {user.address.phone}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/5 border border-gray-100">
                    <Edit2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>
                   

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
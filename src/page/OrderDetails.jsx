import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Assuming Material UI Icons

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
        <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
                {/* Header Navigation */}
                <Link to="/orders" className="flex items-center text-gray-600 hover:text-pink-600 mb-6 transition-colors">
                    <ArrowBackIcon fontSize="small" className="mr-2" />
                    <span className="font-medium">Back to Orders</span>
                </Link>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Order Status Header */}
                    <div className="bg-gray-50 p-6 border-b border-gray-100 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Order {orderData.orderId}</h1>
                            <p className="text-sm text-gray-500">Placed on {orderData.date}</p>
                        </div>
                        <span className="px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold w-fit">
                            {orderData.status}
                        </span>
                    </div>

                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Product List */}
                        <div className="md:col-span-2 space-y-6">
                            <h3 className="font-bold text-gray-700 uppercase text-xs tracking-wider">Items</h3>
                            {orderData.items.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 border border-gray-50 rounded-lg">
                                    <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-md" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                                        <p className="text-sm text-gray-500">{item.variant}</p>
                                        <div className="mt-2 flex justify-between items-center">
                                            <span className="text-sm font-medium">Qty: {item.quantity}</span>
                                            <span className="font-bold text-pink-600">₹{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary & Shipping */}
                        <div className="space-y-8">
                            {/* Shipping Address */}
                            <div>
                                <h3 className="font-bold text-gray-700 uppercase text-xs tracking-wider mb-3">Shipping Address</h3>
                                <div className="text-sm text-gray-600 leading-relaxed">
                                    <p className="font-bold text-gray-800">{orderData.shippingAddress.name}</p>
                                    <p>{orderData.shippingAddress.street}</p>
                                    <p>{orderData.shippingAddress.city} - {orderData.shippingAddress.pincode}</p>
                                </div>
                            </div>

                            {/* Total Calculation */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-bold text-gray-700 uppercase text-xs tracking-wider mb-3">Total Summary</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Subtotal</span>
                                        <span>₹{orderData.summary.subtotal}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Shipping</span>
                                        <span className="text-green-600 font-medium">₹{orderData.summary.shipping}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Tax</span>
                                        <span>₹{orderData.summary.tax}</span>
                                    </div>
                                    <hr className="my-2 border-gray-200" />
                                    <div className="flex justify-between font-bold text-lg text-gray-900">
                                        <span>Total</span>
                                        <span className="text-pink-600">₹{orderData.summary.total}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="w-full py-3 bg-pink-600 text-white rounded-lg font-bold hover:bg-pink-700 transition-colors shadow-md shadow-pink-100">
                                Track Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
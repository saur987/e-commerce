import React from 'react'
import { useState } from 'react';
import { Edit2, Plus, MapPin, Mail, Phone, User, Heart, ShoppingBag, LogOut } from 'lucide-react';
import { RouterPath } from '../router/RouterPath';
import { Link } from 'react-router-dom';


const UserSidebar = () => {
    const [activeTab, setActiveTab] = useState('');

   const menuItems = [
        { 
            name: 'Profile', 
            icon: <User size={18} />, 
            linkto: '/profile' 
        },
        { 
            name: 'Wishlist', 
            icon: <Heart size={18} />, 
            linkto: "/wishlist" // Add these to your RouterPath object
        },
        { 
            name: 'Orders', 
            icon: <ShoppingBag size={18} />, 
            linkto: "/order/detail" 
        },
        { 
            name: 'Logout', 
            icon: <LogOut size={18} />, 
            linkto: "/logout", 
            color: 'text-red-500 hover:bg-red-50' 
        },
    ];

    return (
        <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 md:sticky md:top-24">
                <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-1 no-scrollbar">
                    {menuItems.map((item) => (
                        <Link to={item.linkto}>

                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap w-full
                    ${activeTab === item.name
                                    ? 'bg-primary text-white shadow-lg'
                                    : `text-gray-500 hover:bg-gray-50 ${item.color || ''}`
                                }`}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                        </Link>

                    ))}
                </nav>
            </div>
        </aside>
    )
}

export default UserSidebar

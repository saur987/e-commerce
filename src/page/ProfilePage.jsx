// import React, { useState } from 'react';
import { Edit2, Plus, MapPin, Mail, Phone, User, Heart, ShoppingBag, LogOut } from 'lucide-react';
import UserSidebar from '../component/UserSidebar';

const ProfilePage = () => {

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
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8 mt-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* --- RESPONSIVE SIDEBAR --- */}
        <UserSidebar/>
       
        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 space-y-8">
          
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Account Profile</h1>
          </div>

          {/* Profile Details Card */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 rotate-3">
                    <User size={36} className="-rotate-3" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">{user.name}</h2>
                    <p className="text-gray-400 font-medium flex items-center gap-1.5 mt-1">
                      <Mail size={14} /> {user.email}
                    </p>
                  </div>
                </div>
                <button className="p-2.5 hover:bg-primary hover:text-white rounded-xl transition-all text-gray-400 border border-gray-100 shadow-sm">
                  <Edit2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 border-t border-gray-50">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</span>
                  <p className="text-gray-800 font-bold">{user.name}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Verification Status</span>
                  <p className="text-emerald-500 font-bold flex items-center gap-1 text-sm">
                    Verified Customer
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Addresses Section */}
      

        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
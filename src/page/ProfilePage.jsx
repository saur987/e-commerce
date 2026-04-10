import { Edit2, Plus, MapPin, Mail, Phone, User } from 'lucide-react';

const ProfilePage = () => {
  const user = {
    name: "saurabh saurabh",
    email: "saurabh9318vns@gmail.com",
    address: {
      isDefault: true,
      street: "addrss",
      landmark: "adddress",
      city: "Varanasi",
      zip: "221002",
      state: "Uttar Pradesh",
      country: "India",
      phone: "+919685741425"
    }
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-5">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Profile</h1>
        </div>

        {/* Profile Details Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                  <User size={32} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-gray-500 flex items-center gap-1">
                    <Mail size={14} /> {user.email}
                  </p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 border border-gray-200">
                <Edit2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-50">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</span>
                <p className="text-gray-800 font-medium">{user.name}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</span>
                <p className="text-gray-800 font-medium">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <MapPin size={20} className="text-pink-600" />
              Addresses
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#001325] text-white rounded-lg hover:bg-black transition-all font-bold text-sm">
              <Plus size={16} />
              Add New Address
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-xl border-2 border-pink-100 shadow-sm relative group cursor-pointer hover:border-pink-300 transition-all">
              {user.address.isDefault && (
                <div className="absolute top-4 right-4 bg-pink-50 text-pink-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">
                  Default
                </div>
              )}
              
              <div className="space-y-2">
                <p className="font-bold text-gray-900">{user.name}</p>
                <div className="text-sm text-gray-600 space-y-0.5 leading-relaxed">
                  <p>{user.address.street}</p>
                  <p>{user.address.landmark}</p>
                  <p>{user.address.city}, {user.address.state} - {user.address.zip}</p>
                  <p>{user.address.country}</p>
                </div>
                <div className="pt-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <Phone size={14} className="text-gray-400" />
                  {user.address.phone}
                </div>
              </div>

              {/* Edit Icon for Address */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 bg-gray-50 rounded-full text-gray-600 hover:text-pink-600">
                  <Edit2 size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
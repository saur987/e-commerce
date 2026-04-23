import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const FashionRegistration = () => {
  // Brand specific styles
  const inputStyle = "w-full py-3 border-b-2 border-gray-200 focus:border-black transition-colors outline-none text-sm placeholder:text-gray-300 placeholder:uppercase placeholder:tracking-widest";
  const labelStyle = "text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-1 block";

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      
      {/* LEFT SIDE: Visual/Brand Content */}
      <div className="hidden md:flex md:w-1/2 relative bg-gray-100 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2070" 
          alt="Fashion Model" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000"
        />
        <div className="relative z-10 p-12 flex flex-col justify-between h-full bg-black/20 text-white">
          <div>
            <h1 className="text-4xl font-serif italic tracking-tighter">Suhana <span className="font-sans font-light not-italic">Fashion</span></h1>
          </div>
          <div>
            <h2 className="text-5xl font-light leading-tight mb-4">Elevate your <br/> everyday style.</h2>
            <p className="text-sm tracking-widest uppercase opacity-80">Join our exclusive community</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-md w-full">
          
          <div className="mb-12">
            <h3 className="text-3xl font-serif mb-2 text-slate-900">Create Account</h3>
            <p className="text-gray-500 text-sm">Already have an account? <Link to="/login" className="text-black font-bold underline underline-offset-4">Sign In</Link></p>
          </div>

          <form className="space-y-8">
            
            {/* Full Name */}
            <div>
              <label className={labelStyle}>Full Name</label>
              <input type="text" placeholder="Enter your name" className={inputStyle} />
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Email */}
              <div>
                <label className={labelStyle}>Email</label>
                <input type="email" placeholder="email@address.com" className={inputStyle} />
              </div>

              {/* Phone */}
              <div>
                <label className={labelStyle}>Phone</label>
                <input type="tel" placeholder="+91 00000 00000" className={inputStyle} />
              </div>
            </div>

            {/* Gender Selection - Fashion minimal style */}
            {/* <div>
              <label className={labelStyle}>Gender</label>
              <div className="flex gap-8 mt-2">
                {['Female', 'Male', 'Non-Binary'].map((item) => (
                  <label key={item} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="gender" className="w-4 h-4 accent-black" />
                    <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div> */}

            {/* Password Fields */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className={labelStyle}>Password</label>
                <input type="password" placeholder="••••••••" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Confirm</label>
                <input type="password" placeholder="••••••••" className={inputStyle} />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 accent-black" id="terms" />
              <label htmlFor="terms" className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-tighter">
                I agree to the <span className="text-black underline">Terms of Service</span> and <span className="text-black underline">Privacy Policy</span>.
              </label>
            </div>

            {/* Fashion CTA Button */}
            <button className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group">
              Create My Account
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default FashionRegistration;
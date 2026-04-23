import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowForward, Email, Lock } from '@mui/icons-material';

const Login = () => {
  // Maintaining the minimal fashion design language
  const inputStyle = "w-full py-3 pl-8 border-b-2 border-gray-200 focus:border-black transition-colors outline-none text-sm placeholder:text-gray-300 placeholder:uppercase placeholder:tracking-widest";
  const labelStyle = "text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-1 block";

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      
      {/* LEFT SIDE: Login Specific Visual */}
      <div className="hidden md:flex md:w-1/2 relative bg-gray-200 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2070" 
          alt="Fashion Editorial" 
          className="absolute inset-0 w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-1000"
        />
        <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
          <h1 className="text-4xl font-serif italic tracking-tighter">Suhana <span className="font-sans font-light not-italic">Fashion</span></h1>
          <div className="max-w-xs">
            <h2 className="text-5xl font-light mb-4">Welcome back.</h2>
            <p className="text-xs tracking-[0.2em] uppercase opacity-70">Curating style since 2023</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-md w-full">
          
          <div className="mb-12">
            <h3 className="text-3xl font-serif mb-2 text-slate-900">Sign In</h3>
            <p className="text-gray-500 text-sm">
              New to Suhana? <Link to="/registration" className="text-black font-bold underline underline-offset-4">Create Account</Link>
            </p>
          </div>

          <form className="space-y-10">
            
            {/* Email Field */}
            <div className="relative">
              <label className={labelStyle}>Email Address</label>
              <div className="relative">
                <span className="absolute left-0 bottom-3.5 text-gray-400">
                  <Email fontSize="inherit" />
                </span>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className={inputStyle} 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="flex justify-between items-end mb-1">
                <label className={labelStyle}>Password</label>
                <Link to="/forgot-password" size="small" className="text-[10px] uppercase font-bold text-gray-400 hover:text-black">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute left-0 bottom-3.5 text-gray-400">
                  <Lock fontSize="inherit" />
                </span>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className={inputStyle} 
                />
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center gap-3">
              <input type="checkbox" className="accent-black h-4 w-4" id="remember" />
              <label htmlFor="remember" className="text-[11px] text-gray-500 uppercase tracking-widest cursor-pointer">
                Remember my session
              </label>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group">
                Enter Store
                <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
              </button>
            </div>

            {/* Alternative Login */}
            {/* <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-white px-4 text-gray-300">Or continue with</span></div>
            </div> */}

            {/* <div className="grid grid-cols-2 gap-4">
              <button className="border border-gray-200 py-3 text-[10px] uppercase font-bold hover:bg-gray-50 transition-colors">Google</button>
              <button className="border border-gray-200 py-3 text-[10px] uppercase font-bold hover:bg-gray-50 transition-colors">Apple</button>
            </div> */}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
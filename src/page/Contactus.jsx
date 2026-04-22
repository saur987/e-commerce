import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contactus = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Make a Call",
      detail: "+91 8874450587",
      sub: "Service & Support",
      action: "tel:+918874450587"
    },
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Send Email",
      detail: "suhana.fashion@gmail.com",
      sub: "Sales & Inquiries",
      action: "mailto:suhana.fashion@gmail.com"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Visit a Store",
      detail: "Orderly Bazar, Varanasi",
      sub: "Uttar Pradesh 221002",
      action: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">
          Contact Suhana
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Step Into Style – Curated Fashion <br /> for Today & Tomorrow
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Contact us Today to Schedule a Consultation or to Learn More about our Services. 
          We are here to help you refine your wardrobe.
        </p>
      </section>

      {/* --- QUICK CONNECT CARDS --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => (
            <a 
              href={item.action} 
              key={idx} 
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.title}</h3>
              <p className="text-lg font-bold text-slate-900 mb-1">{item.detail}</p>
              <p className="text-xs font-medium text-slate-500">{item.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* --- MAIN INTERACTION SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Locate and visit us or send <br /> us a message for Enquiry!</h2>
            <p className="mt-4 text-slate-500 font-medium">Fill out the form below and our styling team will get back to you within 24 hours.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">How can we help?</label>
              <textarea rows="4" placeholder="I would like to inquire about..." className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="md:w-fit px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
              Send Message <Send size={14} />
            </button>
          </form>
        </div>

        {/* Right: Address & Map Info */}
        <div className="space-y-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-6">Address</h3>
            <p className="text-xl font-medium leading-relaxed mb-8">
              S-4/58-A, Mahaveer Mandir Rd, Bhubaneswar Nagar Colony, Tagore Town, Orderly Bazar, Varanasi, Uttar Pradesh 221002
            </p>

            <div className="space-y-4 border-t border-slate-800 pt-8">
              <div className="flex items-center gap-4">
                <Clock className="text-primary" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Store Hours</p>
                  <p className="text-sm font-bold">Mon - Sat: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="text-primary" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">WhatsApp</p>
                  <p className="text-sm font-bold">+91 88744 50587</p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for Google Map */}
          <div className="w-full h-64 bg-slate-100 rounded-[2.5rem] overflow-hidden relative border border-slate-200">
            <iframe 
                title="Suhana Store Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3475!2d82.98!3d25.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzQ4LjAiTiA4MsKwNTgnNDguMCJF!5e0!3m2!1sen!2sin!4v1625000000000"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
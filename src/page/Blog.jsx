import React from 'react';
import { ArrowUpRight, Clock, User, ChevronRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      category: "Trend Alert",
      title: "10 Essential Wardrobe Staples for the Upcoming Season",
      excerpt: "Discover the must-have pieces that will define your style this year, from sustainable fabrics to bold silhouettes.",
      image: "https://images.unsplash.com/photo-1490481658327-47759382b3de?auto=format&fit=crop&q=80&w=800",
      author: "Suhana Team",
      date: "Oct 24, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      category: "Style Guide",
      title: "Mastering the Art of Accessories: Less is More",
      excerpt: "How to choose the perfect jewelry and handbags to complement your outfit without overdoing it.",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
      author: "Aditi Sharma",
      date: "Oct 20, 2025",
      readTime: "3 min read"
    },
    {
      id: 3,
      category: "Behind the Scenes",
      title: "The Craftsmanship Behind Our New Winter Collection",
      excerpt: "Take a peek into our design studio in Varanasi and see how our latest collection came to life.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
      author: "Design Lead",
      date: "Oct 15, 2025",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* --- HEADER SECTION --- */}
      <section className="pt-24 pb-16 px-6 text-center">
        <h2 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">
          Suhana Journal
        </h2>
        <h1 className="text-5xl font-bold text-slate-900 tracking-tight">
          Stories, Style & <br /> Inspiration
        </h1>
      </section>

      {/* --- FEATURED POST --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="group relative bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200">
          <div className="lg:w-1/2 h-[400px] lg:h-[550px] overflow-hidden">
            <img 
              src={posts[0].image} 
              alt="Featured" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 p-8 lg:p-16 space-y-6">
            <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
              Featured Story
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {posts[0].title}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {posts[0].excerpt}
            </p>
            {/* <div className="flex items-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest pt-4">
              <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {posts[0].author}</span>
              <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {posts[0].readTime}</span>
            </div> */}
            <button className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs group/btn mt-4">
              Read Article <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-primary" />
            </button>
          </div>
        </div>
      </section>

      {/* --- RECENT POSTS GRID --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">Latest Updates</h3>
            <h2 className="text-3xl font-bold text-slate-900">Recent Stories</h2>
          </div>
          <div className="flex gap-4">
            {["All", "Trends", "Guides", "Studio"].map((cat, i) => (
              <button key={i} className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.slice(1).concat(posts[0]).map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 px-2">
                {/* <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div> */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <button className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1 group/link">
                    Keep Reading <ChevronRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER SUB --- */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden border border-slate-100">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Subscribe to Suhana's Journal</h2>
            <p className="text-slate-500">Get style tips, new collection updates, and exclusive stories delivered to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none shadow-sm"
              />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-all shadow-lg active:scale-95">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
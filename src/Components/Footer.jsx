import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, MapPin, Mail, Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import logo from "/img/logo.PNG";

const Footer = () => {
  const brandBlue = '#B87333';
  const deepNavy = '#0a0f1a';
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] text-white pt-28 relative overflow-hidden">
      {/* Background Subtle Grid - Matches Preloader */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      <div className="max-w-[85rem] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* --- Top Section: Massive Branding & CTA --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 pb-20 border-b border-white/5">
          <div className="max-w-2xl">
            <span className={`text-[11px] uppercase tracking-[0.6em] text-[#B87333] font-bold block mb-6`}>
              Est. 1995 — Madhya Pradesh
            </span>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.85] mb-8">
              Shubham <br />
              <span className="text-white/20 italic font-serif">BUILDERS</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-between self-stretch py-2">
            <Link 
              to="/contact" 
              className="group flex flex-col items-start lg:items-end gap-4"
            >
              <div className="flex items-center gap-4 text-white group-hover:text-[#B87333] transition-all duration-500">
                <span className="uppercase text-[12px] tracking-[0.4em] font-bold">Start your project</span>
                <div className="p-3 border border-white/10 rounded-full group-hover:bg-[#B87333] group-hover:border-[#B87333] transition-all duration-500">
                    <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </div>
              </div>
            </Link>
            
            <button 
                onClick={scrollToTop}
                className="hidden lg:flex items-center gap-3 text-white/30 hover:text-white transition-colors duration-300 text-[10px] uppercase tracking-[0.3em]"
            >
                Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* --- Middle Section: Detailed Information Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-24">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <img src={logo} alt="Logo" className="h-12 brightness-0 invert opacity-80" />
            <p className="text-slate-400 text-sm leading-relaxed font-light max-w-xs">
              Crafting architectural landmarks with precision and integrity for over three decades. From civil engineering to luxury curation.
            </p>
            <div className="flex gap-5">
                <Link to="#" className="text-white/40 hover:text-[#B87333] transition-colors"><Instagram size={18}/></Link>
                <Link to="#" className="text-white/40 hover:text-[#B87333] transition-colors"><Linkedin size={18}/></Link>
                <Link to="#" className="text-white/40 hover:text-[#B87333] transition-colors"><Facebook size={18}/></Link>
            </div>
          </div>

          {/* Extended Navigation */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#B87333] font-bold">Directory</h4>
            <ul className="grid grid-cols-1 gap-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-slate-300 hover:text-white text-[13px] font-light transition-all duration-300 flex items-center gap-0 hover:gap-3 group"
                  >
                    <div className="w-0 h-[1px] bg-[#B87333] group-hover:w-6 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#B87333] font-bold">Specialization</h4>
            <ul className="space-y-4 text-slate-400 text-[13px] font-light">
              <li className="hover:text-white transition-colors cursor-default">Turnkey Construction</li>
              <li className="hover:text-white transition-colors cursor-default">Luxury Residential</li>
              <li className="hover:text-white transition-colors cursor-default">Commercial Infrastructure</li>
              <li className="hover:text-white transition-colors cursor-default">Landscape Architecture</li>
              <li className="hover:text-white transition-colors cursor-default">Renovation & Restoration</li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div className="space-y-8">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#B87333] font-bold">Branch Offices</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-sm group-hover:bg-[#B87333]/20 transition-colors">
                    <MapPin size={14} className="text-[#B87333]" />
                </div>
                <p className="text-[13px] font-light text-slate-300 leading-loose">
                  Saraswati School Road, <br />
                  Nai Basti, Katni, MP 483501
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-sm group-hover:bg-[#B87333]/20 transition-colors">
                    <Phone size={14} className="text-[#B87333]" />
                </div>
                <div className="text-[13px] font-light text-slate-300 space-y-1">
                  <p className="hover:text-white cursor-pointer transition-colors">+91 98272 16004</p>
                  <p className="hover:text-white cursor-pointer transition-colors">+91 84618 83444</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-sm group-hover:bg-[#B87333]/20 transition-colors">
                    <Mail size={14} className="text-[#B87333]" />
                </div>
                <p className="text-[13px] font-light text-slate-300 hover:text-white cursor-pointer transition-colors">
                  info@Subhambuilders.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Legal --- */}
        <div className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
              © 1995—{currentYear} Shubham Builders & Developers
            </span>
            <div className="flex gap-8">
                <Link to="/privacy" className="text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms" className="text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-700 font-medium">Crafted by</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-bold hover:text-[#B87333] transition-colors cursor-pointer">Digital Studio</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Accent Bar */}
      <div className="h-2 w-full bg-[#B87333] shadow-[0_-10px_40px_rgba(37,71,122,0.3)]" />
    </footer>
  );
};

export default Footer;
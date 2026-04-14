import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from "/img/logo.PNG";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4'
            : 'bg-gradient-to-b from-black/30 to-transparent py-8'
        }`}
      >
        <div className="max-w-[85rem] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center group z-50">
            <img
              src={logo}
              alt="Shubham Builders Logo"
              className={`h-12 md:h-14 transition-all duration-700 object-contain ${
                isScrolled ? 'opacity-100' : 'brightness-0 invert opacity-95'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-[13px] font-medium tracking-[0.1em] uppercase transition-all duration-300 group ${
                  isScrolled ? 'text-slate-600 hover:text-[#0e3a40]' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
                {/* Center-out underline animation */}
                <span className={`absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-[#0e3a40] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 ${!isScrolled && 'bg-white'}`} />
              </Link>
            ))}
            
            {/* Premium CTA Button */}
            <Link 
              to="/contact" 
              className={`ml-6 px-7 py-3 text-[12px] uppercase tracking-[0.15em] font-semibold transition-all duration-500 flex items-center gap-2 group ${
                isScrolled 
                ? 'bg-[#0e3a40] text-white hover:bg-[#1a335a] shadow-[0_4px_14px_0_rgba(37,71,122,0.39)] hover:shadow-[0_6px_20px_rgba(37,71,122,0.23)]' 
                : 'bg-white text-[#0e3a40] hover:bg-slate-100'
              }`}
            >
              Get a Quote
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 p-2 transition-colors duration-300 focus:outline-none ${
              isScrolled || mobileOpen ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Premium Full-Screen Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className={`flex flex-col justify-center h-full px-10 transition-transform duration-700 delay-100 ${mobileOpen ? 'translate-y-0' : 'translate-y-12'}`}>
          <div className="space-y-6">
            {links.map((link, index) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-4xl font-light tracking-wide text-slate-800 transition-all duration-700 hover:text-[#0e3a40]`}
                  style={{ 
                    transitionDelay: `${index * 50 + 150}ms`, 
                    transform: mobileOpen ? 'translateY(0)' : 'translateY(100%)',
                    opacity: mobileOpen ? 1 : 0
                  }}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
          
          <div 
            className={`mt-16 pt-8 border-t border-slate-200 transition-all duration-700`}
            style={{ 
              transitionDelay: '400ms', 
              opacity: mobileOpen ? 1 : 0, 
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)' 
            }}
          >
            <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mb-4">Ready to build?</p>
            <Link 
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#0e3a40] font-semibold hover:gap-4 transition-all duration-300"
            >
              Start your project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
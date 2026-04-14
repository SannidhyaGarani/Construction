import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const darkTeal = '#0e3a40';
  const brandWine = '#B87333';

  return (
    <section className="relative h-[100svh] w-full bg-[#0c0a09] overflow-hidden">
      
      {/* --- Cinematic Background --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-out opacity-50 scale-110 ${
            isLoaded ? 'translate-y-0 scale-100' : 'translate-y-4 scale-110'
          }`}
          style={{ backgroundImage: "url('img/a (1).jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
      </div>

      {/* --- Main Content Layout --- */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-center">
        
        <div className="max-w-3xl">
          {/* Top Metadata Line */}
          <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="h-[1px] w-8 bg-[#B87333]" />
            <span className="text-[9px] uppercase tracking-[0.6em] text-stone-400 font-bold">
              Legacy in Concrete — Est. 1995
            </span>
          </div>

          {/* Compact Premium Headline */}
          <div className="relative">
             <h1 className="font-serif text-[11vw] md:text-[6vw] leading-[0.9] text-white">
                <span className="block overflow-hidden">
                  <span className={`block transition-all duration-[1.2s] delay-500 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                    Refining the
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className={`block italic text-stone-500 transition-all duration-[1.2s] delay-700 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                    Skyline.
                  </span>
                </span>
             </h1>
          </div>

          {/* Description Text */}
          <div className={`mt-8 max-w-md transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed tracking-wide">
              Shubham Builders bridges the gap between visionary architecture and disciplined execution. Specialized in high-end residential and commercial estates across Central India.
            </p>
          </div>

          {/* --- The Premium Button Redesign --- */}
          <div className={`mt-12 flex flex-wrap items-center gap-6 transition-all duration-1000 delay-[1.2s] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Primary Button: The "Wine Draw" */}
            <Link 
              to="/contact" 
              className="group relative px-10 py-4 overflow-hidden border border-[#B87333]/30 transition-all duration-500"
            >
              <div className="absolute inset-0 w-0 bg-[#B87333] transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 uppercase text-[10px] tracking-[0.4em] font-bold text-white flex items-center gap-3">
                Start Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Secondary Button: The "Architectural Underline" */}
            <Link 
              to="/gallery" 
              className="group relative py-4 px-2 overflow-hidden"
            >
              <span className="uppercase text-[10px] tracking-[0.4em] font-bold text-white/60 group-hover:text-white transition-colors duration-300">
                Explore Work
              </span>
              <div className="absolute bottom-3 left-0 w-full h-[1px] bg-white/10" />
              <div className="absolute bottom-3 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
            </Link>

          </div>
        </div>
      </div>

      {/* --- Decorative Elements (The "Compact" Signature) --- */}
      
      {/* Location Stamp (Right Side) */}
      <div className={`absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-16 transition-all duration-1000 delay-[1.5s] ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
        <span className="rotate-90 origin-center text-[8px] uppercase tracking-[0.8em] text-white/20 whitespace-nowrap">
          Katni • Indore • Central India
        </span>
        <div className="h-24 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Numerical Index (Bottom Left) */}
      <div className={`absolute bottom-12 left-16 hidden md:block transition-all duration-1000 delay-[1.7s] ${isLoaded ? 'opacity-40' : 'opacity-0'}`}>
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-4xl text-white">01</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">Selected Showcase</span>
        </div>
      </div>

      {/* Fine-line Frame Overlay */}
      <div className="absolute inset-0 border-[0.5px] border-white/5 pointer-events-none m-8 z-20" />

    </section>
  );
};

export default HeroSection;
import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

const PageHero = ({ title, subtitle, backgroundImage, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`relative h-[50vh] md:h-[60vh] w-full bg-[#0c0a09] overflow-hidden ${className}`}>
      {/* --- Cinematic Background --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out opacity-40 scale-110 ${
            isLoaded ? 'translate-y-0 scale-100' : 'translate-y-4 scale-110'
          }`}
          style={{ backgroundImage: `url('${backgroundImage || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/50 to-transparent" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-4xl">
          {/* Top Line */}
          <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="h-[1px] w-8 bg-[#B87333]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">
              {subtitle}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[8vw] md:text-[5vw] leading-[0.9] text-white mb-6">
            <Reveal delay={0.5}>
              {title}
            </Reveal>
          </h1>
        </div>
      </div>

      {/* Fine-line Frame Overlay */}
      <div className="absolute inset-0 border-[0.5px] border-white/5 pointer-events-none m-6 md:m-12 z-20" />
    </section>
  );
};

export default PageHero;

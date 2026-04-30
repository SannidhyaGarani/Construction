import React from 'react';
import Reveal from '../../Components/Reveal';

const BrandIntro = () => {
  // Brand Colors
  const darkTeal = '#0e3a40';
  const brandWine = '#B87333';

  return (
    <section className="relative py-24 md:py-40 bg-[#F9F8F6] overflow-hidden">
      {/* Decorative Background Element - Subtle Large Monogram */}
      <div className="absolute top-10 right-[-5%] text-[30rem] font-serif text-stone-200/40 select-none pointer-events-none leading-none">
        M
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Content: The Narrative */}
          <div className="lg:col-span-7 relative z-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-[1px]`} style={{ backgroundColor: brandWine }} />
                <span className="uppercase tracking-[0.5em] text-[14px] font-bold" style={{ color: brandWine }}>
                  Our Legacy
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-10" style={{ color: darkTeal }}>
                Architecture with <br />
                <span className="italic text-[#B87333]">Clarity & Purpose.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="max-w-xl">
                <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-8">
                  Founded in 1995 by <span className="font-medium text-stone-900">Mr.Manoj Badgaiyan</span>,
                  our practice transcends traditional construction. We deliver residential and commercial
                  landmarks across Madhya Pradesh.
                </p>
                <p className="text-base text-stone-500 font-light leading-relaxed tracking-wide">
                  Our process is defined by a transparent, report-driven methodology and a
                  multi-generational commitment to workmanship that stands the test of time.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Content: The Distinction Cards */}
          <div className="lg:col-span-5 relative">
            <div className="grid gap-8">

              {/* Card 01 - Founder */}
              <Reveal delay={0.6} side="right">
                <div className="group relative bg-white p-10 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.03)] border-l-2" style={{ borderLeftColor: brandWine }}>
                  <div className="uppercase tracking-[0.4em] text-[9px] text-stone-400 mb-4 font-bold">The Visionary</div>
                  <div className="font-serif text-3xl md:text-4xl transition-colors duration-500 group-hover:text-[#B87333]" style={{ color: darkTeal }}>
                    Shubham <br /> Badgaiyan
                  </div>
                  <div className="absolute top-8 right-8 text-stone-100 font-serif text-6xl select-none group-hover:text-stone-200 transition-colors duration-500">
                    01
                  </div>
                </div>
              </Reveal>

              {/* Card 02 - Experience */}
              <Reveal delay={0.8} side="right">
                <div className="group relative bg-[#0e3a40] p-10 md:p-12 shadow-2xl translate-x-0 lg:translate-x-12">
                  <div className="uppercase tracking-[0.4em] text-[9px] text-white/40 mb-4 font-bold">Expertise</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl md:text-6xl text-white">30</span>
                    <span className="font-serif text-4xl italic text-[#B87333]">+</span>
                  </div>
                  <div className="font-serif text-xl text-stone-300 mt-2 italic">Years of Experience  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#B87333] transition-all duration-700 group-hover:w-full" />
                </div>
              </Reveal>

            </div>
          </div>

        </div>

        {/* Bottom Stat Bar - Subtle */}
        <div className="mt-24 pt-12 border-t border-stone-200 flex flex-wrap gap-12 md:gap-24">
          <div>
            <span className="block text-[14px] uppercase tracking-[0.3em] text-stone-400 mb-2">Location</span>
            <span className="text-sm font-medium" style={{ color: darkTeal }}>Katni & Indore</span>
          </div>
          <div>
            <span className="block text-[14px] uppercase tracking-[0.3em] text-stone-400 mb-2">Projects</span>
            <span className="text-sm font-medium" style={{ color: darkTeal }}>500+ Completed</span>
          </div>
          <div>
            <span className="block text-[14px] uppercase tracking-[0.3em] text-stone-400 mb-2">Focus</span>
            <span className="text-sm font-medium" style={{ color: darkTeal }}>Luxury Residential & Commercial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
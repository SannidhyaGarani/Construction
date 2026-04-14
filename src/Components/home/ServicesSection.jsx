import React from 'react';
import Reveal from '../../Components/Reveal';

const services = [
  { t: 'Building Design', d: 'From concept to construction-ready drawings with precise detailing.' },
  { t: 'Construction', d: 'Executed with quality materials and disciplined supervision.' },
  { t: 'Elevation Design', d: 'Proportioned facades aligned to context and budget.' },
  { t: 'Interior Design', d: 'Durable, cohesive interiors with timeless material palettes.' },
  { t: 'Structural Detail', d: 'Engineering for safe, efficient structures.' },
  { t: 'Nagar Nigam Plan Approval', d: 'Compliant submissions and Nagar Nigam Naksha approvals.' },
];

const ServicesSection = () => {
  const brandWine = '#B87333';
  const darkTeal = '#0e3a40';

  return (
    <section className="py-24 md:py-40 bg-[#f9f8f6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block" style={{ color: brandWine }}>
                Capabilities
              </span>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.1]" style={{ color: darkTeal }}>
                Our <span className="italic text-stone-400">Services</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-stone-500 text-sm font-light leading-relaxed mb-2">
              A comprehensive approach to the built environment, from initial sketch to final stone.
            </p>
          </Reveal>
        </div>

        {/* Services Architectural List */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-stone-300">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1} side={i % 2 === 0 ? "left" : "right"}>
              <div className="group relative p-10 md:p-16 border-b border-r-0 md:border-r border-stone-300 hover:bg-white transition-colors duration-700 overflow-hidden">
                {/* Number Index */}
                <span className="absolute top-10 right-10 font-serif text-5xl text-stone-100 group-hover:text-stone-200 transition-colors duration-500">
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  <h3 className="font-serif text-2xl md:text-3xl mb-6 transition-colors duration-500 group-hover:text-[#B87333]" style={{ color: darkTeal }}>
                    {s.t}
                  </h3>
                  <p className="text-stone-500 font-light leading-relaxed max-w-sm">
                    {s.d}
                  </p>
                  
                  {/* Subtle Interactive Element */}
                  <div className="mt-8 flex items-center gap-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-8 h-[1px]" style={{ backgroundColor: brandWine }} />
                    <span className="uppercase tracking-[0.3em] text-[9px] font-bold" style={{ color: brandWine }}>View Details</span>
                  </div>
                </div>

                {/* Corner Accent on Hover */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#B87333] group-hover:h-full transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
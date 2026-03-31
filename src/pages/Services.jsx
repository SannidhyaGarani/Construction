import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import CTASection from '../Components/home/CTASection';

const services = [
  {
    title: 'Building Design',
    desc: 'From initial concept to construction-ready drawings, we provide functional planning that balances aesthetics with practicality. Our design process ensures clarity in detailing and efficiency in execution.',
    img: 'img/a (2).jpeg',
  },
  {
    title: 'Construction',
    desc: 'End-to-end execution with a focus on quality materials, strict supervision, and safety standards. We manage the entire lifecycle, ensuring timelines are met without compromising on structural integrity.',
    img: 'img/a (1).jpeg',
  },
  {
    title: 'Elevation Design',
    desc: 'Creating modern facades and proportional massing aligned to context and budget. We craft elevations that make a statement while remaining harmonious with the surroundings.',
    img: 'img/a (3).jpeg',
  },
  {
    title: 'Interior Design',
    desc: 'Clean, durable, and timeless interiors with cohesive material palettes. We focus on creating spaces that are not just visually appealing but also deeply comfortable and functional.',
    img: 'img/a (4).jpeg',
  },
  {
    title: 'Structural Detail',
    desc: 'Precise engineering drawings and coordination for safe, efficient structures. Our structural detailing ensures the longevity and stability of your investment.',
    img: 'img/a (5).jpeg',
  },
  {
    title: 'Nagar Nigam Naksha Pass',
    desc: 'Navigating municipal approvals with compliant documentation and persistent follow-through. We handle the regulatory complexities so you can focus on the vision.',
    img: 'img/a (6).jpeg',
  },
];

const Services = () => {
  return (
    <main className="bg-[#f7f7f5] text-[#111827]">
      <PageHero 
        title="Our Expertise." 
        subtitle="Comprehensive Construction Solutions"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      {/* --- Intro Text --- */}
      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <Reveal>
             <span className="text-[10px] uppercase tracking-[0.4em] text-[#B87333] font-bold block mb-6">What We Do</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#0E3A40]">
              Detailed, accountable, and <span className="italic text-stone-400">design-led</span> services across architecture, interiors, and execution.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* --- Services List --- */}
      <section className="pb-24 px-6 md:px-16 max-w-[1440px] mx-auto space-y-32">
        {services.map((s, i) => (
          <div key={s.title} className={`grid lg:grid-cols-2 gap-12 md:gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <Reveal direction={i % 2 === 1 ? 'left' : 'right'}>
                <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden relative group">
                   {/* Decorative border frame */}
                   <div className="absolute inset-0 border border-[#0E3A40]/10 m-4 z-20 pointer-events-none" />
                   
                   <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#0E3A40]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </Reveal>
              {/* Number Overlay */}
              <div className={`absolute -top-12 ${i % 2 === 1 ? '-right-0 md:-right-12' : '-left-0 md:-left-12'} hidden md:block z-0`}>
                <span className="font-serif text-[12rem] text-stone-200/50 leading-none select-none">
                  0{i + 1}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative z-10`}>
              <Reveal direction={i % 2 === 1 ? 'right' : 'left'}>
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#B87333] font-bold mb-4 block">
                   Service 0{i + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-[#0E3A40] mb-6">{s.title}</h3>
                <div className="h-[1px] w-12 bg-[#B87333] mb-8" />
                <p className="text-stone-600 text-lg leading-relaxed">
                  {s.desc}
                </p>
                
                {/* Optional "Learn More" link style */}
                {/* <button className="mt-8 group flex items-center gap-3 text-[#0E3A40] text-xs uppercase tracking-widest font-bold">
                  Learn More 
                  <span className="w-8 h-[1px] bg-[#0E3A40] group-hover:w-12 transition-all duration-300" />
                </button> */}
              </Reveal>
            </div>

          </div>
        ))}
      </section>

      <CTASection />
    </main>
  );
};

export default Services;

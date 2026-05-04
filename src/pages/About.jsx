import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import StatsSection from '../Components/home/StatsSection';
import CTASection from '../Components/home/CTASection';

const About = () => {
  return (
    <main className="bg-[#f7f7f5] text-[#111827]">
      <PageHero 
        title="Our Legacy." 
        subtitle="Building Trust Since 1995"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
      />

      {/* --- Introduction Section --- */}
      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-[#0e3a40]">
              Shubham Builders <span className="italic text-[#B87333]">brings together smart design & quality construction.</span>We specialize in residential & commercial projects across Central India.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-2xl">
              Founded in 1995 by Mr.Manoj Badgaiyan, our firm has grown from a local contractor in Katni to a premier construction and real estate company serving Central India. We believe in transparency, precision, and the enduring power of quality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- Stats Section (Reused) --- */}
      <StatsSection />

      {/* --- The Story / Timeline --- */}
      <section className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
        {/* Decorative Background Line */}
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-stone-200 hidden md:block" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="mb-20 text-center">
            <span className="text-[14px] uppercase tracking-[0.4em] text-[#B87333] font-bold">Milestones</span>
            <h3 className="font-serif text-4xl md:text-5xl mt-4 text-[#0e3a40]">A History of Experience</h3>
          </div>

          <div className="space-y-24">
            {/* 1995 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:text-right md:pr-12">
                <Reveal direction="right">
                  <span className="font-serif text-6xl text-[#E5E5E5] block mb-[-20px] relative z-0">1995</span>
                  <h4 className="text-2xl font-serif text-[#0e3a40] relative z-10">The Foundation</h4>
                  <p className="mt-4 text-stone-600">
                    Founded in Katni with a single residential project. The focus was simple: uncompromising quality and personal supervision.
                  </p>
                </Reveal>
              </div>
              <div className="hidden md:block w-4 h-4 bg-[#B87333] rounded-full absolute left-1/2 -translate-x-1/2" />
              <div className="md:pl-12">
                <Reveal direction="left">
                  <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative group">
                    <img 
                      src="img/a.jpeg" 
                      alt="Early Construction" 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0e3a40]/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* 2005-2015 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 md:text-right md:pr-12">
                 <Reveal direction="right">
                  <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative group">
                    <img 
                      src="img/2010.jpeg" 
                      alt="Scaling Capabilities" 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-[#0e3a40]/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Reveal>
              </div>
              <div className="hidden md:block w-4 h-4 bg-[#B87333] rounded-full absolute left-1/2 -translate-x-1/2" />
              <div className="order-1 md:order-2 md:pl-12">
                <Reveal direction="left">
                  <span className="font-serif text-6xl text-[#E5E5E5] block mb-[-20px] relative z-0">2010</span>
                  <h4 className="text-2xl font-serif text-[#0e3a40] relative z-10">Scaling Capabilities</h4>
                  <p className="mt-4 text-stone-600">
                    Expanded into commercial sectors and complex structural designs. The team grew, incorporating engineering expertise.
                  </p>
                </Reveal>
              </div>
            </div>

             {/* Present */}
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:text-right md:pr-12">
                <Reveal direction="right">
                  <span className="font-serif text-6xl text-[#E5E5E5] block mb-[-20px] relative z-0">Now</span>
                  <h4 className="text-2xl font-serif text-[#0e3a40] relative z-10">Expansion & Innovation</h4>
                  <p className="mt-4 text-stone-600">
                    With a new base in Indore and a diversified portfolio, the next generation leads with modern design principles while honoring our core ethics.
                  </p>
                </Reveal>
              </div>
              <div className="hidden md:block w-4 h-4 bg-[#B87333] rounded-full absolute left-1/2 -translate-x-1/2" />
              <div className="md:pl-12">
                <Reveal direction="left">
                   <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative group">
                    <img 
                      src="img/a (2).jpeg" 
                      alt="Modern Architecture" 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-[#0e3a40]/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Leadership / Values --- */}
      <section className="py-24 px-6 md:px-16 bg-[#0e3a40] text-white">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <span className="text-[14px] uppercase tracking-[0.4em] text-[#B87333] font-bold">Our Philosophy</span>
              <h3 className="font-serif text-4xl md:text-5xl mt-6 leading-tight">
                "Quality is not an act, it is a <span className="italic text-stone-400">habit</span>."
              </h3>
              <p className="mt-8 text-stone-300 text-lg leading-relaxed">
                We don't just build structures; we build relationships. Our transparent process ensures you are part of every decision, while our expertise guarantees a result that stands the test of time.
              </p>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="font-serif text-xl mb-2">Mr.Manoj Badgaiyan</h4>
                    <p className="text-sm uppercase tracking-widest text-stone-400">Founder</p>
                 </div>
                 <div>
                    <h4 className="font-serif text-xl mb-2">Shubham Badgaiyan</h4>
                    <p className="text-sm uppercase tracking-widest text-stone-400">Structural Engineer</p>
                 </div>
              </div>
            </Reveal>
          </div>
          <div className="relative">
             <Reveal direction="left" delay={0.3}>
                <div className="aspect-[3/4] md:aspect-square bg-stone-800 overflow-hidden border border-white/10 relative">
                   {/* Abstract/Architectural Image */}
                   <img 
                      src="img/d.png" 
                      alt="Architectural Detail" 
                      className="object-cover w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-700"
                   />
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;

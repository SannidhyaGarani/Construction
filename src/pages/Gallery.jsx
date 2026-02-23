import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import CTASection from '../Components/home/CTASection';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop', title: 'The Grand Residence', category: 'Residential' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop', title: 'Vertex Towers', category: 'Commercial' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop', title: 'Skyline Apartments', category: 'Residential' },
  { src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop', title: 'Minimalist Loft', category: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1529420705456-2d43f7f26d0f?q=80&w=1600&auto=format&fit=crop', title: 'Corporate Hub', category: 'Commercial' },
  { src: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1600&auto=format&fit=crop', title: 'Urban Villa', category: 'Residential' },
  { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop', title: 'Eco Heights', category: 'Sustainable' },
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop', title: 'Modern Duplex', category: 'Residential' },
];

const Gallery = () => {
  return (
    <main className="bg-[#f7f7f5] text-[#111827]">
      <PageHero 
        title="Selected Works." 
        subtitle="A Portfolio of Excellence"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
      />

      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
        {/* Filter / Intro - Could be expanded later */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-stone-600 text-lg leading-relaxed">
              A curated selection of our residential and commercial projects across Central India. Each structure represents a commitment to precision, durability, and aesthetic integrity.
            </p>
          </Reveal>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="break-inside-avoid">
              <Reveal delay={i * 0.1}>
                <div className="group relative overflow-hidden bg-[#0c0a09] aspect-[4/5] md:aspect-auto">
                  {/* Image */}
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-60" 
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <span className="text-[#B87333] text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-white font-serif text-2xl md:text-3xl mb-6">
                        {project.title}
                      </h3>
                      <button className="flex items-center gap-2 text-white text-xs uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
                        View Project <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <ArrowUpRight className="text-white w-8 h-8" />
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Gallery;

import React, { useState } from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import CTASection from '../Components/home/CTASection';
import { ArrowUpRight, X } from 'lucide-react';

const projects = [
  { src: 'img/r/r (1).jpeg', type: 'residential' },
  { src: 'img/r/r (2).jpeg', type: 'residential' },
  { src: 'img/r/r (3).jpeg', type: 'residential' },
  { src: 'img/r/r (4).jpeg', type: 'residential' },
  { src: 'img/r/r (5).jpeg', type: 'residential' },
  { src: 'img/r/r (6).jpeg', type: 'residential' },
  { src: 'img/r/r (7).jpeg', type: 'residential' },
  { src: 'img/r/r (8).jpeg', type: 'residential' },
  { src: 'img/r/r (9).jpeg', type: 'residential' },
  { src: 'img/r/r (10).jpeg', type: 'residential' },
  { src: 'img/r/r (11).jpeg', type: 'residential' },
  { src: 'img/r/r (12).jpeg', type: 'residential' },
  { src: 'img/r/r (13).jpeg', type: 'residential' },
  { src: 'img/r/r (14).jpeg', type: 'residential' },
  { src: 'img/r/r (15).jpeg', type: 'residential' },
  { src: 'img/r/r (16).jpeg', type: 'residential' },
  { src: 'img/r/r (17).jpeg', type: 'residential' },
  { src: 'img/r/r (18).jpeg', type: 'residential' },
  { src: 'img/r/r (19).jpeg', type: 'residential' },
  { src: 'img/r/r (20).jpeg', type: 'residential' },
  { src: 'img/r/r (21).jpeg', type: 'residential' },
  { src: 'img/r/k (1).jpeg', type: 'residential' },
  { src: 'img/r/k (2).jpeg', type: 'residential' },
  { src: 'img/r/k (3).jpeg', type: 'residential' },
  { src: 'img/r/k (4).jpeg', type: 'residential' },
  { src: 'img/r/k (5).jpeg', type: 'residential' },
  { src: 'img/r/k (6).jpeg', type: 'residential' },
  { src: 'img/c/c.jpeg', type: 'commercial' },
  { src: 'img/c/c (1).jpeg', type: 'commercial' },
  { src: 'img/c/c (2).jpeg', type: 'commercial' },
  { src: 'img/c/c (3).jpeg', type: 'commercial' },
  { src: 'img/c/c (4).jpeg', type: 'commercial' },
  { src: 'img/c/c (5).jpeg', type: 'commercial' },
  { src: 'img/c/c (6).jpeg', type: 'commercial' },
  { src: 'img/c/c (7).jpeg', type: 'commercial' },
  { src: 'img/c/c (8).jpeg', type: 'commercial' },

  
  
  
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('commercial');

  const filteredProjects = projects.filter(project => project.type === activeFilter);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  const filters = [
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
  ];

  return (
    <main className="bg-[#f7f7f5] text-[#111827]">
      <PageHero 
        title="Our Works." 
        subtitle="Explore Our Dream Projects"
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
      />

      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
        {/* Intro */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-stone-600 text-lg leading-relaxed">
              A curated selection of our residential and commercial projects across Central India. Each structure represents a commitment to precision, durability, and aesthetic integrity.
            </p>
          </Reveal>
        </div>

        {/* Filter Section */}
        <div className="mb-16 flex flex-wrap justify-center gap-4 md:gap-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setVisibleCount(9); // Reset visible count on filter change
              }}
              className={`relative px-6 py-2 text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                activeFilter === filter.id 
                ? 'text-[#B87333]' 
                : 'text-stone-400 hover:text-[#111827]'
              }`}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#B87333] mt-2" />
              )}
            </button>
          ))}
        </div>

        <div 
          key={activeFilter}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 transition-all duration-500"
        >
          {filteredProjects.slice(0, visibleCount).map((project, i) => (
            <div key={`${activeFilter}-${i}`} className="break-inside-avoid cursor-pointer" onClick={() => setSelectedImage(project.src)}>
              <Reveal delay={(i % 9) * 0.05}>
                <div className="group relative overflow-hidden bg-[#0c0a09]">
                  {/* Image */}
                  <img 
                    src={project.src} 
                    alt={project.title || 'Gallery Image'} 
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-60" 
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <span className="text-[#B87333] text-[14px] uppercase tracking-[0.3em] font-bold mb-2 block">
                        {project.type}
                      </span>
                      <h3 className="text-white font-serif text-2xl md:text-3xl mb-6 capitalize">
                        {project.type} Project
                      </h3>
                      <button className="flex items-center gap-2 text-white text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors cursor-pointer" onClick={(e) => { e.stopPropagation(); setSelectedImage(project.src); }}>
                        View Full Image <ArrowUpRight size={14} />
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

        {visibleCount < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleShowMore}
              className="bg-[#111827] text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-[#B87333] transition-colors duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </section>

      {/* Premium Popup Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 transition-all duration-500"
          onClick={closeOverlay}
        >
          <div 
            className="relative w-[95vw] sm:w-[85vw] lg:w-[1100px] h-[60vh] sm:h-[80vh] lg:h-[650px] bg-stone-900/80 p-2 sm:p-3 rounded-3xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 transform transition-all duration-500 opacity-100 scale-100" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Premium Close Button */}
            <button 
              className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 text-white/80 hover:text-white bg-[#0c0a09] hover:bg-[#B87333] p-3 rounded-full transition-all duration-300 z-10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/20 hover:scale-110 hover:rotate-90 flex items-center justify-center"
              onClick={closeOverlay}
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            {/* Image Container */}
            <div className="w-full h-full overflow-hidden rounded-2xl bg-black flex items-center justify-center relative">
               <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-10" />
               <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />
               <img 
                src={selectedImage} 
                alt="Project Showcase" 
                className="w-full h-full object-contain select-none shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </main>
  );
};

export default Gallery;

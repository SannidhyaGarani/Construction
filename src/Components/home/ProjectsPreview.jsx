import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../Components/Reveal';

const images = [
  { src: 'img/a (1).jpeg', label: 'Private Residence', location: 'Katni', num: '01' },
  { src: 'img/a (2).jpeg', label: 'Commercial Landmark', location: 'Indore', num: '02' },
  { src: 'img/a (3).jpeg', label: 'Private Residence', location: 'Katni', num: '01' },
  {  src: 'img/a (4).jpeg', label: 'Commercial Landmark', location: 'Indore', num: '02' },
];

const ProjectsPreview = () => {
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
                Portfolio
              </span>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.1]" style={{ color: darkTeal }}>
                Selected <span className="italic text-stone-400">Works</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hidden md:block">
              <Link to="/gallery" className="group flex items-center gap-4">
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Explore All</span>
                <div className="w-12 h-[1px] bg-stone-300 group-hover:w-20 group-hover:bg-[#B87333] transition-all duration-500" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-12 gap-y-12 md:gap-y-32 md:gap-x-12">
          
          {/* Main Feature - Large Left */}
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <ProjectCard project={images[0]} isLarge={true} color={brandWine} teal={darkTeal} />
            </Reveal>
          </div>

          {/* Secondary - Right Offset */}
          <div className="col-span-12 md:col-span-5 md:pt-48">
            <Reveal delay={0.2}>
              <ProjectCard project={images[1]} color={brandWine} teal={darkTeal} />
            </Reveal>
          </div>

          {/* Third - Left Small */}
          <div className="col-span-12 md:col-span-5">
            <Reveal delay={0.1}>
              <ProjectCard project={images[2]} color={brandWine} teal={darkTeal} />
            </Reveal>
          </div>

          {/* Fourth - Right Medium Overlapping Look */}
          <div className="col-span-12 md:col-span-7 md:-mt-32">
            <Reveal delay={0.3}>
              <ProjectCard project={images[3]} isLarge={true} color={brandWine} teal={darkTeal} />
            </Reveal>
          </div>

        </div>

        {/* Mobile-only CTA */}
        <div className="mt-20 md:hidden text-center">
          <Link to="/gallery" className="inline-block py-5 px-12 border border-stone-200 uppercase tracking-[0.3em] text-[10px] font-bold">
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

/* Internal Component for Project Items */
const ProjectCard = ({ project, isLarge = false, color, teal }) => (
  <Link to={`/gallery`} className="group block relative">
    <div className={`relative overflow-hidden ${isLarge ? 'aspect-[4/5]' : 'aspect-square'} bg-stone-200`}>
      {/* Number Label */}
      <div className="absolute top-6 left-6 z-20 overflow-hidden">
         <span className="block text-[10px] font-bold text-white tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          PROJECT — {project.num}
         </span>
      </div>

      <img 
        src={project.src} 
        alt={project.label}
        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)]" 
      />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e3a40]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Accent Corner Line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-700 group-hover:w-full" style={{ backgroundColor: color }} />
    </div>

    <div className="mt-6 flex justify-between items-start">
      <div>
        <h3 className="font-serif text-2xl md:text-3xl transition-colors duration-500 group-hover:text-[#B87333]" style={{ color: teal }}>
          {project.label}
        </h3>
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mt-2">
          {project.location} • Residential
        </p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
            <path d="M17 7L7 17M17 7H7M17 7V17" />
         </svg>
      </div>
    </div>
  </Link>
);

export default ProjectsPreview;
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../Components/Reveal';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Enriched data array to support the card labels
const images = [
  { src: 'img/a (1).jpeg', num: '01', label: 'Urban Serenity' },
  { src: 'img/a (2).jpeg', num: '02', label: 'Minimalist Form' },
  { src: 'img/a (3).jpeg', num: '03', label: 'Golden Hour' },
  { src: 'img/a (4).jpeg', num: '04', label: 'Abstract Geometry' },
  { src: 'img/a (5).jpeg', num: '05', label: 'Textural Depth' },
  { src: 'img/a (7).jpeg', num: '06', label: 'Monochrome Study' },
  { src: 'img/a (8).jpeg', num: '07', label: 'Light Play' },
];

const ProjectsPreview = () => {
  const brandWine = '#B87333';
  const darkTeal = '#0e3a40';
  
  // Refs for custom premium navigation
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-24 md:py-32 bg-[#f9f8f6] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Premium Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block" style={{ color: brandWine }}>
                Portfolio
              </span>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1]" style={{ color: darkTeal }}>
                Our <span className="italic text-stone-400">Works</span>
              </h2>
            </div>
          </Reveal>

          {/* Premium Custom Navigation + Link */}
          <div className="flex items-center justify-between md:justify-end gap-12">
            <Reveal delay={0.2}>
              <Link to="/gallery" className="group flex items-center gap-4">
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Explore All</span>
                <div className="w-12 h-[1px] bg-stone-300 group-hover:w-20 group-hover:bg-[#B87333] transition-all duration-500" />
              </Link>
            </Reveal>

            {/* Desktop Carousel Controls */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                ref={prevRef}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group hover:bg-[#0e3a40] hover:border-[#0e3a40] transition-colors duration-300"
                aria-label="Previous slide"
              >
                <span className="text-sm group-hover:text-white transition-colors duration-300">←</span>
              </button>
              <button 
                ref={nextRef}
                className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group hover:bg-[#0e3a40] hover:border-[#0e3a40] transition-colors duration-300"
                aria-label="Next slide"
              >
                <span className="text-sm group-hover:text-white transition-colors duration-300">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Reveal delay={0.3}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                type: 'progressbar',
                el: '.custom-swiper-progress',
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                500: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="!overflow-visible"
            >
              {images.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} color={brandWine} teal={darkTeal} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Sleek Progress Bar */}
            <div className="mt-12 md:mt-16 relative h-[2px] bg-stone-200 w-full">
              <div className="custom-swiper-progress absolute inset-0 !bg-[#B87333]" />
            </div>
          </div>
        </Reveal>

        {/* Mobile-only CTA */}
        <div className="mt-12 md:hidden text-center">
          <Link to="/gallery" className="inline-block py-4 px-10 border border-stone-200 uppercase tracking-[0.3em] text-[10px] font-bold">
            View All Projects
          </Link>
        </div>

      </div>

      {/* Overriding Swiper's default progress bar styles to match the premium theme */}
      <style jsx="true" global="true">{`
        .custom-swiper-progress .swiper-pagination-progressbar-fill {
          background-color: #B87333 !important;
        }
      `}</style>
    </section>
  );
};

/* Internal Component for Project Items */
const ProjectCard = ({ project, color, teal }) => (
  <Link to={`/gallery`} className="group block relative">
    {/* Using portrait aspect ratio (3/4) for an editorial, high-fashion look */}
    <div className="relative overflow-hidden aspect-[3/4] bg-stone-100">
      
      {/* Number Label - Floating top left */}
      <div className="absolute top-6 left-6 z-20 overflow-hidden">
        <span className="block text-[10px] font-bold text-white tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,1,0.3,1)]">
          PROJECT — {project.num}
        </span>
      </div>

      <img 
        src={project.src} 
        alt={project.label}
        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)]" 
      />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e3a40]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Dynamic Title Reveal on Hover */}
      <div className="absolute bottom-8 left-6 z-20 overflow-hidden">
        {/* <p className="font-serif text-white text-2xl italic translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,1,0.3,1)] delay-75">
          {project.label}
        </p> */}
      </div>

      {/* Accent Corner Line */}
      <div 
        className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-700 group-hover:w-full" 
        style={{ backgroundColor: color }} 
      />
    </div>
  </Link>
);

export default ProjectsPreview;
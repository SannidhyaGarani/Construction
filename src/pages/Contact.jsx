import React from 'react';
import PageHero from '../Components/PageHero';
import Reveal from '../Components/Reveal';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <main className="bg-[#f7f7f5] text-[#111827]">
      <PageHero 
        title="Get in Touch." 
        subtitle="Start Your Journey With Us"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* --- Contact Info --- */}
          <div className="space-y-16">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0E3A40] mb-6">
                Let's build something <span className="italic text-[#B87333]">remarkable</span> together.
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                Whether you have a distinct vision or need guidance on where to begin, our team is ready to listen. We respond within 24 hours.
              </p>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={0.2}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[#0E3A40]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#B87333] font-bold block mb-2">Visit Us</span>
                    <p className="font-serif text-xl text-[#0E3A40]">Saraswati School Road,</p>
                    <p className="font-serif text-xl text-[#0E3A40]">Nai Basti, Katni (M.P.)</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[#0E3A40]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#B87333] font-bold block mb-2">Call Us</span>
                    <p className="font-serif text-xl text-[#0E3A40] mb-1">Shubham Badgaiyan: +91 98272 16004</p>
                    <p className="font-serif text-xl text-[#0E3A40]">Shubham Badgaiyan: +91 84618 83444</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[#0E3A40]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#B87333] font-bold block mb-2">Email Us</span>
                    <a href="mailto:contact@Subhambuilders.com" className="font-serif text-xl text-[#0E3A40] hover:text-[#B87333] transition-colors">
                      contact@Subhambuilders.com
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* --- Contact Form --- */}
          <div className="bg-white p-8 md:p-12 border border-stone-100 shadow-2xl shadow-stone-200/50">
            <Reveal delay={0.2}>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full border-b border-stone-300 py-3 text-[#0E3A40] focus:outline-none focus:border-[#B87333] transition-colors bg-transparent placeholder-stone-300" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full border-b border-stone-300 py-3 text-[#0E3A40] focus:outline-none focus:border-[#B87333] transition-colors bg-transparent placeholder-stone-300" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-stone-300 py-3 text-[#0E3A40] focus:outline-none focus:border-[#B87333] transition-colors bg-transparent placeholder-stone-300" 
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold">Project Details</label>
                  <textarea 
                    rows="4" 
                    className="w-full border-b border-stone-300 py-3 text-[#0E3A40] focus:outline-none focus:border-[#B87333] transition-colors bg-transparent placeholder-stone-300 resize-none" 
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="group relative px-10 py-4 overflow-hidden border border-[#B87333] w-full md:w-auto"
                  >
                    <div className="absolute inset-0 w-0 bg-[#B87333] transition-all duration-500 ease-out group-hover:w-full" />
                    <span className="relative z-10 uppercase text-[11px] tracking-[0.3em] font-bold text-[#B87333] group-hover:text-white flex items-center justify-center gap-3 transition-colors">
                      Send Message <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="h-[50vh] w-full bg-stone-200 relative group overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.498422791485!2d80.3957!3d23.8347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUwJzA0LjkiTiA4MMKwMjMnNDQuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(0%) contrast(80%)' }} 
          allowFullScreen="" 
          loading="lazy"
          className="group-hover:filter-none transition-all duration-700"
          title="Map"
        ></iframe>
        <div className="absolute inset-0 bg-[#0E3A40]/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
      </section>

    </main>
  );
};

export default Contact;

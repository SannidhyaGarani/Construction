import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone, MessageSquare } from 'lucide-react';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    // Show popup after 1 minute (60,000 ms)
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "918461883444";
    const text = `*New Inquiry (Popup)*%0A%0A*Name:* ${formData.name}%0A*Contact No:* ${formData.phone}%0A*Project Address:* ${formData.address}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    
    // Close and mark as seen
    closePopup();
  };

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-[#0E3A40]/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white overflow-hidden shadow-2xl border border-stone-100"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-stone-400 hover:text-[#0E3A40] transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Header Accent */}
            <div className="h-2 bg-gradient-to-r from-[#0E3A40] via-[#B87333] to-[#0E3A40]" />

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B87333]/10 text-[#B87333] text-[10px] uppercase tracking-widest font-bold mb-4">
                  <MessageSquare size={12} /> Special Consultation
                </div>
                <h2 className="font-serif text-3xl text-[#0E3A40] leading-tight mb-2">
                  Ready to start your <span className="italic text-[#B87333]">dream project?</span>
                </h2>
                <p className="text-stone-500 text-sm">
                  Fill out this quick form and we'll get back to you immediately on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-stone-200 py-2 text-[#0E3A40] focus:outline-none focus:border-[#B87333] transition-colors bg-transparent placeholder-stone-300 text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Whatsapp No</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-stone-200 py-2 text-[#0E3A40] focus:outline-none focus:border-[#B87333] transition-colors bg-transparent placeholder-stone-300 text-sm"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Project Address</label>
                  <textarea
                    required
                    rows="2"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border-b border-stone-200 py-2 text-[#0E3A40] focus:outline-none focus:border-[#B87333] transition-colors bg-transparent placeholder-stone-300 resize-none text-sm"
                    placeholder="Where is your site located?"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative px-8 py-4 overflow-hidden bg-[#0E3A40] w-full"
                  >
                    <div className="absolute inset-0 w-0 bg-[#B87333] transition-all duration-500 ease-out group-hover:w-full" />
                    <span className="relative z-10 uppercase text-[12px] tracking-[0.2em] font-bold text-white flex items-center justify-center gap-3 transition-colors">
                      Send to WhatsApp <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </form>
              
              <p className="mt-8 text-center text-[10px] text-stone-400 uppercase tracking-widest">
                Safe & Secure Consultation
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;

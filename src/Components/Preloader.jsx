import React, { useState, useEffect } from 'react';
import logo from "/img/logo.PNG"; // Using the same logo path as your header

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState('enter'); // 'enter', 'hold', 'exit'
    
    // Updated to match your logo's primary blue
    const brandBlue = '#B87333'; 
    const deepNavy = '#0a0f1a';
    
    useEffect(() => {
        let animationFrame;
        let startTime = null;
        
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            
            // Smoother, non-linear progress
            let newProgress;
            if (elapsed < 1000) {
                newProgress = (elapsed / 1000) * 30;
            } else if (elapsed < 2000) {
                newProgress = 30 + ((elapsed - 1000) / 1000) * 50;
            } else {
                newProgress = 80 + ((elapsed - 2000) / 1000) * 20;
                newProgress = Math.min(newProgress, 100);
            }
            
            setProgress(newProgress);
            
            if (elapsed < 800) {
                setPhase('enter');
            } else if (elapsed < 3200) {
                setPhase('hold');
            } else {
                setPhase('exit');
            }
            
            if (elapsed < 3800) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setIsVisible(false);
            }
        };
        
        animationFrame = requestAnimationFrame(animate);
        document.body.style.overflow = 'hidden';
        
        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center bg-white">
            {/* Background Sliding Panels (Luxury reveal effect) */}
            <div className={`
                absolute inset-0 z-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)]
                ${phase === 'exit' ? '-translate-y-full' : 'translate-y-0'}
            `} style={{ backgroundColor: deepNavy }}>
                {/* Subtle Architectural Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                     style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-md px-10">
                
                {/* Logo Reveal Section */}
                <div className={`
                    flex flex-col items-center transition-all duration-1000 ease-out
                    ${phase === 'enter' ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
                    ${phase === 'exit' ? 'opacity-0 -translate-y-10' : ''}
                `}>
                    {/* The Logo with a White Inversion for the Dark Background */}
                    <img 
                        src={logo} 
                        alt="Shubham Builders" 
                        className="h-20 md:h-24 mb-8 brightness-0 invert object-contain"
                    />
                    
                    <div className="text-center space-y-2">
                        <h2 className="text-white text-[10px] md:text-[11px] tracking-[0.6em] uppercase font-light opacity-80">
                            Engineering Excellence
                        </h2>
                    </div>
                </div>

                {/* Refined Progress Architecture */}
                <div className={`
                    mt-16 w-full transition-all duration-700 delay-300
                    ${phase === 'exit' ? 'opacity-0' : 'opacity-100'}
                `}>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[8px] tracking-[0.4em] text-white/30 uppercase font-bold">Project Loading</span>
                        <span className="font-mono text-[10px] text-white/60 tracking-widest">{Math.round(progress)}%</span>
                    </div>

                    {/* Ultra-thin Minimalist Progress Bar */}
                    <div className="relative h-[1px] w-full bg-white/10">
                        <div 
                            className="absolute left-0 top-0 h-full transition-all duration-500 ease-out"
                            style={{ 
                                width: `${progress}%`, 
                                backgroundColor: brandBlue,
                                boxShadow: `0 0 15px ${brandBlue}`
                            }}
                        />
                    </div>
                </div>

                {/* Location Footer */}
                <div className={`
                    absolute bottom-12 flex gap-8 transition-all duration-1000 delay-500
                    ${phase === 'exit' ? 'opacity-0 translate-y-4' : 'opacity-100'}
                `}>
                    {['KATNI', 'INDORE', 'BHOPAL'].map((city) => (
                        <span key={city} className="text-[9px] tracking-[0.3em] text-white/20 uppercase font-medium">
                            {city}
                        </span>
                    ))}
                </div>
            </div>

            {/* Final "Flash" Curtain - Adds a high-end snap transition to the site */}
            <div className={`
                absolute inset-0 bg-white transition-transform duration-[1000ms] ease-[cubic-bezier(0.85,0,0.15,1)] z-[100]
                ${phase === 'exit' ? 'translate-y-0' : 'translate-y-full'}
            `} />
        </div>
    );
};

export default Preloader;
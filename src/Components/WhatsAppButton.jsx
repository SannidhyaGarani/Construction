import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const [showPopup, setShowPopup] = useState(false);
    const phoneNumber = "918461883444"; // Using the primary number from footer
    const message = "Hello! I'm interested in your construction services. Can we discuss?";

    useEffect(() => {
        // Initial delay before first popup
        const initialTimer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        // Interval to show popup every 5 seconds for a 2-second duration
        const interval = setInterval(() => {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 2000); // Popup stays for 2 seconds
        }, 5000); // Every 5 seconds total cycle (2s show, 3s hide)

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
            {/* Tooltip/Popup */}
            <div 
                className={`
                    bg-white text-[#0e3a40] px-5 py-3 rounded-2xl shadow-2xl border border-stone-100
                    transition-all duration-500 ease-out flex items-center gap-3
                    ${showPopup ? 'opacity-100 translate-y-0 scale-100 translate-x-0' : 'opacity-0 translate-y-4 scale-90 translate-x-4 pointer-events-none'}
                `}
                style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium tracking-tight whitespace-nowrap">Need support? Chat with us</span>
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b border-stone-100" />
            </div>

            {/* Main Button */}
            <button
                onClick={handleClick}
                className="
                    pointer-events-auto
                    relative w-16 h-16 bg-[#25D366] text-white rounded-full 
                    flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)]
                    hover:scale-110 active:scale-95 transition-all duration-300 group
                "
            >
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
                
                <svg 
                    viewBox="0 0 24 24" 
                    width="32" 
                    height="32" 
                    fill="currentColor"
                    className="relative z-10"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                
                {/* Notification dot */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full scale-110 shadow-sm" />
            </button>
        </div>
    );
};

export default WhatsAppButton;

import React, { useState, useEffect } from 'react';
import { MdDesktopWindows, MdSmartphone } from "react-icons/md";

const DesktopToggle = () => {
    const [isDesktopMode, setIsDesktopMode] = useState(false);

    useEffect(() => {
        // Check for saved preference on mount
        const savedMode = localStorage.getItem('desktop-mode-preference') === 'true';
        setIsDesktopMode(savedMode);

        // Apply viewport immediately if saved mode is desktop
        if (savedMode) {
            const metaViewport = document.querySelector('meta[name="viewport"]');
            if (metaViewport) {
                metaViewport.setAttribute('content', 'width=1200');
            }
        }
    }, []);

    const toggleMode = () => {
        const newMode = !isDesktopMode;
        setIsDesktopMode(newMode);
        localStorage.setItem('desktop-mode-preference', newMode);

        // Force a reload to ensure the browser re-renders everything at the correct scale with crisp quality
        window.location.reload();
    };

    return (
        <button
            onClick={toggleMode}
            className="fixed bottom-4 right-4 z-[9999] bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 group"
            title={isDesktopMode ? "Switch to Mobile View" : "Switch to Desktop View"}
        >
            {isDesktopMode ? (
                <MdSmartphone size={24} className="group-hover:scale-110 transition-transform" />
            ) : (
                <MdDesktopWindows size={24} className="group-hover:scale-110 transition-transform" />
            )}
            <span className="sr-only">Toggle Desktop Mode</span>
        </button>
    );
};

export default DesktopToggle;

import React, { useState, useEffect } from 'react';
import { MdDesktopWindows, MdSmartphone } from "react-icons/md";

const DesktopToggle = () => {
    const [isDesktopMode, setIsDesktopMode] = useState(false);

    useEffect(() => {
        // Check initial state or previously saved preference if we wanted to add persistence
        // For now, simpler is better.
    }, []);

    const toggleMode = () => {
        const metaViewport = document.querySelector('meta[name="viewport"]');
        if (!metaViewport) return;

        if (!isDesktopMode) {
            // Switch to Desktop Mode
            // 1150px fits the book (1100px) + margins perfectly
            // This maximizes the content size on the mobile screen for better readability
            metaViewport.setAttribute('content', 'width=1150');
            setIsDesktopMode(true);
        } else {
            // Switch back to Mobile Mode
            metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
            setIsDesktopMode(false);
        }
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

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export default function Tooltip({ 
  content, 
  children, 
  position = "top", 
  delay = 0.2 
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;
    let y = 0;

    switch (position) {
      case "top":
        x = rect.left + rect.width / 2;
        y = rect.top - 8;
        break;
      case "bottom":
        x = rect.left + rect.width / 2;
        y = rect.bottom + 8;
        break;
      case "left":
        x = rect.left - 8;
        y = rect.top + rect.height / 2;
        break;
      case "right":
        x = rect.right + 12; // Adjusted offset for sidebar
        y = rect.top + rect.height / 2;
        break;
    }

    setCoords({ x, y });
    setIsVisible(true);
  };

  const positionStyles = {
    top: "-translate-x-1/2 -translate-y-full",
    bottom: "-translate-x-1/2",
    left: "-translate-x-full -translate-y-1/2",
    right: "-translate-y-1/2",
  };

  const arrowStyles = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-slate-900 border-x-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900 border-x-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-slate-900 border-y-transparent border-r-transparent",
    right: "right-full top-1/2 -translate-y-1/2 border-r-slate-900 border-y-transparent border-l-transparent",
  };

  return (
    <div 
      className="inline-flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {mounted && isVisible && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: position === "top" ? 5 : position === "bottom" ? -5 : 0, x: position === "left" ? 5 : position === "right" ? -5 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15, delay, ease: "easeOut" }}
            style={{ 
              position: 'fixed',
              top: coords.y,
              left: coords.x,
              zIndex: 9999,
              pointerEvents: 'none'
            }}
            className={`px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg shadow-2xl whitespace-nowrap ${positionStyles[position]}`}
          >
            {content}
            <div className={`absolute border-[4px] border-transparent ${arrowStyles[position]}`} />
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

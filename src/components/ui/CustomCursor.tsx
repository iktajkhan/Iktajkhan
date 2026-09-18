import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch-based mobile screens to avoid unwanted desktop cursor effects
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveElement = target.closest('[data-cursor]');
      if (interactiveElement) {
        const text = interactiveElement.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest('a, button, [role="button"], input, textarea')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full transition-colors duration-200"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? (cursorText ? 72 : 44) : 14,
          height: isHovered ? (cursorText ? 72 : 44) : 14,
          backgroundColor: isHovered
            ? 'rgba(218, 0, 55, 0.25)'
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: isHovered ? 'blur(6px)' : 'none',
          border: isHovered
            ? '1.5px solid rgba(218, 0, 55, 0.8)'
            : '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: isHovered
            ? '0 0 20px rgba(218, 0, 55, 0.4)'
            : '0 0 10px rgba(255, 255, 255, 0.6)',
        }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold tracking-widest text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};

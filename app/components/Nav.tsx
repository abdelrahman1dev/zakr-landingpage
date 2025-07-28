// Nav.tsx
"use client";
import React from 'react';
import Cta from './Cta';
import Buttoncomp from './Button';
import { X, Menu } from 'lucide-react';
import Navli from './Navli';
import { useState, useEffect } from 'react';
import Circle from './Circle';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // DoorDash style - triggers after a small scroll (around 50-100px)
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Placeholder div to prevent layout shift - DoorDash approach */}
      <div className="h-[60px] lg:h-[80px]" />
      
      <nav 
        className={`
          fixed top-0 left-0 right-0 w-full z-50
          p-3 lg:py-4 lg:px-20 flex items-center justify-between
          transition-all duration-300 ease-out
          
          ${isScrolled 
            ? 'bg-white shadow-md border-b border-gray-100 '  
            : 'bg-transparent'
          }
        `}
      >
        <div className="font-bold text-primary text-xl z-20000">ZAKR</div>
        
        <div className={`
          flex flex-col absolute top-0 left-0 w-full h-screen p-6 bg-primary-foreground 
          transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
          lg:static lg:h-auto lg:w-[65%] lg:p-0 lg:translate-x-0 lg:flex-row 
          lg:bg-transparent lg:flex lg:items-center lg:justify-between
        `}>
          <ul className="gap-5 mb-10 lg:mb-0 flex flex-col text-left mt-20 lg:flex-row lg:mt-0 lg:gap-8 lg:text-center lg:items-center">
            <Navli title="Home" className="text-primary hover:text-blue-500" />
            <hr className='border-primary w-full lg:hidden' />
            <Navli title="About" className="text-primary hover:text-blue-500" />
            <hr className='border-primary w-full lg:hidden' />
            <Navli title="Services" className="text-primary hover:text-blue-500" />
            <hr className='border-primary w-full lg:hidden' />
            <Navli title="Contact" className="text-primary hover:text-blue-500" />
            <hr className='border-primary w-full lg:hidden' />
          </ul>
          <Cta />
        </div>
        
        <Buttoncomp 
          title="" 
          className="z-1000 lg:hidden bg-transparent cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Buttoncomp>
        
        <Circle className='rounded-es-full w-18 h-18 lg:hidden top-0 right-0 ' />
      </nav>
    </>
  );
};

export default Nav;
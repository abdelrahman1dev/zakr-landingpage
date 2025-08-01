"use client";
import React, { useState, useEffect } from 'react';
import Cta from './Cta';
import Buttoncomp from './Button';
import { X, Menu } from 'lucide-react';
import Navli from './Navli';
import Circle from './Circle';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Detect scroll for sticky nav style
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);
    };

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

  // Scroll spy to detect active section
  useEffect(() => {
    const sectionIds = ['home', 'pricing', 'services', 'contact','FAQs'];

    const handleScrollSpy = () => {
      const scrollY = window.scrollY + 400;

      let current: string | null = null;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <>
      <div className="h-[60px] lg:h-[80px]" />

      <nav
        className={`
          fixed top-0 left-0 right-0 w-full z-50
          p-3 lg:py-4 lg:px-20 flex items-center justify-between lg:justify-start
          transition-all duration-300 ease-out
          ${isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent'}
        `}
      >
        <div className="font-bold text-primary text-xl z-20000 lg:mr-50">ZAKR</div>

        <div
          className={`
            flex flex-col absolute top-0 left-0 w-full h-screen p-6 bg-primary-foreground 
            transition-transform duration-300 
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
            lg:static lg:h-auto lg:p-0 lg:translate-x-0 lg:flex-row 
            lg:bg-transparent lg:flex lg:items-center lg:justify-between lg:gap-10 lg:mt-0 lg:py-0 lg:px-0 lg:w-full 
          `}
        >
          <ul className="gap-5 mb-10 lg:mb-0 text-black flex flex-col text-left mt-20 lg:flex-row lg:mt-0 lg:gap-8 lg:text-center lg:items-center">
            
            <Navli title="Home" href="#home" isActive={activeSection === 'home'} className=" lg:hover:text-blue-500" />
            <hr className="border-primary w-full lg:hidden" />
                <Navli title="Services" href="#services" isActive={activeSection === 'services'} className=" lg:hover:text-blue-500" />
            <hr className="border-primary w-full lg:hidden" />
            <Navli title="Pricing" href="#pricing" isActive={activeSection === 'pricing'} className=" lg:hover:text-blue-500" />
            <hr className="border-primary w-full lg:hidden" />
              <Navli title="FAQs" href="#FAQs" isActive={activeSection === 'FAQs'} className=" lg:hover:text-blue-500" />
            <hr className="border-primary w-full lg:hidden" />
            <Navli title="Contact" href="#contact" isActive={activeSection === 'contact'} className=" lg:hover:text-blue-500" />
            <hr className="border-primary w-full lg:hidden" />
          
          </ul>
          <Cta />
        </div>

        <Buttoncomp
          title=""
          className={`z-1000 lg:hidden bg-transparent cursor-pointer ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Buttoncomp>

        <Circle className={`rounded-es-full w-18 h-18 lg:hidden top-0 right-0 ${isScrolled ? 'hidden' : ''}`} />
      </nav>
    </>
  );
};

export default Nav;

// Nav.tsx
"use client";
import React from 'react';
import Cta from './Cta';
import Buttoncomp from './Button';
import { X, Menu } from 'lucide-react';
import Navli from './Navli';
import { useState } from 'react';
import Circle from './Circle';


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="p-3 lg:py-5 lg:px-20   flex items-center justify-between lg:w-full ">
      <div className="font-bold text-primary text-xl z-20000">ZAKR</div>
      <div className={`  flex flex-col absolute top-0 left-0 w-full h-screen p-6 bg-primary-foreground transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:static  lg:h-auto lg:w-[65%] lg:p-0 lg:translate-x-0 lg:flex-row lg:bg-transparent lg:flex lg:items-center lg:justify-between
      
      `}>
        <ul className="gap-5 mb-10 flex flex-col text-left mt-20 lg:flex-row lg:mt-0 lg:gap-8 lg:text-center lg:items-center">
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
        {/* Bug: Passing icon component instead of string to title prop */}
       
      </div>
        
           <Buttoncomp title="" className="z-1000 lg:hidden bg-transparent cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        
        </Buttoncomp>
        <Circle className='rounded-es-full w-18 h-18  lg:hidden top-0 right-0 '/>
        
    </nav>
  );
};

export default Nav;

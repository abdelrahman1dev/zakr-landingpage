// Cta.tsx
import React from 'react';
import Buttoncomp from './Button';


const Cta = ({className} : {className?: string}) => {
  return (
    
      <Buttoncomp title='register now!' className={`cursor-pointer ${className}`}/>
 
  );
};

export default Cta;

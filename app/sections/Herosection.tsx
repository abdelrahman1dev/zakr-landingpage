import React from 'react';
import Cta from '../components/Cta';
import Circle from '../components/Circle';
import LottiePlayer from '../components/Animtationlottie';
import Buttoncomp from '../components/Button';

const Herosection = () => {
  return (
    <section id='home' className=" -z-10 relative lg:justify-between  py-20 px-6 text-left  lg:px-20 lg:py-0 flex flex-col items-start lg:flex-row lg:items-center lg:w-full">
      <div className='z-100 lg:w-1/2 '>
      <h4 className="text-md  leading-5 font-semibold mb-4 text-primary"> 
        #1 for your academic journey
      </h4>
      <h1 className="leading-10 text-[40px] font-bold mb-4 text-black">
        Master Your Time, <span className='highlight'>Maximize</span> Your <span className='highlight'>Potential</span>.
      </h1>
      <p className="leading-7 text-lg mb-8 text-black">
        Take control of your study life with smart scheduling, visual timelines, and real-time progress tracking — all in one place.
      </p>
            <Buttoncomp className='' title='Explore Now !' />
      <Circle className='absolute rounded-full w-22 h-22 top-20 left-5 -z-10 opacity-50
      lg:top-40 lg:left-23
      '/>
      </div>

      <LottiePlayer />
    </section>
  );


};

export default Herosection;

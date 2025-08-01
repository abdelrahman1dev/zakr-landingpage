import './globals.css';
import Benefits from './sections/Benefits';
import Herosection from './sections/Herosection';
import Pricing from './sections/Pricing';
import TestimonialsSlider from './sections/testomnialsSlider';


export default function Home() {
  return (
    <div className="">
      <Herosection />
      <Benefits className="grid lg:grid-cols-[repeat(4,1fr)]  lg:grid-rows-[repeat(1,1fr)]  grid-cols-2 grid-rows-4 gap-1 lg:gap-2 lg:w-full"/>
      {/* <HowItWorks /> */}
     
      <Pricing />
       <TestimonialsSlider />
    </div>
  );
}

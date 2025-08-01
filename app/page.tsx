import './globals.css';
import Benefits from './sections/Benefits';
import ContactUs from './sections/ContactUs';
import FAQs from './sections/FAQs';
import Herosection from './sections/Herosection';
import Pricing from './sections/Pricing';
import Steps from './sections/Steps';
import TestimonialsSlider from './sections/testomnialsSlider';




export default function Home() {
  return (
    <div >
      <Herosection />
      <Benefits />
      <Steps />
      <Pricing />
       <FAQs />
      <TestimonialsSlider />
     
      <ContactUs />
    </div>
  );
}

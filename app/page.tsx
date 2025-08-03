import './globals.css';
import Benefits from './sections/Benefits';
import ContactUs from './sections/ContactUs';
import FAQs from './sections/FAQs';
import Herosection from './sections/Herosection';
import Pricing from './sections/Pricing';
import TestimonialsSlider from './sections/testomnialsSlider';




export default function Home() {
  return (
    <div >
      <Herosection />
      <Benefits />
      <Pricing />
       <FAQs />
      <TestimonialsSlider />
     
      <ContactUs />
    </div>
  );
}

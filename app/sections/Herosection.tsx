import React from 'react';
import Circle from '../components/Circle';
import LottiePlayer from '../components/Animtationlottie';
import Buttoncomp from '../components/Button';
import FadeInWhenInView from '../components/FadeInWhenInView';
import { useTranslation } from '../hooks/useTranslation';

const Herosection = () => {
  const { t } = useTranslation();
  return (
    <section id='home' className=" -z-10 relative lg:justify-between rtl:text-right  py-20 px-6 text-left  lg:px-20 lg:py-0 flex flex-col items-start lg:flex-row lg:items-center lg:w-full">
      <FadeInWhenInView direction='left' duration={0.8} delay={0.2}>
              <div className='z-100  '>
      <h4 className="text-md leading-5 font-semibold mb-4 text-primary "> 
        {t('landingPage.heroSection.heroSubtitle2')}
      </h4>
      <h1 className="leading-10 text-[40px] font-bold mb-4 text-black">
        {t('landingPage.heroSection.heroTitle')}
      </h1>
      <p className="leading-7 text-lg mb-8 text-black">
        {t('landingPage.heroSection.heroSubtitle')}
      </p>
            <Buttoncomp className='' title={t('landingPage.heroSection.heroButton')} />
      <Circle className='absolute rounded-full w-22 h-22 top-20 ltr:left-5 rtl:right-5  -z-10 opacity-50
      lg:top-40 ltr:lg:left-23
      rtl:lg:right-23
      '/>
      </div>
        </FadeInWhenInView>


      <FadeInWhenInView direction='right' duration={0.8} delay={0.2} >
        <LottiePlayer />
      </FadeInWhenInView>
    </section>
  );


};

export default Herosection;

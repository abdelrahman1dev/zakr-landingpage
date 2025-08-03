import React from 'react'
import CardComponent from '../components/Card'
import 'boxicons/css/boxicons.min.css';
import FadeInWhenInView from '../components/FadeInWhenInView';
import { useTranslation } from '../hooks/useTranslation';

function Pricing() {
  const { t } = useTranslation();
  return (
    <section id='pricing' className='text-left rtl:text-right flex flex-col items-center justify-center py-20 lg:p-20 p-2 bg-gradient-to-b from-blue-100 to-white '>
       <FadeInWhenInView  duration={0.8} delay={0}>
         <h1 className='text-4xl font-bold mb-20 text-black  lg:w-full  '>{t('landingPage.pricingSection.title')}</h1>
       </FadeInWhenInView>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:w-[80%] w-full'>
        <FadeInWhenInView direction='up' duration={0.8} delay={0.2}>
                <CardComponent
            title={t('landingPage.pricingSection.starterPlan.title')}
            description={
                <>
                <p className="text-4xl font-bold mb-4 text-primary ">{t('landingPage.pricingSection.starterPlan.price')}</p>
                <ul className="text-black mb-6 space-y-2 text-left rtl:text-right">
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.starterPlan.features.feature1')}</li>
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.starterPlan.features.feature2')}</li>
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.starterPlan.features.feature3')}</li>
                </ul>
                <button className="bg-primary text-white rtl:text-right px-6 py-2 rounded-full hover:bg-blue-700 transition">{t('landingPage.pricingSection.starterPlan.buttonText')}</button>
                </>
            }
            bg='bg-white border border-primary shadow-lg hover:shadow-xl text-black transition-transform transform hover:scale-105 text-left rtl:text-right cursor pointer'
            />
        </FadeInWhenInView>
        <FadeInWhenInView direction='up' duration={0.8} delay={0.4}>  
                      <CardComponent
            title={t('landingPage.pricingSection.premiumPlan.title')}
            description={
                <>
                <p className="text-4xl font-bold mb-4 ">
                    {t('landingPage.pricingSection.premiumPlan.price')}
                </p>
                <ul className=" mb-6 space-y-2 text-left rtl:text-right">
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.premiumPlan.features.feature1')}</li>
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.premiumPlan.features.feature2')}</li>
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.premiumPlan.features.feature3')}</li>
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.premiumPlan.features.feature4')}</li>
                </ul>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">{t('landingPage.pricingSection.premiumPlan.buttonText')}</button>
                </>
            }
            bg=' border border-primary rtl:text-right shadow-lg hover:shadow-xl text-white transition-transform transform hover:scale-105 text-left bg-gradient-to-br from-primary to-card lg:scale-105 cursor pointer'
            />  
            </FadeInWhenInView>
        <FadeInWhenInView direction='up' duration={0.8} delay={0.6}>
                        <CardComponent
            title={t('landingPage.pricingSection.elitePlan.title')}
            description={
                <>
                <p className="text-4xl font-bold mb-4 text-primary">
                    {t('landingPage.pricingSection.elitePlan.price')}
                </p>
                <ul className="text-black mb-6 space-y-2 text-left rtl:text-right">
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.elitePlan.features.feature1')}</li>
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.elitePlan.features.feature2')}</li>
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.elitePlan.features.feature3')}</li>
                    <li><i className='bx bx-check-circle'></i>  {t('landingPage.pricingSection.elitePlan.features.feature4')}</li>
                </ul>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">{t('landingPage.pricingSection.elitePlan.buttonText')}</button>
                </>
            }
            bg='bg-white border border-primary rtl:text-right shadow-lg hover:shadow-xl text-black transition-transform transform hover:scale-105 text-left  cursor pointer'
            />
            </FadeInWhenInView>

        </div>
           <h4 className="text-sm  leading-5 font-semibold my-6 text-primary "> 
       {t('landingPage.pricingSection.specialDiscount')} <a href="#" className="text-blue-500 underline ">{t('landingPage.pricingSection.learnMore')}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-up-right-icon lucide-square-arrow-up-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 8h8v8"/><path d="m8 16 8-8"/></svg></a>

      </h4>

    </section>
  )
}

export default Pricing

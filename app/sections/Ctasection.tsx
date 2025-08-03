import React from 'react'
import Cta from '../components/Cta';
import { useTranslation } from '../hooks/useTranslation';

function Ctasection() {
  const { t } = useTranslation();
  return (
    <section className='text-left rtl:text-right w-[80%] mx-auto flex flex-col items-start  justify-center py-20 lg:p-20 p-5  bg-card rounded-4xl my-5' id='contact'>
      <h4 className='text-sm text-white opacity-30'>{t('landingPage.ctaSection.subtitle')}</h4>
      <h1 className='text-4xl font-bold mb-2 text-white'>{t('landingPage.ctaSection.title')}</h1>
      <p className='text-muted-foreground text-sm mb-5'>
        {t('landingPage.ctaSection.description')}
      </p>

      <div className='flex items-center gap-3'>
        <Cta />
        <Cta variant='outline' title={t('landingPage.ctaSection.learnMoreButton')}/>
      </div>

    </section>
  )
}

export default Ctasection;

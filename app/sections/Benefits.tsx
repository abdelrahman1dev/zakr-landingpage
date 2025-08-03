// Benefits.tsx
import React from 'react'
import CardComponent from '../components/Card'
import { features } from '../constants/features'
import Cta from '../components/Cta'
import FadeInWhenInView from '../components/FadeInWhenInView'
import { useTranslation } from '../hooks/useTranslation'

function Benefits() {
  const { t } = useTranslation();


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12" id='services rtl:text-right'>
      <FadeInWhenInView direction='left' duration={0.8} delay={0} >
        <h2 className=" text-black text-4xl font-bold mb-12 text-left rtl:text-right">{t('landingPage.benefitsSection.title')}</h2>
      </FadeInWhenInView>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(220px,_auto)]">
  {features.map((feature, index) => (
    <div
      key={feature.id}
      className={`
        ${index === 0 ? 'sm:col-span-2 lg:col-span-2 ' : ''}
        w-full h-full
      `}
    >
      <FadeInWhenInView direction='up' duration={0.8} delay={index * 0.2} className={`h-full`}>
              <CardComponent
        title={t(`landingPage.benefitsSection.features.${feature.id}.title`)}
        description={t(`landingPage.benefitsSection.features.${feature.id}.description`)}
        icon={feature.icon}

        className={`min-h-[220px] h-full ${index === 0 ? 'bg-card ' : ''}`}
      >
        {feature.showCta && (
          <div className="mt-6">
            <Cta className='' />
          </div>
        )}
      </CardComponent>
      </FadeInWhenInView>
    </div>
  ))}
</div>

    </section>
  )
}

export default Benefits

// Benefits.tsx
import React from 'react'
import CardComponent from '../components/Card'
import { features } from '../constants/features'
import Cta from '../components/Cta'

function Benefits({ className = '' }: { className?: string }) {


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
      <h2 className=" text-black text-4xl font-bold mb-12 text-left">Why Choose <span className="highlight">This</span> System?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(220px,_auto)]">
  {features.map((feature, index) => (
    <div
      key={feature.id}
      className={`
        ${index === 0 ? 'sm:col-span-2 lg:col-span-2 ' : ''}
        w-full h-full
      `}
    >
      <CardComponent
        title={feature.title}
        description={feature.description}
        icon={feature.icon}

        className={`min-h-[220px] h-full ${index === 0 ? 'bg-card ' : ''}`}
      >
        {feature.showCta && (
          <div className="mt-6">
            <Cta className='' />
          </div>
        )}
      </CardComponent>
    </div>
  ))}
</div>

    </section>
  )
}

export default Benefits

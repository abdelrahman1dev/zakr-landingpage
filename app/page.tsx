'use client'

import './globals.css'
import { useEffect } from 'react'
import { useTranslation } from './hooks/useTranslation'
import Benefits from './sections/Benefits'
import ContactUs from './sections/Ctasection'
import FAQs from './sections/FAQs'
import Herosection from './sections/Herosection'
import Pricing from './sections/Pricing'
import TestimonialsSlider from './sections/testomnialsSlider'


export default function Home() {
  const { locale, isRTL, loading } = useTranslation()

  // Update document direction and language
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  }, [locale, isRTL])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className={isRTL ? 'font-arabic' : ''}>
      {/* Language Switcher - Fixed position */}
    
   

      {/* Your existing sections */}
      <Herosection />
      <Benefits />
      <Pricing />
      <FAQs />
      <TestimonialsSlider />
      <ContactUs />
    </div>
  )
}
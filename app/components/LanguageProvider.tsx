"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface TranslationData {
  landingPage: {
    metadata: {
      title: string
      description: string
    }
    navbar: {
      logo: string
      home: string
      Services: string
      Pricing: string
      FAQs: string
      Contact: string
    }
    heroSection: {
      heroTitle: string
      heroSubtitle: string
      heroSubtitle2: string
      heroButton: string
    }
    benefitsSection: {
      title: string
      features: Record<string, { title: string; description: string }>
    }
    pricingSection: {
      title: string
      starterPlan: {
        title: string
        price: string
        features: Record<string, string>
        buttonText: string
      }
      premiumPlan: {
        title: string
        price: string
        features: Record<string, string>
        buttonText: string
      }
      elitePlan: {
        title: string
        price: string
        features: Record<string, string>
        buttonText: string
      }
      specialDiscount: string
      learnMore: string
    }
    faqSection: {
      title: string
      questions: Record<string, { question: string; answer: string }>
    }
    ctaSection: {
      subtitle: string
      title: string
      description: string
      registerButton: string
      learnMoreButton: string
    }
    testimonialSection: {
      title: string
      reviews: Record<string, { name: string; review: string }>
    }
  }
}

interface LanguageContextProps {
  locale: 'en' | 'ar'
  changeLanguage: (locale: 'en' | 'ar') => void
  translations: TranslationData
  loading: boolean
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'ar'>('en')
  const [translations, setTranslations] = useState<TranslationData>({} as TranslationData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTranslations = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/locales/${locale}.json`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error('Failed to load translations:', error)
      } finally {
        setLoading(false)
      }
    }
    loadTranslations()
  }, [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const changeLanguage = (newLocale: 'en' | 'ar') => setLocale(newLocale)

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, translations, loading, isRTL: locale === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
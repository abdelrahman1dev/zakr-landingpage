"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LanguageContextProps {
  locale: 'en' | 'ar'
  changeLanguage: (locale: 'en' | 'ar') => void
  translations: any
  loading: boolean
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'ar'>('en')
  const [translations, setTranslations] = useState<any>({})
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
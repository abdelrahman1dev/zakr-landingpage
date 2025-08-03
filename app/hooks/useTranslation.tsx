import { useLanguage } from '../components/LanguageProvider'

export const useTranslation = () => {
  const { locale, changeLanguage, translations, loading, isRTL } = useLanguage()

  const t = (key: string): string => {
    if (!translations) {
      return key
    }

    const keys = key.split('.')
    let currentValue: unknown = translations
    
    for (const keyPart of keys) {
      if (currentValue && 
          typeof currentValue === 'object' && 
          currentValue !== null &&
          keyPart in currentValue) {
        currentValue = (currentValue as Record<string, unknown>)[keyPart]
      } else {
        return key // Return the original key if path doesn't exist
      }
    }
    
    return typeof currentValue === 'string' ? currentValue : key
  }

  return {
    t,
    locale,
    changeLanguage,
    loading,
    isRTL
  }
}
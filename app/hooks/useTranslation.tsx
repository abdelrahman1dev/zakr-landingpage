import { useLanguage } from '../components/LanguageProvider'

export const useTranslation = () => {
  const { locale, changeLanguage, translations, loading, isRTL } = useLanguage()

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }
    return typeof value === 'string' ? value : key
  }

  return {
    t,
    locale,
    changeLanguage,
    loading,
    isRTL
  }
}
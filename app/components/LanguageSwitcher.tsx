import { useTranslation } from '../hooks/useTranslation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const LanguageSwitcher = ( {classname = ""}) => {
  const { locale, changeLanguage } = useTranslation()

  return (
    <div className={` ${classname}`}>
      <Select value={locale} onValueChange={changeLanguage}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="ar">AR</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default LanguageSwitcher
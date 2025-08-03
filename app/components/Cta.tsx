// Cta.tsx
import React from 'react';
import Buttoncomp from './Button';
import { useTranslation } from '../hooks/useTranslation';


const Cta = ({className , variant , title} : {className?: string, variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link', title?: string}) => {
  const { t } = useTranslation();
  return (

      <Buttoncomp title={title || t('landingPage.ctaSection.registerButton')} className={`cursor-pointer ${className}`} variant={variant} />

  );
};

export default Cta;

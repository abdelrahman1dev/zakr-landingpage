import { Button } from '@/components/ui/button';
import React, { ReactNode } from 'react';


type MyComponentProps = {
  title: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
};

const Buttoncomp = ({ title, className = '', onClick, variant = 'default', children }: MyComponentProps) => {
  return (
    <Button
      className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${variant === 'outline' ? 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white' : 'bg-primary text-white hover:bg-blue-700'} ${className}`}
      onClick={onClick}
      variant={variant}
    >
      {children || title}
    </Button>
  );
};

export default Buttoncomp;
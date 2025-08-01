import { Button } from '@/components/ui/button';
import React, { ReactNode } from 'react';


type MyComponentProps = {
  title: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Buttoncomp = ({ title, className, children, onClick }: MyComponentProps) => {
  return (
    <Button className={`${className} hover:opacity-55 cursor-pointer`} onClick={onClick}>
      {children ? children : title}
    </Button>
  );
};

export default Buttoncomp;
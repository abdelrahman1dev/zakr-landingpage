import React from 'react'


interface NavliProps {  
    title: string;
    className?: string;
    children?: React.ReactNode;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
    

}

function Navli({ title, className, children, href, onClick, isActive }: NavliProps) {
  return (
    <li className={className}  >
      <a href={href} onClick={onClick} className={isActive ? 'text-blue-500' : ''} >{title}</a>
      {children}
    </li>
  )
}



export default Navli

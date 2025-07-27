import React from 'react'


interface NavliProps {  
    title: string;
    className?: string;
    children?: React.ReactNode;
    

}

function Navli({ title, className, children }: NavliProps) {
  return (
    <li className={className}  >
      <a href="#" >{title}</a>
      {children}
    </li>
  )
}



export default Navli

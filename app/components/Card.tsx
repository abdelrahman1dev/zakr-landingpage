import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
  className?: string;
  title: string;
  description: React.JSX.Element | string;
  SVG?: React.ReactNode;
  bg: string;
  children?:  React.JSX.Element;
}

function CardComponent({className, title, description ,SVG, bg, children} : CardProps) {
  return (
    <div className={className}>
      <Card className={`border-white   ${bg}`}>
        <CardHeader>
            <CardAction className='text-white hover:text-gray-200'>
            {SVG }
            </CardAction>
          <CardTitle className=''>{title}</CardTitle>
        </CardHeader>
        <CardContent className=''>
          <CardDescription  className=''>{description}</CardDescription>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}

export default CardComponent

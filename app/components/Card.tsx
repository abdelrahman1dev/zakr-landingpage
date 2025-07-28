import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
  className?: string;
  title: string;
  description: string;
  SVG?: React.ReactNode;
  bg: string;
  children?:  React.JSX.Element;
}

function CardComponent({className, title, description ,SVG, bg, children} : CardProps) {
  return (
    <div className={className}>
      <Card className={`border-white h-43  ${bg}`}>
        <CardHeader>
            <CardAction className='text-white hover:text-gray-200'>
            {SVG }
            </CardAction>
          <CardTitle className=''>{title}</CardTitle>
        </CardHeader>
        <CardContent className='max-w-sm'>
          <CardDescription >{description}</CardDescription>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}

export default CardComponent

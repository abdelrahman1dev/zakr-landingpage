// CardComponent.tsx
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardProps {
  className?: string;
  title: string;
  description: React.JSX.Element | string;
  icon?: React.ComponentType<{ className?: string }>; // ✅ Correct type for Lucide icons
  variant?: 'default' | 'featured';
  children?: React.ReactNode;
  bg?: string;
}

function CardComponent({
  className = '', 
  title, 
  description, 
  icon: IconComponent, // ✅ Destructure and rename
  variant = 'default',
  children,
  bg = ''
}: CardProps) {
  
  const baseStyles = "group border-0 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2";
  
  const variantStyles = {
    default: "bg-gradient-to-br from-primary to-primary/80 text-white min-h-[280px] sm:min-h-[300px]",
    featured: "bg-gradient-to-br from-primary via-primary/90 to-card text-white min-h-[320px] sm:min-h-[360px]"
  };
  
  return (
    <Card className={`${baseStyles} ${variantStyles[variant]} ${bg} ${className}`}>
      <CardHeader className="pb-4">
        {IconComponent && (
          <div className="w-12 h-12 mb-4 p-2.5 bg-white/20 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
            <IconComponent className="w-full h-full text-white" /> {/* ✅ Render as component */}
          </div>
        )}
        <CardTitle className="text-xl sm:text-2xl font-bold leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
          {description}
        </CardDescription>
        {children}
      </CardContent>
    </Card>
  )
}

export default CardComponent
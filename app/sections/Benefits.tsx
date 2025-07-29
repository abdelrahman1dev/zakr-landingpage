import React from 'react'
import CardComponent from '../components/Card'
import Cta from '../components/Cta'

function Benefits({className} : {className?: string}) {
  return (
    <div className='lg:px-20 px-2 py-8 w-full flex flex-col items-center justify-center'>
      <h1 className='text-5xl p-2 font-bold mb-4 text-black '> Why choose <span className='highlight'>this</span> system?</h1>
      <div className={`${className}`}>
        
        <CardComponent bg='h-45' className="div1 " title='Smart Time Tracking' 
        description='Automatically logs your study hours and helps you identify your most productive times.'
        SVG={<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF" strokeWidth="1.5">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6L11.25 12C11.25 12.4142 11.5858 12.75 12 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H12.75L12.75 6Z" fill="#FFFFFF"></path>
        </svg>}> 
          <Cta className='my-3'/>
        </CardComponent>

        <CardComponent className="div2 " bg='bg-gradient-to-br h-45 from-primary to-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1' title='Intelligent Insights' description='Provides personalized insights and recommendations.'
        SVG={<svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
          <path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35064 20 7.68722 19.9398 8 19.8293" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M4.26392 15.6046C2.9243 14.9582 2.00004 13.587 2.00004 12C2.00004 10.7883 2.53877 9.70251 3.38978 8.96898" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3.42053 8.8882C3.1549 8.49109 3 8.01363 3 7.5C3 6.11929 4.11929 5 5.5 5C6.06291 5 6.58237 5.18604 7.00024 5.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M7.23769 5.56533C7.08524 5.24215 7 4.88103 7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12 7C12 8.65685 13.3431 10 15 10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M17 14C18.6569 14 20 15.3431 20 17C20 18.6569 18.6569 20 17 20C16.6494 20 16.3128 19.9398 16 19.8293" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M19.7361 15.6046C21.0757 14.9582 22 13.587 22 12C22 10.7883 21.4612 9.70251 20.6102 8.96898" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M20.5795 8.8882C20.8451 8.49109 21 8.01363 21 7.5C21 6.11929 19.8807 5 18.5 5C17.9371 5 17.4176 5.18604 16.9998 5.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C17 4.88103 16.9148 5.24215 16.7623 5.56533" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M16 20C16 21.1046 15.1046 22 14 22C12.8954 22 12 21.1046 12 20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>}
        />

        <CardComponent className="div3 " bg='bg-gradient-to-br h-45 from-primary to-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1' title='Seamless Integration' description='Integrates with your favorite tools and platforms for a smooth workflow.'
        SVG={<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5">
          <rect width="7" height="5" rx="0.6" transform="matrix(0 -1 -1 0 22 21)" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1.5"></rect>
          <rect width="7" height="5" rx="0.6" transform="matrix(0 -1 -1 0 7 15.5)" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1.5"></rect>
          <rect width="7" height="5" rx="0.6" transform="matrix(0 -1 -1 0 22 10)" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1.5"></rect>
          <path d="M17 17.5H13.5C12.3954 17.5 11.5 16.6046 11.5 15.5V8.5C11.5 7.39543 12.3954 6.5 13.5 6.5H17" stroke="#FFFFFF" strokeWidth="1.5"></path>
          <path d="M11.5 12H7" stroke="#FFFFFF" strokeWidth="1.5"></path>
        </svg>}
        />

        <CardComponent className="div4 " bg='bg-gradient-to-br h-45 from-primary to-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1' title='Collaborative Features' description='Facilitates group study sessions and collaboration with peers.'
        SVG={<svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
          <path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M13 14V14C13 11.2386 15.2386 9 18 9V9C20.7614 9 23 11.2386 23 14V14.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>}
        />

        <CardComponent className="div5 " bg='bg-gradient-to-br h-45 from-primary to-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1' title='Customizable Dashboard' description='Offers a customizable dashboard.'
        SVG={<svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
          <path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>}
        />

        <CardComponent className="div6 " bg='bg-gradient-to-br h-45 from-primary to-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1' title='Robust Security' description='Ensures your data is protected with industry-leading security measures.'
        SVG={<svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
          <path d="M13 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M2 7L22 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5 5.01L5.01 4.99889" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M8 5.01L8.01 4.99889" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M11 5.01L11.01 4.99889" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M18.9923 14.125L21.5477 14.774C21.8137 14.8416 22.0013 15.0833 21.9931 15.3576C21.8214 21.1159 18.5 22 18.5 22C18.5 22 15.1786 21.1159 15.0069 15.3576C14.9987 15.0833 15.1863 14.8416 15.4523 14.774L18.0077 14.125C18.3308 14.043 18.6692 14.043 18.9923 14.125Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>}
        />

      </div>
    </div>
  )
}

export default Benefits
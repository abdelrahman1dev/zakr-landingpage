import React from 'react'
import CardComponent from '../components/Card'
import 'boxicons/css/boxicons.min.css';

function Pricing() {
  return (
    <div className='text-center flex flex-col items-center justify-center py-20 lg:p-20 p-2 bg-gradient-to-b from-blue-100 to-white '>
        <h1 className='text-4xl font-bold mb-10 text-black  lg:w-full w-[80%] '>choose the right plan for you</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:w-[80%] w-full'>
            <CardComponent
            title='starter'
            description={
                <>
                <p className="text-4xl font-bold mb-4 text-primary">Free</p>
                <ul className="text-black mb-6 space-y-2 text-left">
                    <li><i className='bx bx-check-circle'></i>  Access to basic courses</li>
                    <li><i className='bx bx-check-circle'></i>  Community forum</li>
                    <li><i className='bx bx-check-circle'></i>  Mobile-friendly learning</li>
                </ul>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Get Started</button>
                </>
            }
            bg='bg-white border border-primary shadow-lg hover:shadow-xl text-black transition-transform transform hover:scale-105 text-left cursor pointer'
            />
            <CardComponent
            title='Premium Plan'
            description={
                <>
                <p className="text-4xl font-bold mb-4 ">
                    $5.99<span className="text-base font-normal">/mo</span>
                </p>
                <ul className=" mb-6 space-y-2 text-left">
                    <li><i className='bx bx-check-circle'></i>  All Starter features</li>
                    <li><i className='bx bx-check-circle'></i>  Quizzes & certifications</li>
                    <li><i className='bx bx-check-circle'></i>  Live classes & replays</li>
                    <li><i className='bx bx-check-circle'></i>  Progress tracking dashboard</li>
                </ul>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Upgrade Now</button>
                </>
            }
            bg=' border border-primary shadow-lg hover:shadow-xl text-white transition-transform transform hover:scale-105 text-left bg-gradient-to-br from-primary to-card lg:scale-105 cursor pointer'
            />
            <CardComponent
            title='Elite Plan' 
            description={
                <>
                <p className="text-4xl font-bold mb-4 text-primary">
                    $9.99
                    <span className="text-base font-normal">/mo</span>
                </p>
                <ul className="text-black mb-6 space-y-2 text-left">
                    <li><i className='bx bx-check-circle'></i>  All Premium features</li>
                    <li><i className='bx bx-check-circle'></i>  Personalized mentorship</li>
                    <li><i className='bx bx-check-circle'></i> Exclusive webinars</li>
                    <li><i className='bx bx-check-circle'></i>  Offline downloads</li>
                </ul>
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Go Elite</button>
                </>
            }
            bg='bg-white border border-primary shadow-lg hover:shadow-xl text-black transition-transform transform hover:scale-105 text-left  cursor pointer'
            />
        </div>
           <h4 className="text-sm  leading-5 font-semibold my-6 text-primary "> 
       Special discounts available for schools & institutions <a href="#" className="text-blue-500 underline ">learn more <i className="fa-regular fa-arrow-up-right-from-square"></i>
       </a>

      </h4>

    </div>
  )
}

export default Pricing

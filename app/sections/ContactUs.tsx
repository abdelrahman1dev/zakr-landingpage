import React from 'react'

function ContactUs() {
  return (
    <section className='text-left w-[80%] mx-auto flex flex-col items-start lg:items-center justify-center py-20 lg:p-20 p-5  bg-card rounded-4xl my-5' id='contact'>
      <h1 className='text-4xl font-bold mb-2 text-white'>Wanna get in touch?</h1>
      <p className=' text-lg mb-3 text-white highlight'>enter your email here!</p>
      <form className='w-full max-w-md'>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-300'>Email</label>
          <input type='email' placeholder='example@mail.com' id='email' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
        </div>
        <button type='submit' className='bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition'>Send Message</button>
      </form>
    </section>
  )
}

export default ContactUs

import React from 'react'

const Landing = () => {
  return (
    <section className='relative z-0'>
       <div className='flex sm:flex-col md:flex-row  justify-between items-center'>
        <div className='flex flex-col gap-6 p-4 h-screen justify-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='lg:text-7xl text-3xl font-bold'>Shop Smarter</h1>
            <h2 className='lg:text-6xl text-3xl text-green-500 font-bold'>Save More</h2>
          </div>

          <p>
            Track grocery prices, scan barcodes, and never miss a <br /> deal. Your personal shopping assistant for smarter <br /> grocery decisions.
          </p>

          <div className='flex gap-4'>
            <button className='p-2 bg-black text-white rounded-lg font-semibold focus:opacity-75 cursor-pointer'>Start Shopping</button>
            <button className='p-2 border border-gray-300 rounded-lg focus:bg-gray-200 cursor-pointer'>Learn More</button>
          </div>
          
        </div>

        <div className='w-1/2  '>
        <div className='hidden lg:inline-block w-full h-30'>

        </div>
         <div className='h-screen'>
           <img className='h-full w-[90%] object-cover rounded-2xl' src="/images/landing-image.jpg" alt="" />
         </div>
        </div>
       </div>
    </section>
  )
}

export default Landing
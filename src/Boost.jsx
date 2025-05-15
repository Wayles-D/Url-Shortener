import React from 'react'
import bgDesktop from '../images/bg-boost-desktop.svg'
import bgMobile from '../images/bg-boost-mobile.svg'

const Boost = () => {
  return (
    <>
   <section className='bg-[url(../images/bg-boost-mobile.svg)] bg-[#3A3053] bg-no-repeat bg-cover bg-center lg:bg-[url(../images/bg-boost-desktop.svg)] flex flex-col items-center justify-center text-center py-10 lg:py-20'>
    <h2 className='mb-5 poppins-bold text-2xl md:text-4xl text-white'>Boost your links today</h2>
    <button className='rounded-full poppins-bold text-white bg-[#2BD1D1] hover:bg-[#9be3e2] h-10 w-35 md:w-40'>Get Started</button>
   </section>
    </>
  )
}

export default Boost
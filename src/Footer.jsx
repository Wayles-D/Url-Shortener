import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <>
    <footer className='bg-[#232027] py-5 lg:py-20 '>
        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 text-center md:text-left'>
            <article className='flex flex-col items-center md:items-start'>
                <img className='invert brightness-0' src={logo} alt="web-logo" />
            </article>

            <article>
               <h3 className='tracking-wide text-white text-lg poppins-bold '>Features</h3>
               <ul>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Link Shortening</button></li>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Branded Links</button></li>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Analytics</button></li>
               </ul> 
            </article>

            <article>
               <h3 className='tracking-wide text-white text-lg poppins-bold'>Resources</h3>
               <ul>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Link Shortening</button></li>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Branded Links</button></li>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Analytics</button></li>
               </ul> 
            </article>

            <article>
               <h3 className='tracking-wide text-white text-lg poppins-bold'>Company</h3>
               <ul>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">About</button></li>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Our Team</button></li>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Careers</button></li>
                <li><button className="text-[#A7A4AA] hover:text-[#2BD1D1] hover:cursor-pointer mt-1">Contact</button></li>
               </ul> 
            </article>

            <article className='flex flex-col items-center md:items-start'>
                <ul className="flex gap-4">
                    <li><img className='hover:icon-hover' src={facebook} alt="facebook-logo" /></li>
                    <li><img className='hover:icon-hover' src={twitter} alt="twitter-logo" /></li>
                    <li><img className='hover:icon-hover' src={pinterest} alt="pinterest-logo" /></li>
                    <li><img className='hover:icon-hover' src={instagram} alt="instagram-logo" /></li>
                </ul>
            </article>
        </div>
    </footer>
    </>
  )
}

export default Footer
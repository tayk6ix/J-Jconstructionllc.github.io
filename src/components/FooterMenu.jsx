import React from 'react'
import Link from 'next/link'

const FooterMenu = () => {
  return (
    <nav className=' desktop:mt-0 grid grid-cols-2 grid-flow-auto gap-[2%] w-full'>
      <div className='text-white'>
        <h2 className='font_h2 font-medium'>Services</h2>
        <div className='grid grid-cols-2 grid-flow-auto my-[5%]'>
          <span className='line1'></span>
          <span className='line2'></span>
        </div>
        <ul className='font_small font-light flex flex-col gap-2'>
          <li className='footerItem'>
            <Link href='/services#Siding'>Siding</Link>
          </li>
          <li className='footerItem'>
            <Link href='/services#Roofing'>Roofing</Link>
          </li>
          <li className='footerItem'>
            <Link href='/services#Framing'>Framing</Link>
          </li>
          <li className='footerItem'>
            <Link href='/services#Drywall'>Drywall</Link>
          </li>
        </ul>
      </div>
      <div className='text-white'>
        <h2 className='font_h2 font-medium'>Company</h2>
        <div className='grid grid-cols-2 grid-flow-auto my-[5%]'>
          <span className='line1'></span>
          <span className='line2'></span>
        </div>
        <ul className='font_small font-light flex flex-col gap-2 '>
          <li  className='footerItem'>
            <Link href='#aboutUs'>About Us</Link>
          </li>
          <li className='footerItem'>
            <Link href='#How'>How it works</Link>
          </li>
          <li className='footerItem'>
            <Link href='/contactUs'>Contact Us</Link>
          </li>
          <li className='footerItem'>
            <Link href='/gallery'>Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default FooterMenu
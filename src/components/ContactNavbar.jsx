import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const ContactNavbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)    
}

  return (
    <div className='top-0 bg-transparent h-[10vh] overall-padding flex justify-between items-center z-[3]'>

        <Link href='/' className='w-1/4 max-w-[13rem]'>
            <img className='h-full' src="/LOGO.png" alt="Logo" />
        </Link>

        {/* mobile and tablet button */}
        <div className='flex flex-row items-center gap-12'>
          <div className='desktop:hidden z-[5]'>
              {nav
              ? (
                <button onClick={handleNav} className='p-2'>
                      <FontAwesomeIcon icon={faXmark} size='xl' style={{color: "#ffffff",}} />
                  </button>
              ) : (
                <button 
                onClick={handleNav} className='p-2'>
                      <FontAwesomeIcon icon={faBars} size='xl' style={{color: "#ffffff",}} />
                  </button>
              )}
          </div>
          <ul className='hidden desktop:flex flex-row text-white gap-14 font_small ' >
            <li className='ease-in duration-300 hover:text-[#042956] hover:text-[21px]' ><Link href='/'>Home</Link></li>
            <li className='ease-in duration-300 hover:text-[#042956] hover:text-[21px]'><Link href='/#aboutUs'>About Us</Link></li>
            <li className='ease-in duration-300 hover:text-[#042956] hover:text-[21px]'><Link href='/services'>Services</Link></li>
            <li className='ease-in duration-300 hover:text-[#042956] hover:text-[21px]'><Link href='/gallery'>Gallery</Link></li>
          </ul>
          <Link className='hidden tablet:block contact_us2_focused cursor-default ' href='/contactUs'>Contact Us</Link>
        </div>
        <ul
          className={
            nav
              ? 'desktop:hidden tablet:w-3/4 fixed inset-0 flex flex-col w-full h-screen bg-whte font_medium_large ease-in duration-300 z-[4] orangeBG text-white overall-padding pt-[25%]'
              : 'desktop:hidden tablet:w-3/4 fixed top-0 left-[-100%] right-0 bottom-0 flex flex-col w-full h-screen orangeBG font_medium_large ease-in duration-300 z-[4] text-white overall-padding pt-[25%]'
          }
        >
            <li onClick={handleNav} className='p-4 mobileListBorder '>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 mobileListBorder'>
              <Link href='/#aboutUs'>About Us</Link>
            </li>
            <li onClick={handleNav} className='p-4 mobileListBorder'>
              <Link href='/services'>Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 mobileListBorder'>
              <Link href='/gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className=' mt-10 w-full flex px-[10%]'>
              <Link className='w-full contact_us2_focused cursor-default self-center text-center tablet:hidden'  href='/contactUs'>Contact Us</Link>
            </li>
          </ul>
        </div>
  )
}

export default ContactNavbar
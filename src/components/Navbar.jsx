import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import logoImage from 'public/Static/LOGO.png'

const Navbar = () => {
const [nav, setNav] = useState(false)
const [currentPageHover, setcurrentPageHover] = useState('currentTab')
const [otherPages, setotherPages] = useState('')

const changeCurrentPageHover = () => {
  if (currentPageHover === 'currentTab') {
    setcurrentPageHover('')
  }
  else{
    setcurrentPageHover('currentTab')
  }
}

const handleNav = () => {
    setNav(!nav)    
}

  return (
    <nav className='bg-transparent h-[10vh] overall-padding flex justify-between items-center z-[3]'>

        <Link aria-label='Link to Home' href='/' className='min-w-[147px] w-1/4 max-w-[13rem] max-h-[10vh]'>
            <Image
              src={logoImage}
              alt='J&J Construction, LLC Logo'
              placeholder='blur'
              // priority
              // quality={100}
              sizes='(min-width: 600px) 20vw, (min-width: 1200px) 15vw, 25vw'
            />
        </Link>

        

        {/* mobile and tablet button */}
        <section className='flex flex-row items-center gap-12'>
          <Link aria-label='Link to J&J Construction LLC Instagram account'className='border orangeBorder' href='https://www.instagram.com/jnjconstruction2020/'>
              <FontAwesomeIcon size='2xl' key={1} icon={faInstagramSquare} style={{color: "#FFFFFF",}} /> 
          </Link>
          <div className='desktop:hidden z-[5]'>
              {nav
              ? (
                <button aria-label='Close Mobile Menu' onClick={handleNav} className='p-2'>
                      <FontAwesomeIcon icon={faXmark} size='xl' style={{color: "#ffffff",}} />
                  </button>
              ) : (
                <button aria-label='Open Mobile Menu' 
                onClick={handleNav} className='p-2'>
                      <FontAwesomeIcon icon={faBars} size='xl' style={{color: "#ffffff",}} />
                  </button>
              )}
          </div>
          <ul className='hidden desktop:flex flex-row text-white gap-14 font_small ' >
            <li onClick={changeCurrentPageHover} className={` ${currentPageHover} ease-in duration-300 hover:text-[#042956] hover:text-[21px]`} >
              <Link aria-label='Link to Home' href='/'>Home</Link>
            </li>
            <li onClick={changeCurrentPageHover} className= {`${currentPageHover} ease-in duration-300 hover:text-[#042956] hover:text-[21px]`}>
              <Link aria-label='Link to About Us' href='#aboutUs'>About Us</Link>
            </li>
            <li onClick={changeCurrentPageHover} className= {`${currentPageHover} ease-in duration-300 hover:text-[#042956] hover:text-[21px]`}>
              <Link aria-label='Link to Services' href='/services'>Services</Link>
            </li>
            <li onClick={changeCurrentPageHover} className= {`${currentPageHover} ease-in duration-300 hover:text-[#042956] hover:text-[21px]`}>
              <Link aria-label='Link to Gallery' href='/gallery'>Gallery</Link>
            </li>
          </ul>
          <Link aria-label='Link to Contact Us' className='hidden tablet:block contact_us2 ' href='/contactUs'>Contact Us</Link>
        </section>
        <ul
          className={
            nav
              ? 'desktop:hidden tablet:w-3/4 fixed inset-0 flex flex-col w-full h-screen bg-whte font_medium_large ease-in duration-300 z-[4] orangeBG text-white overall-padding pt-[25%]'
              : 'desktop:hidden tablet:w-3/4 fixed top-0 left-[-100%] right-0 bottom-0 flex flex-col w-full h-screen orangeBG font_medium_large ease-in duration-300 z-[4] text-white overall-padding pt-[25%]'
          }
        >
            <li onClick={handleNav} className='p-4 mobileListBorder currentTab'>
              <Link aria-label='Link to Home' href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 mobileListBorder'>
              <Link aria-label='Link to About Us' href='/#abutUs'>About Us</Link>
            </li>
            <li onClick={handleNav} className='p-4 mobileListBorder'>
              <Link aria-label='Link to Services' href='/services'>Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 mobileListBorder'>
              <Link aria-label='Link to Gallery' href='/gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className=' mt-10 w-full flex px-[10%]'>
              <Link aria-label='Link to Contact Us' className='w-full contact_us2 self-center text-center tablet:hidden'  href='/contactUs'>Contact Us</Link>
            </li>
          </ul>
      </nav>
  )
}

export default Navbar
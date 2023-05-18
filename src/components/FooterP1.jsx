import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagramSquare, faFacebookSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


const FooterP1 = () => {
  return (
    <div className='flex flex-col justify-center items-center  gap-6 tablet:mt-0 tablet:w-[50%] tablet:mx-auto desktop:mx-0 desktop:items-start' >
        <figure className='w-[45%]'>
            <img className='h-full w-full' src='/logo2.png' alt='logo'/>
        </figure>
        <p className='text-center desktop:text-left font_small text-white font-light'>Together, let's build your dream!</p>
        <ul className='flex gap-3 items-center'>
            <li>
                <Link className='border orangeBorder' href='/https://www.instagram.com/jnjconstruction2020/'>
                    <FontAwesomeIcon size='lg' key={1} icon={faInstagramSquare} style={{color: "#ed5935",}} /> 
                </Link>
            </li>
            <li>
                <Link className='border orangeBorder' href='/'>
                    <FontAwesomeIcon size='lg' icon={faLinkedin} style={{color: "#ed592b",}} />
                </Link>
            </li>
            <li>
                <Link className='border orangeBorder' href='/'>
                    <FontAwesomeIcon size='lg' icon={faFacebookSquare} style={{color: "#ed592b",}} />
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <img className='w-[100px]' src="/planhub-logo.png" alt="PlanHub"/>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default FooterP1
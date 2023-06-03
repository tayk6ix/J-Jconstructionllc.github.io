import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagramSquare, faFacebookSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import logo2 from 'public/Static/LOGO2v2.webp'
import planHubImage from 'public/Static/planhub-logo.png'


const FooterP1 = () => {
  return (
    <section className='flex flex-col justify-center items-center  gap-6 tablet:mt-0 tablet:w-[50%] tablet:mx-auto desktop:mx-0 desktop:items-start' >
        <Link href='/' className='w-[45%]'>
            <Image
              src={logo2}
              alt='J&J Construction, LLC white logo'
              placeholder='blur'
              sizes='(min-width: 1280px) 15vw, 
                    50vw'
            />
        </Link>

        <h3 className='text-center desktop:text-left font_small text-white font-light'>Together, let's build your dream!</h3>
        <ul className='flex gap-3 items-center'>
            <li>
                <Link aria-label='Link to J&J Construction LLC instagram account' className='border orangeBorder' href='https://www.instagram.com/jnjconstruction2020/'>
                    <FontAwesomeIcon size='lg' key={1} icon={faInstagramSquare} style={{color: "#ed5935",}} /> 
                </Link>
            </li>
            <li>
                <Link aria-label='Link to J&J Construction LLC LinkedIn account' className='border orangeBorder' href='/'>
                    <FontAwesomeIcon size='lg' icon={faLinkedin} style={{color: "#ed592b",}} />
                </Link>
            </li>
            <li>
                <Link aria-label='Link to J&J Construction LLC Facebook account' className='border orangeBorder' href='/'>
                    <FontAwesomeIcon size='lg' icon={faFacebookSquare} style={{color: "#ed592b",}} />
                </Link>
            </li>
            <li>
                <Link aria-label="Link to J&J's PlanHub account" href='/'>
                <Image
                    src={planHubImage}
                    alt='PlanHub Logo'
                    placeholder='blur'
                    sizes='(min-width: 1280px) 15vw, 
                    50vw'
                 />
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default FooterP1
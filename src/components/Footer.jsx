import React from 'react'
import FooterP1 from './FooterP1'
import FooterMenu from './FooterMenu'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='separation-margin overall-padding blueBG flex flex-col py-[5rem] '>
      <div className='flex flex-col gap-[5rem] desktop:flex-row desktop:justify-between'>
        <FooterP1/>
        <FooterMenu/>
      </div>
      <div className='flex flex-col items-center gap-4  finalBorder font_xs font-light mt-[4%] pt-[5%] tablet:flex-row tablet:justify-between'>
        <p className=' lightText mt-[5%] tablet:mt-0'>Copyright © 2023 J&J Constructors, All rights reserved. </p>
        <ul className='flex text-white gap-4'>
          <li className='footerItem'><Link href='https://www.termsandconditionsgenerator.com/live.php?token=8J26n1FYS92PQiMVknJazN33MLJkzxL1'>Terms of Use</Link></li>
          <li className='footerItem'><Link href='https://www.freeprivacypolicy.com/live/36bb5479-b12e-4eb5-b3cf-a6202b952704'>Privacy Policy</Link></li>
          <li className='footerItem'><Link href='https://www.freeprivacypolicy.com/live/35cf5fb5-a3f8-4b61-bc9f-97a11279ca18'>Cookie Policy</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
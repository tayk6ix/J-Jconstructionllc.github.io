import React from 'react'
import { ServiceData } from '@/constants/ServiceData'
import Image from 'next/image'
import Link from 'next/link'
const Services = (cards) => {
  return (
    <div id='services' className='overall-margin flex flex-col items-center gap-6 separation-margin'>
      <h3 className='font_xs font_semibold'>WHAT WE OFFER</h3>
      <h2 className='font_h2 font-bold'>Our Services</h2>
      <div className='grid grid-cols-1 tablet:grid-cols-2 grid-rows-auto grid-flow-auto gap-2 tablet:gap-6 w-full desktop:grid-cols-4'>
      {ServiceData.map((card,index) => {
          return (
                <div className='flex flex-col shadow-lg shadow-gray-200'>
                    <Image key={index} unoptimized src={card.image1} alt='Image' width={100} height={100} className='service_imgs tablet:hidden'></Image>
                    <Image key={index} unoptimized src={card.image2} alt='Image' width={100} height={100} className='service_imgs hidden tablet:block tablet:max-h-[23rem] aspect-[5/4] desktop:max-h-[16rem]'></Image>
                    <div className='mx-5 my-8 flex flex-col h-full justify-between'>
                      <div className='flex flex-col gap-4'>
                        <h4 className='font_medium font-medium'>{card.title}</h4>
                        <p className='font_xs font-light'>{card.text}</p>
                      </div>
                      <Link  href= '/services#siding'> 
                        <p className='learn_more'>Learn More</p> 
                      </Link>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Services
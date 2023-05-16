import React from 'react'
import Image from 'next/image'
import { ServiceData } from '@/constants/ServiceData'



const ServicesMain = (card) => {
  return (
    <div className=' mt-[5rem] overall-margin flex flex-col gap-8'>
        <h3 className='font_xs font_semibold'>OUR SERVICES</h3>
        <h2 className='font_h2 font-semibold leading-tight'>Listen better. Plan better. Build better.</h2>
        <p className='font_small font-light'>Our team of experienced professionals has the skills and expertise to handle any construction project, no matter how big or small. We work closely with our clients to understand their specific needs and preferences, and we always strive to deliver exceptional workmanship and customer service. <br/>Whether you're building a new home, adding an extension, or renovating an existing property, our general contractor services can help you achieve your goals. Here are some of the services we provide: </p>

        <div  className='flex flex-col gap-8 w-full h-full separation-margin'>
            {ServiceData.slice(0, 1).map((card, index) => {
                return(
                <div id='siding' key={index} className='gap-8 grid grid-cols-1 tablet:grid-cols-2 w-full tablet:items-center'>
                    <div className='gap-4 flex flex-col'>
                        <h2 className='font_medium_large font-normal'>{card.title}</h2>
                        <p className='font_small font-light darkerText'>{card.text_extended}</p>
                    </div>
                    <Image unoptimized src={card.image1} alt='Image' width={100} height={100} className='how_img'/>
                </div>
                )
            })}

            {ServiceData.slice(1, 2).map((card, index) => {
                return(
                <div id='roofing' key={index} className='gap-8 flex flex-col-reverse tablet:grid tablet:grid-cols-2 tablet:items-center w-full'>
                    <Image unoptimized src={card.image1} alt='Image' width={100} height={100} className='how_img'/>
                    <div className='gap-4 flex flex-col'>
                        <h2 className='font_medium_large font-normal'>{card.title}</h2>
                        <p className='font_small font-light darkerText'>{card.text_extended}</p>
                    </div>
                </div>
                )
            })}

            {ServiceData.slice(2, 3).map((card, index) => {
                return(
                <div id='framing' key={index} className=' gap-8 grid grid-cols-1 tablet:grid-cols-2 tablet:items-center w-full'>
                    <div className='gap-4 flex flex-col'>
                        <h2 className='font_medium_large font-normal'>{card.title}</h2>
                        <p className='font_small font-light darkerText'>{card.text_extended}</p>
                    </div>
                    <Image unoptimized src={card.image1} alt='Image' width={100} height={100} className='how_img'/>
                </div>
                )
            })}

            {ServiceData.slice(3, 4).map((card, index) => {
                return(
                <div id='drywall' key={index} className=' gap-8 flex flex-col-reverse tablet:grid tablet:grid-cols-2 tablet:items-center w-full'>
                    <Image unoptimized src={card.image1} alt='Image' width={100} height={100} className='how_img'/>
                    <div className='gap-4 flex flex-col'>
                        <h2 className='font_medium_large font-normal'>{card.title}</h2>
                        <p className='font_small font-light darkerText'>{card.text_extended}</p>
                    </div>
                </div>
                )
            })}

        </div>
        </div>
  )
}

export default ServicesMain
import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div id='aboutUs' className='flex flex-col-reverse overall-margin separation-margin gap-8 desktop:grid grid-cols-2 grid-flow-col items-center'>
      <div className='grid grid-cols-2 grid-rows-2 grid-flow-auto mt-6 gap-3 w-full'>
        <Image unoptimized src='/StockPhotos/Siding5x4.jpg' alt='Image' width={100} height={100} className='about_imgs hidden tablet:block'></Image>
        <Image unoptimized src='/StockPhotos/framing5x4.jpg' alt='Image' width={100} height={100} className='about_imgs hidden tablet:block'></Image>
        <Image unoptimized src='/StockPhotos/roofing5x4.jpg' alt='Image' width={100} height={100} className='about_imgs hidden tablet:block'></Image>
        <Image unoptimized src='/StockPhotos/drywall5x4.jpg' alt='Image' width={100} height={100} className='about_imgs hidden tablet:block'></Image>
        <Image unoptimized src='/StockPhotos/Siding16x9.jpg' alt='Image' width={100} height={100} className='about_imgs tablet:hidden'></Image>
        <Image unoptimized src='/StockPhotos/framing16x9.jpg' alt='Image' width={100} height={100} className='about_imgs tablet:hidden'></Image>
        <Image unoptimized src='/StockPhotos/roofing16x9.jpg' alt='Image' width={100} height={100} className='about_imgs tablet:hidden'></Image>
        <Image unoptimized src='/StockPhotos/drywall16x9.jpg' alt='Image' width={100} height={100} className='about_imgs tablet:hidden'></Image>
      </div>
      <div>
        <h3 className='font_xs font_semibold'>WHO WE ARE</h3>
        <h2 className='font_h2 font-bold'>About Us</h2>
        <p className='font_small darkerText font-light leading-relaxed'>
          At J&J Construction, we have been committed to providing high-quality construction services to our clients. With over 5+ years of expereince in the industry, our team has the expertise and knowledge necessary to handle even the most complex construction projects. 
          We offer a wide range of construction services, including commercial, residential, and industrial construction, as well as renovations, additions, and remodels. Being said, we do believe in a collaborative approach to construction, working closely with our clients every step of the way to ensure that their vision is realized. Contact us today to learn more about us.</p>
      </div>
    </div>
  )
}

export default AboutUs
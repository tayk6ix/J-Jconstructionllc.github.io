import React from 'react'
import Image from 'next/image'

const GalleryHero = () => {
  return (
    <div className='relative heroHeight text-white text-center flex flex-col items-center justify-center gap-1 tablet:mx-[2.5vw]'>
      <Image 
            key={1} 
            src={galleryHeroImage}
            alt='Image of a house located in Bella Vista, Arkansas' 
            className='object-cover z-[1] absolute inset-0 h-full w-full'
            priority
            sizes='100vw'
            quality={100}
      />
      <h1 className='z-[2] font_title leading-tight w-4/5 font-semibold tablet:font-bold tablet:leading-none tablet:w-[58%]'>Gallery</h1>
      <p className='z-[2] font_small w-3/4'>Building strong foundations for the future!</p>
    </div>
  )
}

export default GalleryHero
import React from 'react'
import Image from 'next/image'
import { heroData } from '@/constants/HeroData'

const Hero2 = ({image, title, text}) => {
  return (
    <figure className='relative heroHeight text-white text-center flex flex-col items-center justify-center gap-1 tablet:mx-[2.5vw]'>
        <Image 
            key={image.src} 
            src={image}
            alt='Image of a house located in Bella Vista, Arkansas' 
            className='object-cover z-[1] absolute inset-0 h-full w-full'
            priority
            placeholder='blur'
            sizes='100vw'
      />
      
        <h1 className='z-[2] font_title leading-tight w-4/5 font-semibold tablet:font-bold tablet:leading-none tablet:w-[58%]'>{heroData[title].title}</h1>
      <p className='z-[2] font_small w-3/4'>{heroData[text].text}</p>
    </figure>
  )
}

export default Hero2
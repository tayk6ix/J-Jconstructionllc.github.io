import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

 
const Hero = ({image}) => {
  return (
    <header className='heroHeight relative text-white text-center flex flex-col items-center justify-center gap-4 tablet:mx-[2.5vw] tablet:px-[5vw] tablet:text-left tablet:items-start '>
      <Image 
            key={image.src} 
            src={image}
            alt='Image of a house located in Bella Vista, Arkansas' 
            className='object-cover z-[1] absolute inset-0 h-full'
            priority 
            placeholder='blur'
            // quality={100}
            sizes='(min-width: 600px) 95vw, 100vw'
      />
      <h1 className='z-[2] font_title leading-tight w-4/5 font-semibold tablet:font-bold tablet:leading-none tablet:w-[58%]'>Together, <br className='hidden tablet:block'/> let's build your dream</h1>
      <Link className='z-[2] heroBtn font_small orangeBG w-3/5 py-2 px-8 tablet:w-fit' href='#mini_gallery'>Discover More</Link>
    </header>
  )
}
export default Hero


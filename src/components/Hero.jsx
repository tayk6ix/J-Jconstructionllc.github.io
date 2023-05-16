import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[url("/DesktopImg1.jpeg")] heroLanding heroHeight text-white text-center flex flex-col items-center justify-center gap-4 tablet:mx-[2.5vw] tablet:px-[5vw] tablet:text-left tablet:items-start'>
      <h1 className='font_title leading-tight w-4/5 font-semibold tablet:font-bold tablet:leading-none tablet:w-[58%]'>Together, <br className='hidden tablet:block'/> let's build your dream</h1>
      <Link className='heroBtn font_small orangeBG w-3/5 py-2 px-8 tablet:w-fit' href='#mini_gallery'>Discover More</Link>
    </div>
  )
}
export default Hero
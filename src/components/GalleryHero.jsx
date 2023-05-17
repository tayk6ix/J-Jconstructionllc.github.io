import React from 'react'

const GalleryHero = () => {
  return (
    <div className='bg-[url("/Project3/16x9v1.JPG")] heroLanding heroHeight text-white text-center flex flex-col items-center justify-center gap-1 tablet:mx-[2.5vw]'>
      <h1 className='font_title leading-tight w-4/5 font-semibold tablet:font-bold tablet:leading-none tablet:w-[58%]'>Gallery</h1>
      <p className='font_small w-3/4'>Building strong foundations for the future!</p>
    </div>
  )
}

export default GalleryHero
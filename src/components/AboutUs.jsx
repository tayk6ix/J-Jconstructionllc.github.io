import React from 'react'
import Image from 'next/image'
import sidingImage1 from 'public/Static/n1216x9.webp'
import sidingImage2 from 'public/Static/n125x4.webp'
import framingImage1 from 'public/Static/316x9.webp'
import framingImage2 from 'public/Static/35x4.webp'
import drywallImage1 from 'public/Static/drywall16x9.webp'
import drywallImage2 from 'public/Static/drywall5x4.webp'
import roofingImage1 from 'public/Static/roofing16x9.webp'
import roofingImage2 from 'public/Static/roofing5x4.webp'



const AboutUs = () => {
  return (
    <section id='aboutUs' className='flex flex-col-reverse overall-margin separation-margin gap-8 desktop:grid grid-cols-2 grid-flow-col items-center'>
      <figure className='grid grid-cols-2 grid-rows-2 grid-flow-auto mt-6 gap-3 w-full'>
          <Image 
            key={1} 
            src={sidingImage2}
            alt='Image of our workers installing siding pannels' 
            className='aspect-[5/4] tablet:hidden desktop:block desktop:object-none'
            placeholder='blur'
            sizes='(min-width: 1280px) 25vw, 50vw'
          />
          <Image 
            key={2} 
            src={framingImage2}
            alt='Image of our workers finsihing framing up a wall of a building' 
            className='aspect-[5/4] tablet:hidden desktop:block'
            placeholder='blur'
            sizes='(min-width: 1280px) 25vw, 50vw'
           />
          <Image 
            key={3} 
            src={drywallImage2}
            alt='Image of an underconstruction interior with drywall done' 
            className='aspect-[5/4] tablet:hidden desktop:block'
            placeholder='blur'
            sizes='(min-width: 1280px) 25vw, 50vw'
        />
        <Image 
          key={4} 
          src={roofingImage2}
          alt='Image of one of our crews on the roof of a house installing metal roofing' 
          className='aspect-[5/4] tablet:hidden desktop:block'
          placeholder='blur'
          sizes='(min-width: 1280px) 25vw, 50vw'
        />
        <Image 
            key={5} 
            src={sidingImage1}
            alt='Image of our workers installing siding pannels' 
            className='hidden tablet:block tablet:aspect-video tablet:object-contain desktop:hidden'
            placeholder='blur'
            sizes='(min-width: 1280px) 25vw, 50vw'
          />
          <Image 
            key={6} 
            src={framingImage1}
            alt='Image of our workers finsihing framing up a wall of a building'  
            className='hidden tablet:block tablet:aspect-video tablet:object-contain desktop:hidden'
            placeholder='blur'
            sizes='(min-width: 1280px) 25vw, 50vw'
           />
          <Image 
            key={7} 
            src={drywallImage1}
            alt='Image of an underconstruction interior with drywall done' 
            className='hidden tablet:block tablet:aspect-video tablet:object-contain desktop:hidden'
            placeholder='blur'
            sizes='(min-width: 1280px) 25vw, 50vw'
        />
        <Image 
          key={8} 
          src={roofingImage1}
          alt='Image of one of our crews on the roof of a house installing metal roofing'  
          className='hidden tablet:block tablet:aspect-video tablet:object-contain desktop:hidden'
          placeholder='blur'
          sizes='(min-width: 1280px) 25vw, 50vw'
        />
      </figure>
      <article>
        <h2 className='font_xs font_semibold'>WHO WE ARE</h2>
        <h3 className='font_h2 font-bold'>About Us</h3>
        <p className='font_small darkerText font-light leading-relaxed'>
          At J&J Construction, we have been committed to providing high-quality construction services to our clients. With many years of experience in the industry, our team has the expertise and knowledge necessary to handle even the most complex construction projects. 
          We offer a wide range of construction services, including commercial, residential, and industrial construction, as well as renovations, additions, and remodels. Being said, we do believe in a collaborative approach to construction, working closely with our clients every step of the way to ensure that their vision is realized. Contact us today to learn more about us.</p>
      </article>
    </section>
  )
}

export default AboutUs
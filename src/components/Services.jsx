import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Services = ({cards}) => {

  return (
    <section id='services' className='overall-margin flex flex-col items-center gap-6 separation-margin'>
      <h2 className='font_xs font_semibold'>WHAT WE OFFER</h2>
      <h3 className='font_h2 font-bold'>Our Services</h3>
      <div className='grid grid-cols-1 tablet:grid-cols-2 grid-rows-auto grid-flow-auto gap-2 tablet:gap-6 w-full desktop:grid-cols-4'>
      {cards.map((card,index) => {
          const next_id = card.id + card.length
          return (
                <div key={index}  className='flex flex-col shadow-lg shadow-gray-200'>
                  <div className='relative w-full min-h-[53.44vw] aspect-video tablet:aspect-[5/4] tablet:min-h-[37.6vw] desktop:min-h-[18.4vw]'>
                    <Image 
                      key={card.id} 
                      src={card.image1}
                      alt={card.alt} 
                      className='block aspect-video object-cover tablet:hidden'
                      fill
                      sizes='(min-width: 1280px) 25vw, 
                      (min-width: 600px) 50vw,
                      100vw'
                    />
                    <Image 
                      key={card.next_id} 
                      src={card.image2}
                      alt={card.alt} 
                      className='hidden tablet:block tablet:aspect-[5/4] tablet:object-cover'
                      fill
                      sizes='(min-width: 1280px) 25vw, 
                      (min-width: 600px) 50vw,
                      100vw'
                    />
                  </div>
                    
                    <div className='mx-5 my-8 flex flex-col h-full justify-between'>
                      <div className='flex flex-col gap-4'>
                        <h4 className='font_medium font-medium'>{card.title}</h4>
                        <p className='font_xs font-light'>{card.text}</p>
                      </div>
                      <Link  href= {`/services#${card.title}`} className='mt-4'> 
                        <p className='learn_more'>Learn More about {card.title}</p> 
                      </Link>
                    </div>
                </div>
            )
        })}
      </div>
    </section>
  )
}

export default Services
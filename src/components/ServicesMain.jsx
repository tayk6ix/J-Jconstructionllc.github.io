import React from 'react'
import Image from 'next/image'



const ServicesMain = ({cards}) => {
  return (
    <main className=' mt-[5rem] overall-margin flex flex-col gap-8'>
        <h2 className='font_xs font_semibold'>OUR SERVICES</h2>
        <h3 className='font_h2 font-semibold leading-tight'>Listen better. Plan better. Build better.</h3>
        <p className='font_small font-light'>Our team of experienced professionals has the skills and expertise to handle any construction project, no matter how big or small. We work closely with our clients to understand their specific needs and preferences, and we always strive to deliver exceptional workmanship and customer service. <br/>Whether you're building a new home, adding an extension, or renovating an existing property, our general contractor services can help you achieve your goals. Here are some of the services we provide: </p>

        <section  className='flex flex-col gap-8 w-full h-full separation-margin'>
            {cards.slice(0, 1).map((card, index) => {
                return(
                <article id='Siding' key={index} className='gap-8 grid grid-cols-1 tablet:grid-cols-2 w-full tablet:items-center '>
                    <div className='gap-4 flex flex-col'>
                        <h4 className='font_medium_large font-normal'>{card.title}</h4>
                        <p className='font_small font-light darkerText'>{card.text_extended}</p>
                    </div>
                    <div className='relative w-full aspect-[4/5]'>
                        <Image 
                            key={card.image3.src} 
                            src={card.image3}
                            alt={card.alt} 
                            className='object-contain z-[1]  h-full w-full'
                            fill
                            sizes='100vw'
                        />
                    </div>
                </article>
                )
            })}

            {cards.slice(1, 2).map((card, index) => {
                return(
                <article id='Roofing' key={index} className='gap-8 flex flex-col-reverse tablet:grid tablet:grid-cols-2 tablet:items-center w-full'>
                    <div className='relative w-full aspect-[4/5]'>
                        <Image 
                            key={card.image3.src} 
                            src={card.image3}
                            alt={card.alt} 
                            className='object-contain  z-[1] h-full w-full'
                            fill
                            sizes='100vw'
                        />
                    </div>
                    <div className='gap-4 flex flex-col'>
                        <h4 className='font_medium_large font-normal'>{card.title}</h4>
                        <p className='font_small font-light darkerText'>{card.text_extended}</p>
                    </div>
                </article>
                )
            })}

            {cards.slice(2, 3).map((card, index) => {
                return(
                <article id='Framing' key={index} className=' gap-8 grid grid-cols-1 tablet:grid-cols-2 tablet:items-center w-full'>
                    <div className='gap-4 flex flex-col'>
                        <h4 className='font_medium_large font-normal'>{card.title}</h4>
                        <p className='font_small font-light darkerText'>{card.text_extended}</p>
                    </div>
                    <div className='relative w-full aspect-[4/5]'>
                        <Image 
                            key={card.image3.src} 
                            src={card.image3}
                            alt={card.alt} 
                            className='object-contain z-[1]   h-full w-full'
                            fill
                            sizes='100vw'
                        />
                    </div>
                </article>
                )
            })}

            {cards.slice(3, 4).map((card, index) => {
                return(
                <article id='Drywall' key={index} className=' gap-8 flex flex-col-reverse tablet:grid tablet:grid-cols-2 tablet:items-center w-full'>
                    <div className='relative w-full aspect-[4/5]'>
                        <Image 
                            key={card.image3.src} 
                            src={card.image3}
                            alt={card.alt} 
                            className='object-contain z-[1] h-full w-full'
                            fill
                            sizes='100vw'
                        />
                    </div>
                    <div className='gap-4 flex flex-col'>
                        <h4 className='font_medium_large font-normal'>{card.title}</h4>
                        <p className='font_small font-light darkerText'>{card.text_extended}</p>
                    </div>
                </article>
                )
            })}

        </section>
        </main>
  )
}

export default ServicesMain
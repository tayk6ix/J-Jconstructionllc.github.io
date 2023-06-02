import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import howImage from 'public/Static/HowImage.jpg'

const How = ({cards}) => {
  return (
    <section className='flex flex-col separation-margin tablet:grid tablet:grid-cols-2 tablet:grid-flow-auto h-min' >
      <article className='blueBG flex flex-col'>
        <div className='w-[80%] h-[80%] mx-auto my-[10%] tablet:my-auto flex flex-col gap-1 justify-center items'>
          <h2 className='text-white font_h2 font-semibold'>How it works</h2>
          <h3 className='font_small font_small lightText'>Let us help you create the perfect office, the perfect building, the perfect home, the perfect project with:</h3>
          
          <div className='ml-[2rem] mt-4 flex flex-col gap-4'>
          {cards.map((card, index) => {
            return(
                  <div key={index} className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon icon={card.icon} style={card.icon_color} />
                    <div className='flex flex-col gap-2 justify-between h-full '>
                      <h3 className='text-white font_small'>{card.title}</h3>
                      <p className='font_xs font_xs lightText desktop:hidden'>{card.body_small}</p>
                      <p className='font_xs font_xs lightText hidden desktop:block'>{card.body_small}</p>
                    </div>
                  </div>
              )
          })}
          </div>
        </div>
      </article>
      <Image 
            key={1} 
            src={howImage}
            alt='Image of a kid with a company shirt' 
            className='w-full aspect-[4/5] object-cover tablet:aspect-square tablet:object-contain'
            placeholder='blur'
            sizes='(min-width: 600px) 50vw, 100vw'
      />
    </section>
  )
}

export default How
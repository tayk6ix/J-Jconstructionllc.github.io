import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faClipboardList, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { HowData } from '@/constants/HowData'

const How = (cards) => {
  return (
    <div className='flex flex-col separation-margin tablet:grid tablet:grid-cols-2 tablet:grid-flow-auto h-min' >
      <div className='blueBG flex flex-col'>
        <div className='w-[80%] h-[80%] mx-auto my-[10%] tablet:my-auto flex flex-col gap-1 justify-center items'>
          <h2 className='text-white font_h2 font-semibold'>How it works</h2>
          <p className='font_small font_small lightText'>Let us help you create the perfect office, the perfect building, the perfect home, the perfect project with:</p>
          
          <div className='ml-[2rem] mt-4 flex flex-col gap-4'>
          {HowData.map((card, index) => {
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
      </div>
      <Image unoptimized key={1} src='/StockPhotos/how1x1.jpg' alt='Image' width={345} height={50} className='hidden tablet:block w-full '></Image>
      <Image key={2} src='/StockPhotos/n4.jpg' alt='Image' width={345} height={100} className=' tablet:hidden w-full'></Image>

    </div>
  )
}

export default How
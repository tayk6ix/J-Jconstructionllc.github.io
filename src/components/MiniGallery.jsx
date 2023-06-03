import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import GalleryCard from './GalleryMainCard'


const MiniGallery = ({cards}) => {
  
  const [setIndex, setsetIndex] = useState(0)

  const prevProject = () => {
      const isFirstImage  = setIndex === 0
      const newIndex = isFirstImage ? cards.length - 1 : setIndex -1;
      setsetIndex(newIndex)
  }

  const nextProject = () => {
      const isLastImage  = setIndex === cards.length - 1 
      const newIndex = isLastImage ? 0 : setIndex +1
      setsetIndex(newIndex)
  }
  
  const index = (a)=> {
      if (setIndex + a  >= cards.length) {
          return setIndex + a - cards.length 
      }
      else if (setIndex + a <= -1) {
          return setIndex + a + cards.length
      }
      else{
         return  setIndex + a
      }
  }


  if (!Array.isArray(cards) || cards.length < 0) {
    null
  }

  return(
    <section id='mini_gallery' className='overall-margin flex flex-col items-center gap-6 separation-margin'>
      <h2 className='font_xs font_semibold'>FEATURED PROJECTS</h2>
      <h3 className='font_h2 font-bold'>Our Gallery</h3>
      <div className='grid grid-cols-1 tablet:grid-cols-3 grid-rows-auto grid-flow-auto gap-4 tablet:gap-4 tablet:px-12 w-full relative group'>
        <GalleryCard
          subcard = {cards} 
          currentSet={index(0)}
          linkSet={true}
        />
        <GalleryCard
          subcard = {cards} 
          currentSet={index(1)}
          linkSet={true}
        />
        <GalleryCard
          subcard = {cards} 
          currentSet={index(2)}
          linkSet={true}
        />

        <figure className=' absolute top-[-5rem] translate-x-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  onClick={prevProject} />
        </figure>
        <figure className=' absolute top-[-5rem] translate-x-0 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} onClick={nextProject} />
        </figure>
          
      </div>
    </section>
  )
}

export default MiniGallery
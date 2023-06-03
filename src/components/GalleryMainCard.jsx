import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'


const GalleryCard = ({subcard, currentSet, linkSet}) => {

  const [currentIndex, setcurrentIndex] = useState(0)

  const [link, setlink] = useState(linkSet)

  const prevImage = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? subcard[currentSet].images.length - 1 : currentIndex -1;
      setcurrentIndex(newIndex);
    }
      
  const nextImage = () => {
    const isLastImage = currentIndex === subcard[currentSet].images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex +1;
    setcurrentIndex(newIndex);
      }


  return (
    <figure className='aspect-[4/5] relative group/card1 select-none'>
    <Image 
        key={subcard[currentSet].images[currentIndex].img.src} 
        src={subcard[currentSet].images[currentIndex].img} 
        alt= {subcard[currentSet].projectName} 
        className='service_imgs rounded-xl aspect-[4/5] '
        fill
        sizes='(min-width: 600px) 33vw, 100vw'
      />
      
      <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
        <h4 className='text-[14px] font-light  '>{`${subcard[currentSet].type}`}</h4>
        <h5 className=' text-[20px] '>{`${subcard[currentSet].projectName}`}</h5>
        <Link 
        href={`/gallery#${subcard[currentSet].projectName}`}
        className={
          link
            ? 'block'
            : 'hidden'
        }
        >
          <button className='learn_more'>Learn more about this {`${subcard[currentSet].projectName}`} </button>
        </Link>
      </div>
      <figure className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage}>
        <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
      </figure>
      <figure className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage}>
        <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
      </figure>
    </figure>
  )
}

export default GalleryCard
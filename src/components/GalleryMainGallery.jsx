import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { GalleryData } from '@/constants/GalleryData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function GalleryMainGallery(props) {
    const [currentIndex, setcurrentIndex] = useState(0)
    const [currentIndex2, setcurrentIndex2] = useState(0)
    const [currentIndex3, setcurrentIndex3] = useState(0)

    const prevImage = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? GalleryData[0].CardImages.length - 1 : currentIndex -1;
        setcurrentIndex(newIndex);
      }
      
      const nextImage = () => {
        const isLastImage = currentIndex === GalleryData[0].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex +1;
        setcurrentIndex(newIndex);
      }
      
      const prevImage2 = () => {
        const isFirstImage = currentIndex2 === 0;
        const newIndex = isFirstImage ? GalleryData[set + 2].CardImages.length - 1 : currentIndex2 -1;
        setcurrentIndex2(newIndex);
      }
      
      const nextImage2 = () => {
        const isLastImage = currentIndex2 === GalleryData[set + 2].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex2 +1;
        setcurrentIndex2(newIndex);
      }
      
      const prevImage3 = () => {
        const isFirstImage = currentIndex3 === 0;
        const newIndex = isFirstImage ? GalleryData[set + 3].CardImages.length - 1 : currentIndex3 -1;
        setcurrentIndex3(newIndex);
      }
      
      const nextImage3 = () => {
        const isLastImage = currentIndex3 === GalleryData[set + 3].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex3 +1;
        setcurrentIndex3(newIndex);1
      }    

  return (
    <div>
        <div className='aspect-[4/5] relative group/card1'>
            <Image unoptimized key={1} src={props.CardImages[currentIndex].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
            <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                <p className='text-[14px] font-light  '>{`${props.type}`}</p>
                <h4 className=' text-[20px] '>{`${props.projectName}`}</h4>
            </div>
            <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage}>
                <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
            </div>
            <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage}>
                <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
            </div>
        </div>
    </div>
  )
}

export default GalleryMainGallery
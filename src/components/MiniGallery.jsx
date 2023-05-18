import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GalleryData } from '@/constants/GalleryData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const MiniGallery = (cards) => {
  const [currentSet, setcurrentSet] = useState(0);
  const [currentSet2, setcurrentSet2] = useState(1);
  const [currentSet3, setcurrentSet3] = useState(2);

  const [currentIndex, setcurrentIndex] = useState(0)
  const [currentIndex2, setcurrentIndex2] = useState(0)
  const [currentIndex3, setcurrentIndex3] = useState(0)

  const prevProject = () => {
    const isFirstImage = currentSet === 0
    const isFirstImage2 = currentSet2 === 0 
    const isFirstImage3 = currentSet3 === 0 
    const newIndex = isFirstImage ? GalleryData.length - 1 : currentSet -1;
    const newIndex2 = isFirstImage2 ? GalleryData.length - 1 : currentSet2 -1;
    const newIndex3 = isFirstImage3 ? GalleryData.length - 1 : currentSet3 -1;
    setcurrentSet(newIndex);
    setcurrentSet2(newIndex2);
    setcurrentSet3(newIndex3);
  }

  const nextProject = () => {
    const isLastImage = currentSet === GalleryData.length - 1
    const isLastImage2 = currentSet2 === GalleryData.length - 1
    const isLastImage3 = currentSet3 === GalleryData.length - 1
    const newIndex = isLastImage ? 0 : currentSet +1;
    const newIndex2 = isLastImage2 ? 0 : currentSet2 +1;
    const newIndex3 = isLastImage3 ? 0 : currentSet3 +1;
    setcurrentSet(newIndex);
    setcurrentSet2(newIndex2);
    setcurrentSet3(newIndex3);
  }

  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? GalleryData[currentSet].CardImages.length - 1 : currentIndex -1;
    setcurrentIndex(newIndex);
  }

  const nextImage = () => {
    const isLastImage = currentIndex === GalleryData[currentSet].CardImages.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex +1;
    setcurrentIndex(newIndex);
  }

  const prevImage2 = () => {
    const isFirstImage = currentIndex2 === 0;
    const newIndex = isFirstImage ? GalleryData[currentSet2].CardImages.length - 1 : currentIndex2 -1;
    setcurrentIndex2(newIndex);
  }
  
  const nextImage2 = () => {
    const isLastImage = currentIndex2 === GalleryData[currentSet2].CardImages.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex2 +1;
    setcurrentIndex2(newIndex);
  }
  
  const prevImage3 = () => {
    const isFirstImage = currentIndex3 === 0;
    const newIndex = isFirstImage ? GalleryData[currentIndex3].CardImages.length - 1 : currentIndex3 -1;
    setcurrentIndex3(newIndex);
  }
  
  const nextImage3 = () => {
    const isLastImage = currentIndex3 === GalleryData[currentIndex3].CardImages.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex3 +1;
    setcurrentIndex3(newIndex);1
  } 

  if (!Array.isArray(cards) || cards.length < 0) {
    null
  }

  return(
    <div id='mini_gallery' className='overall-margin flex flex-col items-center gap-6 separation-margin'>
      <h3 className='font_xs font_semibold'>FEATURED PROJECTS</h3>
      <h2 className='font_h2 font-bold'>Our Gallery</h2>
      <div className='grid grid-cols-1 tablet:grid-cols-3 grid-rows-auto grid-flow-auto gap-4 tablet:gap-4 tablet:px-12 w-full relative group'>

          <div className='aspect-[4/5] relative group/card1'>
            {/* <Image unoptimized key={1} src={GalleryData[currentSet].CardImages[currentIndex].image} alt='IProject mage' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/> */}
            <picture className='service_imgs rounded-xl aspect-[4/5]'>
                    <source
                    className='rounded-xl aspect-[4/5]'
                    media="(max-width: 767px)"
                    sizes="(max-width: 768px) 95vw, 691px"
                    srcset= 
                        {GalleryData[currentSet].CardImages[currentIndex].SrcImage[0].image}
                        {...GalleryData[currentSet].CardImages[currentIndex].SrcImage[1].image}
                        {...GalleryData[currentSet].CardImages[currentIndex].SrcImage[2].image}
                    />
                    <source
                    className='rounded-xl aspect-[4/5]'
                    media="(min-width: 768px) and (max-width: 991px)"
                    sizes="(max-width: 993px) calc(.333 * (95vw - 2rem)), 298px"
                    srcset=
                        {GalleryData[currentSet].CardImages[currentIndex].SrcImage[3].image}
                        {...GalleryData[currentSet].CardImages[currentIndex].SrcImage[4].image}
                    />
                    <img
                    className='rounded-xl aspect-[4/5]'
                    sizes="(max-width: 2880px) calc(.333 * (95vw - 2rem)), 864px"
                    srcset=
                    {GalleryData[currentSet].CardImages[currentIndex].SrcImage[5].image}
                    {...GalleryData[currentSet].CardImages[currentIndex].SrcImage[6].image}
                    {...GalleryData[currentSet].CardImages[currentIndex].SrcImage[7].image}
                    {...GalleryData[currentSet].CardImages[currentIndex].SrcImage[8].image}
                    src={GalleryData[currentSet].CardImages[currentIndex].SrcImage[9].image}
                    alt={`Project ${GalleryData[currentSet].id}`}/>
                </picture>
            <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
              <p className='text-[14px] font-light  '>{`${GalleryData[currentSet].type}`}</p>
              <h4 className=' text-[20px] '>{`${GalleryData[currentSet].projectName}`}</h4>
              <Link  href='/gallery'>
                <p className='learn_more'>Learn More</p> 
              </Link>
            </div>
            <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage}>
              <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
            </div>
            <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage}>
              <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
            </div>
          </div>
          
          
          <div className='hidden tablet:block aspect-[4/5] relative group/card2'>
            {/* <Image unoptimized key={1} src={GalleryData[currentSet2].CardImages[currentIndex2].image} alt='IProject mage' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/> */}
            <picture className='service_imgs rounded-xl aspect-[4/5]'>
                    <source
                    className='rounded-xl aspect-[4/5]'
                    media="(max-width: 767px)"
                    sizes="(max-width: 768px) 95vw, 691px"
                    srcset= 
                        {GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[0].image}
                        {...GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[1].image}
                        {...GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[2].image}
                    />
                    <source
                    className='rounded-xl aspect-[4/5]'
                    media="(min-width: 768px) and (max-width: 991px)"
                    sizes="(max-width: 993px) calc(.333 * (95vw - 2rem)), 298px"
                    srcset=
                        {GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[3].image}
                        {...GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[4].image}
                    />
                    <img
                    className='rounded-xl aspect-[4/5]'
                    sizes="(max-width: 2880px) calc(.333 * (95vw - 2rem)), 864px"
                    srcset=
                    {GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[5].image}
                    {...GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[6].image}
                    {...GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[7].image}
                    {...GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[8].image}
                    src={GalleryData[currentSet2].CardImages[currentIndex2].SrcImage[9].image}
                    alt={`Project ${GalleryData[currentSet2].id}`} />
                </picture>
            <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
              <p className='text-[14px] font-light  '>{`${GalleryData[currentSet2].type}`}</p>
              <h4 className=' text-[20px] '>{`${GalleryData[currentSet2].projectName}`}</h4>
              <Link  href='/gallery'>
                <p className='learn_more'>Learn More</p> 
              </Link>
            </div>
            <div className='hidden group-hover/card2:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage2}>
              <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  />
                </div>
            <div className='hidden group-hover/card2:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage2}>
              <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
            </div>
          </div>

          <div className='hidden tablet:block aspect-[4/5] relative group/card3'>
            {/* <Image unoptimized key={1} src={GalleryData[currentSet3].CardImages[currentIndex3].image} alt='IProject mage' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/> */}
            <picture className='service_imgs rounded-xl aspect-[4/5]'>
                    <source
                    className='rounded-xl aspect-[4/5]'
                    media="(max-width: 767px)"
                    sizes="(max-width: 768px) 95vw, 691px"
                    srcset= 
                        {GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[0].image}
                        {...GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[1].image}
                        {...GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[2].image}
                    />
                    <source
                    className='rounded-xl aspect-[4/5]'
                    media="(min-width: 768px) and (max-width: 991px)"
                    sizes="(max-width: 993px) calc(.333 * (95vw - 2rem)), 298px"
                    srcset=
                        {GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[3].image}
                        {...GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[4].image}
                    />
                    <img
                    className='rounded-xl aspect-[4/5]'
                    sizes="(max-width: 2880px) calc(.333 * (95vw - 2rem)), 864px"
                    srcset=
                    {GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[5].image}
                    {...GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[6].image}
                    {...GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[7].image}
                    {...GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[8].image}
                    src={GalleryData[currentSet3].CardImages[currentIndex3].SrcImage[9].image}
                    alt={`Project ${GalleryData[currentSet3].id}`}/>
                </picture>
            <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
              <p className='text-[14px] font-light  '>{`${GalleryData[currentSet3].type}`}</p>
              <h4 className=' text-[20px] '>{`${GalleryData[currentSet3].projectName}`}</h4>
              <Link  href='/gallery'>
                <p className='learn_more'>Learn More</p> 
              </Link>
            </div>
            <div className='hidden group-hover/card3:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage3}>
              <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  />
                </div>
            <div className='hidden group-hover/card3:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage3}>
              <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} />
            </div>
          </div>
        
          <div className='desktop:hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  onClick={prevProject} />
          </div>
          <div className='desktop:hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} onClick={nextProject} />
          </div>
        </div>
    </div>
  )
}

export default MiniGallery
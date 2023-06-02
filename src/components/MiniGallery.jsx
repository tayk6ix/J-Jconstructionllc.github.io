import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const MiniGallery = ({cards}) => {
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
    const newIndex = isFirstImage ? cards.length - 1 : currentSet -1;
    const newIndex2 = isFirstImage2 ? cards.length - 1 : currentSet2 -1;
    const newIndex3 = isFirstImage3 ? cards.length - 1 : currentSet3 -1;
    setcurrentSet(newIndex);
    setcurrentSet2(newIndex2);
    setcurrentSet3(newIndex3);
  }

  const nextProject = () => {
    const isLastImage = currentSet === cards.length - 1
    const isLastImage2 = currentSet2 === cards.length - 1
    const isLastImage3 = currentSet3 === cards.length - 1
    const newIndex = isLastImage ? 0 : currentSet +1;
    const newIndex2 = isLastImage2 ? 0 : currentSet2 +1;
    const newIndex3 = isLastImage3 ? 0 : currentSet3 +1;
    setcurrentSet(newIndex);
    setcurrentSet2(newIndex2);
    setcurrentSet3(newIndex3);
  }

  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? cards[currentSet].images.length - 1 : currentIndex -1;
    setcurrentIndex(newIndex);
  }

  const nextImage = () => {
    const isLastImage = currentIndex === cards[currentSet].images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex +1;
    setcurrentIndex(newIndex);
  }

  const prevImage2 = () => {
    const isFirstImage = currentIndex2 === 0;
    const newIndex = isFirstImage ? cards[currentSet2].images.length - 1 : currentIndex2 -1;
    setcurrentIndex2(newIndex);
  }
  
  const nextImage2 = () => {
    const isLastImage = currentIndex2 === cards[currentSet2].images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex2 +1;
    setcurrentIndex2(newIndex);
  }
  
  const prevImage3 = () => {
    const isFirstImage = currentIndex3 === 0;
    const newIndex = isFirstImage ? cards[currentIndex3].images.length - 1 : currentIndex3 -1;
    setcurrentIndex3(newIndex);
  }
  
  const nextImage3 = () => {
    const isLastImage = currentIndex3 === cards[currentIndex3].images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex3 +1;
    setcurrentIndex3(newIndex);1
  } 

  if (!Array.isArray(cards) || cards.length < 0) {
    null
  }

  return(
    <section id='mini_gallery' className='overall-margin flex flex-col items-center gap-6 separation-margin'>
      <h2 className='font_xs font_semibold'>FEATURED PROJECTS</h2>
      <h3 className='font_h2 font-bold'>Our Gallery</h3>
      <div className='grid grid-cols-1 tablet:grid-cols-3 grid-rows-auto grid-flow-auto gap-4 tablet:gap-4 tablet:px-12 w-full relative group'>

          <figure className='aspect-[4/5] relative group/card1'>
          <Image 
              key={cards[currentSet].images[currentIndex].img.src} 
              src={cards[currentSet].images[currentIndex].img} 
              alt= {cards[currentSet].projectName} 
              className='service_imgs rounded-xl aspect-[4/5]'
              fill
              sizes='(min-width: 600px) 33vw, 100vw'
            />
            
            <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
              <h4 className='text-[14px] font-light  '>{`${cards[currentSet].type}`}</h4>
              <h5 className=' text-[20px] '>{`${cards[currentSet].projectName}`}</h5>
              <Link  href={`/gallery#${cards[currentSet].projectName}`}>
                <button className='learn_more'>Learn more about this {`${cards[currentSet].projectName}`} </button> 
              </Link>
            </div>
            <figure className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage}>
              <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
            </figure>
            <figure className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage}>
              <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
            </figure>
          </figure>
          
          
          <figure className='hidden tablet:block aspect-[4/5] relative group/card2'>
            <Image 
              key={cards[currentSet2].images[currentIndex2].img.src}  
              src={cards[currentSet2].images[currentIndex2].img} 
              alt= {cards[currentSet2].projectName} 
              fill
              className='service_imgs rounded-xl aspect-[4/5]'
              sizes='(min-width: 600px) 33vw, 100vw'
            />
            
            <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
              <h4 className='text-[14px] font-light  '>{`${cards[currentSet2].type}`}</h4>
              <h5 className=' text-[20px] '>{`${cards[currentSet2].projectName}`}</h5>
              <Link  href={`/gallery#${cards[currentSet].projectName}`}>
                <button className='learn_more'>Learn more about this {`${cards[currentSet2].projectName}`}</button> 
              </Link>
            </div>
            <figure className='hidden group-hover/card2:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage2}>
              <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  />
                </figure>
            <figure className='hidden group-hover/card2:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage2}>
              <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
            </figure>
          </figure>

          <figure className='hidden tablet:block aspect-[4/5] relative group/card3'>
          <Image 
              key={cards[currentSet3].images[currentIndex3].img.src}  
              src={cards[currentSet3].images[currentIndex3].img} 
              alt= {cards[currentSet3].projectName} 
              className='service_imgs rounded-xl aspect-[4/5]'
              fill
              sizes='(min-width: 600px) 33vw, 100vw'
            />
           
            <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
              <h4 className='text-[14px] font-light  '>{`${cards[currentSet3].type}`}</h4>
              <h5 className=' text-[20px] '>{`${cards[currentSet3].projectName}`}</h5>
              <Link  href={`/gallery#${cards[currentSet].projectName}`}>
                <button className='learn_more'>Learn more about this {`${cards[currentSet3].projectName}`}</button> 
              </Link>
            </div>
            <figure className='hidden group-hover/card3:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage3}>
              <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  />
                </figure>
            <figure className='hidden group-hover/card3:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage3}>
              <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} />
            </figure>
          </figure>
        
          <figure className='desktop:hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  onClick={prevProject} />
          </figure>
          <figure className='desktop:hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} onClick={nextProject} />
          </figure>
        </div>
    </section>
  )
}

export default MiniGallery
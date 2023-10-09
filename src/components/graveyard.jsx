import React from 'react'

const graveyard = () => {
  return (
    <div>
        {/* From MiniGallery */}
        {/* {GalleryData.map((card, index) => {
          const prevImage = () => {
            const isFirstImage = currentIndex === 0;
            const newIndex = isFirstImage ? card.CardImages.length - 1 : currentIndex -1;
            setcurrentIndex(newIndex);
          }
          
          const nextImage = () => {
            const isLastImage = currentIndex === card.CardImages.length - 1;
            const newIndex = isLastImage ? 0 : currentIndex +1;
            setcurrentIndex(newIndex);
          }
          
          return(
              <div className='rounded-xl grid grid-cols-1 grid-rows-1 grid-flow-col relative ' key={index}>

                <Image unoptimized key={index} src={card.CardImages[currentIndex].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>

                <div className=' absolute top-[50%] translate-x-0 translate-y-[50%] left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                  <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}} onClick={prevImage} />
                </div>
                <div className=' absolute top-[50%] translate-x-0 translate-y-[50%] right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                  <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} onClick={nextImage}/>
                </div>

                <div className='absolute bottom-[20%] left-[10%] text-white flex flex-col gap-3'>
                  <p key={index} className='text-[14px] font-light'>{card.type}</p>
                  <h4 key={index} className=' text-[20px]'>{card.projectName}</h4>
                  <Link  href='/gallery'>
                    <p className='learn_more'>Learn More</p> 
                  </Link>
                </div>
              </div>
              )
          })} */}

    </div>
  )
}

export default graveyard
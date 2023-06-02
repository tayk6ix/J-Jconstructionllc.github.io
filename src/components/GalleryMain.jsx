import React from 'react'
import GalleryCard from './GalleryMainCard'
import { GalleryData } from '@/constants/GalleryData'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


const GalleryMain = () => {

    const [setIndex, setsetIndex] = useState(0)

    const prevProject = () => {
        const isFirstImage  = setIndex === 0
        const newIndex = isFirstImage ? GalleryData.length - 1 : setIndex -1;
        setsetIndex(newIndex)
    }

    const nextProject = () => {
        const isLastImage  = setIndex === GalleryData.length - 1 
        const newIndex = isLastImage ? 0 : setIndex +1
        setsetIndex(newIndex)
    }
    
    const index = (a)=> {
        if (setIndex + a  >= GalleryData.length) {
            return setIndex + a - GalleryData.length 
        }
        else if (setIndex + a <= -1) {
            return setIndex + a + GalleryData.length
        }
        else{
           return  setIndex + a
        }
    }

  return (
    <main id='galleryMain' className='overall-padding flex flex-col gap-[5rem] separation-margin'>
        <section className='grid grid-cols-1 tablet:grid-cols-2 gap-2 '>
            <div className=' flex flex-col gap-2 justify-center'>
                <h3 className='font_xs font_semibold'>OUR PROJECTS</h3>
                <h2 className='font_h2 font-semibold leading-tight'>A Project Just For You</h2>
                <p className='font_small font-light'>Finding your perfect project is about more than just constructing a house; it's about creating a haven that encompasses your passions, values, and vision for the future. Whether you crave a serene oasis tucked away from the chaos of the world or an inspiring space that fosters creativity and connection, the possibilities are endless.</p>
            </div>

        </section>
        <section className='flex flex-col items-center gap-8'>
            <h2 className='font_h2 font-bold'>Our Gallery</h2>
            <div className='grid grid-cols-1 tablet:grid-cols-3 grid-row-3 grid-flow-auto gap-4 w-full h-full relative'>


                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(0)}
                />
                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(1)}
                />
                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(2)}
                />
                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(3)}
                />
                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(4)}
                />
                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(5)}
                />
                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(6)}
                />
                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(7)}
                />
                <GalleryCard
                    subcard = {GalleryData} 
                    currentIndex={1}
                    currentSet={index(8)}
                />


                <div className=' absolute top-[-5rem] translate-x-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  onClick={prevProject} />
                </div>
                <div className=' absolute top-[-5rem] translate-x-0 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} onClick={nextProject} />
                </div>
                
                <div className='absolute bottom-[-4rem] translate-x-[-5rem] left-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  onClick={prevProject} />
                </div>
                <div className='absolute bottom-[-4rem] translate-x-[5rem] right-[50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} onClick={nextProject} />
                </div> 


            </div>
            </section>
        </main>
    )
}

export default GalleryMain

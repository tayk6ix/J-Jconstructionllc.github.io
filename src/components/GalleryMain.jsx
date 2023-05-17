import React from 'react'
import GalleryMainGallery from './GalleryMainGallery'
import { GalleryData } from '@/constants/GalleryData'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


const GalleryMain = (cards) => {

    const [currentSet, setcurrentSet] = useState(0);
    const [currentSet2, setcurrentSet2] = useState(1);
    const [currentSet3, setcurrentSet3] = useState(2);
    const [currentSet4, setcurrentSet4] = useState(3);
    const [currentSet5, setcurrentSet5] = useState(4);
    const [currentSet6, setcurrentSet6] = useState(5);
    const [currentSet7, setcurrentSet7] = useState(6);
    const [currentSet8, setcurrentSet8] = useState(7);
    const [currentSet9, setcurrentSet9] = useState(8);


    
    const prevProject = () => {
      const isFirstImage = currentSet === 0
      const isFirstImage2 = currentSet2 === 0 
      const isFirstImage3 = currentSet3 === 0 
      const isFirstImage4 = currentSet4 === 0
      const isFirstImage5 = currentSet5 === 0 
      const isFirstImage6 = currentSet6 === 0 
      const isFirstImage7 = currentSet7 === 0
      const isFirstImage8 = currentSet8 === 0 
      const isFirstImage9 = currentSet9 === 0 
      const newIndex = isFirstImage ? GalleryData.length - 1 : currentSet -1;
      const newIndex2 = isFirstImage2 ? GalleryData.length - 1 : currentSet2 -1;
      const newIndex3 = isFirstImage3 ? GalleryData.length - 1 : currentSet3 -1;
      const newIndex4 = isFirstImage4 ? GalleryData.length - 1 : currentSet4 -1;
      const newIndex5 = isFirstImage5 ? GalleryData.length - 1 : currentSet5 -1;
      const newIndex6 = isFirstImage6 ? GalleryData.length - 1 : currentSet6 -1;
      const newIndex7 = isFirstImage7 ? GalleryData.length - 1 : currentSet7 -1;
      const newIndex8 = isFirstImage8 ? GalleryData.length - 1 : currentSet8 -1;
      const newIndex9 = isFirstImage9 ? GalleryData.length - 1 : currentSet9 -1;
      setcurrentSet(newIndex);
      setcurrentSet2(newIndex2);
      setcurrentSet3(newIndex3);
      setcurrentSet4(newIndex4);
      setcurrentSet5(newIndex5);
      setcurrentSet6(newIndex6);
      setcurrentSet7(newIndex7);
      setcurrentSet8(newIndex8);
      setcurrentSet9(newIndex9);
    }
    
    const nextProject = () => {
      const isLastImage = currentSet === GalleryData.length - 1
      const isLastImage2 = currentSet2 === GalleryData.length - 1
      const isLastImage3 = currentSet3 === GalleryData.length - 1
      const isLastImage4 = currentSet4 === GalleryData.length - 1
      const isLastImage5 = currentSet5 === GalleryData.length - 1
      const isLastImage6 = currentSet6 === GalleryData.length - 1
      const isLastImage7 = currentSet7 === GalleryData.length - 1
      const isLastImage8 = currentSet8 === GalleryData.length - 1
      const isLastImage9 = currentSet9 === GalleryData.length - 1
      const newIndex = isLastImage ? 0 : currentSet +1;
      const newIndex2 = isLastImage2 ? 0 : currentSet2 +1;
      const newIndex3 = isLastImage3 ? 0 : currentSet3 +1;
      const newIndex4 = isLastImage4 ? 0 : currentSet4 +1;
      const newIndex5 = isLastImage5 ? 0 : currentSet5 +1;
      const newIndex6 = isLastImage6 ? 0 : currentSet6 +1;
      const newIndex7 = isLastImage7 ? 0 : currentSet7 +1;
      const newIndex8 = isLastImage8 ? 0 : currentSet8 +1;
      const newIndex9 = isLastImage9 ? 0 : currentSet9 +1;
      setcurrentSet(newIndex);
      setcurrentSet2(newIndex2);
      setcurrentSet3(newIndex3);
      setcurrentSet4(newIndex4);
      setcurrentSet5(newIndex5);
      setcurrentSet6(newIndex6);
      setcurrentSet7(newIndex7);
      setcurrentSet8(newIndex8);
      setcurrentSet9(newIndex9);
    }

    const [currentIndex, setcurrentIndex] = useState(0)
    const [currentIndex2, setcurrentIndex2] = useState(0)
    const [currentIndex3, setcurrentIndex3] = useState(0)
    const [currentIndex4, setcurrentIndex4] = useState(0)
    const [currentIndex5, setcurrentIndex5] = useState(0)
    const [currentIndex6, setcurrentIndex6] = useState(0)
    const [currentIndex7, setcurrentIndex7] = useState(0)
    const [currentIndex8, setcurrentIndex8] = useState(0)
    const [currentIndex9, setcurrentIndex9] = useState(0)

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

      const prevImage4 = () => {
        const isFirstImage = currentIndex4 === 0;
        const newIndex = isFirstImage ? GalleryData[currentSet4].CardImages.length - 1 : currentIndex4 -1;
        setcurrentIndex4(newIndex);
      }
      
      const nextImage4 = () => {
        const isLastImage = currentIndex4 === GalleryData[currentSet4].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex4 +1;
        setcurrentIndex4(newIndex);
      }
      
      const prevImage5 = () => {
        const isFirstImage = currentIndex5 === 0;
        const newIndex = isFirstImage ? GalleryData[currentSet5].CardImages.length - 1 : currentIndex5 -1;
        setcurrentIndex5(newIndex);
      }
      
      const nextImage5 = () => {
        const isLastImage = currentIndex5 === GalleryData[currentSet5].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex5 +1;
        setcurrentIndex5(newIndex);
      }
      
      const prevImage6 = () => {
        const isFirstImage = currentIndex6 === 0;
        const newIndex = isFirstImage ? GalleryData[currentIndex6].CardImages.length - 1 : currentIndex6 -1;
        setcurrentIndex6(newIndex);
      }
      
      const nextImage6 = () => {
        const isLastImage = currentIndex6 === GalleryData[currentSet6].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex6 +1;
        setcurrentIndex6(newIndex);1
      }   

      const prevImage7 = () => {
        const isFirstImage = currentIndex7 === 0;
        const newIndex = isFirstImage ? GalleryData[currentSet7].CardImages.length - 1 : currentIndex7 -1;
        setcurrentIndex7(newIndex);
      }
      
      const nextImage7 = () => {
        const isLastImage = currentIndex7 === GalleryData[currentSet7].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex7 +1;
        setcurrentIndex7(newIndex);
      }
      
      const prevImage8 = () => {
        const isFirstImage = currentIndex8 === 0;
        const newIndex = isFirstImage ? GalleryData[currentSet8].CardImages.length - 1 : currentIndex8 -1;
        setcurrentIndex8(newIndex);
      }
      
      const nextImage8 = () => {
        const isLastImage = currentIndex8 === GalleryData[currentSet8].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex8 +1;
        setcurrentIndex8(newIndex);
      }
      
      const prevImage9 = () => {
        const isFirstImage = currentIndex9 === 0;
        const newIndex = isFirstImage ? GalleryData[currentIndex9].CardImages.length - 1 : currentIndex9 -1;
        setcurrentIndex9(newIndex);
      }
      
      const nextImage9 = () => {
        const isLastImage = currentIndex9 === GalleryData[currentSet9].CardImages.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex9 +1;
        setcurrentIndex9(newIndex);1
      }
    


  return (
    <div id='galleryMain' className='overall-padding flex flex-col gap-[5rem] separation-margin'>
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-2 '>
            <div className=' flex flex-col gap-2 justify-center'>
                <h3 className='font_xs font_semibold'>OUR PROJECTS</h3>
                <h2 className='font_h2 font-semibold leading-tight'>A Project Just For You</h2>
                <p className='font_small font-light'>Finding your perfect project is about more than just constructing a house; it's about creating a haven that encompasses your passions, values, and vision for the future. Whether you crave a serene oasis tucked away from the chaos of the world or an inspiring space that fosters creativity and connection, the possibilities are endless.</p>
            </div>
            <Image key={100} unoptimized src='/StockPhotos/HeroImage.jpeg' alt='image' width={100} height={100} className='how_img' />
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='font_xs  font-light'>FEATURED PROJECTS</h3>
            <h2 className='font_h2 font-bold'>Our Gallery</h2>
            <div className='grid grid-cols-1 tablet:grid-cols-3 grid-row-3 grid-flow-auto gap-4 w-full h-full relative'>

                <div className='aspect-[4/5] relative group/card1'>
                <Image unoptimized key={1} src={GalleryData[currentSet].CardImages[currentIndex].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                    <p className='text-[14px] font-light  '>{`${GalleryData[currentSet].type}`}</p>
                    <h4 className=' text-[20px] '>{`${GalleryData[currentSet].projectName}`}</h4>
                </div>
                <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage}>
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                </div>
                <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage}>
                    <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                </div>
                </div>

                <div className='aspect-[4/5] relative group/card1'>
                <Image unoptimized key={1} src={GalleryData[currentSet2].CardImages[currentIndex2].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                    <p className='text-[14px] font-light  '>{`${GalleryData[currentSet2].type}`}</p>
                    <h4 className=' text-[20px] '>{`${GalleryData[currentSet2].projectName}`}</h4>
                </div>
                <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage2}>
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                </div>
                <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage2}>
                    <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                </div>
                </div>

                <div className='aspect-[4/5] relative group/card1'>
                <Image unoptimized key={1} src={GalleryData[currentSet3].CardImages[currentIndex3].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                    <p className='text-[14px] font-light  '>{`${GalleryData[currentSet3].type}`}</p>
                    <h4 className=' text-[20px] '>{`${GalleryData[currentSet3].projectName}`}</h4>
                </div>
                <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage3}>
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                </div>
                <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage3}>
                    <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                </div>
                </div>

                <div className='aspect-[4/5] relative group/card1'>
                    <Image unoptimized key={1} src={GalleryData[currentSet4].CardImages[currentIndex4].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                    <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                        <p className='text-[14px] font-light  '>{`${GalleryData[currentSet4].type}`}</p>
                        <h4 className=' text-[20px] '>{`${GalleryData[currentSet4].projectName}`}</h4>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage4}>
                        <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage4}>
                        <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                </div>

                <div className='aspect-[4/5] relative group/card1'>
                    <Image unoptimized key={1} src={GalleryData[currentSet5].CardImages[currentIndex5].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                    <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                        <p className='text-[14px] font-light  '>{`${GalleryData[currentSet5].type}`}</p>
                        <h4 className=' text-[20px] '>{`${GalleryData[currentSet5].projectName}`}</h4>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage5}>
                        <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage5}>
                        <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                </div>

                <div className='aspect-[4/5] relative group/card1'>
                    <Image unoptimized key={1} src={GalleryData[currentSet6].CardImages[currentIndex6].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                    <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                        <p className='text-[14px] font-light  '>{`${GalleryData[currentSet6].type}`}</p>
                        <h4 className=' text-[20px] '>{`${GalleryData[currentSet6].projectName}`}</h4>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage6}>
                        <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage6}>
                        <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                </div>

                <div className='aspect-[4/5] relative group/card1'>
                    <Image unoptimized key={1} src={GalleryData[currentSet7].CardImages[currentIndex7].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                    <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                        <p className='text-[14px] font-light  '>{`${GalleryData[currentSet6].type}`}</p>
                        <h4 className=' text-[20px] '>{`${GalleryData[currentSet7].projectName}`}</h4>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage7}>
                        <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage7}>
                        <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                </div>

                <div className='aspect-[4/5] relative group/card1'>
                    <Image unoptimized key={1} src={GalleryData[currentSet8].CardImages[currentIndex8].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                    <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                        <p className='text-[14px] font-light  '>{`${GalleryData[currentSet6].type}`}</p>
                        <h4 className=' text-[20px] '>{`${GalleryData[currentSet8].projectName}`}</h4>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage8}>
                        <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage8}>
                        <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                </div>

                <div className='aspect-[4/5] relative group/card1'>
                    <Image unoptimized key={1} src={GalleryData[currentSet9].CardImages[currentIndex9].image} alt='Image' width={100} height={100} className='service_imgs rounded-xl aspect-[4/5] group hello'/>
                    <div className='absolute left-[10%] bottom-[20%] text-white flex flex-col gap-3'>
                        <p className='text-[14px] font-light  '>{`${GalleryData[currentSet6].type}`}</p>
                        <h4 className=' text-[20px] '>{`${GalleryData[currentSet9].projectName}`}</h4>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 left-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={prevImage9}>
                        <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                    <div className='hidden group-hover/card1:flex items-center absolute top-0 right-0 h-full text-2xl p-2 bg-black/20 text-white cursor-pointer' onClick={nextImage9}>
                        <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}}/>
                    </div>
                </div>


                <div className=' absolute top-[-5rem] translate-x-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  onClick={prevProject} />
                </div>
                <div className=' absolute top-[-5rem] translate-x-0 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} onClick={nextProject} />
                </div>
                
                <div className='absolute bottom-[-4rem] translate-x-0 left-[45%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#FFFFFF",}}  onClick={prevProject} />
                </div>
                <div className='absolute bottom-[-4rem] translate-x-0 right-[45%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#FFFFFF",}} onClick={nextProject} />
                </div>


            </div>
            </div>
            </div>
            )
}

export default GalleryMain
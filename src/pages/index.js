import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import How from '@/components/How'
import MiniGallery from '@/components/MiniGallery'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import { ServiceData } from '@/constants/ServiceData'
import { HowData } from '@/constants/HowData'
import { GalleryData } from '@/constants/GalleryData'
import landingHeroImage from '/public/Static/HeroImage.webp'
import favIcon from '/public/Static/LOGO2v2.webp'



export default function Home() {
  return (
    <>
      <Head>
        <title>J&J Construction LLC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/Static/LOGO2v2.ico"} />
      </Head>
      <header className='relative'>
         {/* Orange Background */}
        <div className='navOrange'/>
        <Navbar 
          homeTab={true}
          serviceTab={false}
          galleryTab={false}
          contactUsTab={false}/>
        <Hero image = {landingHeroImage} />
      </header>
      <main>
        <AboutUs/>
        <Services cards={ServiceData}/>
        <How cards={HowData}/>
        <MiniGallery cards={GalleryData}/>
        <ContactUs/>
      </main>
      <Footer/>
    </>
  )
}

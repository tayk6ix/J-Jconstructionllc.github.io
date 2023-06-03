import Head from "next/head"
import Footer from "@/components/Footer"
import ContactMain from "@/components/ContactMain"
import Hero2 from "@/components/Hero2"
import contactHeroImage from '/public/Static/contactHeroImage.webp'
import Navbar from "@/components/Navbar"


export default function ContactUS() {
    return (
      <>
        <Head>
          <title>J&J Construction LLC</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className='relative'>
           {/* Orange Background */}
          <div className='navOrange'/>
          <Navbar/>
          <Hero2 
            image = {contactHeroImage}
            title = {2}
            text = {2}
            />
        </header>
        <ContactMain/>
        <Footer/>
      </>
    )
  }

  // 

  
import Head from "next/head"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ContactNavbar from "@/components/ContactNavbar"
import ContactHero from "@/components/ContactHero"
import ContactMain from "@/components/ContactMain"

export default function ContactUS() {
    return (
      <>
        <Head>
          <title>J&J Construction LLC</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='relative'>
           {/* Orange Background */}
          <div className='navOrange'/>
          <ContactNavbar/>
          <ContactHero/>
        </div>
        <ContactMain/>
        <Footer/>
      </>
    )
  }

  // 

  
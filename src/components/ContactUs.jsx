import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
  return (
    <section className='blueBG separation-margin text-white flex flex-col tablet:flex-row tablet:justify-between justify-center items-center gap-4 text-center py-[10%] tablet:py-[5%] overall-padding'>
      <h2 className='font_medium_large font-semibold w-[60%] tablet:text-left'>Let's start your project to be realized.</h2>
      <Link className='learn_more2' href='/contactUs'>Contact Us</Link>
    </section>
  )
}

export default ContactUs
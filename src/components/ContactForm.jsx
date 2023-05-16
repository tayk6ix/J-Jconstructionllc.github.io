import React from 'react'

const ContactForm = () => {
  return (
      <div className='blueBG p-4 flex flex-col gap-2'>
        <h2 className='orangeText font_h2'>Get in touch</h2>
        <form action="https://formsubmit.co/info@jnjconstructionllc.net" method="POST"
        className='flex flex-col gap-4  w-full'>
          <div className='flex flex-col gap-4 tablet:flex-row'>
            <input type="text" name="last_name" id="last_name" placeholder='First Name'/>
            <input type="text" name="last_name" id="last_name" placeholder='Last Name'/>
          </div>
          <input type="email" name="email" id="email" placeholder='Email Addres' required/>
          <input name='number' type="tel" placeholder='Phone Number' required/>
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='submit_btn'>Submit</button>
        </form>
      </div>
  )
}

export default ContactForm
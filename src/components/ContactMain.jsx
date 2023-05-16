import React from 'react'
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const ContactMain = () => {
  return (
    <div id='contactMain' className='overall-margin grid grid-cols-1 gap-10 separation-margin desktop:grid-cols-2 '>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <h2 className='font_h2 font-semibold'>Contact us</h2>
                <p className='font_small font-light '>Speak with one of our expert team members and learn how J&J Constructor can personalize your Construction needs.</p>
                <p className='font_small font-light'>Interested in learning more? <br/>
                Let's connect on your terms.
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font_medium_large'>Onsite visit</h3>
                <div className='flex flex-col gap-2 tablet:flex-row desktop:flex-col'>
                    {/* <Link className='flex flex-row gap-2 items-center' href='/'>
                    <FontAwesomeIcon icon={faPhone} style={{color: '#ED5931'}}/>
                        <p className='font_small font-light'>Video Call</p>
                    </Link> */}
                    <Link className='flex flex-row gap-2 items-center' href='mailto: info@jnjconstructionllc.net'>
                    <FontAwesomeIcon icon={faEnvelope} style={{color: '#ED5931'}} />
                        <p className='font_small font-light'>info@jnjconstructionllc.net</p>
                    </Link>
                    <Link className='flex flex-row gap-2 items-center' href="http://maps.google.com/?q=Northwest Arkansas">
                    <FontAwesomeIcon icon={faLocationDot} style={{color: '#ED5931'}}/>
                        <p className='font_small font-light'>Located in Northwest Arkansas</p>
                    </Link>
                </div>
            </div>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactMain
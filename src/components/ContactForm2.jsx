import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
export default function Home() {
	const [inputs, setInputs] = useState({
		first_name: '',
		last_name: '',
		email: '',
		subject: '',
		message: '',
	})
 
	const [form, setForm] = useState('')
 
	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}
    const recaptchaRef = React.createRef();
 
	const onSubmitForm = async (e) => {
		e.preventDefault()

        if (grecaptcha.getResponse() === '') {
            e.preventDefault()
            alert("Please click <I'm not a robot> before submitting this form")
            return
          }
        
		if (inputs.first_name && inputs.last_name && inputs.email && inputs.subject && inputs.message && grecaptcha.getResponse() != '') {
			setForm({ state: 'loading' })
			try {
                

				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})
 
				const { error } = await res.json()
 
				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}
 
				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setInputs({
					first_name: '',
                    last_name: '',
                    email: '',
                    subject: '',
                    message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}

	}

	return (
		<section className='blueBG p-4 flex flex-col gap-2'>
            <h2 className='orangeText font_h2'>Get in touch</h2>
			<form className='flex flex-col gap-4  w-full' onSubmit={(e) => onSubmitForm(e)}>
                <div className='flex flex-col gap-4 tablet:flex-row'>
                    <input
                        id='first_name'
                        type='text'
                        value={inputs.first_name}
                        onChange={handleChange}
                        placeholder='First Name'
                        autoComplete='given-name'
                        required
                    />
                    <input
                        id='last_name'
                        type='text'
                        value={inputs.last_name}
                        onChange={handleChange}
                        placeholder='Last Name'
                        autoComplete='family-name'
                        required
                    />
                </div>
				
				<input
					id='email'
					type='email'
					value={inputs.email}
					onChange={handleChange}
					placeholder='Email'
                    autoComplete='email'
					required
				/>
                <input
					id='subject'
					type='text'
					value={inputs.subject}
					onChange={handleChange}
					placeholder='Subject'
					required
				/>
				<textarea
					id='message'
					type='text'
					value={inputs.message}
					onChange={handleChange}
					placeholder='Message'
					rows='5'
					required
				/>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size='normal'
					sitekey= {process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}
                />
	  
				<input 
                    type='submit' 
                    className='submit_btn cursor-pointer'
                    value='Submit'
                />

				{form.state === 'loading' ? (
					<div className='lightText '>Sending....</div>
				) : form.state === 'error' ? (
					<div className='orangeText text-red-500  '>{form.message}</div>
				) : (
					form.state === 'success' && <div className=' orangeText'>Sent successfully</div>
				)}
			</form>
		</section>
	)
}
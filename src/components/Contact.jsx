import React, { useRef, useState } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser';


export default function Contact() {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_ktk0k22',
            'template_9ds8weo',
            formRef.current,
            'm4SOqzVFVywqbywKE')

            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
        mx-auto items-center'>
            <div className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </div>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have what you need.{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7AB0A] h-7 w-7 animate-plus' />
                        <p className='text-2xl'>+9779867021760</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7AB0A] h-7 w-7 animate-plus' />
                        <p className='text-2xl'>info@poojanpradhan.com.np</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7AB0A] h-7 w-7 animate-plus' />
                        <p className='text-2xl'>Hospital Line, Butwal</p>
                    </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input placeholder='Name' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all 
                        focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 ' type="text" />

                        <input placeholder='Email' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all 
                        focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 ' type="email" />
                    </div>

                    <input placeholder='Subject' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all 
                    focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 ' type="text" />

                    <textarea placeholder='Message' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all 
                    focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' />

                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-block font-bold text-lg'>Submit</button>

                    {done && "Thank you for submitting the form!"}

                </form>
            </div>

        </div>
    )
}
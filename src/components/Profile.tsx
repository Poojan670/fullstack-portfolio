import React from 'react'
import Circles from '../utils/Circles'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

function Profile({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, My name's Poojan", "Full Stack Developer", "Software engineer"],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <Circles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://c4.wallpaperflare.com/wallpaper/585/942/385/anime-gintama-gintoki-sakata-wallpaper-preview.jpg" alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>


                <div className='pt-5'>
                    {/* <Link to="#about"> */}
                    <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>About</button>
                    {/* </Link> */}
                    {/* <Link to="#experience"> */}
                    <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Experience</button>
                    {/* </Link> */}
                    {/* <Link to="#skills"> */}
                    <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Skills</button>
                    {/* </Link> */}
                    {/* <Link to="#projects"> */}
                    <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Projects</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Profile
import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}

            whileInView={{
                opacity: 1
            }}

            transition={{
                duration: 1.5
            }}

            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}

                transition={{
                    duration: 1.2
                }}

                whileInView={{
                    opacity: 1,
                    x: 0
                }}

                viewport={{
                    once: true
                }}

                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95
                xl:w-[500px] xl:h-[600px]'

                src='https://c4.wallpaperflare.com/wallpaper/585/942/385/anime-gintama-gintoki-sakata-wallpaper-preview.jpg'
            />


            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a {" "}
                    <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis optio officia saepe, ab quisquam? Neque deserunt voluptates minima iusto quia itaque eos sint nisi consectetur modi facilis laborum recusandae impedit, blanditiis doloribus qui hic aut, sapiente fugit sed aliquid at quas asperiores magnam. Placeat aliquam debitis maxime natus ipsum necessitatibus aut. Vel quas expedita assumenda ullam, obcaecati sapiente. Laboriosam dolor commodi voluptatibus placeat eius eaque excepturi quidem, fugit pariatur esse earum neque totam dicta deserunt, omnis ipsa sunt? Architecto deleniti voluptatem cumque! Placeat modi recusandae odio, cumque sed quasi. Deserunt, velit excepturi nostrum libero corrupti veritatis aperiam eos illum.
                </p>
            </div>
        </motion.div>
    )
}
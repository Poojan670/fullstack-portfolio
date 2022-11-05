import React from 'react'
import { motion } from 'framer-motion'


export default function Projects({ projects, theme }) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className={theme === "dark-mode" ? "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:-mt-20 sm:-mt-20" : "absolute top-24 uppercase tracking-[20px] text-gray-900 text-2xl md:-mt-20 sm:-mt-20"}>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, i) => (

                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.2
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}

                            src={project?.image}
                            height="50%"

                            className=''
                            alt="" />


                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {i + 1} of {projects.length}
                                </span>{" "}
                                {project?.title}
                            </h4>

                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies.map(technology => (
                                    <img
                                        className='h-5 w-5'
                                        key={technology.id}
                                        src={technology.image}
                                        alt=''
                                    />
                                ))}
                            </div>

                            <p className='text-lg text-center md:text-leftmotion.'>
                                {project?.summary}
                            </p>

                        </div>

                    </div>
                ))
                }

            </div >

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
            </div>



        </motion.div >
    )
}
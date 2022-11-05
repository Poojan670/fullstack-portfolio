import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Skill from '../subComponents/Skill'


export default function Skills({ skills, theme }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
        xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className={theme === "dark-mode" ? "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:-mt-20" : "absolute top-24 uppercase tracking-[20px] text-gray-900 text-2xl md:-mt-20"}>
                Skills
            </h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm md:hidden'>Hover over the skills to check its proficiency</h3>

            <div className='grid grid-cols-4 gap-5'>
                {skills?.slice(0, skills.length / 2).map(skill => (
                    <Skill key={skill.id} skill={skill} />
                ))}

                {skills?.slice(skills.length / 2, skills.length).map(skill => (
                    <Skill key={skill.id} skill={skill} direction={true} />
                ))}
            </div>
        </motion.div>
    )
}
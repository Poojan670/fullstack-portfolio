import React, { useState } from 'react'
import { motion } from 'framer-motion'


function Circles({ theme }) {

    const [state, setState] = useState(false);

    return (

        <motion.div
            initial={{
                opacity: 0
            }}

            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}

            transition={{
                duration: 2.5
            }}

            className="relative flex justify-center items-center" onAnimationComplete={() => setState(true)}>

            <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />

            <div className={state ? "rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52 hidden" : "rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52"} />

            <div className={state ? "rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52 opacity-10 hidden" : "rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52 opacity-10"} />

            <div className={theme === "dark-mode" ? "md:rounded-tl-sm -skew-x-12 border border-[#F7AB0A] opacity-20 h-[600px] w-[650px] absolute mt-52 animate-pulse" : "rounded-tl-sm border -skew-x-12 border-[#333333] opacity-20 h-[600px] w-[650px] absolute mt-52 animate-pulse"} />

            <div className={theme === "dark-mode" ? "md:rounded-full -skew-x-12 border border-[#F7AB0A] opacity-20 h-[600px] w-[650px] absolute mt-52 hover:animate-spin" : "md:rounded-full border -skew-x-12 border-[#333333] opacity-20 h-[600px] w-[650px] absolute mt-52 hover:animate-spin"} />

            <div className={state ? "rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 opacity-10 hidden" : "rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 opacity-10"} />
        </motion.div>
    )
}

export default Circles
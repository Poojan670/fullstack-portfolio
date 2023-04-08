import React from "react";
import Circles from "../subComponents/Circles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";

function Profile({ pageInfo, theme }) {
  const buttonClassName = classNames(
    "px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40",
    theme === "light-mode" &&
      "px-6 py-2 border border-slate-50 rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#242424]/80 hover:text-[#242424]/90"
  );
  const [text, count] = useTypewriter({
    words: [
      `Hi, My name's ${pageInfo?.name}`,
      "Full Stack Developer",
      "Software engineer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Circles theme={theme} />
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={pageInfo?.image}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor
            cursorColor={theme === "light-mode" ? "#242424" : "#F7AB0A"}
          />
        </h1>

        <div className="pt-5">
          <HashLink smooth to="#about">
            <button className={buttonClassName}>About</button>
          </HashLink>
          <HashLink smooth to="#experience">
            <button className={buttonClassName}>Experience</button>
          </HashLink>
          <HashLink smooth to="#skills">
            <button className={buttonClassName}>Skills</button>
          </HashLink>
          <HashLink smooth to="#projects">
            <button className={buttonClassName}>Projects</button>
          </HashLink>
          <HashLink smooth to="#contact">
            <button className={buttonClassName}>Contact</button>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Profile;

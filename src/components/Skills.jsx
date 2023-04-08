import { motion } from "framer-motion";
import React, { useState } from "react";
import Skill from "../subComponents/Skill";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

export default function Skills({ skills, theme }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
        xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3
        className={classNames(
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:-mt-20",
          theme === "light-mode" && "text-gray-900"
        )}
      >
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm md:hidden">
        Hover over the skills to check its proficiency
      </h3>

      <div className="grid md:grid-cols-5 grid-cols-3 md:gap-5 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
        {!isSmallScreen &&
          skills
            ?.slice(skills.length / 2, skills.length)
            .map((skill) => (
              <Skill key={skill.id} skill={skill} direction={true} />
            ))}
      </div>
    </motion.div>
  );
}

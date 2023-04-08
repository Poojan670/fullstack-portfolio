import React from "react";
import { motion } from "framer-motion";
import Card from "../subComponents/Card";
import classNames from "classnames";

export default function Experiences({ experiences, theme }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className={classNames(
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:-mt-20 sm:-mt-20",
          theme === "light-mode" && "text-gray-900"
        )}
      >
        Experience
      </h3>

      <div
        className={classNames(
          "w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ",
          theme === "light-mode" && " scrollbar-thumb-[#242424]/80"
        )}
      >
        {experiences?.map((experience) => (
          <Card key={experience.id} experience={experience} theme={theme} />
        ))}
      </div>
    </motion.div>
  );
}

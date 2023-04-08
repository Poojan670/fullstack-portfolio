import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

function Card({ experience, theme }) {
  return (
    <article
      className={classNames(
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden",
        theme === "light-mode" && "bg-white"
      )}
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-[6rem] h-[2rem]  xl:w-[200px] xl:h-[90px] object-cover object-center"
        src={experience.company_image}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.job_title}</h4>
        <br></br>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology.id}
              className="h-10 w-10 rounded-full"
              src={technology?.image}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.date_started).toDateString()}-{" "}
          {experience.is_working
            ? "Present"
            : new Date(experience.date_ended).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Card;

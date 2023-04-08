import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

export default function Projects({ projects, theme }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  const buttonClassName = classNames(
    "px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest bg-gray-900 transition-all hover:border-[#F7AB0A]/100 hover:text-[#F7AB0A]/80",
    theme === "light-mode" &&
      "px-6 py-2 border border-slate-900 rounded-full uppercase text-xs tracking-widest bg-gray-900 text-gray-50 transition-all hover:border-[#242424]/100 hover:text-[#ffff]/80"
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className={classNames(
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:-mt-20 md:-mt-20",
          theme === "light-mode" && "text-gray-900"
        )}
      >
        Projects
      </h3>

      <div
        className={classNames(
          "relative w-full mt-0 flex overflow-x-scroll xl:mt-0 mt-[10rem] overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80",
          theme === "light-mode" && "scrollbar-thumb-[#242424]/80"
        )}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
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
              src={project?.image}
              height={isSmallScreen ? "100%" : "50%"}
              width={isSmallScreen ? "100%" : "50%"}
              alt=""
            />

            <div className="xl:space-y-10 space-y-5 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-4xl font-semibold text-center">
                <span
                  className={classNames(
                    "underline decoration-[#F7AB0A]/50 ",
                    theme === "light-mode" && "decoration-[#242424]/50"
                  )}
                >
                  Case Study {i + 1} of {projects.length}
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-8 w-8"
                    key={technology.id}
                    src={technology.image}
                    alt=""
                  />
                ))}
              </div>
              <div className="flex items-center space-x-2 justify-center">
                <button className={buttonClassName}>
                  <a
                    href={project?.build_url}
                    alt="build"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git
                  </a>
                </button>
                <button className={buttonClassName}>
                  <a
                    href={project?.preview_url}
                    alt="preview"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Preview
                  </a>
                </button>
              </div>

              <p className="text-lg text-center md:text-leftmotion">
                {isSmallScreen ? "" : <>{project?.summary}</>}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

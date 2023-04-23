import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

export default function About({ pageInfo, theme }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className={classNames(
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md: -mt-20 sm:-mt-20",
          theme === "light-mode" && "text-gray-900"
        )}
      >
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95
                xl:w-[500px] xl:h-[600px]"
      >
        <img
          src={pageInfo?.profile_pic}
          alt="Profile2"
          className={classNames(isSmallScreen ? "" : "lg:h-[90%] md:h-[90%]")}
        />
        <img
          src={pageInfo?.image}
          alt="ProfilePic"
          className="a-img -my-[500px] h-[90%] w-[90%]"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4
          className={classNames(
            isSmallScreen ? "hidden" : "text-4xl font-semibold"
          )}
        >
          Here is a{" "}
          <span
            className={classNames(
              "underline decoration-[#F7AB0A]/50",
              theme === "light-mode" && "decoration-[#242424]/50"
            )}
          >
            little
          </span>{" "}
          background
        </h4>
        {isSmallScreen ? (
          <p className="text-base">
            {pageInfo?.background_info.substring(0, 256)}
          </p>
        ) : (
          <p className="text-base">{pageInfo?.background_info}</p>
        )}
      </div>
    </motion.div>
  );
}
